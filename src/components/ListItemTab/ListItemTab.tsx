import React from "react";
import styled, { css } from "styled-components";

export interface ListItemTabProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 4px;
    color: #fefefe;
    &:hover {
      background-color: #262626;
    }
    &:active {
      background-color: #333333;
    }
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** A tab list item component that represents a single tab in a tab navigation interface. Supports active, default, and hover states to indicate the current selection. */
export const ListItemTab = React.forwardRef<
  HTMLButtonElement,
  ListItemTabProps
>(function ListItemTab({ ...rest }, ref) {
  return (
    <StyledRoot role="tab" aria-label="Tab" {...rest} ref={ref}>
      <StyledLabel>{"Tab"}</StyledLabel>
    </StyledRoot>
  );
});
