import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface CalendarYearFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value"
> {
  value?: string;
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

const StyledSelect = styled.div(
  ({ theme }) => css`
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

const Styled2025 = styled.input(
  ({ theme }) => css`
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
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

/** A calendar year input field that allows users to view or enter a specific year value, typically used within a date picker or calendar component. */
export const CalendarYearField = React.forwardRef<
  HTMLInputElement,
  CalendarYearFieldProps
>(function CalendarYearField({ value = "2025", ...rest }, ref) {
  return (
    <StyledRoot>
      <StyledSelect>
        <Styled2025
          type="number"
          placeholder={value}
          aria-label={value}
          ref={ref}
          {...rest}
        />
        <Icon name={"Chevron down"} size={16} />
      </StyledSelect>
    </StyledRoot>
  );
});
