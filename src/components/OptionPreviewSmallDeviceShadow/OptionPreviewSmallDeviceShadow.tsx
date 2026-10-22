import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./OptionPreviewSmallDeviceShadow.markup";

export interface OptionPreviewSmallDeviceShadowProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "None" | "Shadow";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const OptionPreviewSmallDeviceShadow = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewSmallDeviceShadowProps
>(function OptionPreviewSmallDeviceShadow({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
