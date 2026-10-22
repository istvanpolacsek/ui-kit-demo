import React from "react";
import styled, { css } from "styled-components";
import { Edit } from "../Edit";
import {
  TooltipContainer,
  type TooltipContainerProps,
} from "../TooltipContainer";

export interface FABSubtleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "size" | "mode" | "side" | "tooltipContainerMode"
> {
  size?: "Regular" | "Small" | "Tiny";
  mode?: "Light" | "Dark";
  side?: TooltipContainerProps["side"];
  tooltipContainerMode?: TooltipContainerProps["mode"];
}

const StyledRoot = styled.button<{ $size: "Regular" | "Small" | "Tiny" }>(
  ({ theme, $size }) => css`
    position: relative;
    background-color: ${theme["Color 5"]};
    border-radius: 4px;
    ${(() => {
      switch ($size) {
        case "Regular":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Tiny":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTooltipContainer = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 48px;
    height: 48px;
  `,
);

/** A Floating Action Button (FAB) in a subtle style, used to trigger a primary or contextual action. Supports multiple sizes (Regular, Small, Tiny), light/dark modes, and hover states. Optionally displays a tooltip on interaction. */
export const FABSubtle = React.forwardRef<HTMLButtonElement, FABSubtleProps>(
  function FABSubtle(
    {
      size = "Regular",
      mode = "Light",
      side = "Left",
      tooltipContainerMode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot aria-label="Action" {...rest} ref={ref} $size={size}>
        <Edit />
        <StyledTooltipContainer>
          <TooltipContainer side={side} mode={tooltipContainerMode} />
        </StyledTooltipContainer>
      </StyledRoot>
    );
  },
);
