import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./DarkMode.markup";

export interface DarkModeProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const DarkMode = React.forwardRef<HTMLSpanElement, DarkModeProps>(
  function DarkMode({ ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([])] && (
          <img src={SVG_URLS[JSON.stringify([])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
