import React from "react";
import styled, { css } from "styled-components";
import { Edit } from "../Edit";

export interface IconOnlySecondaryToggleNeutralProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "size" | "mode"
> {
  size?: "Regular" | "Large" | "Small";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{
  $size: "Regular" | "Large" | "Small";
  $mode: "Dark" | "Light";
}>(
  ({ $size, $mode }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
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
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case "Dark":
          return css`
            border-color: ${"#3d3d3d"};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${css`
        border-color: ${"#707070"};
      `}
    }
    &:active {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              border-color: ${"#2400ed"};
            `;
          case "Dark":
            return css`
              border-color: ${"#dcfa37"};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:disabled {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              border-color: ${"#eeeeee"};
            `;
          case "Dark":
            return css`
              border-color: ${"#333333"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** An icon-only secondary toggle button with neutral styling. Supports multiple states (default, hover, active, disabled) and sizes (small, regular, large) in both light and dark modes. */
export const IconOnlySecondaryToggleNeutral = React.forwardRef<
  HTMLButtonElement,
  IconOnlySecondaryToggleNeutralProps
>(function IconOnlySecondaryToggleNeutral(
  { size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Toggle"
      {...rest}
      ref={ref}
      $size={size}
      $mode={mode}
    >
      <Edit />
    </StyledRoot>
  );
});
