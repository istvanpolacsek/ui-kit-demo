import React from "react";
import styled, { css } from "styled-components";
import { SectionDivider } from "../SectionDivider";
import {
  ToolbarThumbnail,
  type ToolbarThumbnailProps,
} from "../ToolbarThumbnail";

export interface SectionStatesNavigationProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  | "type"
  | "flipHorizontally"
  | "addMedia"
  | "addSocialLink"
  | "addText"
  | "addNavigation"
  | "toolbarThumbnailType"
  | "mode"
> {
  type?: "Default";
  flipHorizontally?: ToolbarThumbnailProps["flipHorizontally"];
  addMedia?: ToolbarThumbnailProps["addMedia"];
  addSocialLink?: ToolbarThumbnailProps["addSocialLink"];
  addText?: ToolbarThumbnailProps["addText"];
  addNavigation?: ToolbarThumbnailProps["addNavigation"];
  toolbarThumbnailType?: ToolbarThumbnailProps["type"];
  mode?: ToolbarThumbnailProps["mode"];
}

const StyledRoot = styled.nav(
  () => css`
    border-radius: 0px;
    width: 1440px;
    height: 88px;
    box-sizing: border-box;
  `,
);

/** A navigation section component that combines a section divider with a toolbar thumbnail, used to represent a navigational state within a page or application layout. */
export const SectionStatesNavigation = React.forwardRef<
  HTMLElement,
  SectionStatesNavigationProps
>(function SectionStatesNavigation(
  {
    type = "Default",
    flipHorizontally = false,
    addMedia = false,
    addSocialLink = false,
    addText = false,
    addNavigation = false,
    toolbarThumbnailType = "Navigation",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Section Navigation"
      {...rest}
      ref={ref}
    >
      <SectionDivider mode={"Light"} />
      <ToolbarThumbnail
        flipHorizontally={flipHorizontally}
        addMedia={addMedia}
        addSocialLink={addSocialLink}
        addText={addText}
        addNavigation={addNavigation}
        type={toolbarThumbnailType}
        mode={mode}
      />
    </StyledRoot>
  );
});
