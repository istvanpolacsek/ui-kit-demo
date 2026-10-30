import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./TypePreviewPortfolioLayout.markup";

export interface TypePreviewPortfolioLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Grid" | "Offset" | "Large grid" | "Featured grid" | "List";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const TypePreviewPortfolioLayout = React.forwardRef<
  HTMLSpanElement,
  TypePreviewPortfolioLayoutProps
>(function TypePreviewPortfolioLayout({ type = "Grid", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
