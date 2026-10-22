import React from "react";
import styled, { css } from "styled-components";
import { AboutPage } from "../AboutPage";

export interface ListItemAddablePageProps extends React.ComponentPropsWithoutRef<"li"> {}

const StyledRoot = styled.li(
  () => css`
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
    &:hover {
      background-color: #333333;
    }
  `,
);

const StyledTitle = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** A list item representing an addable page entry (e.g. 'About'), used within a list of pages that can be added or selected. Supports Default and Hover interaction states. */
export const ListItemAddablePage = React.forwardRef<
  HTMLLIElement,
  ListItemAddablePageProps
>(function ListItemAddablePage({ ...rest }, ref) {
  return (
    <StyledRoot role="option" aria-label="About" {...rest} ref={ref}>
      <AboutPage />
      <StyledTitle>{"About"}</StyledTitle>
    </StyledRoot>
  );
});
