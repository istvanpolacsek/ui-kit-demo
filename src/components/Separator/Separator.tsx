import React from "react";
import styled, { css } from "styled-components";

export interface SeparatorProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "angle" | "mode"
> {
  angle?: "Vertical" | "Horizontal";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div<{ $angle: "Vertical" | "Horizontal" }>(
  ({ $angle }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($angle) {
        case "Horizontal":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            height: 1px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Vertical":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 1px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($angle) {
        case "Horizontal":
          return css`
            width: 118px;
            height: 1px;
            box-sizing: border-box;
          `;
        case "Vertical":
          return css`
            width: 1px;
            height: 97px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSeparator = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    width: 118px;
    height: 1px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Dark":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A visual separator used to divide content sections. Supports horizontal and vertical orientations, as well as light and dark display modes. */
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  function Separator({ angle = "Horizontal", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        role="separator"
        aria-label="Separator"
        {...rest}
        ref={ref}
        $angle={angle}
      >
        <StyledSeparator $mode={mode} />
      </StyledRoot>
    );
  },
);
