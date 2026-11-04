import { useEffect, useState } from "react";
import type { MouseEvent, ReactElement } from "react";
import { createPortal } from "react-dom";

export interface UseModalParams {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnScrimClick?: boolean;
}

export function useModal({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  closeOnScrimClick = true,
}: UseModalParams) {
  const [inner, setInner] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : inner;

  const close = () => {
    if (!isControlled) setInner(false);
    onOpenChange?.(false);
  };

  // the page behind does not scroll while the dialog is up
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return {
    open,
    close,
    scrimProps: {
      // anywhere but on the dialog: the scrim is the frame around it, and
      // the dialog's own wrapper may span the whole row
      onMouseDown: (event: MouseEvent) => {
        const target = event.target as Element;
        if (closeOnScrimClick && !target.closest('[role="dialog"]')) close();
      },
    },
    /** Renders above the page, outside any clipping or stacking ancestor. */
    portal: (node: ReactElement) =>
      typeof document === "undefined"
        ? null
        : createPortal(node, document.body),
  };
}
