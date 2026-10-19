import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { useToggle } from "./CheckboxField.toggle";

export interface CheckboxFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasDescription"
  | "description"
  | "label"
  | "checked"
  | "defaultChecked"
  | "indeterminate"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
  hasDescription?: boolean;
  description?: string;
  label?: string;
  /** Whether it is checked (controlled). */
  checked?: boolean;
  /** Whether it starts checked (uncontrolled). */
  defaultChecked?: boolean;
  /** Shows the mixed state (some of a group is checked). */
  indeterminate?: boolean;
  /** Called with the new state when the user toggles it. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  /** The form field name of the input. */
  name?: string;
  /** The form value submitted when it is checked. */
  value?: string;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["Icon"]["Brand"]["On Brand"]};
    &:has(:disabled) {
      color: ${theme["Icon"]["Disabled"]["On Disabled"]};
    }
    &:has(:disabled) {
      color: ${theme["Icon"]["Disabled"]["On Disabled"]};
    }
  `,
);

const StyledCheckboxAndLabel = styled.label(
  () => css`
    position: relative;
    cursor: pointer;
    &:has(:disabled) {
      cursor: not-allowed;
    }
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCheckbox = styled.div<{ $valueType: string }>(
  ({ theme, $valueType }) => css`
    input:focus-visible ~ & {
      outline: 2px solid Highlight;
      outline-offset: 2px;
    }
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($valueType) {
        case "Checked":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Unchecked":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Indeterminate":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($valueType) {
        case "Unchecked":
          return css`
            border-color: ${theme["Border"]["Brand"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
  &:is(input:disabled ~ *) {
      ${css`
        background-color: ${theme["Background"]["Disabled"]["Default"]};
      `}
    }
    &:is(input:disabled ~ *) {
      ${css`
        border-color: ${theme["Border"]["Disabled"]["default"]};
      `}
    }
  `,
);

const StyledLabel = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledDescriptionRow = styled.div<{ $valueType: string }>(
  ({ $valueType }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($valueType) {
        case "Checked":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Unchecked":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Indeterminate":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 12px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSpace = styled.div(
  () => css`
    overflow: hidden;
    border-radius: 0px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
  `,
);

const StyledDescription = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A checkbox field component combining a checkbox input with a label and optional description text. Supports checked, unchecked, and indeterminate states, as well as a disabled state. */
export const CheckboxField = React.forwardRef<
  HTMLDivElement,
  CheckboxFieldProps
>(function CheckboxField(
  {
    hasDescription = true,
    description = "Description",
    label = "Label",
    checked,
    defaultChecked,
    indeterminate,
    onChange,
    disabled,
    required,
    name,
    value,
    ...rest
  },
  ref,
) {
  const toggle = useToggle({
    checked,
    defaultChecked,
    indeterminate,
    disabled,
    required,
    name,
    value,
    onChange,
    hasDescription: hasDescription,
    ariaLabel: rest["aria-label"],
  });
  const valueType = toggle.indeterminate
    ? "Indeterminate"
    : toggle.checked
      ? "Checked"
      : "Unchecked";
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledCheckboxAndLabel>
        <input {...toggle.inputProps} />
        <StyledCheckbox $valueType={valueType} aria-hidden="true">
          {valueType === "Checked" && <Icon name={"Check"} size={16} />}
          {valueType === "Indeterminate" && <Icon name={"Minus"} size={16} />}
        </StyledCheckbox>
        <StyledLabel>{label}</StyledLabel>
      </StyledCheckboxAndLabel>
      {hasDescription && (
        <StyledDescriptionRow $valueType={valueType}>
          <StyledSpace></StyledSpace>
          <StyledDescription id={toggle.ids.description}>
            {description}
          </StyledDescription>
        </StyledDescriptionRow>
      )}
    </StyledRoot>
  );
});
