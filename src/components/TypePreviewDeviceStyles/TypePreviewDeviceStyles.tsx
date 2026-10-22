import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./TypePreviewDeviceStyles.markup";

export interface TypePreviewDeviceStylesProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?: "None" | "Phone" | "Tablet" | "Laptop" | "Desktop";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const TypePreviewDeviceStyles = React.forwardRef<
  HTMLSpanElement,
  TypePreviewDeviceStylesProps
>(function TypePreviewDeviceStyles({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
