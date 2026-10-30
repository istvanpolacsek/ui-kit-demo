import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallImageShape } from "../OptionPreviewSmallImageShape";

export interface OptionBoxSmallImageShapeProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Sharp" | "Super rounded rectangle" | "Arch" | "Oval";
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

/** A small option box component with image shape variants (Sharp, Super rounded rectangle, Arch, Oval) that allows users to select a visual style or shape option. Supports Default, Hover, and Active interaction states. */
export const OptionBoxSmallImageShape = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallImageShapeProps
>(function OptionBoxSmallImageShape({ type = "Sharp", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewSmallImageShape type={"Rectangle"} />
    </StyledRoot>
  );
});
