import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface ImageManagerThumbnailProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.div(
  () => css`
    border-radius: 0px;
    width: 370px;
    height: 381px;
    box-sizing: border-box;
  `,
);

/** A thumbnail component used within an image manager, displaying a flexible image alongside a tertiary action button (e.g., remove or edit). Typically used in a gallery or media management context. */
export const ImageManagerThumbnail = React.forwardRef<
  HTMLDivElement,
  ImageManagerThumbnailProps
>(function ImageManagerThumbnail({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Image thumbnail" {...rest} ref={ref}>
      <ImageFlexible snaps={false} defaultProp={"Free"} />
      <TertiaryButtonNeutral mode={"Dark"} hasIcon={"True"} size={"Small"} />
    </StyledRoot>
  );
});
