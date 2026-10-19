import React from "react";
import styled, { css } from "styled-components";

export interface TextTitleHeroProps extends Omit<
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

const StyledTextTitleHero = styled.h1(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 72px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
  `,
);

/** A hero title text component used as the primary heading on a page or section, typically displayed prominently at the top of hero areas. */
export const TextTitleHero = React.forwardRef<
  HTMLHeadingElement,
  TextTitleHeroProps
>(function TextTitleHero({ text = "Text Title Hero", ...rest }, ref) {
  return (
    <StyledRoot role="heading" {...rest} ref={ref}>
      <StyledTextTitleHero>{text}</StyledTextTitleHero>
    </StyledRoot>
  );
});
