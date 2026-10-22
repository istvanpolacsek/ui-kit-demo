import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewLargeHorizontalAnimatedTextLayout.markup";

export interface OptionPreviewLargeHorizontalAnimatedTextLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Wavy" | "Linear";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewLargeHorizontalAnimatedTextLayout = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewLargeHorizontalAnimatedTextLayoutProps
>(function OptionPreviewLargeHorizontalAnimatedTextLayout(
  { type = "Linear", ...rest },
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
