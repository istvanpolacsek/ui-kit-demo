import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./Radio.toggle";

export interface RadioProps extends Omit<
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
  /** Whether it is selected (controlled). */
  checked?: boolean;
  /** Whether it starts selected (uncontrolled). */
  defaultChecked?: boolean;
  /** Called with the new state when the user toggles it. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  /** The form field name of the input. */
  name?: string;
  /** The form value submitted when it is selected. */
  value?: string;
}

const StyledRoot = styled.label<{
  $size: "Large" | "Small";
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
    border-radius: 100px;
    ${(() => {
      switch (JSON.stringify([$size, $checkedState])) {
        case '["Large","No"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","No"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 1px;
            padding-right: 1px;
            padding-bottom: 1px;
            padding-left: 1px;
            gap: 8px;
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
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 8px;
            justify-content: flex-start;
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
      switch (JSON.stringify([$size, $checkedState])) {
        case '["Large","No"]':
          return css`
            width: 20px;
            height: 20px;
            box-sizing: border-box;
          `;
        case '["Small","No"]':
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
      switch ($focused) {
        case "Yes":
          return css`
            background-color: ${theme["Background"]["Primary"]};
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
        case "Yes":
          return css`
            border-color: ${theme["Border"]["Info"]};
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

const StyledFrame = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Border"]["Info"]};
    border-radius: 10px;
  `,
);

/** A single radio button input used for selecting one option from a group of mutually exclusive choices. Supports large and small sizes, checked/unchecked states, disabled, and focused variants. */
export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  function Radio(
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
        {...rest}
        ref={ref}
        $size={size}
        $checkedState={checkedState}
        $focused={focused}
      >
        <input {...toggle.inputProps} />
        {checkedState === "Yes" && <StyledFrame></StyledFrame>}
      </StyledRoot>
    );
  },
);
