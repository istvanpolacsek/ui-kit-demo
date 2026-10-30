import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./CenterVerticalAlign.markup";

export interface CenterVerticalAlignProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const CenterVerticalAlign = React.forwardRef<
  HTMLSpanElement,
  CenterVerticalAlignProps
>(function CenterVerticalAlign({ ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([])] && (
        <img src={SVG_URLS[JSON.stringify([])]} alt="" />
      )}
    </StyledRoot>
  );
});
