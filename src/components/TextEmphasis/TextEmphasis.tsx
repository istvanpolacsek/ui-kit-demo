import React from "react";
import styled, { css } from "styled-components";

export interface TextEmphasisProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.span(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledTextEmphasis = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** Renders a short piece of text with emphasis styling applied. Intended for inline use to highlight or stress a word or phrase within surrounding content. */
export const TextEmphasis = React.forwardRef<
  HTMLSpanElement,
  TextEmphasisProps
>(function TextEmphasis({ text = "Text Emphasis", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTextEmphasis>{text}</StyledTextEmphasis>
    </StyledRoot>
  );
});
