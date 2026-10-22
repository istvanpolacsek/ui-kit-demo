import React from "react";
import styled, { css } from "styled-components";

export interface ToggleSwitchProps extends Omit<
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
    border-radius: 16px;
    ${(() => {
      switch ($state) {
        case "False":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "True":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 8px;
            justify-content: flex-end;
            align-items: flex-start;
            width: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["False","Light"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case '["True","Light"]':
          return css`
            background-color: ${"#2b906c"};
          `;
        case '["False","Dark"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["True","Dark"]':
          return css`
            background-color: ${"#2b906c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumb = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 14px;
  `,
);

/** A toggle switch component that represents a boolean on/off state. Renders as a checkbox input styled as a switch, supporting both light and dark visual modes. */
export const ToggleSwitch = React.forwardRef<HTMLDivElement, ToggleSwitchProps>(
  function ToggleSwitch({ state = "False", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        role="switch"
        aria-label="Toggle switch"
        {...rest}
        ref={ref}
        $state={state}
        $mode={mode}
      >
        <StyledThumb />
      </StyledRoot>
    );
  },
);
