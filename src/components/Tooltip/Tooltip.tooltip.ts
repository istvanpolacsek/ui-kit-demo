import {
  cloneElement,
  createElement,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { ForwardedRef, ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";

const GAP = 8;
const MARGIN = 8;
const HIDE_DELAY = 100;

export interface UseTooltipParams<T extends HTMLElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delay?: number;
  /** Top, Bottom, Left or Right: the side of the target the bubble sits on. */
  placement?: string;
  forwardedRef: ForwardedRef<T>;
}

export function useTooltip<T extends HTMLElement>({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  delay = 300,
  placement: placementProp = "top",
  forwardedRef,
}: UseTooltipParams<T>) {
  const id = useId();
  const placement = placementProp.toLowerCase();
  const [inner, setInner] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : inner;
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const anchor = useRef<HTMLSpanElement | null>(null);
  const bubble = useRef<T | null>(null);

  const setOpen = (next: boolean) => {
    if (next === open) return;
    if (!isControlled) setInner(next);
    onOpenChange?.(next);
  };
  const show = (immediately: boolean) => {
    clearTimeout(timer.current);
    if (immediately || delay <= 0) setOpen(true);
    else timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = (soon: boolean) => {
    clearTimeout(timer.current);
    if (soon) timer.current = setTimeout(() => setOpen(false), HIDE_DELAY);
    else setOpen(false);
  };
  useEffect(() => () => clearTimeout(timer.current), []);

  const ref = useCallback(
    (node: T | null) => {
      bubble.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  // Escape dismisses it, wherever the focus is
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  // the bubble sits beside its target, kept inside the viewport
  useLayoutEffect(() => {
    const tip = bubble.current;
    const target = anchor.current;
    if (!open || !tip || !target) return;
    const place = () => {
      // fixed first: measured in flow it would take the width of its parent
      Object.assign(tip.style, { position: "fixed", top: "0px", left: "0px" });
      const a = target.getBoundingClientRect();
      const t = tip.getBoundingClientRect();
      let top = a.top - t.height - GAP;
      let left = a.left + (a.width - t.width) / 2;
      if (placement === "bottom") top = a.bottom + GAP;
      if (placement === "left" || placement === "right") {
        top = a.top + (a.height - t.height) / 2;
        left = placement === "left" ? a.left - t.width - GAP : a.right + GAP;
      }
      left = Math.max(
        MARGIN,
        Math.min(left, window.innerWidth - t.width - MARGIN),
      );
      top = Math.max(
        MARGIN,
        Math.min(top, window.innerHeight - t.height - MARGIN),
      );
      Object.assign(tip.style, {
        position: "fixed",
        top: top + "px",
        left: left + "px",
        margin: "0",
        zIndex: "1000",
      });
    };
    place();
    // the pointer may move onto the bubble to read it
    const enter = () => clearTimeout(timer.current);
    const leave = () => hide(true);
    tip.addEventListener("mouseenter", enter);
    tip.addEventListener("mouseleave", leave);
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      tip.removeEventListener("mouseenter", enter);
      tip.removeEventListener("mouseleave", leave);
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [open, placement]);

  return {
    open,
    id,
    placement,
    ref,
    /** The target, wrapped so it can be measured and listened to. */
    renderTrigger: (children: ReactNode) => {
      if (children === null || children === undefined) return null;
      const child = isValidElement(children)
        ? cloneElement(children as ReactElement<Record<string, unknown>>, {
            "aria-describedby":
              [
                (children.props as Record<string, unknown>)["aria-describedby"],
                open ? id : undefined,
              ]
                .filter(Boolean)
                .join(" ") || undefined,
          })
        : children;
      return createElement(
        "span",
        {
          ref: anchor,
          style: { display: "inline-flex" },
          onMouseEnter: () => show(false),
          onMouseLeave: () => hide(true),
          onFocus: () => show(true),
          onBlur: () => hide(false),
        },
        child,
      );
    },
    /** Renders above the page, outside any clipping or stacking ancestor. */
    portal: (node: ReactElement) =>
      typeof document === "undefined"
        ? null
        : createPortal(node, document.body),
  };
}
