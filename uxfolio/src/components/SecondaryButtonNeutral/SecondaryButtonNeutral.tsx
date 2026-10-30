import React from "react";
import styled, { css } from "styled-components";
import { IndicatorLoading } from "../IndicatorLoading";

export interface SecondaryButtonNeutralProps extends Omit<
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
    border: 1px solid transparent;
    box-sizing: border-box;
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
            width: 191px;
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
            width: 165px;
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
            border-color: ${"#d1d1d1"};
          `;
        case '["Hover","Light"]':
          return css`
            border-color: ${"#707070"};
          `;
        case '["Disabled","Light"]':
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case '["Loading","Light"]':
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case '["Default","Dark"]':
          return css`
            border-color: ${"#707070"};
          `;
        case '["Hover","Dark"]':
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case '["Disabled","Dark"]':
          return css`
            border-color: ${"#707070"};
          `;
        case '["Loading","Dark"]':
          return css`
            border-color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#333333"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#333333"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#d1d1d1"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#eeeeee"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#eeeeee"};
          `;
        case '["Disabled","Dark"]':
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSecondaryButton = styled.span<{
  $state: "Default" | "Disabled" | "Hover" | "Loading";
  $mode: "Dark" | "Light";
}>(
  ({ $state, $mode }) => css`
    ${(() => {
      switch (JSON.stringify([$state, $mode])) {
        case '["Default","Light"]':
          return css`
            color: ${"#333333"};
          `;
        case '["Hover","Light"]':
          return css`
            color: ${"#333333"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#d1d1d1"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#eeeeee"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#eeeeee"};
          `;
        case '["Disabled","Dark"]':
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A secondary neutral button component with support for default, disabled, hover, and loading states across multiple sizes and light/dark modes. */
export const SecondaryButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  SecondaryButtonNeutralProps
>(function SecondaryButtonNeutral(
  { state = "Default", size = "Large", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref} $state={state} $size={size} $mode={mode}>
      {["Default", "Hover", "Disabled"].includes(state) && (
        <StyledSecondaryButton $state={state} $mode={mode}>
          {"Secondary button"}
        </StyledSecondaryButton>
      )}
      {state === "Loading" && <IndicatorLoading type={"Light"} />}
    </StyledRoot>
  );
});
