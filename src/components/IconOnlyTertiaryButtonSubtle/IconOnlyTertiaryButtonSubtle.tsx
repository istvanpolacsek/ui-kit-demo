import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface IconOnlyTertiaryButtonSubtleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 7px;
    padding-right: 7px;
    padding-bottom: 7px;
    padding-left: 7px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 999px;
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
    &:hover {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${"#d1d1d1"};
            `;
          case "Dark":
            return css`
              background-color: ${"#333333"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** An icon-only tertiary button with a subtle visual style. Used for low-emphasis actions where only an icon is displayed without a text label. Supports default, hover, and disabled states in both light and dark modes. */
export const IconOnlyTertiaryButtonSubtle = React.forwardRef<
  HTMLButtonElement,
  IconOnlyTertiaryButtonSubtleProps
>(function IconOnlyTertiaryButtonSubtle({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Action" {...rest} ref={ref} $mode={mode}>
      <VisualAsset name={"Add"} size={24} />
    </StyledRoot>
  );
});
