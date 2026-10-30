import React from "react";
import styled, { css } from "styled-components";
import { TextBoxTight } from "../TextBoxTight";
import { UserButtonTextPrimary } from "../UserButtonTextPrimary";
import { ImageFlexible } from "../ImageFlexible";
import { BackgroundGradientSmall } from "../BackgroundGradientSmall";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { ToolbarModule } from "../ToolbarModule";
import { FABSubtle } from "../FABSubtle";
import { ToolbarThumbnail2 } from "../ToolbarThumbnail2";
import { Drag } from "../Drag";
import { ModuleDivider, type ModuleDividerProps } from "../ModuleDivider";

export interface CaseStudyBoxOutsideProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  | "designedThumbnail"
  | "hasCTA"
  | "moveLeft"
  | "moveRight"
  | "state"
  | "type"
  | "mode"
  | "canAddModule"
  | "canResize"
  | "size"
  | "moduleDividerState"
  | "moduleDividerMode"
> {
  designedThumbnail?: boolean;
  hasCTA?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Active" | "Hover" | "Passive";
  type?: "Top" | "Bottom" | "Right" | "Left";
  mode?: "Dark" | "Light";
  canAddModule?: ModuleDividerProps["canAddModule"];
  canResize?: ModuleDividerProps["canResize"];
  size?: ModuleDividerProps["size"];
  moduleDividerState?: ModuleDividerProps["state"];
  moduleDividerMode?: ModuleDividerProps["mode"];
}

const StyledRoot = styled.article<{
  $type: "Top" | "Bottom" | "Right" | "Left";
}>(
  ({ $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Top":
          return css`
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
          `;
        case "Bottom":
          return css`
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
          `;
        case "Right":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 1188px;
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
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
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

const StyledTextCTA = styled.div<{
  $type: "Top" | "Bottom" | "Right" | "Left";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Top":
          return css`
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
          `;
        case "Bottom":
          return css`
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
            justify-content: flex-start;
            align-items: center;
            width: 467px;
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
            justify-content: flex-start;
            align-items: center;
            width: 467px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
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
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTextBoxTight = styled.div<{
  $type: "Top" | "Bottom" | "Right" | "Left";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Right":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Left":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextBoxTight2 = styled.div<{
  $type: "Top" | "Bottom" | "Right" | "Left";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Right":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Left":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumbnailWrapper = styled.section<{
  $state: "Default" | "Active" | "Hover" | "Passive";
  $type: "Top" | "Bottom" | "Right" | "Left";
}>(
  ({ $state, $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$state, $type])) {
        case '["Default","Top"]':
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
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case '["Hover","Top"]':
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
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case '["Active","Top"]':
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
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case '["Passive","Top"]':
          return css``;
        case '["Default","Bottom"]':
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
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case '["Hover","Bottom"]':
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
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case '["Active","Bottom"]':
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
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case '["Passive","Bottom"]':
          return css``;
        case '["Default","Right"]':
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Right"]':
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Active","Right"]':
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Passive","Right"]':
          return css``;
        case '["Default","Left"]':
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hover","Left"]':
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Active","Left"]':
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
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Passive","Left"]':
          return css``;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumbnail = styled.div(
  () => css`
    position: relative;
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
    width: 578px;
    height: 578px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    border-radius: 0px;
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

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -72px;
    width: 108px;
    height: 56px;
  `,
);

const StyledContainer2 = styled.div(
  () => css`
    position: absolute;
    left: -8px;
    top: -8px;
    width: 586px;
    height: 701px;
    border-radius: 6px;
  `,
);

const StyledMoveContainer = styled.div<{
  $type: "Top" | "Bottom" | "Right" | "Left";
}>(
  ({ $type }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 570px;
    height: 685px;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Top":
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
            height: 685px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Bottom":
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
            height: 685px;
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

const StyledModuleDivider = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

/** A case study card component displayed outside a module context, featuring a thumbnail image (optionally with a designer overlay and gradient), descriptive text, and an optional CTA button. Supports multiple layout orientations (Top, Bottom, Right, Left), light/dark modes, and interactive states including Default, Active, Hover, and Passive. */
export const CaseStudyBoxOutside = React.forwardRef<
  HTMLElement,
  CaseStudyBoxOutsideProps
>(function CaseStudyBoxOutside(
  {
    designedThumbnail = true,
    hasCTA = false,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    type = "Top",
    mode = "Light",
    canAddModule = false,
    canResize = true,
    size = 1,
    moduleDividerState = "Default",
    moduleDividerMode = "Light",
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
      <StyledTextCTA $type={type}>
        <StyledText>
          <StyledTextBoxTight $type={type}>
            <TextBoxTight
              reachingLimit={false}
              hasToolbar={false}
              colorOverride={false}
              state={"Default"}
              mode={"Light"}
            />
          </StyledTextBoxTight>
          <StyledTextBoxTight2 $type={type}>
            <TextBoxTight
              reachingLimit={false}
              hasToolbar={false}
              colorOverride={false}
              state={"Default"}
              mode={"Light"}
            />
          </StyledTextBoxTight2>
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
      <StyledThumbnailWrapper $state={state} $type={type}>
        <StyledThumbnail>
          <ImageFlexible snaps={false} defaultProp={"Free"} />
          {designedThumbnail && <BackgroundGradientSmall type={"Radial"} />}
          {designedThumbnail && (
            <StyledDesignerImage>
              <StyledMockup />
            </StyledDesignerImage>
          )}
          {["Hover", "Active", "Passive"].includes(state) && (
            <StyledTertiaryButtonNeutral>
              <TertiaryButtonNeutral
                mode={"Dark"}
                hasIcon={"True"}
                size={"Large"}
              />
            </StyledTertiaryButtonNeutral>
          )}
        </StyledThumbnail>
        {state === "Passive" && <StyledContainer />}
        {state === "Passive" && (
          <StyledResizeContainer>
            {state === "Passive" && <StyledAnchor $mode={mode} />}
            {state === "Passive" && <StyledAnchor2 $mode={mode} />}
            {state === "Passive" && <StyledAnchor3 $mode={mode} />}
            {state === "Passive" && <StyledAnchor4 $mode={mode} />}
            {state === "Passive" && <StyledAnchor5 $mode={mode} />}
            {state === "Passive" && <StyledAnchor6 $mode={mode} />}
            {state === "Passive" && <StyledAnchor7 $mode={mode} />}
            {state === "Passive" && <StyledAnchor8 $mode={mode} />}
          </StyledResizeContainer>
        )}
        {state === "Passive" && (
          <StyledToolbarModule>
            <ToolbarModule
              isCustomImage={true}
              type={"Thumbnail"}
              mode={"Light"}
            />
          </StyledToolbarModule>
        )}
      </StyledThumbnailWrapper>
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer2 />}
      {state === "Active" && (
        <StyledMoveContainer $type={type}>
          {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
          {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
        </StyledMoveContainer>
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
      {["Right", "Left"].includes(type) && (
        <StyledModuleDivider>
          <ModuleDivider
            side={"Normal"}
            canAddModule={canAddModule}
            canResize={canResize}
            size={size}
            state={moduleDividerState}
            mode={moduleDividerMode}
          />
        </StyledModuleDivider>
      )}
    </StyledRoot>
  );
});
