import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { FABNeutral } from "../FABNeutral";
import { FABDestructive } from "../FABDestructive";

export interface ImageManagerEditItemProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #3d3d3d;
    border-radius: 4px;
    width: 84px;
    height: 84px;
    box-sizing: border-box;
    &:hover {
      border-color: #adadad;
    }
  `,
);

const StyledOverlay = styled.div(
  () => css`
    display: none;
    width: 76px;
    height: 76px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 0px;
    &:hover {
      display: block;
    }
  `,
);

/** An image manager edit item component that displays a flexible image with an overlay and action buttons (neutral and destructive FABs) for editing or removing the image. Supports Default and Hover states. */
export const ImageManagerEditItem = React.forwardRef<
  HTMLDivElement,
  ImageManagerEditItemProps
>(function ImageManagerEditItem({ ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Edit image item" {...rest} ref={ref}>
      <ImageFlexible snaps={false} defaultProp={"Free"} />
      <StyledOverlay />
      <FABNeutral state={"Default"} size={"Small"} mode={"Light"} />
      <FABDestructive size={"Tiny"} mode={"Dark"} />
    </StyledRoot>
  );
});
