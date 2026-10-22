import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface IconOnlyPrimaryButtonDestructiveProps extends Omit<
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
    ${css`
      background-color: ${"#ef4444"};
    `}
  &:hover {
      ${css`
        background-color: ${"#f48787"};
      `}
    }
    &:disabled {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${"#eeeeee"};
            `;
          case "Dark":
            return css`
              background-color: ${"#262626"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** An icon-only primary button with destructive styling, used to trigger irreversible or critical actions (e.g., delete, remove). Supports Default, Hover, and Disabled states across Regular, Large, and Small sizes in Light and Dark modes. */
export const IconOnlyPrimaryButtonDestructive = React.forwardRef<
  HTMLButtonElement,
  IconOnlyPrimaryButtonDestructiveProps
>(function IconOnlyPrimaryButtonDestructive(
  { size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Destructive action"
      {...rest}
      ref={ref}
      $size={size}
      $mode={mode}
    >
      <VisualAsset name={"Delete"} size={24} />
    </StyledRoot>
  );
});
