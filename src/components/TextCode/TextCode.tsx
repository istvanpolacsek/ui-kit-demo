import React from "react";
import styled, { css } from "styled-components";

export interface TextCodeProps extends Omit<
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

const StyledTextCode = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Roboto Mono";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  `,
);

/** Displays an inline code snippet or monospaced text label, typically used to represent code, variables, or technical strings within prose or UI. */
export const TextCode = React.forwardRef<HTMLSpanElement, TextCodeProps>(
  function TextCode({ text = "Text Code", ...rest }, ref) {
    return (
      <StyledRoot role="code" {...rest} ref={ref}>
        <StyledTextCode>{text}</StyledTextCode>
      </StyledRoot>
    );
  },
);
