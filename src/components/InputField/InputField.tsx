import React from "react";
import styled, { css } from "styled-components";

export interface InputFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "hasLabel"
  | "hasError"
  | "label"
  | "error"
  | "hasDescription"
  | "description"
  | "value"
  | "state"
  | "valueType"
> {
  hasLabel?: boolean;
  hasError?: boolean;
  label?: string;
  error?: string;
  hasDescription?: boolean;
  description?: string;
  value?: string;
  state?: "Disabled" | "Default" | "Error";
  valueType?: "Default" | "Placeholder";
}

const StyledRoot = styled.div(
  () => css`
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
  `,
);

const StyledLabel = styled.div<{ $state: "Disabled" | "Default" | "Error" }>(
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

const StyledDescription = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledInput = styled.div<{ $state: "Disabled" | "Default" | "Error" }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    overflow: hidden;
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
            border-color: ${theme["Border"]["Disabled"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledValue = styled.input<{
  $state: "Disabled" | "Default" | "Error";
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
        case '["Default","Placeholder"]':
          return css`
            color: ${theme["Text"]["Default"]["Tertiary"]};
          `;
        case '["Default","Default"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Error","Placeholder"]':
          return css`
            color: ${theme["Text"]["Default"]["Tertiary"]};
          `;
        case '["Error","Default"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Disabled","Placeholder"]':
          return css`
            color: ${theme["Text"]["Disabled"]["On Disabled"]};
          `;
        case '["Disabled","Default"]':
          return css`
            color: ${theme["Text"]["Disabled"]["On Disabled"]};
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

const StyledError = styled.div<{ $state: "Disabled" | "Default" | "Error" }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Error":
          return css`
            color: ${theme["Text"]["Danger"]["Default"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
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

/** A form input field component with an optional label, description, inline value, and error message. Supports disabled, default, and error states, as well as placeholder and value display modes. */
export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    {
      hasLabel = true,
      hasError = false,
      label = "Label",
      error = "Error",
      hasDescription = false,
      description = "Description",
      value = "Value",
      state = "Default",
      valueType = "Default",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot>
        {hasLabel && <StyledLabel $state={state}>{label}</StyledLabel>}
        {hasDescription && <StyledDescription>{description}</StyledDescription>}
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
        </StyledInput>
        {hasError && <StyledError $state={state}>{error}</StyledError>}
      </StyledRoot>
    );
  },
);
