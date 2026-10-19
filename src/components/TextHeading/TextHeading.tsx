import React from "react";
import styled, { css } from "styled-components";

export interface TextHeadingProps extends Omit<
  React.ComponentPropsWithoutRef<"h2">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.h2(
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

const StyledTextHeading = styled.h2(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
);

/** A text heading component that renders a configurable heading string, suitable for use as a section or page title. */
export const TextHeading = React.forwardRef<
  HTMLHeadingElement,
  TextHeadingProps
>(function TextHeading({ text = "Text Heading", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTextHeading>{text}</StyledTextHeading>
    </StyledRoot>
  );
});
