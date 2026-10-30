import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./BottomVerticalAlign.markup";

export interface BottomVerticalAlignProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const BottomVerticalAlign = React.forwardRef<
  HTMLSpanElement,
  BottomVerticalAlignProps
>(function BottomVerticalAlign({ ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([])] && (
        <img src={SVG_URLS[JSON.stringify([])]} alt="" />
      )}
    </StyledRoot>
  );
});
