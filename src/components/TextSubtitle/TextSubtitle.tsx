import React from "react";
import styled, { css } from "styled-components";

export interface TextSubtitleProps extends Omit<
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

const StyledTextSubtitle = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
  `,
);

/** Displays a subtitle text string, typically used as a secondary label or supporting text beneath a title. */
export const TextSubtitle = React.forwardRef<
  HTMLSpanElement,
  TextSubtitleProps
>(function TextSubtitle({ text = "Text Subtitle", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTextSubtitle>{text}</StyledTextSubtitle>
    </StyledRoot>
  );
});
