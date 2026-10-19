import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./SwitchField.toggle";

export interface SwitchFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "description"
  | "hasLabel"
  | "label"
  | "hasDescription"
  | "checked"
  | "defaultChecked"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
  description?: string;
  hasLabel?: boolean;
  label?: string;
  hasDescription?: boolean;
  /** Whether it is on (controlled). */
  checked?: boolean;
  /** Whether it starts on (uncontrolled). */
  defaultChecked?: boolean;
  /** Called with the new state when the user toggles it. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  /** The form field name of the input. */
  name?: string;
  /** The form value submitted when it is on. */
  value?: string;
}

const StyledRoot = styled.div(
  () => css`
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:is(:has(input:disabled) *) {
      color: ${theme["Text"]["Disabled"]["Default"]};
    }
  `,
);

const StyledSwitch = styled.div<{ $valueType: string }>(
  ({ theme, $valueType }) => css`
    input:focus-visible ~ & {
      outline: 2px solid Highlight;
      outline-offset: 2px;
    }
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    ${(() => {
      switch ($valueType) {
        case "Checked":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 19px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: fit-content;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Unchecked":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 19px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
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
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($valueType) {
        case "Checked":
          return css`
            border-color: ${theme["Border"]["Brand"]["Default"]};
          `;
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

const StyledKnob = styled.div<{ $valueType: string }>(
  ({ theme, $valueType }) => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($valueType) {
        case "Checked":
          return css`
            background-color: ${theme["Icon"]["Brand"]["On Brand"]};
          `;
        case "Unchecked":
          return css`
            background-color: ${theme["Icon"]["Brand"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    &:is(:has(input:disabled) *) {
      ${css`
        background-color: ${theme["Icon"]["Disabled"]["Default"]};
      `}
    }
  `,
);

const StyledDescription = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:is(:has(input:disabled) *) {
      color: ${theme["Text"]["Disabled"]["Default"]};
    }
  `,
);

/** A form field component that combines a toggle switch with an optional label and description. Supports checked/unchecked states and can be disabled. */
export const SwitchField = React.forwardRef<HTMLDivElement, SwitchFieldProps>(
  function SwitchField(
    {
      description = "Description",
      hasLabel = true,
      label = "Label",
      hasDescription = true,
      checked,
      defaultChecked,
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
      disabled,
      required,
      name,
      value,
      onChange,
      hasDescription: hasDescription,
      ariaLabel: rest["aria-label"],
    });
    const valueType = toggle.checked ? "Checked" : "Unchecked";
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledCheckboxAndLabel>
          <input {...toggle.inputProps} />
          {hasLabel && <StyledLabel>{label}</StyledLabel>}
          <StyledSwitch $valueType={valueType} aria-hidden="true">
            <StyledKnob $valueType={valueType} />
          </StyledSwitch>
        </StyledCheckboxAndLabel>
        {hasDescription && (
          <StyledDescription id={toggle.ids.description}>
            {description}
          </StyledDescription>
        )}
      </StyledRoot>
    );
  },
);
