import React from "react";
import styled, { css } from "styled-components";
import { NavigationFull } from "../NavigationFull";
import { SectionStatesHero } from "../SectionStatesHero";
import { ModuleDivider } from "../ModuleDivider";
import { TextBox } from "../TextBox";
import { ImageBox } from "../ImageBox";
import { NavigationInLine } from "../NavigationInLine";

export interface HeroModularProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "layout" | "navPosition"
> {
  layout?:
    "Text only" | "Image right" | "Image left" | "Image bottom" | "Image top";
  navPosition?: "Above" | "Below" | "Special";
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
  `,
);

const StyledHero = styled.section<{
  $layout:
    "Text only" | "Image right" | "Image left" | "Image bottom" | "Image top";
}>(
  ({ $layout }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($layout) {
        case "Text only":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 60px;
            padding-right: 78px;
            padding-bottom: 60px;
            padding-left: 78px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Image right":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 60px;
            padding-right: 78px;
            padding-bottom: 60px;
            padding-left: 78px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Image left":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 60px;
            padding-right: 78px;
            padding-bottom: 60px;
            padding-left: 78px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Image bottom":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 48px;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Image top":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 48px;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSectionStatesHero = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 230px;
  `,
);

const StyledModuleDivider = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledModuleDivider2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledModuleDivider3 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledTextWrapper = styled.div<{
  $layout:
    "Text only" | "Image right" | "Image left" | "Image bottom" | "Image top";
}>(
  ({ $layout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($layout) {
        case "Text only":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 776px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Image right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 467px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Image left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 467px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Image bottom":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Image top":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextBox = styled.div<{
  $layout:
    "Text only" | "Image right" | "Image left" | "Image bottom" | "Image top";
}>(
  ({ $layout }) => css`
    ${(() => {
      switch ($layout) {
        case "Text only":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Image right":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Image left":
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

/** A modular hero section supporting multiple layout variants (text only, image right/left/top/bottom) and configurable navigation positioning (above, below, or special). Composes navigation, text, image, and divider sub-components into a flexible page-header unit. */
export const HeroModular = React.forwardRef<HTMLElement, HeroModularProps>(
  function HeroModular(
    { layout = "Text only", navPosition = "Above", ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="banner" aria-label="Hero section" {...rest} ref={ref}>
        {["Above", "Below"].includes(navPosition) && (
          <NavigationFull
            showAddSection={false}
            showUI={true}
            hasPage4={false}
            type={"Simple left"}
          />
        )}
        <StyledHero $layout={layout}>
          <StyledSectionStatesHero>
            <SectionStatesHero
              addText={false}
              addNavigation={false}
              addMedia={false}
              addSocialLink={false}
              flipHorizontally={false}
              type={"Default"}
              mode={"Light"}
            />
          </StyledSectionStatesHero>
          {["Text only", "Image right", "Image left"].includes(layout) && (
            <StyledModuleDivider>
              <ModuleDivider
                side={"Normal"}
                canResize={true}
                canAddModule={false}
                size={0}
                state={"Default"}
                mode={"Light"}
              />
            </StyledModuleDivider>
          )}
          {["Above", "Below"].includes(navPosition) && (
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
              size={"8"}
            />
          )}
          {["Text only", "Image right", "Image left"].includes(layout) && (
            <StyledModuleDivider2>
              <ModuleDivider
                side={"Right image"}
                canResize={true}
                canAddModule={false}
                size={0}
                state={"Default"}
                mode={"Light"}
              />
            </StyledModuleDivider2>
          )}
          {["Image right", "Image left", "Image bottom", "Image top"].includes(
            layout,
          ) && (
            <ImageBox
              moveRight={true}
              moveLeft={true}
              hasCaption={false}
              state={"Default"}
              mode={"Light"}
              snaps={false}
              aspectRatio={"4:3"}
              size={"6"}
            />
          )}
          {["Image right", "Image left"].includes(layout) && (
            <StyledModuleDivider3>
              <ModuleDivider
                side={"Right image"}
                canResize={true}
                canAddModule={false}
                size={0}
                state={"Default"}
                mode={"Light"}
              />
            </StyledModuleDivider3>
          )}
          {navPosition === "Special" && (
            <StyledTextWrapper $layout={layout}>
              {navPosition === "Special" && (
                <StyledTextBox $layout={layout}>
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
                    size={"8"}
                  />
                </StyledTextBox>
              )}
              {navPosition === "Special" && (
                <NavigationInLine hasPage4={false} type={"Regular"} />
              )}
            </StyledTextWrapper>
          )}
        </StyledHero>
      </StyledRoot>
    );
  },
);
