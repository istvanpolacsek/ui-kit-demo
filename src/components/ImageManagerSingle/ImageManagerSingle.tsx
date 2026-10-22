import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { ImageFlexible } from "../ImageFlexible";
import { OverlayCanvasHomogen } from "../OverlayCanvasHomogen";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { TertiaryButtonDestructive } from "../TertiaryButtonDestructive";

export interface ImageManagerSingleProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasLabel" | "hasDescription" | "state"
> {
  hasLabel?: boolean;
  hasDescription?: boolean;
  state?: "Image" | "Empty" | "PDF";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall = styled.div(
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

const StyledImage = styled.div<{ $state: "Image" | "Empty" | "PDF" }>(
  ({ $state }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #3d3d3d;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Image":
          return css``;
        case "PDF":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 44px;
            padding-right: 95px;
            padding-bottom: 44px;
            padding-left: 95px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        case "Empty":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 98px;
            padding-bottom: 0px;
            padding-left: 98px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            height: 160px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "PDF":
          return css`
            background-color: ${"#262626"};
          `;
        case "Empty":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledButtonsWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A single image manager component that displays an image (or empty/PDF state) with optional label and description. Supports actions such as replacing or removing the managed asset via contextual buttons. */
export const ImageManagerSingle = React.forwardRef<
  HTMLDivElement,
  ImageManagerSingleProps
>(function ImageManagerSingle(
  { hasLabel = true, hasDescription = true, state = "Image", ...rest },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="Image manager" {...rest} ref={ref}>
      {hasLabel && (
        <StyledSubheaderSmall>
          <SubheaderSmall hasIcon={false} mode={"Dark"} />
        </StyledSubheaderSmall>
      )}
      <StyledImage $state={state}>
        {state === "Image" && (
          <ImageFlexible snaps={false} defaultProp={"Free"} />
        )}
        {state === "Image" && (
          <OverlayCanvasHomogen type={"Dimming"} strength={"Regular"} />
        )}
        {["Image", "PDF"].includes(state) && (
          <StyledButtonsWrapper>
            {["Image", "PDF"].includes(state) && (
              <TertiaryButtonNeutral
                mode={"Dark"}
                size={"Regular"}
                selected={true}
              />
            )}
            {["Image", "PDF"].includes(state) && (
              <TertiaryButtonDestructive
                mode={"Dark"}
                size={"Regular"}
                selected={true}
              />
            )}
          </StyledButtonsWrapper>
        )}
        {state === "Empty" && (
          <TertiaryButtonNeutral
            mode={"Dark"}
            size={"Regular"}
            selected={true}
          />
        )}
      </StyledImage>
    </StyledRoot>
  );
});
