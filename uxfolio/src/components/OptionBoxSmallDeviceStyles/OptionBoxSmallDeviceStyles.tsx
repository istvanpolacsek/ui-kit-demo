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

/** A small option box component for selecting device styles (Mobile, Tablet, Desktop, Laptop). Renders as a clickable control with Default, Hover, and Active states to indicate the currently selected or focused device type. */
export const OptionBoxSmallDeviceStyles = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallDeviceStylesProps
>(function OptionBoxSmallDeviceStyles({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewSmallDeviceStyles type={"None"} />
    </StyledRoot>
  );
});
