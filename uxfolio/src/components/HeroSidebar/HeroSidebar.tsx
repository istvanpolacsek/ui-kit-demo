import React from "react";
import styled, { css } from "styled-components";
import {
  ModuleDividerOnlyDivider,
  type ModuleDividerOnlyDividerProps,
} from "../ModuleDividerOnlyDivider";
import { ImageBox } from "../ImageBox";
import { TextBox } from "../TextBox";
import {
  ToolbarThumbnail,
  type ToolbarThumbnailProps,
} from "../ToolbarThumbnail";
import { NavigationInLine } from "../NavigationInLine";

export interface HeroSidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  | "navAlignment"
  | "hasBackground"
  | "side"
  | "flipHorizontally"
  | "addMedia"
  | "addSocialLink"
  | "addText"
  | "addNavigation"
  | "type"
  | "mode"
> {
  navAlignment?: "Top" | "Bottom" | "Outside";
  hasBackground?: "False" | "True";
  side?: ModuleDividerOnlyDividerProps["side"];
  flipHorizontally?: ToolbarThumbnailProps["flipHorizontally"];
  addMedia?: ToolbarThumbnailProps["addMedia"];
  addSocialLink?: ToolbarThumbnailProps["addSocialLink"];
  addText?: ToolbarThumbnailProps["addText"];
  addNavigation?: ToolbarThumbnailProps["addNavigation"];
  type?: ToolbarThumbnailProps["type"];
  mode?: ToolbarThumbnailProps["mode"];
}

const StyledRoot = styled.aside<{
  $navAlignment: "Top" | "Bottom" | "Outside";
  $hasBackground: "False" | "True";
}>(
  ({ theme, $navAlignment, $hasBackground }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$navAlignment, $hasBackground])) {
        case '["Bottom","False"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 24px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 336px;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Bottom","True"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 360px;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Top","False"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 24px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 336px;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Top","True"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 360px;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Outside","False"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 24px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 336px;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Outside","True"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 48px;
            padding-bottom: 48px;
            padding-left: 48px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 360px;
            height: 900px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($hasBackground) {
        case "False":
          return css`
            background-color: ${theme["Color 5"]};
          `;
        case "True":
          return css`
            background-color: ${theme["Color 2"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($hasBackground) {
        case "True":
          return css`
            color: ${theme["Color 5"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDivider = styled.div(
  () => css`
    position: absolute;
    right: 0px;
    top: -0.1795654296875px;
    width: 1px;
    height: 900px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledImageBox = styled.div(
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

const StyledTextBox = styled.div(
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

const StyledToolbarThumbnail = styled.div(
  () => css`
    position: absolute;
    right: -52px;
    top: 16px;
    width: 56px;
    height: 160px;
  `,
);

const StyledNavigationInLine = styled.div<{
  $navAlignment: "Top" | "Bottom" | "Outside";
}>(
  ({ $navAlignment }) => css`
    position: absolute;
    left: 48px;
    bottom: 48px;
    width: 264px;
    height: 40px;
    ${(() => {
      switch ($navAlignment) {
        case "Top":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledToolbarThumbnail2 = styled.div(
  () => css`
    position: absolute;
    right: -52px;
    bottom: 40.1796875px;
    width: 56px;
    height: 56px;
  `,
);

/** A hero sidebar component that combines an image, text content, navigation, and toolbar elements. Supports configurable navigation alignment (Top, Bottom, Outside) and an optional background, typically used as a supplementary panel alongside main content. */
export const HeroSidebar = React.forwardRef<HTMLElement, HeroSidebarProps>(
  function HeroSidebar(
    {
      navAlignment = "Bottom",
      hasBackground = "False",
      side = "Normal",
      flipHorizontally = false,
      addMedia = false,
      addSocialLink = false,
      addText = false,
      addNavigation = false,
      type = "Navigation",
      mode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="complementary"
        aria-label="Sidebar"
        {...rest}
        ref={ref}
        $navAlignment={navAlignment}
        $hasBackground={hasBackground}
      >
        <StyledDivider>
          <ModuleDividerOnlyDivider side={side} />
        </StyledDivider>
        <StyledContent>
          <StyledImageBox>
            <ImageBox
              moveRight={true}
              moveLeft={true}
              hasCaption={false}
              state={"Default"}
              mode={"Light"}
              snaps={false}
              aspectRatio={"1:1"}
              size={"Flexible"}
            />
          </StyledImageBox>
          <StyledTextBox>
            <TextBox
              moveRight={true}
              aboveImage={false}
              moveLeft={true}
              reachingLimit={false}
              hasButton={false}
              state={"Default"}
              mode={"Light"}
              colorOverride={false}
              roundness={"Sharp"}
              size={"Flexible"}
            />
          </StyledTextBox>
        </StyledContent>
        <StyledToolbarThumbnail>
          <ToolbarThumbnail
            addText={false}
            addNavigation={false}
            addMedia={false}
            addSocialLink={false}
            flipHorizontally={false}
            type={"Hero"}
            mode={"Light"}
          />
        </StyledToolbarThumbnail>
        {["Bottom", "Top"].includes(navAlignment) && (
          <StyledNavigationInLine $navAlignment={navAlignment}>
            <NavigationInLine hasPage4={false} type={"Regular"} />
          </StyledNavigationInLine>
        )}
        {["Bottom", "Top"].includes(navAlignment) && (
          <StyledToolbarThumbnail2>
            <ToolbarThumbnail
              flipHorizontally={flipHorizontally}
              addMedia={addMedia}
              addSocialLink={addSocialLink}
              addText={addText}
              addNavigation={addNavigation}
              type={type}
              mode={mode}
            />
          </StyledToolbarThumbnail2>
        )}
      </StyledRoot>
    );
  },
);
