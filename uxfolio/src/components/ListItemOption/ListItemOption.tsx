import React from "react";
import styled, { css } from "styled-components";
import { Original } from "../Original";

export interface ListItemOptionProps extends React.ComponentPropsWithoutRef<"li"> {}

const StyledRoot = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
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

/** A list item representing a selectable option within a list or menu. Supports active, default, and hover states to indicate selection or interaction. */
export const ListItemOption = React.forwardRef<
  HTMLLIElement,
  ListItemOptionProps
>(function ListItemOption({ ...rest }, ref) {
  return (
    <StyledRoot role="option" aria-label="Option item" {...rest} ref={ref}>
      <Original />
      <StyledLabel>{"Value"}</StyledLabel>
    </StyledRoot>
  );
});
