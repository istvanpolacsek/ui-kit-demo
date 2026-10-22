import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface ToolbarButtonColorProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "mode" | "type"
> {
  state?: "Default" | "Hover" | "Selected";
  mode?: "Light" | "Dark";
  type?: "Color" | "Dropdown";
}

const StyledRoot = styled.button<{
  $type: "Color" | "Dropdown";
  $state: "Default" | "Hover" | "Selected";
  $mode: "Light" | "Dark";
}>(
  ({ $type, $state, $mode }) => css`
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch ($type) {
        case "Color":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 10px;
            padding-bottom: 12px;
            padding-left: 10px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Dropdown":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 8px;
            padding-bottom: 12px;
            padding-left: 10px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
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
            background-color: ${"#fefefe"};
          `;
        case '["Hover","Light"]':
          return css`
            background-color: ${"#eeeeee"};
          `;
        case '["Selected","Light"]':
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case '["Default","Dark"]':
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case '["Hover","Dark"]':
          return css`
            background-color: ${"#262626"};
          `;
        case '["Selected","Dark"]':
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledForeground = styled.div(
  () => css`
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #0073c7;
    border-radius: 50%;
  `,
);

/** A toolbar button used to select or apply a color, with support for default, hover, and selected states in both light and dark modes. May include a visual color swatch or dropdown indicator depending on the Type variant. */
export const ToolbarButtonColor = React.forwardRef<
  HTMLButtonElement,
  ToolbarButtonColorProps
>(function ToolbarButtonColor(
  { state = "Default", mode = "Light", type = "Color", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Select color"
      {...rest}
      ref={ref}
      $type={type}
      $state={state}
      $mode={mode}
    >
      <StyledForeground />
      {((state === "Default" && type === "Dropdown") ||
        (state === "Hover" && type === "Dropdown")) && (
        <VisualAsset name={"Chevron down"} size={24} />
      )}
      {state === "Selected" && type === "Dropdown" && (
        <VisualAsset name={"Chevron up"} size={24} />
      )}
    </StyledRoot>
  );
});
