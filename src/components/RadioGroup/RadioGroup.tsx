import React from "react";
import styled, { css } from "styled-components";
import { RadioField, type RadioFieldProps } from "../RadioField";
import { useChoiceGroup } from "./RadioGroup.choicegroup";

export type RadioGroupOption = Omit<
  RadioFieldProps,
  "checked" | "defaultChecked" | "name" | "onChange" | "value"
> & { value: string };

export interface RadioGroupProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "options" | "value" | "defaultValue" | "onChange" | "name" | "disabled"
> {
  options?: RadioGroupOption[];
  /** The chosen option value (controlled). */
  value?: string;
  /** The option value that starts chosen (uncontrolled). */
  defaultValue?: string;
  /** Called with the new value when the user changes it. */
  onChange?: (value: string) => void;
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

/** A group of related radio button fields presented together as a single question or choice group, allowing users to select one option from multiple choices. */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(
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
      <StyledRoot role="radiogroup" {...rest} ref={ref}>
        {options?.map((item) => (
          <RadioField
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
  },
);
