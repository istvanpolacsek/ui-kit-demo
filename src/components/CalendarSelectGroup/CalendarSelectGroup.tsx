import React from "react";
import styled, { css } from "styled-components";
import { CalendarMonthField } from "../CalendarMonthField";
import { CalendarYearField } from "../CalendarYearField";

export interface CalendarSelectGroupProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
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
    width: 184px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCalendarMonthField = styled.div(
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

const StyledCalendarYearField = styled.div(
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

/** A grouped set of calendar date selection controls, combining month and year fields for selecting a calendar period. */
export const CalendarSelectGroup = React.forwardRef<
  HTMLDivElement,
  CalendarSelectGroupProps
>(function CalendarSelectGroup({ ...rest }, ref) {
  return (
    <StyledRoot
      role="group"
      aria-label="Select calendar period"
      {...rest}
      ref={ref}
    >
      <StyledCalendarMonthField>
        <CalendarMonthField
          value={"Sep"}
          open={false}
          label={"Label"}
          hasLabel={false}
        />
      </StyledCalendarMonthField>
      <StyledCalendarYearField>
        <CalendarYearField value={"2025"} />
      </StyledCalendarYearField>
    </StyledRoot>
  );
});
