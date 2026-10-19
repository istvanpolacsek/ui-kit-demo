import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface PaginationNextProps extends React.ComponentPropsWithoutRef<"button"> {}

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

const StyledNext = styled.span(
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

/** A pagination control that navigates to the next page. Supports default, hover, and disabled states. */
export const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  PaginationNextProps
>(function PaginationNext({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Next page" {...rest} ref={ref}>
      <StyledNext>{"Next"}</StyledNext>
      <Icon name={"Arrow right"} size={16} />
    </StyledRoot>
  );
});
