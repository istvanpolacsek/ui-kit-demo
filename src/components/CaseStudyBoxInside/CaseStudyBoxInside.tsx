import React from "react";
import styled, { css } from "styled-components";
import { TextBoxTextUnderlay } from "../TextBoxTextUnderlay";
import { TextBoxTight } from "../TextBoxTight";
import { UserButtonTextPrimary } from "../UserButtonTextPrimary";
import { ImageFlexible } from "../ImageFlexible";
import { BackgroundGradientLarge } from "../BackgroundGradientLarge";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { FABSubtle } from "../FABSubtle";
import { ToolbarThumbnail2 } from "../ToolbarThumbnail2";
import { Drag } from "../Drag";

export interface CaseStudyBoxInsideProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  | "designedThumbnail"
  | "hasCTA"
  | "moveLeft"
  | "moveRight"
  | "state"
  | "type"
  | "mode"
> {
  designedThumbnail?: boolean;
  hasCTA?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Active" | "Passive";
  type?: "Small" | "Center" | "Left" | "Right";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.article<{
  $type: "Small" | "Center" | "Left" | "Right";
}>(
  ({ $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Small":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            width: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Center":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            width: 1188px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            width: 1188px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            width: 1188px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledForeground = styled.div<{
  $type: "Small" | "Center" | "Left" | "Right";
}>(
  ({ $type }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 570px;
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Small":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 24px;
            justify-content: center;
            align-items: center;
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Center":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 24px;
            justify-content: center;
            align-items: center;
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 24px;
            justify-content: center;
            align-items: flex-start;
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 24px;
            justify-content: center;
            align-items: flex-end;
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextCTA = styled.section(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledTextBoxTextUnderlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 1.8189894035458565e-12px;
    width: 474px;
    height: 91px;
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
    width: fit-content;
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

const StyledMoveContainer = styled.div<{
  $type: "Small" | "Center" | "Left" | "Right";
}>(
  ({ $type }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 570px;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Small":
          return css`
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
          `;
        case "Center":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 1224px;
            justify-content: center;
            align-items: flex-start;
            width: fit-content;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 1224px;
            justify-content: center;
            align-items: flex-start;
            width: fit-content;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 1224px;
            justify-content: center;
            align-items: flex-start;
            width: fit-content;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledResizeContainer = styled.div<{
  $type: "Small" | "Center" | "Left" | "Right";
}>(
  ({ $type }) => css`
    position: absolute;
    left: -10px;
    top: -10.197265625px;
    width: 590px;
    height: 590px;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Small":
          return css``;
        case "Center":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 584px;
            justify-content: center;
            align-items: flex-start;
            width: 1207px;
            height: 590px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 584px;
            justify-content: center;
            align-items: flex-start;
            width: 1207px;
            height: 590px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 584px;
            justify-content: center;
            align-items: flex-start;
            width: 1207px;
            height: 590px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAnchor = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor2 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor3 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor4 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor5 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor6 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor7 = styled.div<{ $mode: "Dark" | "Light" }>(
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

const StyledAnchor8 = styled.div<{ $mode: "Dark" | "Light" }>(
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

/** A case study card component displayed within a layout, featuring a thumbnail image, text content, optional CTA button, and editor controls (move, resize, drag) for repositioning within a canvas. Supports light/dark modes and multiple layout types (Small, Center, Left, Right). */
export const CaseStudyBoxInside = React.forwardRef<
  HTMLElement,
  CaseStudyBoxInsideProps
>(function CaseStudyBoxInside(
  {
    designedThumbnail = true,
    hasCTA = false,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    type = "Small",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Case study"
      {...rest}
      ref={ref}
      $type={type}
    >
      <StyledForeground $type={type}>
        <StyledTextCTA>
          {["Small", "Center"].includes(type) && (
            <StyledTextBoxTextUnderlay>
              <TextBoxTextUnderlay hasModuleExtension={"False"} />
            </StyledTextBoxTextUnderlay>
          )}
          <StyledText>
            <TextBoxTight
              reachingLimit={false}
              hasToolbar={false}
              colorOverride={false}
              state={"Default"}
              mode={"Light"}
            />
            <TextBoxTight
              reachingLimit={false}
              hasToolbar={false}
              colorOverride={false}
              state={"Default"}
              mode={"Light"}
            />
          </StyledText>
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
      </StyledForeground>
      <StyledThumbnail>
        <ImageFlexible snaps={false} defaultProp={"Free"} />
        {designedThumbnail && (
          <BackgroundGradientLarge type={"Radial center"} />
        )}
        {designedThumbnail && (
          <StyledDesignerImage>
            <StyledMockup />
          </StyledDesignerImage>
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
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
      {state === "Active" && (
        <StyledMoveContainer $type={type}>
          {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
          {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
        </StyledMoveContainer>
      )}
      {state === "Active" && (
        <StyledResizeContainer $type={type}>
          {state === "Active" && <StyledAnchor $mode={mode} />}
          {state === "Active" && <StyledAnchor2 $mode={mode} />}
          {state === "Active" && type === "Small" && (
            <StyledAnchor3 $mode={mode} />
          )}
          {state === "Active" && type === "Small" && (
            <StyledAnchor4 $mode={mode} />
          )}
          {state === "Active" && type === "Small" && (
            <StyledAnchor5 $mode={mode} />
          )}
          {state === "Active" && type === "Small" && (
            <StyledAnchor6 $mode={mode} />
          )}
          {state === "Active" && type === "Small" && (
            <StyledAnchor7 $mode={mode} />
          )}
          {state === "Active" && type === "Small" && (
            <StyledAnchor8 $mode={mode} />
          )}
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
