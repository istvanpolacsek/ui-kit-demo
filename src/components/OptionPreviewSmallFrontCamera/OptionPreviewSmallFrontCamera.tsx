import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewSmallFrontCamera.markup";

export interface OptionPreviewSmallFrontCameraProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "Notch" | "Simple" | "Cutout";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewSmallFrontCamera = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewSmallFrontCameraProps
>(function OptionPreviewSmallFrontCamera({ type = "Simple", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
