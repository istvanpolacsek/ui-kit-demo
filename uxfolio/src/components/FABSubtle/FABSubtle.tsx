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

/** A Floating Action Button (FAB) in a subtle style variant. Triggers a primary or contextual action, available in Regular, Small, and Tiny sizes with Light and Dark mode support. */
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
      <StyledRoot type="button" {...rest} ref={ref} $size={size}>
        <Edit />
        <StyledTooltipContainer>
          <TooltipContainer side={side} mode={tooltipContainerMode} />
        </StyledTooltipContainer>
      </StyledRoot>
    );
  },
);
