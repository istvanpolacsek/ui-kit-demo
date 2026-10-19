import { useId, useState } from "react";

export interface UseDisclosureParams {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export function useDisclosure({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled,
}: UseDisclosureParams) {
  const base = useId();
  const ids = { trigger: `${base}-trigger`, panel: `${base}-panel` };
  const [inner, setInner] = useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : inner;

  return {
    open,
    ids,
    /** Only an open item renders its panel, so only then can it be named. */
    triggerProps: {
      id: ids.trigger,
      type: "button" as const,
      disabled,
      "aria-expanded": open,
      "aria-controls": open ? ids.panel : undefined,
      onClick: () => {
        if (!isControlled) setInner(!open);
        onOpenChange?.(!open);
      },
    },
  };
}
