import React from "react";
import styled, { css } from "styled-components";
import { LeftAlignText } from "../LeftAlignText";
import { ChevronDown } from "../ChevronDown";
import { ChevronUp } from "../ChevronUp";

export interface ToolbarButtonNeutralProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "hasIcon" | "state" | "type" | "dropdown" | "mode"
> {
  hasIcon?: boolean;
  state?: "Default" | "Hover" | "Selected" | "Disabled";
  type?: "Text" | "Icon";
  dropdown?: "True" | "False";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.button<{
  $type: "Text" | "Icon";
  $dropdown: "True" | "False";
  $state: "Default" | "Hover" | "Selected" | "Disabled";
  $mode: "Light" | "Dark";
}>(
  ({ $type, $dropdown, $state, $mode }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch (JSON.stringify([$type, $dropdown])) {
        case '["Text","True"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 8px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 150px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Text","False"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 150px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Icon","True"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 8px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Icon","False"]':
          return css`
            display: inline-flex;
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
        case '["Disabled","Light"]':
          return css`
            background-color: ${"#fefefe"};
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
        case '["Disabled","Dark"]':
          return css`
            background-color: ${"#1a1a1a"};
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
            color: ${"#0f0f0f"};
          `;
        case '["Selected","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#d1d1d1"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Selected","Dark"]':
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

const StyledLabel = styled.span<{
  $state: "Default" | "Hover" | "Selected" | "Disabled";
  $mode: "Light" | "Dark";
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
            color: ${"#0f0f0f"};
          `;
        case '["Selected","Light"]':
          return css`
            color: ${"#0f0f0f"};
          `;
        case '["Disabled","Light"]':
          return css`
            color: ${"#adadad"};
          `;
        case '["Default","Dark"]':
          return css`
            color: ${"#d1d1d1"};
          `;
        case '["Hover","Dark"]':
          return css`
            color: ${"#fefefe"};
          `;
        case '["Selected","Dark"]':
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

/** A toolbar button component with optional icon, label, and dropdown indicator. Supports multiple states (default, hover, selected, disabled) and can appear in text or icon-only mode with light or dark theme variants. */
export const ToolbarButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  ToolbarButtonNeutralProps
>(function ToolbarButtonNeutral(
  {
    hasIcon = false,
    state = "Default",
    type = "Text",
    dropdown = "True",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      type="button"
      {...rest}
      ref={ref}
      $type={type}
      $dropdown={dropdown}
      $state={state}
      $mode={mode}
    >
      {hasIcon && <LeftAlignText />}
      {type === "Text" && (
        <StyledLabel $state={state} $mode={mode}>
          {"Hero title"}
        </StyledLabel>
      )}
      {((state === "Default" && dropdown === "True") ||
        (state === "Hover" && dropdown === "True") ||
        (state === "Disabled" && dropdown === "True")) && <ChevronDown />}
      {state === "Selected" && dropdown === "True" && <ChevronUp />}
    </StyledRoot>
  );
});
