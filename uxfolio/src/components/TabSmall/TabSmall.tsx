import React from "react";
import styled, { css } from "styled-components";
import { Effects } from "../Effects";

export interface TabSmallProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "topIcon" | "sideIcon" | "mode"
> {
  topIcon?: boolean;
  sideIcon?: boolean;
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{ $mode: "Dark" | "Light" }>(
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
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 0px;
    padding-bottom: 12px;
    padding-left: 0px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Dark":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledLabel2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Dark":
          return css`
            color: ${"#adadad"};
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
    &:is(button:active:not(:disabled) *) {
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

const StyledHighlight = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: none;
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 68px;
    height: 2px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    &:is(button:active:not(:disabled) *) {
      display: block;
    }
  `,
);

/** A small tab component that allows users to switch between different views or sections. Supports optional top or side icons, and renders in light or dark mode with default, hover, and active states. */
export const TabSmall = React.forwardRef<HTMLButtonElement, TabSmallProps>(
  function TabSmall(
    { topIcon = false, sideIcon = false, mode = "Light", ...rest },
    ref,
  ) {
    return (
      <StyledRoot type="button" {...rest} ref={ref} $mode={mode}>
        {topIcon && <Effects />}
        <StyledLabel>
          {sideIcon && <Effects />}
          <StyledLabel2 $mode={mode}>{"Tab name"}</StyledLabel2>
        </StyledLabel>
        <StyledHighlight $mode={mode} />
      </StyledRoot>
    );
  },
);
