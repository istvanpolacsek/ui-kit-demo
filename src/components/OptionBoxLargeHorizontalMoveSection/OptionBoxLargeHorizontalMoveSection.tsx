import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewLargeHorizontalMoveSection } from "../OptionPreviewLargeHorizontalMoveSection";

export interface OptionBoxLargeHorizontalMoveSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Up" | "Down";
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

/** An interactive option box that allows users to move a section either up or down. Supports Up/Down type variants and Default/Hover states. */
export const OptionBoxLargeHorizontalMoveSection = React.forwardRef<
  HTMLButtonElement,
  OptionBoxLargeHorizontalMoveSectionProps
>(function OptionBoxLargeHorizontalMoveSection({ type = "Up", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Move section up" {...rest} ref={ref}>
      <OptionPreviewLargeHorizontalMoveSection type={"Up"} />
    </StyledRoot>
  );
});
