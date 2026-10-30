import React from "react";
import styled, { css } from "styled-components";
import { Check } from "../Check";

export interface ToggleCheckBoxProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state" | "mode"
> {
  state?: "False" | "True";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.div<{
  $state: "False" | "True";
  $mode: "Dark" | "Light";
}>(
  ({ $state, $mode }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "True":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["False","Light"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["True","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["False","Dark"]':
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case '["True","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["False","Light"]':
          return css`
            border-color: ${"#adadad"};
          `;
        case '["False","Dark"]':
          return css`
            border-color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A checkbox input component that toggles between checked (True) and unchecked (False) states, available in light and dark display modes. */
export const ToggleCheckBox = React.forwardRef<
  HTMLDivElement,
  ToggleCheckBoxProps
>(function ToggleCheckBox({ state = "False", mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="checkbox"
      aria-label="Checkbox"
      {...rest}
      ref={ref}
      $state={state}
      $mode={mode}
    >
      {state === "True" && <Check />}
    </StyledRoot>
  );
});
