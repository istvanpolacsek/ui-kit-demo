import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./TypePreviewOverflowStyle.markup";

export interface TypePreviewOverflowStyleProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Faded" | "Full width" | "Clipped";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const TypePreviewOverflowStyle = React.forwardRef<
  HTMLSpanElement,
  TypePreviewOverflowStyleProps
>(function TypePreviewOverflowStyle({ type = "Full width", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
