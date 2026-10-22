import React from "react";
import styled, { css } from "styled-components";

export interface NavigationItemPortfolioTitleProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "type"
> {
  type?: "Text" | "Bolded text" | "Logo";
}

const StyledRoot = styled.a<{ $type: "Text" | "Bolded text" | "Logo" }>(
  ({ theme, $type }) => css`
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

const StyledText = styled.span(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    &:hover {
      color: ${theme["Color 1"]};
    }
  `,
);

const StyledImage = styled.span(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A navigation item representing a portfolio title link. Supports text, bolded text, and logo variants, as well as default and hover states. Typically used as a branded anchor or site title within a navigation bar. */
export const NavigationItemPortfolioTitle = React.forwardRef<
  HTMLAnchorElement,
  NavigationItemPortfolioTitleProps
>(function NavigationItemPortfolioTitle({ type = "Text", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Portfolio title navigation link"
      {...rest}
      ref={ref}
      $type={type}
    >
      {["Text", "Bolded text"].includes(type) && (
        <StyledText>{"Nathan Davidson"}</StyledText>
      )}
      {type === "Logo" && <StyledImage />}
    </StyledRoot>
  );
});
