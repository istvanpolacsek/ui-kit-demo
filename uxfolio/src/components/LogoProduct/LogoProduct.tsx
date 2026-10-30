import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./LogoProduct.markup";

export interface LogoProductProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "light" | "type" | "children"
> {
  light?: "Default" | "Dark";
  type?: "Icon only" | "Full";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const LogoProduct = React.forwardRef<HTMLSpanElement, LogoProductProps>(
  function LogoProduct({ light = "Default", type = "Full", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([light, type])] && (
          <img src={SVG_URLS[JSON.stringify([light, type])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
