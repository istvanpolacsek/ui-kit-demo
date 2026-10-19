import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface PaginationPreviousProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  ({ theme }) => css`
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
    &:hover {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
  `,
);

const StyledPrevious = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:disabled {
      color: ${theme["Text"]["Default"]["Secondary"]};
    }
  `,
);

/** A pagination control button that navigates to the previous page. Supports default, hover, and disabled interaction states. */
export const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  PaginationPreviousProps
>(function PaginationPrevious({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Previous page" {...rest} ref={ref}>
      <Icon name={"Arrow left"} size={16} />
      <StyledPrevious>{"Previous"}</StyledPrevious>
    </StyledRoot>
  );
});
