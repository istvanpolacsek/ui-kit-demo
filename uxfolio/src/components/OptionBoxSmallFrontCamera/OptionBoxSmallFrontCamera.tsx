import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallFrontCamera } from "../OptionPreviewSmallFrontCamera";

export interface OptionBoxSmallFrontCameraProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Notch" | "Simple" | "Cutout";
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

/** A selectable option box component representing the front camera choice, available in simple, notch, and cutout variants with default, hover, and active interaction states. */
export const OptionBoxSmallFrontCamera = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallFrontCameraProps
>(function OptionBoxSmallFrontCamera({ type = "Simple", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewSmallFrontCamera type={"Simple"} />
    </StyledRoot>
  );
});
