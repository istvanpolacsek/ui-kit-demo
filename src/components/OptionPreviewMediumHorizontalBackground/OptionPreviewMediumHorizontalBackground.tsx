import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewMediumHorizontalBackground.markup";

export interface OptionPreviewMediumHorizontalBackgroundProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "style" | "children"
> {
  style?:
    | "Transparent"
    | "Solid"
    | "Vertical"
    | "Horizontal"
    | "Left corner"
    | "Right corner"
    | "Radial"
    | "Corner"
    | "Special";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewMediumHorizontalBackground = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewMediumHorizontalBackgroundProps
>(function OptionPreviewMediumHorizontalBackground(
  { style = "Transparent", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([style])] && (
        <img src={SVG_URLS[JSON.stringify([style])]} alt="" />
      )}
    </StyledRoot>
  );
});
