import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./FlipHorizontallyAlt.markup";

export interface FlipHorizontallyAltProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const FlipHorizontallyAlt = React.forwardRef<
  HTMLSpanElement,
  FlipHorizontallyAltProps
>(function FlipHorizontallyAlt({ ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([])] && (
        <img src={SVG_URLS[JSON.stringify([])]} alt="" />
      )}
    </StyledRoot>
  );
});
