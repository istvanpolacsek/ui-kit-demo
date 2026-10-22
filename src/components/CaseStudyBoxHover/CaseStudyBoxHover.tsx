import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { BackgroundGradientSmall } from "../BackgroundGradientSmall";
import { OverlayCanvasHomogen } from "../OverlayCanvasHomogen";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { TextBoxTight } from "../TextBoxTight";
import { UserButtonTextPrimary } from "../UserButtonTextPrimary";
import { FABSubtle } from "../FABSubtle";
import { ToolbarThumbnail2 } from "../ToolbarThumbnail2";
import { Drag } from "../Drag";

export interface CaseStudyBoxHoverProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "designedThumbnail" | "hasCTA" | "moveLeft" | "moveRight" | "state" | "mode"
> {
  designedThumbnail?: boolean;
  hasCTA?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Active" | "Passive";
  mode?: "Light" | "Dark";
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

const StyledMockup = styled.div(
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

const StyledForeground = styled.section(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 570px;
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-right: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 570px;
    height: 570px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextCTA = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledText = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 474px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextBoxTight = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTextBoxTight2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -8px;
    width: 586px;
    height: 586px;
    border-radius: 6px;
  `,
);

const StyledMoveContainer = styled.nav(
  () => css`
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
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10.197265625px;
    width: 590px;
    height: 590px;
    border-radius: 0px;
  `,
);

const StyledAnchor = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor2 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor3 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor4 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor5 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor6 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor7 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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
  `,
);

const StyledAnchor8 = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
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

/** A case study card component that displays a thumbnail image with overlaid text, optional CTA, and interactive navigation controls. Supports hover, active, and passive states with light/dark modes, and includes move/resize handles for editor contexts. */
export const CaseStudyBoxHover = React.forwardRef<
  HTMLElement,
  CaseStudyBoxHoverProps
>(function CaseStudyBoxHover(
  {
    designedThumbnail = true,
    hasCTA = false,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="article" aria-label="Case study" {...rest} ref={ref}>
      <StyledThumbnail>
        <ImageFlexible snaps={false} defaultProp={"Free"} />
        {designedThumbnail && <BackgroundGradientSmall type={"Radial"} />}
        {designedThumbnail && (
          <StyledDesignerImage>
            <StyledMockup />
          </StyledDesignerImage>
        )}
        {["Hover", "Active", "Passive"].includes(state) && (
          <OverlayCanvasHomogen type={"Dimming"} strength={"Strong"} />
        )}
      </StyledThumbnail>
      {["Hover", "Active", "Passive"].includes(state) && (
        <StyledTertiaryButtonNeutral>
          <TertiaryButtonNeutral
            mode={"Dark"}
            hasIcon={"True"}
            size={"Large"}
          />
        </StyledTertiaryButtonNeutral>
      )}
      {["Hover", "Active", "Passive"].includes(state) && (
        <StyledForeground>
          {["Hover", "Active", "Passive"].includes(state) && (
            <StyledTextCTA>
              {["Hover", "Active", "Passive"].includes(state) && (
                <StyledText>
                  {["Hover", "Active", "Passive"].includes(state) && (
                    <StyledTextBoxTight>
                      <TextBoxTight
                        reachingLimit={false}
                        hasToolbar={false}
                        colorOverride={false}
                        state={"Default"}
                        mode={"Light"}
                      />
                    </StyledTextBoxTight>
                  )}
                  {["Hover", "Active", "Passive"].includes(state) && (
                    <StyledTextBoxTight2>
                      <TextBoxTight
                        reachingLimit={false}
                        hasToolbar={false}
                        colorOverride={false}
                        state={"Default"}
                        mode={"Light"}
                      />
                    </StyledTextBoxTight2>
                  )}
                </StyledText>
              )}
              {hasCTA && (
                <UserButtonTextPrimary
                  reachingLimit={false}
                  colorOverride={false}
                  state={"Default"}
                  roundness={"Sharp"}
                  mode={"Light"}
                />
              )}
            </StyledTextCTA>
          )}
        </StyledForeground>
      )}
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
      {state === "Active" && (
        <StyledMoveContainer>
          {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
          {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
        </StyledMoveContainer>
      )}
      {state === "Active" && (
        <StyledResizeContainer>
          {state === "Active" && <StyledAnchor $mode={mode} />}
          {state === "Active" && <StyledAnchor2 $mode={mode} />}
          {state === "Active" && <StyledAnchor3 $mode={mode} />}
          {state === "Active" && <StyledAnchor4 $mode={mode} />}
          {state === "Active" && <StyledAnchor5 $mode={mode} />}
          {state === "Active" && <StyledAnchor6 $mode={mode} />}
          {state === "Active" && <StyledAnchor7 $mode={mode} />}
          {state === "Active" && <StyledAnchor8 $mode={mode} />}
        </StyledResizeContainer>
      )}
      {state === "Active" && (
        <StyledToolbarRight>
          <ToolbarThumbnail2
            isCustomImage={true}
            type={"Edit"}
            mode={"Light"}
          />
        </StyledToolbarRight>
      )}
      {state === "Active" && (
        <StyledDrag>
          <Drag />
        </StyledDrag>
      )}
    </StyledRoot>
  );
});
