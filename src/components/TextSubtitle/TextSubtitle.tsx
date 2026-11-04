import React from "react";
import styled, { css } from "styled-components";

export interface TextSubtitleProps extends Omit<
  React.ComponentPropsWithoutRef<"p">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.p(
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

const StyledTextSubtitle = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
  `,
);

/** A subtitle text component that renders a secondary heading or descriptive text beneath a primary title. */
export const TextSubtitle = React.forwardRef<
  HTMLParagraphElement,
  TextSubtitleProps
>(function TextSubtitle({ text = "Text Subtitle", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTextSubtitle>{text}</StyledTextSubtitle>
    </StyledRoot>
  );
});
