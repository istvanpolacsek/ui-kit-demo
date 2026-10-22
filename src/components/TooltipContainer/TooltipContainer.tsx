import React from "react";
import styled, { css } from "styled-components";
import { TooltipSmall } from "../TooltipSmall";

export interface TooltipContainerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "side" | "mode"
> {
  side?: "Left" | "Right" | "Bottom" | "Top";
  mode?: "Light" | "Dark" | "Destructive";
}

const StyledRoot = styled.div<{ $side: "Left" | "Right" | "Bottom" | "Top" }>(
  ({ $side }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($side) {
        case "Left":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 62px;
            padding-bottom: 6px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 50px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 0px;
            padding-bottom: 6px;
            padding-left: 62px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 50px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Top":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 52px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Bottom":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 52px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 50px;
    height: 40px;
    box-sizing: border-box;
  `,
);

/** A tooltip container component that wraps a Tooltip/Small instance, supporting directional placement (Left, Right, Bottom, Top) and visual modes (Light, Dark, Destructive). Used to display contextual hints or supplementary information near a target element. */
export const TooltipContainer = React.forwardRef<
  HTMLDivElement,
  TooltipContainerProps
>(function TooltipContainer({ side = "Left", mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="tooltip"
      aria-label="Tooltip"
      {...rest}
      ref={ref}
      $side={side}
    >
      <TooltipSmall mode={"Light"} />
    </StyledRoot>
  );
});
