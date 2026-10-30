import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewMediumSquareAnimation.markup";

export interface OptionPreviewMediumSquareAnimationProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?:
    | "Rise"
    | "Fall"
    | "Pan left"
    | "Pan right"
    | "Fade in"
    | "Move in"
    | "Bring in"
    | "Scale"
    | "None";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewMediumSquareAnimation = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewMediumSquareAnimationProps
>(function OptionPreviewMediumSquareAnimation({ type = "Rise", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
