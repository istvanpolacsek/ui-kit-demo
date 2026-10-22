import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

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

/** A control button for moving a section up or down within a list or ordered layout. Renders a directional visual asset (Up or Down variant) to indicate the move direction. */
export const OptionPreviewLargeHorizontalMoveSection = React.forwardRef<
  HTMLButtonElement,
  OptionPreviewLargeHorizontalMoveSectionProps
>(function OptionPreviewLargeHorizontalMoveSection(
  { type = "Up", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="Move section up" {...rest} ref={ref}>
      {type === "Up" && <VisualAsset name={"Arrow up"} size={24} />}
      {type === "Down" && <VisualAsset name={"Arrow down"} size={24} />}
    </StyledRoot>
  );
});
