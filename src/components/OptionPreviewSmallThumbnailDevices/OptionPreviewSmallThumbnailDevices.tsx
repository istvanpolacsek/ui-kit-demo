import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewSmallThumbnailDevices.markup";

export interface OptionPreviewSmallThumbnailDevicesProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?:
    "Browser" | "No device" | "Semi-real" | "Simple" | "Outline" | "Realistic";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewSmallThumbnailDevices = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewSmallThumbnailDevicesProps
>(function OptionPreviewSmallThumbnailDevices(
  { type = "No device", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
