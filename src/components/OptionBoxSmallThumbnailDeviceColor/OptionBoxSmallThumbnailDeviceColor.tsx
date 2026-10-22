import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallDeviceColor } from "../OptionPreviewSmallDeviceColor";

export interface OptionBoxSmallThumbnailDeviceColorProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Light" | "Dark";
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A small selectable option box displaying a device color thumbnail. Supports light and dark color variants with default, hover, and active interaction states, typically used in a color or theme selection UI. */
export const OptionBoxSmallThumbnailDeviceColor = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallThumbnailDeviceColorProps
>(function OptionBoxSmallThumbnailDeviceColor({ type = "Dark", ...rest }, ref) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Device color option"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallDeviceColor color={"Dark"} />
    </StyledRoot>
  );
});
