import React from "react";
import styled, { css } from "styled-components";
import { SectionDivider } from "../SectionDivider";
import {
  ToolbarThumbnail,
  type ToolbarThumbnailProps,
} from "../ToolbarThumbnail";
import { ToolbarSpacer } from "../ToolbarSpacer";

export interface SectionStatesGeneralProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
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

const StyledRoot = styled.section(
  () => css`
    border-radius: 0px;
    width: 1440px;
    height: 650px;
    box-sizing: border-box;
  `,
);

const StyledButtons = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 40px;
    height: 634px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 554px;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledToolbarSpacer = styled.div(
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

const StyledToolbarSpacer2 = styled.div(
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

/** A general section state component that groups toolbar elements and section dividers, serving as a structural layout container for UI sections. */
export const SectionStatesGeneral = React.forwardRef<
  HTMLElement,
  SectionStatesGeneralProps
>(function SectionStatesGeneral(
  {
    type = "Default",
    flipHorizontally = false,
    addMedia = false,
    addSocialLink = false,
    addText = false,
    addNavigation = false,
    toolbarThumbnailType = "General",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="Section" {...rest} ref={ref}>
      <SectionDivider mode={"Light"} />
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
      <StyledButtons>
        <StyledWrapper>
          <StyledToolbarSpacer>
            <ToolbarSpacer mode={"Light"} />
          </StyledToolbarSpacer>
          <StyledToolbarSpacer2>
            <ToolbarSpacer mode={"Light"} />
          </StyledToolbarSpacer2>
        </StyledWrapper>
      </StyledButtons>
    </StyledRoot>
  );
});
