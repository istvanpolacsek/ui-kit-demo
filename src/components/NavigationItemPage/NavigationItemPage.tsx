import React from "react";
import styled, { css } from "styled-components";

export interface NavigationItemPageProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
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

const StyledRoot = styled.a<{
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

/** A navigation item representing a page link within a navigation menu. Supports multiple visual states (Default, Hover, Active) and style variants (Regular, Bold, Underline, Box shapes). */
export const NavigationItemPage = React.forwardRef<
  HTMLAnchorElement,
  NavigationItemPageProps
>(function NavigationItemPage({ type = "Regular", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Page" {...rest} ref={ref} $type={type}>
      <StyledText>{"Page"}</StyledText>
      <StyledVector1Stroke />
      <StyledBox />
    </StyledRoot>
  );
});
