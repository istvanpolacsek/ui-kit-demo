import { useCallback, useEffect, useRef } from "react";
import type { ForwardedRef } from "react";

const ITEMS =
  '[role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]';

export interface UseMenuParams<T extends HTMLElement> {
  onClose?: () => void;
  forwardedRef: ForwardedRef<T>;
}

/**
 * Roving focus over the items inside the menu: one item is in the tab order,
 * the arrow keys, Home / End and typeahead move between the enabled ones, and
 * Escape calls `onClose`. Items are found in the DOM, so whatever the
 * consumer puts in the slot takes part.
 */
export function useMenu<T extends HTMLElement>({
  onClose,
  forwardedRef,
}: UseMenuParams<T>) {
  const element = useRef<T | null>(null);
  const close = useRef(onClose);
  close.current = onClose;

  const ref = useCallback(
    (node: T | null) => {
      element.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  const enabled = () =>
    Array.from(
      element.current?.querySelectorAll<HTMLElement>(ITEMS) ?? [],
    ).filter(
      (item) =>
        !(item as HTMLButtonElement).disabled &&
        item.getAttribute("aria-disabled") !== "true",
    );

  // keep exactly one enabled item in the tab order, after every render
  useEffect(() => {
    const items = enabled();
    if (items.length === 0) return;
    if (!items.some((item) => item.tabIndex === 0)) items[0].tabIndex = 0;
  });

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    let typed = "";
    let timer: ReturnType<typeof setTimeout> | undefined;

    const focusItem = (item: HTMLElement | undefined) => {
      if (!item) return;
      for (const other of enabled()) other.tabIndex = -1;
      item.tabIndex = 0;
      item.focus();
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (!target.matches?.(ITEMS)) return;
      for (const other of enabled()) other.tabIndex = -1;
      target.tabIndex = 0;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close.current?.();
        return;
      }
      const items = enabled();
      if (items.length === 0) return;
      const index = items.indexOf(document.activeElement as HTMLElement);
      let next: HTMLElement | undefined;
      if (event.key === "ArrowDown") {
        next = items[(index + 1) % items.length];
      } else if (event.key === "ArrowUp") {
        next = items[(index - 1 + items.length) % items.length];
      } else if (event.key === "Home") {
        next = items[0];
      } else if (event.key === "End") {
        next = items[items.length - 1];
      } else if (
        event.key.length === 1 &&
        event.key !== " " &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
      ) {
        typed += event.key.toLowerCase();
        clearTimeout(timer);
        timer = setTimeout(() => (typed = ""), 500);
        const from = typed.length > 1 ? index : index + 1;
        const ordered = [...items.slice(from), ...items.slice(0, from)];
        next = ordered.find((item) =>
          (item.textContent ?? "").trim().toLowerCase().startsWith(typed),
        );
        if (!next) return;
      } else {
        return;
      }
      event.preventDefault();
      focusItem(next);
    };

    node.addEventListener("keydown", onKeyDown);
    node.addEventListener("focusin", onFocusIn);
    return () => {
      node.removeEventListener("keydown", onKeyDown);
      node.removeEventListener("focusin", onFocusIn);
      clearTimeout(timer);
    };
  }, []);

  return { ref };
}
