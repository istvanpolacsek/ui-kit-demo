import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./Radio.toggle";

export interface RadioProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  | "checked"
  | "defaultChecked"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
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

const StyledRoot = styled.label(
  ({ theme }) => css`
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
    display: flex;
    flex-direction: column;
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    padding-left: 2px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 0px;
    &:focus-within {
      border-color: ${theme["button"]["Default"]["focusedStroke"]};
    }
    &:focus-within {
      border-radius: 1000px;
    }
  `,
);

const Styledcircle = styled.div<{ $checkedState: string }>(
  ({ theme, $checkedState }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["button"]["Default"]["default"]};
    border-radius: 99px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    ${(() => {
      switch ($checkedState) {
        case "Checked":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($checkedState) {
        case "Unchecked":
          return css`
            border-width: 1px;
          `;
        case "Checked":
          return css`
            border-width: 7px;
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${(() => {
        switch ($checkedState) {
          case "Unchecked":
            return css`
              background-color: ${theme["background"]["bgGray"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:is([data-toggle-disabled] *) {
      ${(() => {
        switch ($checkedState) {
          case "Checked":
            return css`
              background-color: ${theme["background"]["bgDefult"]};
            `;
          case "Unchecked":
            return css`
              background-color: ${theme["background"]["bgGray"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:is([data-toggle-disabled] *) {
      border-color: ${theme["border"]["borderGray"]};
    }
    &:is([data-toggle-disabled] *) {
      ${(() => {
        switch ($checkedState) {
          case "Checked":
            return css`
              border-width: 6px;
            `;
          case "Unchecked":
            return css`
              border-width: 1px;
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** A single radio button input used for selecting one option from a group of mutually exclusive choices. Supports default, hover, active, focused, and disabled states. */
export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  function Radio(
    {
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
    const checkedState = toggle.checked ? "Checked" : "Unchecked";
    return (
      <StyledRoot
        data-toggle-disabled={toggle.disabled || undefined}
        data-toggle-checked={toggle.checked || undefined}
        {...rest}
        ref={ref}
      >
        <input {...toggle.inputProps} />
        <Styledcircle $checkedState={checkedState}></Styledcircle>
      </StyledRoot>
    );
  },
);
