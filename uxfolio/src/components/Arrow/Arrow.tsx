import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Arrow.markup";

export interface ArrowProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "style" | "open" | "children"
> {
  style?: "Chevron" | "Plus sign" | "Arrow";
  open?: "No" | "Yes";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Arrow = React.forwardRef<HTMLSpanElement, ArrowProps>(
  function Arrow({ style = "Plus sign", open = "No", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([style, open])] && (
          <img src={SVG_URLS[JSON.stringify([style, open])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
