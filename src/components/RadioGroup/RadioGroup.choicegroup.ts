import { useId, useState } from "react";

export interface UseChoiceGroupParams {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
}

export function useChoiceGroup({
  value,
  defaultValue,
  onChange,
  name,
  disabled,
}: UseChoiceGroupParams) {
  const generated = useId();
  const [inner, setInner] = useState<string | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;

  return {
    // every option shares the name, so the browser treats radios as one group
    name: name ?? generated,
    disabled,
    isChecked: (option: string) => current === option,
    select(option: string, checked: boolean) {
      if (!checked) return;
      if (!isControlled) setInner(option);
      onChange?.(option);
    },
  };
}
