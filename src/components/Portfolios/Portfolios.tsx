import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Portfolios.markup";

export interface PortfoliosProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Portfolios = React.forwardRef<HTMLSpanElement, PortfoliosProps>(
  function Portfolios({ ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([])] && (
          <img src={SVG_URLS[JSON.stringify([])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
