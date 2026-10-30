import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Web.markup";

export interface WebProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "children"
> {}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Web = React.forwardRef<HTMLSpanElement, WebProps>(function Web(
  { ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([])] && (
        <img src={SVG_URLS[JSON.stringify([])]} alt="" />
      )}
    </StyledRoot>
  );
});
