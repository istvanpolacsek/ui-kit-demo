import { useId, useState, type MouseEvent } from "react";

export interface UseChoiceGroupParams {
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
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
  const [inner, setInner] = useState<string[]>(defaultValue ?? []);
  const isControlled = value !== undefined;
  const current = isControlled ? value : inner;

  const isChecked = (option: string) => current.includes(option);
  const select = (option: string, checked: boolean) => {
    const next = checked
      ? [...current.filter((v) => v !== option), option]
      : current.filter((v) => v !== option);
    if (!isControlled) setInner(next);
    onChange?.(next);
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
        select(option, !isChecked(option));
      },
    }),
  };
}
