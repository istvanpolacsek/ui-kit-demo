import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./ColorSwatch.markup";

export interface ColorSwatchProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "empty" | "children"
> {
  type?: "Preview" | "Value";
  empty?: "False" | "True";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const ColorSwatch = React.forwardRef<HTMLSpanElement, ColorSwatchProps>(
  function ColorSwatch({ type = "Preview", empty = "False", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([])] && (
          <img src={SVG_URLS[JSON.stringify([])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
