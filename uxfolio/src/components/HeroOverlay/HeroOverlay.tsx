import React from "react";
import styled, { css } from "styled-components";
import { NavigationFull } from "../NavigationFull";
import { SectionStatesHero } from "../SectionStatesHero";
import { ImageBox } from "../ImageBox";
import { TextBox } from "../TextBox";
import { NavigationInLine } from "../NavigationInLine";

export interface HeroOverlayProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "navPosition"
> {
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
    color: #fefefe;
  `,
);

const StyledHero = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    padding-right: 126px;
    padding-bottom: 60px;
    padding-left: 126px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSectionStatesHero = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 788px;
  `,
);

const StyledContentWrapper = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
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

const StyledTextWrapper = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1188px;
    height: 668.25px;
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-right: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    gap: 16px;
    justify-content: flex-end;
    align-items: center;
    width: 1188px;
    height: 668.25px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A hero section with an optional overlay navigation. Supports three layout variants: navigation displayed above the hero content, below it, or in a special inline position within the content area. */
export const HeroOverlay = React.forwardRef<HTMLElement, HeroOverlayProps>(
  function HeroOverlay({ navPosition = "Above", ...rest }, ref) {
    return (
      <StyledRoot role="region" aria-label="Hero section" {...rest} ref={ref}>
        {["Above", "Below"].includes(navPosition) && (
          <NavigationFull
            showAddSection={false}
            showUI={true}
            hasPage4={false}
            type={"Simple left"}
          />
        )}
        <StyledHero>
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
          <StyledContentWrapper>
            <StyledImageBox>
              <ImageBox
                moveRight={true}
                moveLeft={true}
                hasCaption={false}
                state={"Default"}
                mode={"Light"}
                snaps={false}
                aspectRatio={"16:9"}
                size={"12"}
              />
            </StyledImageBox>
            <StyledTextWrapper>
              <TextBox
                moveRight={true}
                aboveImage={true}
                moveLeft={true}
                reachingLimit={false}
                hasButton={false}
                state={"Default"}
                mode={"Light"}
                colorOverride={false}
                roundness={"Sharp"}
                size={"8"}
              />
              {navPosition === "Special" && (
                <NavigationInLine hasPage4={false} type={"Regular"} />
              )}
            </StyledTextWrapper>
          </StyledContentWrapper>
        </StyledHero>
      </StyledRoot>
    );
  },
);
