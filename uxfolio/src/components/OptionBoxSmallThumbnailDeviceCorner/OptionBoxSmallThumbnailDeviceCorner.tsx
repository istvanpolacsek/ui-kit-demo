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

/** A small option box component displaying a thumbnail device corner preview. Supports rounded and sharp type variants with default, hover, and active interaction states. */
export const OptionBoxSmallThumbnailDeviceCorner = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallThumbnailDeviceCornerProps
>(function OptionBoxSmallThumbnailDeviceCorner(
  { type = "Sharp", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewSmallThumbnailDeviceCorner rounding={"Sharp"} />
    </StyledRoot>
  );
});
