import { useCallback, useEffect, useRef } from "react";
import type { ForwardedRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface UseDialogParams<T extends HTMLElement> {
  onClose?: () => void;
  forwardedRef: ForwardedRef<T>;
}

/**
 * Moves focus into the dialog when it appears and back to what had it when it
 * goes, keeps Tab inside, and calls `onClose` on Escape. The listener is
 * native, so a consumer's own `onKeyDown` cannot replace it.
 */
export function useDialog<T extends HTMLElement>({
  onClose,
  forwardedRef,
}: UseDialogParams<T>) {
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

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const previous = document.activeElement as HTMLElement | null;
    const focusable = () =>
      Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));
    if (!node.contains(document.activeElement)) {
      (focusable()[0] ?? node).focus({ preventScroll: true });
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close.current?.();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === node)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    node.addEventListener("keydown", onKeyDown);
    return () => {
      node.removeEventListener("keydown", onKeyDown);
      previous?.focus?.({ preventScroll: true });
    };
  }, []);

  return { ref };
}
