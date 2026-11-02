import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./LogoColor.markup";

export interface LogoColorProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Default" | "Monochrome Dark" | "Monochrome Light";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const LogoColor = React.forwardRef<HTMLSpanElement, LogoColorProps>(
  function LogoColor({ type = "Default", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        {SVG_URLS[JSON.stringify([type])] && (
          <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
        )}
      </StyledRoot>
    );
  },
);
