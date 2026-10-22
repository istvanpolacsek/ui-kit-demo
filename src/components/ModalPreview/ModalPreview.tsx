import React from "react";
import styled, { css } from "styled-components";
import { ImageFixed } from "../ImageFixed";
import { ImageFlexible } from "../ImageFlexible";

export interface ModalPreviewProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "crop" | "imageType" | "type"
> {
  crop?: boolean;
  imageType?: string;
  type?: "Background" | "Image";
}

const StyledRoot = styled.div(
  () => css`
    background-color: #1a1a1a;
    border-radius: 0px;
    width: 550px;
    height: 373px;
    box-sizing: border-box;
  `,
);

const StyledOverlay = styled.div(
  () => css`
    width: 550px;
    height: 373px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(26, 26, 26, 0.75);
    border-radius: 0px;
  `,
);

const StyledResizeContainer = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledBorder = styled.div(
  () => css`
    width: 502px;
    height: 215px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledAnchor = styled.div(
  () => css`
    width: 3px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 1px;
  `,
);

const StyledAnchor2 = styled.div(
  () => css`
    width: 3px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 1px;
  `,
);

const StyledAnchor3 = styled.div(
  () => css`
    width: 3px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 1px;
  `,
);

const StyledAnchor4 = styled.div(
  () => css`
    width: 3px;
    height: 3px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 1px;
  `,
);

/** A modal preview component that displays an image with optional crop controls. Supports two variants: 'Background' (fixed image) and 'Image' (flexible image), with an overlay and resize handles when cropping is enabled. */
export const ModalPreview = React.forwardRef<HTMLDivElement, ModalPreviewProps>(
  function ModalPreview(
    { crop = true, imageType = "199:7187", type = "Background", ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="dialog" aria-label="Image preview" {...rest} ref={ref}>
        {type === "Background" && (
          <ImageFixed snaps={false} aspectRatio={"21:9"} />
        )}
        {crop && <StyledOverlay />}
        {crop && (
          <StyledResizeContainer>
            <StyledBorder />
            <StyledAnchor />
            <StyledAnchor2 />
            <StyledAnchor3 />
            <StyledAnchor4 />
          </StyledResizeContainer>
        )}
        {type === "Image" && (
          <ImageFlexible snaps={false} defaultProp={"Free"} />
        )}
      </StyledRoot>
    );
  },
);
