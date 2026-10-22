import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

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

const StyledLabel2 = styled.span<{ $mode: "Dark" | "Light" }>(
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
    &:hover {
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
    &:active {
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
    &:active {
      display: block;
    }
  `,
);

/** A small tab component used for navigation or content switching. Supports optional top or side icons, and renders in Default, Hover, or Active states across Light and Dark modes. */
export const TabSmall = React.forwardRef<HTMLButtonElement, TabSmallProps>(
  function TabSmall(
    { topIcon = false, sideIcon = false, mode = "Light", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="tab"
        aria-label="Tab name"
        {...rest}
        ref={ref}
        $mode={mode}
      >
        {topIcon && <VisualAsset name={"Effects"} size={24} />}
        <StyledLabel>
          {sideIcon && <VisualAsset name={"Effects"} size={24} />}
          <StyledLabel2 $mode={mode}>{"Tab name"}</StyledLabel2>
        </StyledLabel>
        <StyledHighlight $mode={mode} />
      </StyledRoot>
    );
  },
);
