import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { useSelect } from "./SelectField.select";

export interface SelectFieldOption {
  value: string;
  label: string;
}

export interface SelectFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasLabel"
  | "hasError"
  | "label"
  | "error"
  | "description"
  | "hasDescription"
  | "options"
  | "value"
  | "defaultValue"
  | "onChange"
  | "placeholder"
  | "open"
  | "defaultOpen"
  | "onOpenChange"
  | "disabled"
> {
  hasLabel?: boolean;
  hasError?: boolean;
  label?: string;
  error?: string;
  description?: string;
  hasDescription?: boolean;
  /** The choices. The design only draws placeholders. */
  options?: SelectFieldOption[];
  /** The chosen option value (controlled). */
  value?: string;
  /** The initially chosen option value (uncontrolled). */
  defaultValue?: string;
  /** Called with the new option value when the user chooses. */
  onChange?: (value: string) => void;
  /** Shown while nothing is chosen. */
  placeholder?: string;
  /** Whether the list is open (controlled). */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

const StyledRoot = styled.div<{ $state: string }>(
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

const StyledLabel = styled.div<{ $state: string }>(
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

const StyledDescription = styled.div<{ $state: string }>(
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

const StyledSelect = styled.div<{ $state: string }>(
  ({ theme, $state }) => css`
    cursor: pointer;
    &[aria-disabled="true"] {
      cursor: not-allowed;
    }
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
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
            border-color: ${theme["Border"]["Disabled"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledValue = styled.div<{ $state: string; $valueType: string }>(
  ({ theme, $state, $valueType }) => css`
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

const StyledOptions = styled.ul(
  ({ theme }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
    box-shadow:
      0px 1px 4px 0px rgba(12, 12, 13, 0.1),
      0px 1px 4px 0px rgba(12, 12, 13, 0.05);
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 10;
    min-width: 100%;
    width: max-content;
    max-height: 16rem;
    overflow-y: auto;
    box-sizing: border-box;
  `,
);

const StyledHelloWorld = styled.li(
  ({ theme }) => css`
    cursor: pointer;
    margin: -2px -4px;
    padding: 2px 4px;
    border-radius: 4px;
    &[data-active="true"] {
      background-color: rgba(0, 0, 0, 0.06);
    }
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  `,
);

const StyledOption2 = styled.li(
  ({ theme }) => css`
    cursor: pointer;
    margin: -2px -4px;
    padding: 2px 4px;
    border-radius: 4px;
    &[data-active="true"] {
      background-color: rgba(0, 0, 0, 0.06);
    }
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledError = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Danger"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A dropdown select field component with an optional label, description, selected value display, expandable options list, and error message. Supports default, error, and disabled states. */
export const SelectField = React.forwardRef<HTMLDivElement, SelectFieldProps>(
  function SelectField(
    {
      hasLabel = true,
      hasError = true,
      label = "Label",
      error = "Error",
      description = "Description",
      hasDescription = false,
      options,
      value,
      defaultValue,
      onChange,
      placeholder,
      open,
      defaultOpen,
      onOpenChange,
      disabled,
      ...rest
    },
    ref,
  ) {
    const select = useSelect({
      options,
      value,
      defaultValue,
      onChange,
      open,
      defaultOpen,
      onOpenChange,
      disabled,
      hasLabel: hasLabel,
      hasDescription: hasDescription,
      hasError: hasError,
    });
    const displayLabel = select.selected?.label ?? placeholder ?? "";
    const state = disabled ? "Disabled" : hasError ? "Error" : "Default";
    const valueType = select.selected ? "Default" : "Placeholder";
    return (
      <StyledRoot {...rest} ref={ref} $state={state}>
        {hasLabel && (
          <StyledLabel $state={state} id={select.ids.label}>
            {label}
          </StyledLabel>
        )}
        {hasDescription && (
          <StyledDescription $state={state} id={select.ids.description}>
            {description}
          </StyledDescription>
        )}
        <StyledSelect $state={state} {...select.triggerProps}>
          <StyledValue $state={state} $valueType={valueType}>
            {displayLabel}
          </StyledValue>
          <Icon name={"Chevron down"} size={16} />
          {select.isOpen && (
            <StyledOptions {...select.listProps}>
              {(options ?? []).map((option, index) => {
                const Item =
                  option.value === select.selected?.value
                    ? StyledHelloWorld
                    : StyledOption2;
                return (
                  <Item
                    key={option.value}
                    {...select.getOptionProps(option, index)}
                  >
                    {option.label}
                  </Item>
                );
              })}
            </StyledOptions>
          )}
        </StyledSelect>
        {hasError && <StyledError id={select.ids.error}>{error}</StyledError>}
      </StyledRoot>
    );
  },
);
