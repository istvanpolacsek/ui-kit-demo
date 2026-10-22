import React from "react";
import styled, { css } from "styled-components";

export interface TooltipSmallProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "mode"
> {
  mode?: "Dark" | "Light" | "Destructive";
}

const StyledRoot = styled.span<{ $mode: "Dark" | "Light" | "Destructive" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Destructive":
          return css`
            background-color: ${"#ef4444"};
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
        case "Destructive":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{ $mode: "Dark" | "Light" | "Destructive" }>(
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
        case "Destructive":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A small tooltip component that displays brief contextual information. Supports Light, Dark, and Destructive visual modes to convey different levels of urgency or theme. */
export const TooltipSmall = React.forwardRef<
  HTMLSpanElement,
  TooltipSmallProps
>(function TooltipSmall({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="tooltip"
      aria-label="Tooltip"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledLabel $mode={mode}>{"Label"}</StyledLabel>
    </StyledRoot>
  );
});
