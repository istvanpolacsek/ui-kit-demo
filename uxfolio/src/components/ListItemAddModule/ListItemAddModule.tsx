import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";

export interface ListItemAddModuleProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
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
    padding-top: 12px;
    padding-right: 14px;
    padding-bottom: 12px;
    padding-left: 14px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 138px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 8px;
    color: #adadad;
    &:hover:not(:disabled) {
      background-color: #333333;
    }
  `,
);

const StyledLabel = styled.div(
  () => css`
    color: #adadad;
  `,
);

/** A list item component that allows users to add a new module. Renders as a clickable button with an icon and label, supporting default and hover interaction states. */
export const ListItemAddModule = React.forwardRef<
  HTMLButtonElement,
  ListItemAddModuleProps
>(function ListItemAddModule({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <IllustrationIcon type={"Text"} mode={"Dark"} />
      <StyledLabel>{"Text"}</StyledLabel>
    </StyledRoot>
  );
});
