import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface IconOnlySecondaryButtonNeutralProps extends Omit<
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
            border-color: ${"#adadad"};
          `;
        case "Dark":
          return css`
            border-color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              border-color: ${"#707070"};
            `;
          case "Dark":
            return css`
              border-color: ${"#d1d1d1"};
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
              border-color: ${"#3d3d3d"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** An icon-only secondary button with a neutral style. Used for actions where only an icon is displayed without a text label. Supports Default, Hover, and Disabled states, multiple sizes (Small, Regular, Large), and Light/Dark modes. */
export const IconOnlySecondaryButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  IconOnlySecondaryButtonNeutralProps
>(function IconOnlySecondaryButtonNeutral(
  { size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Action"
      {...rest}
      ref={ref}
      $size={size}
      $mode={mode}
    >
      <VisualAsset name={"Edit"} size={24} />
    </StyledRoot>
  );
});
