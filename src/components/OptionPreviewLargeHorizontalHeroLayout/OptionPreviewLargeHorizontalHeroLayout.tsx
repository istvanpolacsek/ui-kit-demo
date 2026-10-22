import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewLargeHorizontalHeroLayout.markup";

export interface OptionPreviewLargeHorizontalHeroLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Horizontal" | "Vertical";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewLargeHorizontalHeroLayout = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewLargeHorizontalHeroLayoutProps
>(function OptionPreviewLargeHorizontalHeroLayout(
  { type = "Horizontal", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
