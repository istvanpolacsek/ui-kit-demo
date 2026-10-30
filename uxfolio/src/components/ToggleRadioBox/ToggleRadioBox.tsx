import React from "react";
import styled, { css } from "styled-components";

export interface ToggleRadioBoxProps extends Omit<
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
    border-radius: 9999px;
    ${(() => {
      switch ($state) {
        case "True":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
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

const StyledEllipse1 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A radio button toggle component that allows users to select a single option from a group. Supports true/false (selected/unselected) states and light/dark display modes. */
export const ToggleRadioBox = React.forwardRef<
  HTMLDivElement,
  ToggleRadioBoxProps
>(function ToggleRadioBox({ state = "False", mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Toggle option"
      {...rest}
      ref={ref}
      $state={state}
      $mode={mode}
    >
      {state === "True" && <StyledEllipse1 $mode={mode} />}
    </StyledRoot>
  );
});
