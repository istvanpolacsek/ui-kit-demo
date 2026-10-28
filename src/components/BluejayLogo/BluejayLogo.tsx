import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./BluejayLogo.markup";

export interface BluejayLogoProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> {}

const StyledRoot = styled.div(
  () => css`
    display: inline-flex;
  `,
);

export const BluejayLogo = React.forwardRef<HTMLDivElement, BluejayLogoProps>(
  function BluejayLogo({ ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([])] && (
          <img src={SVG_URLS[JSON.stringify([])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
