import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { useSelect } from "./CalendarMonthField.select";

export interface CalendarMonthFieldOption {
  value: string;
  label: string;
}

export interface CalendarMonthFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasLabel"
  | "label"
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
  label?: string;
  /** The choices. The design only draws placeholders. */
  options?: CalendarMonthFieldOption[];
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

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 240px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledLabel = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledSelect = styled.div(
  ({ theme }) => css`
    cursor: pointer;
    &[aria-disabled="true"] {
      cursor: not-allowed;
    }
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    padding-right: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledSeptember = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
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
    align-items: center;
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

const StyledFebruary = styled.li(
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

/** A calendar month selector field that displays the currently selected month and expands to show a dropdown list of all twelve months for selection. Supports an optional label and open/closed state. */
export const CalendarMonthField = React.forwardRef<
  HTMLDivElement,
  CalendarMonthFieldProps
>(function CalendarMonthField(
  {
    hasLabel = false,
    label = "Label",
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
    hasDescription: false,
    hasError: false,
  });
  const displayLabel = select.selected?.label ?? placeholder ?? "";
  return (
    <StyledRoot {...rest} ref={ref}>
      {hasLabel && <StyledLabel id={select.ids.label}>{label}</StyledLabel>}
      <StyledSelect {...select.triggerProps}>
        <StyledSeptember>{displayLabel}</StyledSeptember>
        <Icon name={"Chevron down"} size={16} />
        {select.isOpen && (
          <StyledOptions {...select.listProps}>
            {(options ?? []).map((option, index) => {
              const Item =
                option.value === select.selected?.value ? StyledFebruary : "li";
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
    </StyledRoot>
  );
});
