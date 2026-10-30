import React from "react";
import styled, { css } from "styled-components";
import { Delete } from "../Delete";
import {
  TooltipContainer,
  type TooltipContainerProps,
} from "../TooltipContainer";

export interface FABDestructiveProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "size" | "mode" | "side" | "tooltipContainerMode"
> {
  size?: "Regular" | "Small" | "Tiny";
  mode?: "Light" | "Dark";
  side?: TooltipContainerProps["side"];
  tooltipContainerMode?: TooltipContainerProps["mode"];
}

const StyledRoot = styled.button<{
  $size: "Regular" | "Small" | "Tiny";
  $mode: "Light" | "Dark";
}>(
  ({ $size, $mode }) => css`
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
    ${(() => {
      switch (JSON.stringify([$size, $mode])) {
        case '["Regular","Light"]':
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case '["Small","Light"]':
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case '["Tiny","Light"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Regular","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Small","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Tiny","Dark"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        default:
          return css``;
      }
    })()}
  &:hover:not(:disabled) {
      ${(() => {
        switch ($size) {
          case "Regular":
            return css`
              background-color: ${"#ef4444"};
            `;
          case "Small":
            return css`
              background-color: ${"#ef4444"};
            `;
          case "Tiny":
            return css`
              background-color: ${"#f48787"};
            `;
          default:
            return css``;
        }
      })()}
    }
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

/** A Floating Action Button (FAB) variant for destructive actions (e.g., delete). Renders with a delete icon and optionally a tooltip. Available in Regular, Small, and Tiny sizes, with Light and Dark modes, and Default and Hover states. */
export const FABDestructive = React.forwardRef<
  HTMLButtonElement,
  FABDestructiveProps
>(function FABDestructive(
  {
    size = "Regular",
    mode = "Light",
    side = "Left",
    tooltipContainerMode = "Destructive",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $size={size} $mode={mode}>
      <Delete />
      <StyledTooltipContainer>
        <TooltipContainer side={side} mode={tooltipContainerMode} />
      </StyledTooltipContainer>
    </StyledRoot>
  );
});
