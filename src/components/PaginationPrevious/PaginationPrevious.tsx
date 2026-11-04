import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface PaginationPreviousProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  ({ theme }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    color: ${theme["Text"]["Default"]["Default"]};
    &:hover:not(:disabled) {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
  `,
);

const StyledPrevious = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:is(button:disabled *) {
      color: ${theme["Text"]["Default"]["Secondary"]};
    }
  `,
);

/** A pagination control that navigates to the previous page. Supports default, hover, and disabled interaction states. */
export const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  PaginationPreviousProps
>(function PaginationPrevious({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <Icon name={"Arrow left"} size={16} />
      <StyledPrevious>{"Previous"}</StyledPrevious>
    </StyledRoot>
  );
});
