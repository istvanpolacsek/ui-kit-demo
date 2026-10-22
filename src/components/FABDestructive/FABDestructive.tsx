import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
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
  &:hover {
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

/** A Floating Action Button (FAB) with destructive styling, used to trigger a primary destructive action (e.g., delete, remove). Supports multiple sizes (Regular, Small, Tiny), light/dark modes, and hover states. */
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
    <StyledRoot
      role="button"
      aria-label="Delete"
      {...rest}
      ref={ref}
      $size={size}
      $mode={mode}
    >
      <VisualAsset name={"Delete"} size={24} />
      <StyledTooltipContainer>
        <TooltipContainer side={side} mode={tooltipContainerMode} />
      </StyledTooltipContainer>
    </StyledRoot>
  );
});
