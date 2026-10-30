import React from "react";
import styled, { css } from "styled-components";

export interface NavigationItemPortfolioTitleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Text" | "Bolded text" | "Logo";
}

const StyledRoot = styled.button<{ $type: "Text" | "Bolded text" | "Logo" }>(
  ({ theme, $type }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Text":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Bolded text":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Logo":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 132px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Color 2"]};
  `,
);

const StyledText = styled.div(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    &:is(button:hover:not(:disabled) *) {
      color: ${theme["Color 1"]};
    }
  `,
);

const StyledImage = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A navigation item representing a portfolio title link. Displays either a text label (e.g., a name) or a logo image, with default and hover interaction states. */
export const NavigationItemPortfolioTitle = React.forwardRef<
  HTMLButtonElement,
  NavigationItemPortfolioTitleProps
>(function NavigationItemPortfolioTitle({ type = "Text", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $type={type}>
      {["Text", "Bolded text"].includes(type) && (
        <StyledText>{"Nathan Davidson"}</StyledText>
      )}
      {type === "Logo" && <StyledImage />}
    </StyledRoot>
  );
});
