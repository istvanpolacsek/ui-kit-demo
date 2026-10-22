import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallThumbnailDevices } from "../OptionPreviewSmallThumbnailDevices";

export interface OptionBoxSmallThumbnailDevicesProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?:
    "No device" | "Semi-real" | "Simple" | "Realistic" | "Browser" | "Outlined";
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

/** A selectable option box component with a small thumbnail device preview. Supports multiple device type variants (No device, Semi-real, Simple, Realistic, Browser, Outlined) and interactive states (Default, Hover, Active), typically used in a selection UI for choosing a device frame or display style. */
export const OptionBoxSmallThumbnailDevices = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallThumbnailDevicesProps
>(function OptionBoxSmallThumbnailDevices(
  { type = "No device", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="option"
      aria-label="Select device thumbnail option"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallThumbnailDevices type={"No device"} />
    </StyledRoot>
  );
});
