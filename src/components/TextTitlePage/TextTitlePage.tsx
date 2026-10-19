import React from "react";
import styled, { css } from "styled-components";

export interface TextTitlePageProps extends Omit<
  React.ComponentPropsWithoutRef<"h1">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.h1(
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

const StyledTextTitlePage = styled.h1(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
);

/** Displays the title of a page. Renders a prominent text heading intended for use as the primary page title. */
export const TextTitlePage = React.forwardRef<
  HTMLHeadingElement,
  TextTitlePageProps
>(function TextTitlePage({ text = "Text Title Page", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledTextTitlePage>{text}</StyledTextTitlePage>
    </StyledRoot>
  );
});
