import React from "react";
import styled, { css } from "styled-components";
import { AboutPage } from "../AboutPage";

export interface ListItemAddablePageProps extends React.ComponentPropsWithoutRef<"button"> {}

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
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 305px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 4px;
    color: #fefefe;
    &:hover:not(:disabled) {
      background-color: #333333;
    }
  `,
);

const StyledTitle = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** A list item representing an addable page (e.g. 'About'), used to add or select a page from a list. Supports Default and Hover interaction states. */
export const ListItemAddablePage = React.forwardRef<
  HTMLButtonElement,
  ListItemAddablePageProps
>(function ListItemAddablePage({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <AboutPage />
      <StyledTitle>{"About"}</StyledTitle>
    </StyledRoot>
  );
});
