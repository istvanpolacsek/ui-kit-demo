import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";
import { FABSubtle } from "../FABSubtle";

export interface LogoBoxProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "moveLeft" | "moveRight" | "mode"
> {
  moveLeft?: boolean;
  moveRight?: boolean;
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 24px;
    padding-bottom: 0px;
    padding-left: 24px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    width: 228px;
    height: 80px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    display: none;
    position: absolute;
    left: -8px;
    top: -8px;
    width: 244px;
    height: 96px;
    border-radius: 6px;
    &:hover,
    :active {
      display: block;
    }
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    display: none;
    position: absolute;
    left: -10px;
    top: -10px;
    width: 248px;
    height: 100px;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 94px;
    justify-content: center;
    align-items: flex-start;
    width: 248px;
    height: 100px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    &:active {
      display: flex;
    }
  `,
);

const StyledAnchor = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    display: none;
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
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

const StyledAnchor2 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    display: none;
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
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

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -72px;
    width: 176px;
    height: 56px;
  `,
);

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -36px;
    top: -8px;
    width: 24px;
    height: 24px;
  `,
);

const StyledMoveContainer = styled.div(
  () => css`
    display: none;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 228px;
    height: 80px;
    display: flex;
    flex-direction: row;
    padding-top: 28px;
    padding-right: 0px;
    padding-bottom: 28px;
    padding-left: 0px;
    gap: 264px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 80px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    &:active {
      display: flex;
    }
  `,
);

/** A logo box component that displays a flexible image/logo with optional move controls (left/right FAB buttons) and a toolbar. Supports hover, active, and default states in both light and dark modes. */
export const LogoBox = React.forwardRef<HTMLDivElement, LogoBoxProps>(
  function LogoBox(
    { moveLeft = true, moveRight = true, mode = "Light", ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="region" aria-label="Logo box" {...rest} ref={ref}>
        <ImageFlexible snaps={false} defaultProp={"Free"} />
        <StyledContainer />
        <StyledResizeContainer>
          <StyledAnchor $mode={mode} />
          <StyledAnchor2 $mode={mode} />
        </StyledResizeContainer>
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Logo box"}
            mode={"Light"}
          />
        </StyledToolbarModule>
        <StyledDrag>
          <Drag />
        </StyledDrag>
        <StyledMoveContainer>
          {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
          {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
        </StyledMoveContainer>
      </StyledRoot>
    );
  },
);
