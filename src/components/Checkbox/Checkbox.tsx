import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./Checkbox.toggle";

export interface CheckboxProps extends Omit<
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
  size?: "Large" | "Small";
  focused?: "No" | "Yes";
  /** Whether it is checked (controlled). */
  checked?: boolean;
  /** Whether it starts checked (uncontrolled). */
  defaultChecked?: boolean;
  /** Called with the new state when the user toggles it. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  /** The form field name of the input. */
  name?: string;
  /** The form value submitted when it is checked. */
  value?: string;
}

const StyledRoot = styled.label<{
  $size: "Large" | "Small";
  $checkedState: string;
  $focused: "No" | "Yes";
}>(
  ({ theme, $size, $checkedState, $focused }) => css`
    display: inline-flex;
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
    ${(() => {
      switch (JSON.stringify([$size, $checkedState])) {
        case '["Small","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Large","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3.75px;
            padding-right: 3.75px;
            padding-bottom: 3.75px;
            padding-left: 3.75px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            width: 20px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Small":
          return css`
            width: 16px;
            height: 16px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$checkedState, $focused])) {
        case '["No","No"]':
          return css`
            background-color: ${theme["Text"]["Inverse"]};
          `;
        case '["Yes","No"]':
          return css`
            background-color: ${theme["Border"]["Info"]};
          `;
        case '["No","Yes"]':
          return css`
            background-color: ${theme["Background"]["Primary"]};
          `;
        case '["Yes","Yes"]':
          return css`
            background-color: ${theme["Border"]["Info"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$checkedState, $focused])) {
        case '["No","No"]':
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        case '["Yes","No"]':
          return css`
            border-color: ${theme["Border"]["Info"]};
          `;
        case '["No","Yes"]':
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        case '["Yes","Yes"]':
          return css`
            border-color: ${theme["Border"]["Info"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($size) {
        case "Large":
          return css`
            border-radius: 6px;
          `;
        case "Small":
          return css`
            border-radius: 4px;
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

/** Vector artwork rendered from exported SVG assets. */
export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox(
    {
      size = "Large",
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
        data-toggle-disabled={toggle.disabled || undefined}
        data-toggle-checked={toggle.checked || undefined}
        {...rest}
        ref={ref}
        $size={size}
        $checkedState={checkedState}
        $focused={focused}
      >
        <input {...toggle.inputProps} />
      </StyledRoot>
    );
  },
);
