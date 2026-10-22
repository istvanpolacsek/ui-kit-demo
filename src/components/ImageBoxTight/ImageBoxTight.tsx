import React from "react";
import styled, { css } from "styled-components";
import { ImageFixed, type ImageFixedProps } from "../ImageFixed";

export interface ImageBoxTightProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state" | "mode" | "snaps" | "aspectRatio"
> {
  state?: "Default" | "Hover" | "Active" | "Active Free";
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

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: -4px;
    top: -4px;
    width: 496px;
    height: 496px;
    border-radius: 4px;
  `,
);

const StyledResizeContainer = styled.div<{
  $state: "Default" | "Hover" | "Active" | "Active Free";
}>(
  ({ $state }) => css`
    position: absolute;
    left: -6px;
    top: -6px;
    width: 500px;
    height: 500px;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Active":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 494px;
            justify-content: center;
            align-items: flex-start;
            width: 500px;
            height: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Active Free":
          return css``;
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

/** A tightly-cropped image box component that displays a fixed image with optional resize handles and state variants (Default, Hover, Active). Supports Light and Dark display modes. */
export const ImageBoxTight = React.forwardRef<
  HTMLDivElement,
  ImageBoxTightProps
>(function ImageBoxTight(
  {
    state = "Default",
    mode = "Light",
    snaps = false,
    aspectRatio = "1:1",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="img" aria-label="Image box" {...rest} ref={ref}>
      <StyledImageFixed>
        <ImageFixed snaps={snaps} aspectRatio={aspectRatio} />
      </StyledImageFixed>
      {["Hover", "Active", "Active Free"].includes(state) && (
        <StyledContainer />
      )}
      {["Active", "Active Free"].includes(state) && (
        <StyledResizeContainer $state={state}>
          {["Active", "Active Free"].includes(state) && (
            <StyledAnchor $mode={mode} />
          )}
          {["Active", "Active Free"].includes(state) && (
            <StyledAnchor2 $mode={mode} />
          )}
          {state === "Active Free" && <StyledAnchor3 $mode={mode} />}
          {state === "Active Free" && <StyledAnchor4 $mode={mode} />}
          {state === "Active Free" && <StyledAnchor5 $mode={mode} />}
          {state === "Active Free" && <StyledAnchor6 $mode={mode} />}
          {state === "Active Free" && <StyledAnchor7 $mode={mode} />}
          {state === "Active Free" && <StyledAnchor8 $mode={mode} />}
        </StyledResizeContainer>
      )}
    </StyledRoot>
  );
});
