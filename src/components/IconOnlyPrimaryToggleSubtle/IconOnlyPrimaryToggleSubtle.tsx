import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface IconOnlyPrimaryToggleSubtleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "size" | "mode"
> {
  state?: "Default" | "Disabled" | "Hover" | "Selected";
  size?: "Regular" | "Large" | "Small" | "Tiny";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{
  $size: "Regular" | "Large" | "Small" | "Tiny";
  $state: "Default" | "Disabled" | "Hover" | "Selected";
  $mode: "Dark" | "Light";
}>(
  ({ $size, $state, $mode }) => css`
    border-radius: 4px;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 24px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 54px;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Regular":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 20px;
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
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 16px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 36px;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Tiny":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 16px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
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
            background-color: ${"#eeeeee"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case '["Selected","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Disabled","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#333333"};
          `;
        case '["Selected","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Disabled","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** An icon-only primary toggle button with a subtle visual style. Supports default, disabled, hover, and selected states across multiple sizes and light/dark modes. */
export const IconOnlyPrimaryToggleSubtle = React.forwardRef<
  HTMLButtonElement,
  IconOnlyPrimaryToggleSubtleProps
>(function IconOnlyPrimaryToggleSubtle(
  { state = "Default", size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Toggle"
      {...rest}
      ref={ref}
      $size={size}
      $state={state}
      $mode={mode}
    >
      <VisualAsset name={"Edit"} size={24} />
    </StyledRoot>
  );
});
