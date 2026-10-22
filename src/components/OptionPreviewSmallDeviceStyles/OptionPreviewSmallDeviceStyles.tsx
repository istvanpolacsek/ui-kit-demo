import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewSmallDeviceStyles.markup";

export interface OptionPreviewSmallDeviceStylesProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "None" | "Mobile" | "Tablet" | "Laptop" | "Desktop";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewSmallDeviceStyles = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewSmallDeviceStylesProps
>(function OptionPreviewSmallDeviceStyles({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
