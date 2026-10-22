import React from "react";
import styled, { css } from "styled-components";
import { ArrowUp } from "../ArrowUp";
import { ArrowDown } from "../ArrowDown";

export interface OptionPreviewLargeHorizontalMoveSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Up" | "Down";
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 18px;
    padding-right: 0px;
    padding-bottom: 17px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 134px;
    height: 59px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    width: 134px;
    height: 59px;
    box-sizing: border-box;
  `,
);

/** A button that moves a section up or down in order. Renders an arrow icon (up or down) based on the Type variant to indicate the direction of movement. */
export const OptionPreviewLargeHorizontalMoveSection = React.forwardRef<
  HTMLButtonElement,
  OptionPreviewLargeHorizontalMoveSectionProps
>(function OptionPreviewLargeHorizontalMoveSection(
  { type = "Up", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="Move section up" {...rest} ref={ref}>
      {type === "Up" && <ArrowUp />}
      {type === "Down" && <ArrowDown />}
    </StyledRoot>
  );
});
