import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import {
  TooltipContainer,
  type TooltipContainerProps,
} from "../TooltipContainer";

export interface FABNeutralProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "size" | "mode" | "side" | "tooltipContainerMode"
> {
  state?: "Default" | "Hover" | "Selected";
  size?: "Regular" | "Small" | "Tiny";
  mode?: "Light" | "Dark";
  side?: TooltipContainerProps["side"];
  tooltipContainerMode?: TooltipContainerProps["mode"];
}

const StyledRoot = styled.button<{
  $size: "Regular" | "Small" | "Tiny";
  $state: "Default" | "Hover" | "Selected";
  $mode: "Light" | "Dark";
}>(
  ({ $size, $state, $mode }) => css`
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
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Selected","Light"]':
          return css`
            background-color: ${"#333333"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Selected","Dark"]':
          return css`
            background-color: ${"#d1d1d1"};
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

/** A Floating Action Button (FAB) in neutral style. Triggers a primary or contextual action and may display a tooltip on interaction. Supports Default, Hover, and Selected states across Regular, Small, and Tiny sizes in Light and Dark modes. */
export const FABNeutral = React.forwardRef<HTMLButtonElement, FABNeutralProps>(
  function FABNeutral(
    {
      state = "Default",
      size = "Regular",
      mode = "Light",
      side = "Left",
      tooltipContainerMode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        aria-label="Action"
        {...rest}
        ref={ref}
        $size={size}
        $state={state}
        $mode={mode}
      >
        <VisualAsset name={"Edit"} size={24} />
        {state === "Hover" && (
          <StyledTooltipContainer>
            <TooltipContainer side={side} mode={tooltipContainerMode} />
          </StyledTooltipContainer>
        )}
      </StyledRoot>
    );
  },
);
