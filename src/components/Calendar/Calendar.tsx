import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";
import { CalendarButton } from "../CalendarButton";
import { useCalendar } from "./Calendar.calendar";

export interface CalendarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "value" | "defaultValue" | "onChange" | "min" | "max" | "autoFocus"
> {
  /** The chosen day as YYYY-MM-DD, or empty (controlled). */
  value?: string;
  /** The day it starts with, as YYYY-MM-DD (uncontrolled). */
  defaultValue?: string;
  /** Called with the chosen day as YYYY-MM-DD. */
  onChange?: (value: string) => void;
  /** The first day that can be chosen, as YYYY-MM-DD. */
  min?: string;
  /** The last day that can be chosen, as YYYY-MM-DD. */
  max?: string;
  /** Moves focus to the chosen (or today’s) day when it appears. */
  autoFocus?: boolean;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 16px;
    color: ${theme["Icon"]["Default"]["Default"]};
  `,
);

const StyledBlock = styled.header(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCalendarSelectGroup = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTable = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThead = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 1px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTd = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTd2 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker2 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTd3 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker3 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTd4 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker4 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTd5 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker5 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTd6 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker6 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTd7 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledDayPicker7 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledTbody = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 1px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 1px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A date picker calendar component displaying a monthly grid of selectable day buttons, with navigation controls and a month/year selector header. */
export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  function Calendar(
    { value, defaultValue, onChange, min, max, autoFocus, ...rest },
    ref,
  ) {
    const calendar = useCalendar({
      value,
      defaultValue,
      onChange,
      min,
      max,
      autoFocus,
      forwardedRef: ref,
    });
    return (
      <StyledRoot
        role="group"
        aria-labelledby={calendar.ids.title}
        {...rest}
        ref={calendar.ref}
      >
        <StyledBlock>
          <IconButton
            icon={"Chevron left"}
            variant={"Subtle"}
            size={"Small"}
            onClick={calendar.previousMonth}
            aria-label="Previous month"
          />
          <StyledCalendarSelectGroup>
            <h2
              id={calendar.ids.title}
              aria-live="polite"
              style={{
                margin: 0,
                font: "inherit",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {calendar.title}
            </h2>
          </StyledCalendarSelectGroup>
          <IconButton
            icon={"Chevron right"}
            variant={"Subtle"}
            size={"Small"}
            onClick={calendar.nextMonth}
            aria-label="Next month"
          />
        </StyledBlock>
        <StyledTable>
          <StyledThead>
            <StyledTd>
              <StyledDayPicker>{"Su"}</StyledDayPicker>
            </StyledTd>
            <StyledTd2>
              <StyledDayPicker2>{"Mo"}</StyledDayPicker2>
            </StyledTd2>
            <StyledTd3>
              <StyledDayPicker3>{"Tu"}</StyledDayPicker3>
            </StyledTd3>
            <StyledTd4>
              <StyledDayPicker4>{"We"}</StyledDayPicker4>
            </StyledTd4>
            <StyledTd5>
              <StyledDayPicker5>{"Th"}</StyledDayPicker5>
            </StyledTd5>
            <StyledTd6>
              <StyledDayPicker6>{"Fr"}</StyledDayPicker6>
            </StyledTd6>
            <StyledTd7>
              <StyledDayPicker7>{"Sa"}</StyledDayPicker7>
            </StyledTd7>
          </StyledThead>
          <StyledTbody>
            {calendar.weeks.map((week, weekIndex) => {
              const Row = StyledRow;
              return (
                <Row key={weekIndex}>
                  {week.map((day) => (
                    <CalendarButton key={day.iso} {...calendar.dayProps(day)} />
                  ))}
                </Row>
              );
            })}
          </StyledTbody>
        </StyledTable>
      </StyledRoot>
    );
  },
);
