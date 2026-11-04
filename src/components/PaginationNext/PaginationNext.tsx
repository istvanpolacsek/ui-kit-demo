import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface PaginationNextProps extends React.ComponentPropsWithoutRef<"button"> {}

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

const StyledNext = styled.div(
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

/** A pagination control that navigates to the next page. Supports default, hover, and disabled visual states. */
export const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  PaginationNextProps
>(function PaginationNext({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <StyledNext>{"Next"}</StyledNext>
      <Icon name={"Arrow right"} size={16} />
    </StyledRoot>
  );
});
