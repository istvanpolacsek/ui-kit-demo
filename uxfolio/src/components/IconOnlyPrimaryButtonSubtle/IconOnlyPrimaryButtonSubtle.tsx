import React from "react";
import styled, { css } from "styled-components";
import { Edit } from "../Edit";

export interface IconOnlyPrimaryButtonSubtleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "size" | "mode"
> {
  state?: "Default" | "Disabled" | "Hover" | "Default (no BG)";
  size?: "Regular" | "Large" | "Small" | "Tiny";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{
  $size: "Regular" | "Large" | "Small" | "Tiny";
  $state: "Default" | "Disabled" | "Hover" | "Default (no BG)";
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

/** An icon-only primary button in its subtle variant. Displays a single icon without a background by default, used for compact or low-emphasis actions. Supports multiple states (default, hover, disabled) and sizes (tiny, small, regular, large) in both light and dark modes. */
export const IconOnlyPrimaryButtonSubtle = React.forwardRef<
  HTMLButtonElement,
  IconOnlyPrimaryButtonSubtleProps
>(function IconOnlyPrimaryButtonSubtle(
  { state = "Default (no BG)", size = "Large", mode = "Light", ...rest },
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
      <Edit />
    </StyledRoot>
  );
});
