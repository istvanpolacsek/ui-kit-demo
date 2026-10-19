import React from "react";
import styled, { css } from "styled-components";
import { CheckboxField, type CheckboxFieldProps } from "../CheckboxField";
import { useChoiceGroup } from "./CheckboxGroup.choicegroup";

export type CheckboxGroupOption = Omit<
  CheckboxFieldProps,
  "checked" | "defaultChecked" | "name" | "onChange" | "value"
> & { value: string };

export interface CheckboxGroupProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "options" | "value" | "defaultValue" | "onChange" | "name" | "disabled"
> {
  options?: CheckboxGroupOption[];
  /** The values that are checked (controlled). */
  value?: string[];
  /** The values that start checked (uncontrolled). */
  defaultValue?: string[];
  /** Called with the new value when the user changes it. */
  onChange?: (values: string[]) => void;
  /** The form field name shared by every option. */
  name?: string;
  /** Disables every option. */
  disabled?: boolean;
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 240px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A grouped set of related checkbox fields, allowing users to select one or more options from a defined set. */
export const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  CheckboxGroupProps
>(function CheckboxGroup(
  { options, value, defaultValue, onChange, name, disabled, ...rest },
  ref,
) {
  const group = useChoiceGroup({
    value,
    defaultValue,
    onChange,
    name,
    disabled,
  });
  return (
    <StyledRoot role="group" {...rest} ref={ref}>
      {options?.map((item) => (
        <CheckboxField
          key={item.value}
          {...item}
          name={group.name}
          checked={group.isChecked(item.value)}
          disabled={group.disabled || item.disabled}
          onChange={(checked) => group.select(item.value, checked)}
        />
      ))}
    </StyledRoot>
  );
});
