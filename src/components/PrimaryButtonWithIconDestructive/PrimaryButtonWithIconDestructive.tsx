import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { IndicatorLoading } from "../IndicatorLoading";

export interface PrimaryButtonWithIconDestructiveProps extends Omit<
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
      switch (JSON.stringify([$state, $size])) {
        case '["Default","Large"]':
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
        case '["Default","Regular"]':
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
        case '["Default","Small"]':
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
        case '["Hover","Large"]':
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
        case '["Hover","Regular"]':
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
        case '["Hover","Small"]':
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
        case '["Disabled","Large"]':
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
        case '["Disabled","Regular"]':
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
        case '["Disabled","Small"]':
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
        case '["Loading","Large"]':
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
            width: 189px;
            height: 54px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Regular"]':
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
            width: 163px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Loading","Small"]':
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
            width: 139px;
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
            background-color: ${"#ef4444"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#f48787"};
          `;
        case '["Disabled","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Loading","Light"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#f48787"};
          `;
        case '["Disabled","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Loading","Dark"]':
          return css`
            background-color: ${"#ef4444"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#fefefe"};
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

const StyledDeleteButton = styled.span<{
  $state: "Default" | "Disabled" | "Hover" | "Loading";
  $mode: "Dark" | "Light";
}>(
  ({ $state, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#fefefe"};
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

/** A destructive primary button with an optional icon and loading state indicator. Used to trigger irreversible or high-risk actions such as deletions. Supports multiple sizes, light/dark modes, and states including default, hover, disabled, and loading. */
export const PrimaryButtonWithIconDestructive = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonWithIconDestructiveProps
>(function PrimaryButtonWithIconDestructive(
  { state = "Default", size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Delete button"
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
        <StyledDeleteButton $state={state} $mode={mode}>
          {"Delete button"}
        </StyledDeleteButton>
      )}
      {state === "Loading" && <IndicatorLoading type={"Dark"} />}
    </StyledRoot>
  );
});
