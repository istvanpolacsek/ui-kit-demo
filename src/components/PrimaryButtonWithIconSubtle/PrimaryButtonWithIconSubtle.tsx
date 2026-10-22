import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { IndicatorLoading } from "../IndicatorLoading";

export interface PrimaryButtonWithIconSubtleProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "size" | "mode"
> {
  state?: "Default" | "Disabled" | "Hover" | "Loading";
  size?: "Regular" | "Large" | "Small";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{
  $state: "Default" | "Disabled" | "Hover" | "Loading";
  $size: "Regular" | "Large" | "Small";
  $mode: "Dark" | "Light";
}>(
  ({ $state, $size, $mode }) => css`
    border-radius: 4px;
    ${(() => {
      switch (JSON.stringify([$state, $size, $mode])) {
        case '["Default","Large","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 20px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Regular","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 18px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Small","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 14px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Large","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 20px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Regular","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 18px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Small","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 14px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Disabled","Large","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 20px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Disabled","Regular","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 18px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Disabled","Small","Light"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 14px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Large","Light"]':
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
            width: 199px;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Regular","Light"]':
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
            width: 172px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Small","Light"]':
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
            width: 123px;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Large","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 20px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Regular","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 18px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Small","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 14px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Large","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 20px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Regular","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 18px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Small","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 14px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Disabled","Large","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 24px;
            padding-bottom: 10px;
            padding-left: 20px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Disabled","Regular","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 20px;
            padding-bottom: 10px;
            padding-left: 18px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Disabled","Small","Dark"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 16px;
            padding-bottom: 10px;
            padding-left: 14px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Large","Dark"]':
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
            width: 169px;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Regular","Dark"]':
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
            width: 146px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Small","Dark"]':
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
            width: 123px;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case '["Disabled","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Loading","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#333333"};
          `;
        case '["Disabled","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Loading","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Disabled","Dark"]':
          return css`
            color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPrimaryButton = styled.span<{
  $state: "Default" | "Disabled" | "Hover" | "Loading";
  $mode: "Dark" | "Light";
}>(
  ({ $state, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Disabled","Dark"]':
          return css`
            color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A subtle primary button component with an optional icon and loading state indicator. Supports multiple sizes (Small, Regular, Large) and display modes (Light, Dark), with states for Default, Disabled, Hover, and Loading. */
export const PrimaryButtonWithIconSubtle = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonWithIconSubtleProps
>(function PrimaryButtonWithIconSubtle(
  { state = "Default", size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Primary button"
      {...rest}
      ref={ref}
      $state={state}
      $size={size}
      $mode={mode}
    >
      {["Default", "Hover", "Disabled"].includes(state) && (
        <VisualAsset name={"Edit"} size={24} />
      )}
      {["Default", "Hover", "Disabled"].includes(state) && (
        <StyledPrimaryButton $state={state} $mode={mode}>
          {"Primary button"}
        </StyledPrimaryButton>
      )}
      {state === "Loading" && <IndicatorLoading type={"Dark"} />}
    </StyledRoot>
  );
});
