import React from "react";
import styled, { css } from "styled-components";

export interface TextareaFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
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
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledDescription = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledTextarea = styled.div<{ $state: "Default" | "Error" | "Disabled" }>(
  ({ theme, $state }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
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

const StyledValue = styled.div<{
  $state: "Default" | "Error" | "Disabled";
  $valueType: "Default" | "Placeholder";
}>(
  ({ theme, $state, $valueType }) => css`
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
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledDrag = styled.div<{ $state: "Default" | "Error" | "Disabled" }>(
  ({ theme, $state }) => css`
    position: absolute;
    right: 5.019326210021973px;
    bottom: 6.019336700439453px;
    width: 6.627127647399902px;
    height: 6.627117156982422px;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Disabled":
          return css`
            background-color: ${theme["Icon"]["Disabled"]["On Disabled"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHint = styled.p<{ $state: "Default" | "Error" | "Disabled" }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Secondary"]};
          `;
        case "Error":
          return css`
            color: ${theme["Text"]["Danger"]["Default"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A textarea form field component that supports an optional label, description, value (or placeholder), and an error/hint message. Handles Default, Error, and Disabled states with a resizable textarea input. */
export const TextareaField = React.forwardRef<
  HTMLDivElement,
  TextareaFieldProps
>(function TextareaField(
  {
    hasLabel = true,
    hasError = false,
    label = "Label",
    error = "Hint",
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
    <StyledRoot aria-describedby="hint-or-description" {...rest} ref={ref}>
      {hasLabel && <StyledLabel $state={state}>{label}</StyledLabel>}
      {hasDescription && <StyledDescription>{description}</StyledDescription>}
      <StyledTextarea $state={state}>
        <StyledValue $state={state} $valueType={valueType}>
          {value}
        </StyledValue>
        <StyledDrag $state={state} />
      </StyledTextarea>
      {hasError && <StyledHint $state={state}>{error}</StyledHint>}
    </StyledRoot>
  );
});
