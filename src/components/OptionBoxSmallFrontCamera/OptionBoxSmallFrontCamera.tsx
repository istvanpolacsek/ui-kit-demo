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

/** A selectable option box component representing the 'Front camera' choice in a small format. Supports Default, Hover, and Active states, indicating it functions as an interactive selection control. */
export const OptionBoxSmallFrontCamera = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallFrontCameraProps
>(function OptionBoxSmallFrontCamera({ type = "Simple", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Front camera" {...rest} ref={ref}>
      <OptionPreviewSmallFrontCamera type={"Simple"} />
    </StyledRoot>
  );
});
