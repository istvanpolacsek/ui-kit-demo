import React from "react";
import styled, { css } from "styled-components";

export interface TabLargeProps extends Omit<
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

const StyledLabel = styled.span<{ $mode: "Dark" | "Light" }>(
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
    width: 202px;
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

/** A large tab component used for navigation or content switching. Supports icon placement (top or side), multiple interaction states (Default, Hover, Active), and light/dark modes. The active state is visually indicated by a highlight element. */
export const TabLarge = React.forwardRef<HTMLButtonElement, TabLargeProps>(
  function TabLarge(
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
        <StyledLabel $mode={mode}>{"Tab name"}</StyledLabel>
        <StyledHighlight $mode={mode} />
      </StyledRoot>
    );
  },
);
