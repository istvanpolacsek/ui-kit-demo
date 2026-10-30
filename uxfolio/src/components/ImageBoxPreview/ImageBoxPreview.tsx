import React from "react";
import styled, { css } from "styled-components";
import { ImageFixed, type ImageFixedProps } from "../ImageFixed";

export interface ImageBoxPreviewProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode" | "snaps" | "aspectRatio"
> {
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
    width: 64px;
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
    display: none;
    position: absolute;
    left: -4px;
    top: -4px;
    width: 72px;
    height: 72px;
    border-radius: 4px;
    &:active {
      display: block;
    }
  `,
);

/** A preview image box component that displays a fixed image in either light or dark mode, with default and active visual states. Typically used to represent selectable or highlighted image previews in a gallery or selection UI. */
export const ImageBoxPreview = React.forwardRef<
  HTMLDivElement,
  ImageBoxPreviewProps
>(function ImageBoxPreview(
  { mode = "Light", snaps = false, aspectRatio = "1:1", ...rest },
  ref,
) {
  return (
    <StyledRoot role="img" aria-label="Image preview" {...rest} ref={ref}>
      <StyledImageFixed>
        <ImageFixed snaps={snaps} aspectRatio={aspectRatio} />
      </StyledImageFixed>
      <StyledContainer />
    </StyledRoot>
  );
});
