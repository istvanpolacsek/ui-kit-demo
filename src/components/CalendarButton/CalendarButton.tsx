import React from "react";
import styled, { css } from "styled-components";
import { useCalendarDay } from "./CalendarButton.calendarday";

export interface CalendarButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "number" | "selected" | "inRange" | "disabled" | "outside"
> {
  number?: string;
  /** Whether it is the chosen day. */
  selected?: boolean;
  /** Whether it lies inside a chosen range. */
  inRange?: boolean;
  /** Whether it cannot be chosen. */
  disabled?: boolean;
  /** Whether it belongs to the previous or next month: drawn blank and skipped. */
  outside?: boolean;
}

const StyledRoot = styled.button<{ $state: string }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        case "Active":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Range":
          return css`
            background-color: ${theme["Background"]["Default"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            border-color: ${theme["Border"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Hover":
          return css`
            color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Active":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        case "Range":
          return css`
            color: ${theme["Text"]["Brand"]["Default"]};
          `;
        case "Range Disabled":
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDayPicker = styled.div<{ $state: string }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Hover":
          return css`
            color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Active":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["Text"]["Disabled"]["Default"]};
          `;
        case "Range":
          return css`
            color: ${theme["Text"]["Brand"]["Default"]};
          `;
        case "Range Disabled":
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

/** A calendar day button used in a date picker. Supports multiple states including default, hover, active, disabled, range selection, and hidden, allowing users to select individual days or ranges. */
export const CalendarButton = React.forwardRef<
  HTMLButtonElement,
  CalendarButtonProps
>(function CalendarButton(
  { number = "1", selected, inRange, disabled, outside, ...rest },
  ref,
) {
  const calendarday = useCalendarDay({
    selected,
    inRange,
    disabled,
    outside,
    states: {
      default: "Default",
      hover: "Hover",
      active: "Active",
      disabled: "Disabled",
      range: "Range",
      "range disabled": "Range Disabled",
      hidden: "Hidden",
    },
  });
  const state = calendarday.state;
  return (
    <StyledRoot {...calendarday.rootProps} {...rest} ref={ref} $state={state}>
      {[
        "Default",
        "Hover",
        "Active",
        "Disabled",
        "Range",
        "Range Disabled",
      ].includes(state) && (
        <StyledDayPicker $state={state}>{number}</StyledDayPicker>
      )}
    </StyledRoot>
  );
});
