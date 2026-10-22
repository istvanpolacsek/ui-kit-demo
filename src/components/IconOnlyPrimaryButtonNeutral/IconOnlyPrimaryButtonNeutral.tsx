import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface IconOnlyPrimaryButtonNeutralProps extends Omit<
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
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
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
              background-color: ${"#262626"};
            `;
          case "Dark":
            return css`
              background-color: ${"#dcfa37"};
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

/** An icon-only primary button in neutral style. Displays a single visual icon asset without a text label. Supports Default, Hover, and Disabled states across Regular, Large, and Small sizes in both Light and Dark modes. */
export const IconOnlyPrimaryButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  IconOnlyPrimaryButtonNeutralProps
>(function IconOnlyPrimaryButtonNeutral(
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
