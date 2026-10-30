import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./Checkbox.toggle";

export interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  | "checked"
  | "defaultChecked"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
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

const StyledRoot = styled.label<{ $state: string }>(
  ({ theme, $state }) => css`
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
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Unchecked":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Hover":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Disabled (Unchecked)":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Focused":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Focused":
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Checked":
          return css`
            border-radius: 0px;
          `;
        case "Disabled (Checked)":
          return css`
            border-radius: 0px;
          `;
        case "Unchecked":
          return css`
            border-radius: 0px;
          `;
        case "Hover":
          return css`
            border-radius: 0px;
          `;
        case "Pressed":
          return css`
            border-radius: 0px;
          `;
        case "Disabled (Unchecked)":
          return css`
            border-radius: 0px;
          `;
        case "Intermediate":
          return css`
            border-radius: 0px;
          `;
        case "Focused":
          return css`
            border-radius: 8px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledActiveCheckbox = styled.div<{ $state: string }>(
  ({ theme, $state }) => css`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
    ${(() => {
      switch ($state) {
        case "Checked":
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        case "Disabled (Checked)":
          return css`
            background-color: ${theme["gray"]["400"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIdleCheckbox = styled.div<{ $state: string }>(
  ({ theme, $state }) => css`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
    ${(() => {
      switch ($state) {
        case "Unchecked":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Hover":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Disabled (Unchecked)":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        case "Intermediate":
          return css`
            background-color: ${theme["button"]["Default"]["default"]};
          `;
        case "Focused":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIdleCheckbox2 = styled.div(
  ({ theme }) => css`
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 6px;
  `,
);

const StyledIntermidiateLine = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

/** A checkbox input component that allows users to select or deselect an option. Supports unchecked, checked, intermediate, hover, pressed, focused, and disabled states. */
export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox(
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
    const state = toggle.checked ? "Checked" : "Unchecked";
    return (
      <StyledRoot
        data-toggle-disabled={toggle.disabled || undefined}
        data-toggle-checked={toggle.checked || undefined}
        {...rest}
        ref={ref}
        $state={state}
      >
        <input {...toggle.inputProps} />
        {["Checked", "Disabled (Checked)"].includes(state) && (
          <StyledActiveCheckbox $state={state} />
        )}
        {[
          "Unchecked",
          "Hover",
          "Pressed",
          "Disabled (Unchecked)",
          "Intermediate",
          "Focused",
        ].includes(state) && <StyledIdleCheckbox $state={state} />}
        {state === "Pressed" && <StyledIdleCheckbox2 />}
        {state === "Intermediate" && <StyledIntermidiateLine />}
      </StyledRoot>
    );
  },
);
