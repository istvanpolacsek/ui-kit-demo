import React from "react";
import styled, { css } from "styled-components";

export interface TextLinkProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "text"
> {
  text?: string;
}

const StyledRoot = styled.a(
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

const StyledTextLink = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    text-decoration: underline;
  `,
);

/** A text link component that renders an inline hyperlink with customizable label text, used for navigation or linking to related content. */
export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  function TextLink({ text = "Text Link", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Text Link" {...rest} ref={ref}>
        <StyledTextLink>{text}</StyledTextLink>
      </StyledRoot>
    );
  },
);
