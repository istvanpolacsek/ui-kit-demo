import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./PaletteSwatchSelectorOnlySwatch.markup";

export interface PaletteSwatchSelectorOnlySwatchProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "state" | "selector" | "children"
> {
  state?: "Default" | "Hover" | "Selected";
  selector?: "Selector" | "Editor";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const PaletteSwatchSelectorOnlySwatch = React.forwardRef<
  HTMLSpanElement,
  PaletteSwatchSelectorOnlySwatchProps
>(function PaletteSwatchSelectorOnlySwatch(
  { state = "Default", selector = "Selector", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([state, selector])] && (
        <img src={SVG_URLS[JSON.stringify([state, selector])]} alt="" />
      )}
    </StyledRoot>
  );
});
