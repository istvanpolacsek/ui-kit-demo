import React from "react";
import styled, { css } from "styled-components";
import { Delete } from "../Delete";

export interface ToolbarButtonDestructiveProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "type" | "dropdown" | "mode"
> {
  state?: "Default" | "Hover" | "Selected";
  type?: "Icon";
  dropdown?: "False";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.button<{
  $state: "Default" | "Hover" | "Selected";
  $mode: "Light" | "Dark";
}>(
  ({ $state, $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Selected","Light"]':
          return css`
            background-color: ${"#f48787"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Selected","Dark"]':
          return css`
            background-color: ${"#f48787"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A destructive toolbar button that triggers a delete or irreversible action. Supports Default, Hover, and Selected states in both Light and Dark modes. */
export const ToolbarButtonDestructive = React.forwardRef<
  HTMLButtonElement,
  ToolbarButtonDestructiveProps
>(function ToolbarButtonDestructive(
  {
    state = "Default",
    type = "Icon",
    dropdown = "False",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="button"
      aria-label="Delete"
      {...rest}
      ref={ref}
      $state={state}
      $mode={mode}
    >
      <Delete />
    </StyledRoot>
  );
});
