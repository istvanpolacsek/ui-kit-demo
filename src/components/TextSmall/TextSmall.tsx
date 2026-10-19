import React from "react";
import styled, { css } from "styled-components";

export interface TextSmallProps extends Omit<
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

const StyledTextSmall = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A small inline text component used to display short text content at a reduced size. */
export const TextSmall = React.forwardRef<HTMLSpanElement, TextSmallProps>(
  function TextSmall({ text = "Text Small", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledTextSmall>{text}</StyledTextSmall>
      </StyledRoot>
    );
  },
);
