import React from "react";
import styled, { css } from "styled-components";
import { IndicatorProject } from "../IndicatorProject";

export interface ToolbarButtonStatusProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "hasIcon" | "type" | "dropdown" | "mode"
> {
  hasIcon?: boolean;
  type?: "Text";
  dropdown?: "False";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.button<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
    display: flex;
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
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#333333"};
          `;
        case "Dark":
          return css`
            color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  &:hover:not(:disabled) {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${"#eeeeee"};
            `;
          case "Dark":
            return css`
              background-color: ${"#262626"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledLabel = styled.span<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#333333"};
          `;
        case "Dark":
          return css`
            color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
    &:is(button:hover:not(:disabled) *) {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              color: ${"#0f0f0f"};
            `;
          case "Dark":
            return css`
              color: ${"#fefefe"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** A toolbar button displaying a status indicator (e.g. 'Draft') with an optional icon. Supports default and hover states in light and dark modes. */
export const ToolbarButtonStatus = React.forwardRef<
  HTMLButtonElement,
  ToolbarButtonStatusProps
>(function ToolbarButtonStatus(
  {
    hasIcon = false,
    type = "Text",
    dropdown = "False",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $mode={mode}>
      <IndicatorProject type={"Draft"} />
      <StyledLabel $mode={mode}>{"Draft"}</StyledLabel>
    </StyledRoot>
  );
});
