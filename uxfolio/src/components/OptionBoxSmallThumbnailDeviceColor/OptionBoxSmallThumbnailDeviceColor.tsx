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

/** A small option box displaying a thumbnail device color swatch, allowing users to select between Light and Dark color variants with Default, Hover, and Active interaction states. */
export const OptionBoxSmallThumbnailDeviceColor = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallThumbnailDeviceColorProps
>(function OptionBoxSmallThumbnailDeviceColor({ type = "Dark", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewSmallDeviceColor color={"Dark"} />
    </StyledRoot>
  );
});
