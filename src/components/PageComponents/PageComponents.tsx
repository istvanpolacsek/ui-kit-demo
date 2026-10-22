import React from "react";
import styled, { css } from "styled-components";

export interface PageComponentsProps extends Omit<
  React.ComponentPropsWithoutRef<"footer">,
  "type"
> {
  type?: "Footer" | "Header";
}

const StyledRoot = styled.footer<{ $type: "Footer" | "Header" }>(
  ({ theme, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Footer":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 40px;
            padding-right: 80px;
            padding-bottom: 40px;
            padding-left: 80px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: 1920px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Header":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 96px;
            padding-right: 80px;
            padding-bottom: 96px;
            padding-left: 80px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            width: 1920px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Footer":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Header":
          return css`
            background-color: ${theme["royalBlue"]["700"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styledimage2 = styled.div(
  () => css`
    width: 33px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledNUDesignSystem2025 = styled.span(
  () => css`
    color: #333333;
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  `,
);

const StyledPageSection = styled.p(
  ({ theme }) => css`
    color: ${theme["gray"]["0"]};
    font-family: "Georgia";
    font-size: 64px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

/** A page-level layout component that renders either a Footer or Header variant, providing structural framing for page content within the NU Design System. */
export const PageComponents = React.forwardRef<
  HTMLElement,
  PageComponentsProps
>(function PageComponents({ type = "Footer", ...rest }, ref) {
  return (
    <StyledRoot
      role="contentinfo"
      aria-label="Page footer"
      {...rest}
      ref={ref}
      $type={type}
    >
      {type === "Footer" && <Styledimage2 />}
      {type === "Footer" && (
        <StyledNUDesignSystem2025>
          {"NU Design System 2025"}
        </StyledNUDesignSystem2025>
      )}
      {type === "Header" && (
        <StyledPageSection>{"Page • Section"}</StyledPageSection>
      )}
    </StyledRoot>
  );
});
