import React from "react";
import styled, { css } from "styled-components";
import { useDateInput } from "./DateInputField.dateinput";

export interface DateInputFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasLabel"
  | "hasError"
  | "label"
  | "error"
  | "description"
  | "hasDescription"
  | "day"
  | "month"
  | "year"
  | "value"
  | "defaultValue"
  | "onChange"
  | "disabled"
> {
  hasLabel?: boolean;
  hasError?: boolean;
  label?: string;
  error?: string;
  description?: string;
  hasDescription?: boolean;
  day?: string;
  month?: string;
  year?: string;
  /** The date as YYYY-MM-DD, or an empty string (controlled). */
  value?: string;
  /** The date it starts with, as YYYY-MM-DD (uncontrolled). */
  defaultValue?: string;
  /** Called with the date as YYYY-MM-DD when the user changes it, or an empty string while it is incomplete or does not exist. */
  onChange?: (value: string) => void;
  disabled?: boolean;
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

const StyledLabel = styled.label<{ $state: string }>(
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

const StyledDescription = styled.p<{ $state: string }>(
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

const StyledInputs = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledInput = styled.div<{ $state: string }>(
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
    flex: 1 1 0;
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

const StyledDD = styled.input<{ $state: string; $valueType: string }>(
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

const StyledInput2 = styled.div<{ $state: string }>(
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
    flex: 1 1 0;
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

const StyledMM = styled.input<{ $state: string; $valueType: string }>(
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

const StyledInput3 = styled.div<{ $state: string }>(
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
    flex: 1 1 0;
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

const StyledYYYY = styled.input<{ $state: string; $valueType: string }>(
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

/** A date input field component composed of separate Day, Month, and Year inputs, with optional label, description, and error message. Supports default, error, and disabled states. */
export const DateInputField = React.forwardRef<
  HTMLDivElement,
  DateInputFieldProps
>(function DateInputField(
  {
    hasLabel = true,
    hasError = true,
    label = "Label",
    error = "Error",
    description = "Description",
    hasDescription = false,
    day = "DD",
    month = "MM",
    year = "YYYY",
    value,
    defaultValue,
    onChange,
    disabled,
    ...rest
  },
  ref,
) {
  const dateinput = useDateInput({
    value,
    defaultValue,
    onChange,
    disabled,
    hasLabel: hasLabel,
    hasDescription: hasDescription,
    hasError: hasError,
    order: ["day", "month", "year"],
  });
  const state = disabled ? "Disabled" : hasError ? "Error" : "Default";
  const valueType = dateinput.hasValue ? "Default" : "Placeholder";
  return (
    <StyledRoot {...dateinput.groupProps} {...rest} ref={ref}>
      {hasLabel && (
        <StyledLabel $state={state} id={dateinput.ids.label}>
          {label}
        </StyledLabel>
      )}
      {hasDescription && (
        <StyledDescription $state={state} id={dateinput.ids.description}>
          {description}
        </StyledDescription>
      )}
      <StyledInputs>
        <StyledInput $state={state}>
          <StyledDD
            {...dateinput.segment("day")}
            placeholder={day}
            $state={state}
            $valueType={valueType}
          />
        </StyledInput>
        <StyledInput2 $state={state}>
          <StyledMM
            {...dateinput.segment("month")}
            placeholder={month}
            $state={state}
            $valueType={valueType}
          />
        </StyledInput2>
        <StyledInput3 $state={state}>
          <StyledYYYY
            {...dateinput.segment("year")}
            placeholder={year}
            $state={state}
            $valueType={valueType}
          />
        </StyledInput3>
      </StyledInputs>
      {hasError && <StyledError id={dateinput.ids.error}>{error}</StyledError>}
    </StyledRoot>
  );
});
