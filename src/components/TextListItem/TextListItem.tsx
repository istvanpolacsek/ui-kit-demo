import React from "react";
import styled, { css } from "styled-components";

export interface TextListItemProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.li(
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
    color: ${theme["Text"]["Default"]["Secondary"]};
  `,
);

const StyledListItem = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A single text-based list item intended to be used within a list container (ul or ol). Renders a simple text string as a list entry. */
export const TextListItem = React.forwardRef<HTMLLIElement, TextListItemProps>(
  function TextListItem({ text = "List item", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledListItem>{text}</StyledListItem>
      </StyledRoot>
    );
  },
);
