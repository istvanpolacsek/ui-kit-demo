import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./TypePreviewTextPosition.markup";

export interface TypePreviewTextPositionProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?:
    | "Above"
    | "Below"
    | "Inside"
    | "Empty"
    | "Hover"
    | "Left"
    | "Right"
    | "Alternating";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const TypePreviewTextPosition = React.forwardRef<
  HTMLSpanElement,
  TypePreviewTextPositionProps
>(function TypePreviewTextPosition({ type = "Above", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
