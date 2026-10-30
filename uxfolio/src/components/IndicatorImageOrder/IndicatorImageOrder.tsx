import React from "react";
import styled, { css } from "styled-components";

export interface IndicatorImageOrderProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "state" | "size" | "mode"
> {
  state?: "Active" | "Passive";
  size?: "Small" | "Large";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.span<{
  $size: "Small" | "Large";
  $state: "Active" | "Passive";
  $mode: "Dark" | "Light";
}>(
  ({ $size, $state, $mode }) => css`
    border-radius: 4px;
    ${(() => {
      switch ($size) {
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Large":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Active","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Passive","Dark"]':
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case '["Active","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Passive","Light"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Active","Dark"]':
          return css`
            color: ${"#262626"};
          `;
        case '["Passive","Dark"]':
          return css`
            color: ${"#707070"};
          `;
        case '["Active","Light"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Passive","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled1 = styled.span<{
  $state: "Active" | "Passive";
  $mode: "Dark" | "Light";
}>(
  ({ $state, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Active","Dark"]':
          return css`
            color: ${"#262626"};
          `;
        case '["Passive","Dark"]':
          return css`
            color: ${"#707070"};
          `;
        case '["Active","Light"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Passive","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** An image order indicator component that displays a numeric position (e.g., '1') to show the sequence or order of an image within a gallery or carousel. Supports active/passive states, small/large sizes, and dark/light modes. */
export const IndicatorImageOrder = React.forwardRef<
  HTMLSpanElement,
  IndicatorImageOrderProps
>(function IndicatorImageOrder(
  { state = "Active", size = "Small", mode = "Dark", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Image 1 of N"
      {...rest}
      ref={ref}
      $size={size}
      $state={state}
      $mode={mode}
    >
      <Styled1 $state={state} $mode={mode}>
        {"1"}
      </Styled1>
    </StyledRoot>
  );
});
