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
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
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

/** A selectable option box component displaying a thumbnail device preview. Supports multiple device type variants (No device, Semi-real, Simple, Realistic, Browser, Outlined) and interactive states (Default, Hover, Active), used for selecting a device frame style. */
export const OptionBoxSmallThumbnailDevices = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallThumbnailDevicesProps
>(function OptionBoxSmallThumbnailDevices(
  { type = "No device", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewSmallThumbnailDevices type={"No device"} />
    </StyledRoot>
  );
});
