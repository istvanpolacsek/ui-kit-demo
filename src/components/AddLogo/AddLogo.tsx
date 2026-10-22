import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./AddLogo.markup";

export interface AddLogoProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const AddLogo = React.forwardRef<HTMLSpanElement, AddLogoProps>(
  function AddLogo({ ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([])] && (
          <img src={SVG_URLS[JSON.stringify([])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
