import React from "react";
import styled, { css } from "styled-components";

export interface NavigationItemPageProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?:
    | "Regular"
    | "Bold"
    | "Underline regular"
    | "Underline small"
    | "Box sharp"
    | "Box rounded"
    | "Box pill";
}

const StyledRoot = styled.button<{
  $type:
    | "Regular"
    | "Bold"
    | "Underline regular"
    | "Underline small"
    | "Box sharp"
    | "Box rounded"
    | "Box pill";
}>(
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
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Regular":
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
        case "Bold":
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
        case "Underline regular":
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
        case "Underline small":
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
        case "Box sharp":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Box rounded":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Box pill":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
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

const StyledVector1Stroke = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 39px;
    height: 1px;
    background-color: ${theme["Color 2"]};
    border-radius: 0px;
  `,
);

const StyledBox = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 71px;
    height: 40px;
    border-radius: 0px;
  `,
);

/** A navigation item representing a page link within a navigation menu. Supports multiple visual states (Default, Hover, Active) and style variants (Regular, Bold, Underline, Box). */
export const NavigationItemPage = React.forwardRef<
  HTMLButtonElement,
  NavigationItemPageProps
>(function NavigationItemPage({ type = "Regular", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $type={type}>
      <StyledText>{"Page"}</StyledText>
      <StyledVector1Stroke />
      <StyledBox />
    </StyledRoot>
  );
});
