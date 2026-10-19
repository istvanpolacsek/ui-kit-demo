import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface DatePickerFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "hasLabel"
  | "hasError"
  | "label"
  | "error"
  | "description"
  | "hasDescription"
  | "value"
  | "state"
  | "valueType"
> {
  hasLabel?: boolean;
  hasError?: boolean;
  label?: string;
  error?: string;
  description?: string;
  hasDescription?: boolean;
  value?: string;
  state?: "Default" | "Error" | "Disabled";
  valueType?: "Default" | "Placeholder";
}

const StyledRoot = styled.div<{ $state: "Default" | "Error" | "Disabled" }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Disabled":
          return css`
            color: ${theme["Icon"]["Disabled"]["On Disabled"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.label<{ $state: "Default" | "Error" | "Disabled" }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Error":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledDescription = styled.p<{
  $state: "Default" | "Error" | "Disabled";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Secondary"]};
          `;
        case "Error":
          return css`
            color: ${theme["Text"]["Default"]["Secondary"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledInput = styled.div<{ $state: "Default" | "Error" | "Disabled" }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Error":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Disabled":
          return css`
            background-color: ${theme["Background"]["Disabled"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-color: ${theme["Border"]["Default"]["Default"]};
          `;
        case "Error":
          return css`
            border-color: ${theme["Border"]["Danger"]["Default"]};
          `;
        case "Disabled":
          return css`
            border-color: ${"#b2b2b2"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledValue = styled.input<{
  $state: "Default" | "Error" | "Disabled";
  $valueType: "Default" | "Placeholder";
}>(
  ({ theme, $state, $valueType }) => css`
    flex: 1 1 auto;
    min-width: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    &::placeholder {
      color: inherit;
      opacity: 1;
    }
    ${(() => {
      switch (JSON.stringify([$state, $valueType])) {
        case '["Default","Default"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Default","Placeholder"]':
          return css`
            color: ${theme["Text"]["Default"]["Tertiary"]};
          `;
        case '["Error","Default"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Error","Placeholder"]':
          return css`
            color: ${theme["Text"]["Default"]["Tertiary"]};
          `;
        case '["Disabled","Default"]':
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        case '["Disabled","Placeholder"]':
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

const StyledError = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Danger"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A date picker field component that displays a label, optional description, a date input area with a value and calendar icon, and an optional error message. Supports default, error, and disabled states, as well as placeholder and filled value display modes. */
export const DatePickerField = React.forwardRef<
  HTMLInputElement,
  DatePickerFieldProps
>(function DatePickerField(
  {
    hasLabel = true,
    hasError = true,
    label = "Label",
    error = "Error",
    description = "Description",
    hasDescription = false,
    value = "Value",
    state = "Default",
    valueType = "Default",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot $state={state}>
      {hasLabel && <StyledLabel $state={state}>{label}</StyledLabel>}
      {hasDescription && (
        <StyledDescription $state={state}>{description}</StyledDescription>
      )}
      <StyledInput $state={state}>
        <StyledValue
          type="text"
          placeholder={value}
          aria-label={value}
          $state={state}
          $valueType={valueType}
          ref={ref}
          {...rest}
        />
        <Icon name={"Calendar"} size={16} />
      </StyledInput>
      {hasError && <StyledError>{error}</StyledError>}
    </StyledRoot>
  );
});
