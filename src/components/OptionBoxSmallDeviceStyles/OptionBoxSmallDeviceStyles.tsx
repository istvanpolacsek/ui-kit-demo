import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallDeviceStyles } from "../OptionPreviewSmallDeviceStyles";

export interface OptionBoxSmallDeviceStylesProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "None" | "Mobile" | "Tablet" | "Desktop" | "Laptop";
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

/** A selectable option box component for choosing a device style (Mobile, Tablet, Desktop, Laptop, or None). Supports Default, Hover, and Active interaction states, typically used in device preview or responsive design selection UIs. */
export const OptionBoxSmallDeviceStyles = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallDeviceStylesProps
>(function OptionBoxSmallDeviceStyles({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Select device style"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallDeviceStyles type={"None"} />
    </StyledRoot>
  );
});
