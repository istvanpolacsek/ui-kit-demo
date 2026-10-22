import React from "react";
import styled, { css } from "styled-components";

export interface TooltipCharacterLimitProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.span<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 4px;
    box-shadow: 0px 2px 8px 0px rgba(18, 17, 24, 0.1);
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
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLimit = styled.span<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A tooltip component that displays a character limit counter (e.g., '23/25'), available in Light and Dark modes. Typically used to inform users of remaining character allowance within a text input or textarea. */
export const TooltipCharacterLimit = React.forwardRef<
  HTMLSpanElement,
  TooltipCharacterLimitProps
>(function TooltipCharacterLimit({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="tooltip"
      aria-label="Character limit: 23 of 25"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledLimit $mode={mode}>{"23/25"}</StyledLimit>
    </StyledRoot>
  );
});
