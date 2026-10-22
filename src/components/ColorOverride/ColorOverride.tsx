import React from "react";
import styled, { css } from "styled-components";
import { RemoveColor } from "../RemoveColor";

export interface ColorOverrideProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.div(
  () => css`
    border-radius: 6px;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    color: #fefefe;
  `,
);

const StyledBackground = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    width: 116px;
    height: 116px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"rgba(15, 15, 15, 0.11999999731779099)"};
          `;
        case "Dark":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.11999999731779099)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledStatus = styled.span<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #f59e0b;
    border-radius: 6px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 0.12);
          `;
        case "Dark":
          return css`
            box-shadow: 0px 0px 0px 1.5px rgba(255, 255, 255, 0.12);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A color override component that displays a status indicator with a removable color swatch. Supports Light and Dark modes for theming contexts. */
export const ColorOverride = React.forwardRef<
  HTMLDivElement,
  ColorOverrideProps
>(function ColorOverride({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Color override" {...rest} ref={ref}>
      <StyledBackground $mode={mode} />
      <StyledStatus $mode={mode}>
        <RemoveColor />
      </StyledStatus>
    </StyledRoot>
  );
});
