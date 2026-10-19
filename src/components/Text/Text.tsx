import React from "react";
import styled, { css } from "styled-components";

export interface TextProps extends Omit<
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

const StyledText = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A simple inline text component that renders a configurable text string. */
export const Text = React.forwardRef<HTMLSpanElement, TextProps>(function Text(
  { text = "Text", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledText>{text}</StyledText>
    </StyledRoot>
  );
});
