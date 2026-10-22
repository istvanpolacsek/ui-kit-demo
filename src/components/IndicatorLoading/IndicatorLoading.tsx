import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./IndicatorLoading.markup";

export interface IndicatorLoadingProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Dark" | "Light" | "Product";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const IndicatorLoading = React.forwardRef<
  HTMLSpanElement,
  IndicatorLoadingProps
>(function IndicatorLoading({ type = "Light", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
