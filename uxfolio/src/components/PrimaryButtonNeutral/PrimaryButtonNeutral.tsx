import React from "react";
import styled, { css } from "styled-components";
import { IndicatorLoading } from "../IndicatorLoading";

export interface PrimaryButtonNeutralProps extends Omit<
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
            padding-left: 24px;
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
            padding-left: 20px;
            gap: 10px;
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
            padding-left: 16px;
            gap: 10px;
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
            padding-left: 24px;
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
            padding-left: 20px;
            gap: 10px;
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
            padding-left: 16px;
            gap: 10px;
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
            padding-left: 24px;
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
            padding-left: 20px;
            gap: 10px;
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
            padding-left: 16px;
            gap: 10px;
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
            width: 169px;
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
            width: 146px;
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
            background-color: ${"#0f0f0f"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Disabled","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Loading","Light"]':
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#fefefe"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#dcfa37"};
          `;
        case '["Disabled","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Loading","Dark"]':
          return css`
            background-color: ${"#fefefe"};
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
            color: ${"#262626"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#262626"};
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
            color: ${"#262626"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#262626"};
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

/** A primary neutral button component with support for default, disabled, hover, and loading states across multiple sizes and light/dark modes. */
export const PrimaryButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonNeutralProps
>(function PrimaryButtonNeutral(
  { state = "Default", size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref} $state={state} $size={size} $mode={mode}>
      {["Default", "Hover", "Disabled"].includes(state) && (
        <StyledPrimaryButton $state={state} $mode={mode}>
          {"Primary button"}
        </StyledPrimaryButton>
      )}
      {state === "Loading" && <IndicatorLoading type={"Dark"} />}
    </StyledRoot>
  );
});
