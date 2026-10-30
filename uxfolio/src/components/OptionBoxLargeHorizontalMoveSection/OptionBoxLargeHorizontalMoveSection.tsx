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

/** A large horizontal option box control for moving a section up or down, rendered as a clickable button with Up/Down type variants and Default/Hover states. */
export const OptionBoxLargeHorizontalMoveSection = React.forwardRef<
  HTMLButtonElement,
  OptionBoxLargeHorizontalMoveSectionProps
>(function OptionBoxLargeHorizontalMoveSection({ type = "Up", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewLargeHorizontalMoveSection type={"Up"} />
    </StyledRoot>
  );
});
