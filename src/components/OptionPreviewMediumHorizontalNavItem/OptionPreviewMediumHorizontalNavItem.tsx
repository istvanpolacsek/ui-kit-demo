import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewMediumHorizontalNavItemProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "position"
> {
  position?: "Simple" | "Underlined" | "Boxed";
}

const StyledRoot = styled.a<{ $position: "Simple" | "Underlined" | "Boxed" }>(
  ({ $position }) => css`
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($position) {
        case "Simple":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 20px;
            padding-right: 27px;
            padding-bottom: 19px;
            padding-left: 27px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Underlined":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 18px;
            padding-right: 27px;
            padding-bottom: 20px;
            padding-left: 27px;
            gap: 0px;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 84px;
    height: 59px;
    box-sizing: border-box;
    color: #adadad;
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #adadad;
    font-family: "Inter";
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

const StyledLine = styled.div(
  () => css`
    width: 30px;
    height: 1px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledBackground = styled.div(
  () => css`
    width: 44px;
    height: 27px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #adadad;
    border-radius: 6px;
  `,
);

/** A navigation item used within a nav bar or menu. Supports Simple, Underlined, and Boxed visual variants to indicate active or hover states. Renders as a link representing a page or section destination. */
export const OptionPreviewMediumHorizontalNavItem = React.forwardRef<
  HTMLAnchorElement,
  OptionPreviewMediumHorizontalNavItemProps
>(function OptionPreviewMediumHorizontalNavItem(
  { position = "Simple", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="link"
      aria-label="Page"
      {...rest}
      ref={ref}
      $position={position}
    >
      <StyledLabel>{"Page"}</StyledLabel>
      {position === "Underlined" && <StyledLine />}
      {position === "Boxed" && <StyledBackground />}
    </StyledRoot>
  );
});
