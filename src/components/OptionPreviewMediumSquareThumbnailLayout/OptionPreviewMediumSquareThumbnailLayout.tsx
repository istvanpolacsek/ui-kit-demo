import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewMediumSquareThumbnailLayout.markup";

export interface OptionPreviewMediumSquareThumbnailLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "device" | "layout" | "children"
> {
  device?: "Tablet" | "Mobile" | "Laptop" | "Monitor";
  layout?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewMediumSquareThumbnailLayout = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewMediumSquareThumbnailLayoutProps
>(function OptionPreviewMediumSquareThumbnailLayout(
  { device = "Mobile", layout = 1, ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([device, layout])] && (
        <img src={SVG_URLS[JSON.stringify([device, layout])]} alt="" />
      )}
    </StyledRoot>
  );
});
