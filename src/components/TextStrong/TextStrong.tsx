import React from "react";
import styled, { css } from "styled-components";

export interface TextStrongProps extends Omit<
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

const StyledTextStrong = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  `,
);

/** Renders a short piece of text with strong (bold) emphasis, suitable for inline use within paragraphs or other text contexts. */
export const TextStrong = React.forwardRef<HTMLSpanElement, TextStrongProps>(
  function TextStrong({ text = "Text Strong", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledTextStrong>{text}</StyledTextStrong>
      </StyledRoot>
    );
  },
);
