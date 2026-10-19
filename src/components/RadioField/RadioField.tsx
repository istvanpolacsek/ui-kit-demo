import React from "react";
import styled, { css } from "styled-components";
import { useToggle } from "./RadioField.toggle";

export interface RadioFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasDescription"
  | "description"
  | "label"
  | "checked"
  | "defaultChecked"
  | "onChange"
  | "disabled"
  | "required"
  | "name"
  | "value"
> {
  hasDescription?: boolean;
  description?: string;
  label?: string;
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRadio = styled.div<{ $valueType: string }>(
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
            padding-left: 3px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Unchecked":
          return css``;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($valueType) {
        case "Unchecked":
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
      switch ($valueType) {
        case "Checked":
          return css`
            background-color: ${theme["Background"]["Brand"]["Secondary"]};
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

const StyledRadio2 = styled.div(
  ({ theme }) => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Icon"]["Brand"]["On Brand Secondary"]};
    border-radius: 50%;
    &:is(:has(input:disabled) *) {
      background-color: ${theme["Icon"]["Disabled"]["Default"]};
    }
  `,
);

const StyledLabel = styled.span<{ $valueType: string }>(
  ({ theme, $valueType }) => css`
    ${css`
      color: ${theme["Text"]["Default"]["Default"]};
    `}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:is(:has(input:disabled) *) {
      ${(() => {
        switch ($valueType) {
          case "Unchecked":
            return css`
              color: ${theme["Text"]["Default"]["Default"]};
            `;
          case "Checked":
            return css`
              color: ${theme["Text"]["Disabled"]["Default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledDescriptionRow = styled.div(
  () => css`
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

const StyledSpace = styled.div(
  () => css`
    overflow: hidden;
    border-radius: 0px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
  `,
);

const StyledDescription = styled.p<{ $valueType: string }>(
  ({ theme, $valueType }) => css`
    ${css`
      color: ${theme["Text"]["Default"]["Secondary"]};
    `}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:is(:has(input:disabled) *) {
      ${(() => {
        switch ($valueType) {
          case "Unchecked":
            return css`
              color: ${theme["Text"]["Default"]["Secondary"]};
            `;
          case "Checked":
            return css`
              color: ${theme["Text"]["Disabled"]["Default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** A single radio button field consisting of a circular radio input, a label, and an optional description. Used within a radio group to represent one exclusive choice among several options. */
export const RadioField = React.forwardRef<HTMLDivElement, RadioFieldProps>(
  function RadioField(
    {
      hasDescription = true,
      description = "Description",
      label = "Label",
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
          <StyledRadio $valueType={valueType} aria-hidden="true">
            {valueType === "Checked" && <StyledRadio2 />}
          </StyledRadio>
          <StyledLabel $valueType={valueType}>{label}</StyledLabel>
        </StyledCheckboxAndLabel>
        {hasDescription && (
          <StyledDescriptionRow>
            <StyledSpace></StyledSpace>
            <StyledDescription
              $valueType={valueType}
              id={toggle.ids.description}
            >
              {description}
            </StyledDescription>
          </StyledDescriptionRow>
        )}
      </StyledRoot>
    );
  },
);
