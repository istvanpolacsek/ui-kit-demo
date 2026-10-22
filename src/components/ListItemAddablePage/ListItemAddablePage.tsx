import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface ListItemAddablePageProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
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

/** A list item representing an addable page, displaying a visual asset and a title. Supports default and hover states, typically used in a page selection or navigation list. */
export const ListItemAddablePage = React.forwardRef<
  HTMLButtonElement,
  ListItemAddablePageProps
>(function ListItemAddablePage({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Add About page" {...rest} ref={ref}>
      <VisualAsset name={"About page"} size={24} />
      <StyledTitle>{"About"}</StyledTitle>
    </StyledRoot>
  );
});
