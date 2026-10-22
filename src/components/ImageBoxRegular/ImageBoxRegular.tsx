import React from "react";
import styled, { css } from "styled-components";
import { ImageFixed, type ImageFixedProps } from "../ImageFixed";
import { ImageCaption } from "../ImageCaption";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";
import { FABSubtle } from "../FABSubtle";

export interface ImageBoxRegularProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "hasCaption"
  | "moveLeft"
  | "moveRight"
  | "state"
  | "mode"
  | "snaps"
  | "aspectRatio"
> {
  hasCaption?: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
  state?: "Default" | "Hover" | "Active" | "Passive";
  mode?: "Dark" | "Light";
  snaps?: ImageFixedProps["snaps"];
  aspectRatio?: ImageFixedProps["aspectRatio"];
}

const StyledRoot = styled.div(
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
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledImageFixed = styled.div(
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
    height: 541px;
    border-radius: 6px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    position: absolute;
    left: -10px;
    top: -10px;
    width: 508px;
    height: 545px;
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
    left: -10px;
    top: -72px;
    width: 170px;
    height: 56px;
  `,
);

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -36px;
    top: -8.001953125px;
    width: 24px;
    height: 24px;
  `,
);

const StyledMoveContainer = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: -0.001953125px;
    width: 488px;
    height: 525px;
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
    height: 525px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A content block component that displays an image with an optional caption. Supports interactive states (Default, Hover, Active, Passive), light/dark modes, and editing controls including a toolbar, drag handle, and move left/right actions for repositioning within a layout. */
export const ImageBoxRegular = React.forwardRef<
  HTMLDivElement,
  ImageBoxRegularProps
>(function ImageBoxRegular(
  {
    hasCaption = true,
    moveLeft = true,
    moveRight = true,
    state = "Default",
    mode = "Light",
    snaps = false,
    aspectRatio = "1:1",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="figure" aria-label="Image box" {...rest} ref={ref}>
      <StyledImageFixed>
        <ImageFixed snaps={snaps} aspectRatio={aspectRatio} />
      </StyledImageFixed>
      {hasCaption && (
        <StyledImageCaption>
          <ImageCaption colorOverride={false} mode={"Light"} />
        </StyledImageCaption>
      )}
      {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
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
        <StyledToolbarModule>
          <ToolbarModule
            isCustomImage={true}
            type={"Image simple"}
            mode={"Light"}
          />
        </StyledToolbarModule>
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
    </StyledRoot>
  );
});
