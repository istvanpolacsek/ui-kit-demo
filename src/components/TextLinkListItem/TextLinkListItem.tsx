import React from "react";
import styled, { css } from "styled-components";

export interface TextLinkListItemProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.a(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledListItem = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A text link rendered as a list item, typically used within a navigation or content list to provide a clickable hyperlink. */
export const TextLinkListItem = React.forwardRef<
  HTMLAnchorElement,
  TextLinkListItemProps
>(function TextLinkListItem({ text = "List item", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledListItem>{text}</StyledListItem>
    </StyledRoot>
  );
});
