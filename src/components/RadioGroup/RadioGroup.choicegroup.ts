import { useId, useState, type MouseEvent } from "react";

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

  const isChecked = (option: string) => current === option;
  const select = (option: string, checked: boolean) => {
    if (!checked) return;
    if (!isControlled) setInner(option);
    onChange?.(option);
  };

  return {
    // every option shares the name, so the browser treats radios as one group
    name: name ?? generated,
    disabled,
    isChecked,
    select,
    // a labelled row also chooses when its text (outside the field's own
    // label) is clicked
    rowProps: (option: string, optionDisabled?: boolean) => ({
      onClick: (event: MouseEvent<HTMLElement>) => {
        if (disabled || optionDisabled) return;
        if ((event.target as HTMLElement).closest("label, input")) return;
        select(option, true);
      },
    }),
  };
}
