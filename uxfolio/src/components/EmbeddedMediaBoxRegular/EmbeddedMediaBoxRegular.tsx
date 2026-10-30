import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { ImageCaption } from "../ImageCaption";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";
import { FABSubtle } from "../FABSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface EmbeddedMediaBoxRegularProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "hasCaption" | "moveLeft" | "moveRight" | "state" | "mode"
> {
  hasCaption?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Active" | "Passive" | "Empty";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.section(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: center;
    align-items: flex-start;
    width: 488px;
    height: 340.00018310546875px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledImageFlexible = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    flex: 1 1 0;
    min-height: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledImageCaption = styled.div(
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
    width: 504px;
    height: 356px;
    border-radius: 6px;
  `,
);

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -72px;
    width: 113px;
    height: 56px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 508px;
    height: 360px;
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

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -36px;
    top: -8.0003662109375px;
    width: 24px;
    height: 24px;
  `,
);

const StyledMoveContainer = styled.nav(
  () => css`
    position: absolute;
    left: 0px;
    top: -0.0003662109375px;
    width: 488px;
    height: 340px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 524px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    height: 340px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledImageFlexible2 = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"rgba(15, 15, 15, 0.23999999463558197)"};
          `;
        case "Dark":
          return css`
            border-color: ${"rgba(255, 255, 255, 0.23999999463558197)"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTertiaryButtonNeutral = styled.div(
  () => css`
    position: absolute;
    left: 179px;
    top: 133.999267578125px;
    width: 130px;
    height: 36px;
  `,
);

/** An embedded media box component that displays a flexible image with an optional caption, toolbar, resize handles, drag functionality, and navigation controls for repositioning the media within a layout. */
export const EmbeddedMediaBoxRegular = React.forwardRef<
  HTMLElement,
  EmbeddedMediaBoxRegularProps
>(function EmbeddedMediaBoxRegular(
  {
    hasCaption = true,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="Embedded media" {...rest} ref={ref}>
      {["Default", "Hover", "Active", "Passive"].includes(state) && (
        <StyledImageFlexible>
          <ImageFlexible snaps={false} defaultProp={"Free"} />
        </StyledImageFlexible>
      )}
      {hasCaption && (
        <StyledImageCaption>
          <ImageCaption colorOverride={false} mode={"Light"} />
        </StyledImageCaption>
      )}
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
      {state === "Active" && (
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Embedded media"}
            mode={"Light"}
          />
        </StyledToolbarModule>
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
        <StyledDrag>
          <Drag />
        </StyledDrag>
      )}
      {state === "Active" && (
        <StyledMoveContainer>
          {moveRight && <FABSubtle size={"Tiny"} mode={"Light"} />}
          {moveLeft && <FABSubtle size={"Tiny"} mode={"Light"} />}
        </StyledMoveContainer>
      )}
      {state === "Empty" && (
        <StyledImageFlexible2 $mode={mode}>
          {state === "Empty" && (
            <StyledTertiaryButtonNeutral>
              <TertiaryButtonNeutral
                mode={"Light"}
                hasIcon={"True"}
                size={"Large"}
              />
            </StyledTertiaryButtonNeutral>
          )}
        </StyledImageFlexible2>
      )}
    </StyledRoot>
  );
});
