import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { BackgroundGradientSmall } from "../BackgroundGradientSmall";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { FABSubtle } from "../FABSubtle";
import { ToolbarThumbnail2 } from "../ToolbarThumbnail2";
import { Drag } from "../Drag";

export interface CaseStudyBoxHiddenProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "designedThumbnail" | "moveLeft" | "moveRight" | "mode"
> {
  designedThumbnail?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.article(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: flex-end;
    width: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledThumbnail = styled.div(
  () => css`
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledDesignerImage = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 570px;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styledimage = styled.div(
  () => css`
    width: 950px;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledTertiaryButtonNeutral = styled.div(
  () => css`
    position: absolute;
    left: 204px;
    bottom: 24px;
    width: 162px;
    height: 36px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    display: none;
    position: absolute;
    left: -8px;
    top: -8px;
    width: 586px;
    height: 586px;
    border-radius: 6px;
    &:hover,
    :active {
      display: block;
    }
  `,
);

const StyledMoveContainer = styled.nav(
  () => css`
    display: none;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 570px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 606px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    &:active {
      display: flex;
    }
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    display: none;
    position: absolute;
    left: -10px;
    top: -10.197265625px;
    width: 590px;
    height: 590px;
    border-radius: 0px;
    &:active {
      display: block;
    }
  `,
);

const StyledAnchor = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor2 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor3 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor4 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor5 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor6 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor7 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor8 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledToolbarRight = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -74px;
    width: 376px;
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

/** A case study thumbnail card component used in a portfolio or content grid. Supports light/dark modes, hover/active states, and optional designer image overlay. Includes controls for repositioning (move left/right) and resizing anchors, suggesting it is used within an editable or interactive layout builder context. */
export const CaseStudyBoxHidden = React.forwardRef<
  HTMLElement,
  CaseStudyBoxHiddenProps
>(function CaseStudyBoxHidden(
  {
    designedThumbnail = true,
    moveLeft = true,
    moveRight = true,
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Case study thumbnail"
      {...rest}
      ref={ref}
    >
      <StyledThumbnail>
        <ImageFlexible snaps={false} defaultProp={"Free"} />
        {designedThumbnail && <BackgroundGradientSmall type={"Radial"} />}
        {designedThumbnail && (
          <StyledDesignerImage>
            <Styledimage />
          </StyledDesignerImage>
        )}
      </StyledThumbnail>
      <StyledTertiaryButtonNeutral>
        <TertiaryButtonNeutral mode={"Dark"} hasIcon={"True"} size={"Large"} />
      </StyledTertiaryButtonNeutral>
      <StyledContainer />
      <StyledMoveContainer>
        {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
        {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
      </StyledMoveContainer>
      <StyledResizeContainer>
        <StyledAnchor $mode={mode} />
        <StyledAnchor2 $mode={mode} />
        <StyledAnchor3 $mode={mode} />
        <StyledAnchor4 $mode={mode} />
        <StyledAnchor5 $mode={mode} />
        <StyledAnchor6 $mode={mode} />
        <StyledAnchor7 $mode={mode} />
        <StyledAnchor8 $mode={mode} />
      </StyledResizeContainer>
      <StyledToolbarRight>
        <ToolbarThumbnail2 isCustomImage={true} type={"Edit"} mode={"Light"} />
      </StyledToolbarRight>
      <StyledDrag>
        <Drag />
      </StyledDrag>
    </StyledRoot>
  );
});
