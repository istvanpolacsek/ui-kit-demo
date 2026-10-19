import React from "react";
import styled, { css } from "styled-components";

export interface TextSubheadingProps extends Omit<
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

const StyledTextSubheading = styled.h2(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
  `,
);

/** A subheading text component used to introduce or label sections of content within a page or UI layout. */
export const TextSubheading = React.forwardRef<
  HTMLHeadingElement,
  TextSubheadingProps
>(function TextSubheading({ text = "Text Subheading", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTextSubheading>{text}</StyledTextSubheading>
    </StyledRoot>
  );
});
