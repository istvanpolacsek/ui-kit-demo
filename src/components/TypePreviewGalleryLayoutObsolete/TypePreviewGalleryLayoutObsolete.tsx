import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./TypePreviewGalleryLayoutObsolete.markup";

export interface TypePreviewGalleryLayoutObsoleteProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Grid" | "Carousel" | "Slider" | "Tilted";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const TypePreviewGalleryLayoutObsolete = React.forwardRef<
  HTMLSpanElement,
  TypePreviewGalleryLayoutObsoleteProps
>(function TypePreviewGalleryLayoutObsolete({ type = "Grid", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
