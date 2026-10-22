import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallThumbnailDeviceCorner } from "../OptionPreviewSmallThumbnailDeviceCorner";

export interface OptionBoxSmallThumbnailDeviceCornerProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Rounded" | "Sharp";
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

/** A selectable option box component with a small thumbnail device corner preview. Supports rounded and sharp corner type variants, with default, hover, and active interaction states. Used for selecting a visual style or device corner option. */
export const OptionBoxSmallThumbnailDeviceCorner = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallThumbnailDeviceCornerProps
>(function OptionBoxSmallThumbnailDeviceCorner(
  { type = "Sharp", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="button"
      aria-label="Select thumbnail device corner option"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallThumbnailDeviceCorner rounding={"Sharp"} />
    </StyledRoot>
  );
});
