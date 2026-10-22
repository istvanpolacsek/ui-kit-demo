import React from "react";
import styled, { css } from "styled-components";
import { Add } from "../Add";

export interface IconOnlyTertiaryButtonNeutralProps extends Omit<
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
            background-color: ${"#333333"};
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
              background-color: ${"#0f0f0f"};
            `;
          case "Dark":
            return css`
              background-color: ${"#d1d1d1"};
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

/** An icon-only tertiary button in neutral style. Used for low-emphasis actions where only an icon is displayed without a text label. Supports Default, Hover, and Disabled states in both Light and Dark modes. */
export const IconOnlyTertiaryButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  IconOnlyTertiaryButtonNeutralProps
>(function IconOnlyTertiaryButtonNeutral({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Action" {...rest} ref={ref} $mode={mode}>
      <Add />
    </StyledRoot>
  );
});
