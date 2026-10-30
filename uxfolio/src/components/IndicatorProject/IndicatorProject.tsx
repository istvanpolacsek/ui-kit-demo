import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./IndicatorProject.markup";

export interface IndicatorProjectProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Public" | "Draft";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const IndicatorProject = React.forwardRef<
  HTMLSpanElement,
  IndicatorProjectProps
>(function IndicatorProject({ type = "Public", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
