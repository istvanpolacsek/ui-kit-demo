import { useState } from "react";

export interface UseAccordionParams {
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
  multiple?: boolean;
}

export function useAccordion({
  value,
  defaultValue = [],
  onChange,
  multiple = false,
}: UseAccordionParams) {
  const [inner, setInner] = useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;

  return {
    isOpen: (item: string) => current.includes(item),
    set(item: string, open: boolean) {
      const others = multiple ? current.filter((v) => v !== item) : [];
      const next = open ? [...others, item] : current.filter((v) => v !== item);
      if (!isControlled) setInner(next);
      onChange?.(next);
    },
  };
}
