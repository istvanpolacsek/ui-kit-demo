import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./ToggleSwitch.toggle";

export interface ToggleSwitchProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  | "size"
  | "focused"
  | "checked"
  | "defaultChecked"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
  size?: "Default" | "Small";
  focused?: "No" | "Yes";
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

const StyledRoot = styled.label<{
  $size: "Default" | "Small";
  $checkedState: string;
  $focused: "No" | "Yes";
}>(
  ({ theme, $size, $checkedState, $focused }) => css`
    position: relative;
    cursor: pointer;
    &:has(:disabled) {
      cursor: not-allowed;
    }
    &:has(input:focus-visible) {
      outline: 2px solid Highlight;
      outline-offset: 2px;
    }
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    ${(() => {
      switch (JSON.stringify([$size, $checkedState])) {
        case '["Default","No"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 18px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 36px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","No"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 14px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 28px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 18px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 36px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 14px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 28px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Default":
          return css`
            width: 36px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Small":
          return css`
            width: 28px;
            height: 16px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($checkedState) {
        case "No":
          return css`
            background-color: ${theme["Background"]["Tertiary"]};
          `;
        case "Yes":
          return css`
            background-color: ${theme["Border"]["Info"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($checkedState) {
        case "No":
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($focused) {
        case "Yes":
          return css`
            box-shadow:
              0px 0px 0px 2px rgba(255, 255, 255, 1),
              0px 0px 0px 3.5px rgba(50, 102, 173, 0.5);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledToggle = styled.div<{
  $size: "Default" | "Small";
  $checkedState: string;
}>(
  ({ theme, $size, $checkedState }) => css`
    overflow: hidden;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    ${(() => {
      switch ($size) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Small":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 12px;
            height: 12px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($checkedState) {
        case "No":
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A toggle switch component that allows users to turn an option on or off. Supports default and small sizes, checked/unchecked states, disabled state, and focused state. */
export const ToggleSwitch = React.forwardRef<
  HTMLLabelElement,
  ToggleSwitchProps
>(function ToggleSwitch(
  {
    size = "Default",
    focused = "No",
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
    hasDescription: false,
    ariaLabel: rest["aria-label"],
  });
  const checkedState = toggle.checked ? "Yes" : "No";
  const disabledState = toggle.disabled ? "Yes" : "No";
  return (
    <StyledRoot
      {...rest}
      ref={ref}
      $size={size}
      $checkedState={checkedState}
      $focused={focused}
    >
      <input {...toggle.inputProps} />
      <StyledToggle $size={size} $checkedState={checkedState}></StyledToggle>
    </StyledRoot>
  );
});
