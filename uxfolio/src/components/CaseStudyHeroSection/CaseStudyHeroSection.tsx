import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesHero } from "../SectionStatesHero";
import { TextBoxTight } from "../TextBoxTight";
import { FABSubtle } from "../FABSubtle";
import { ImageFlexible } from "../ImageFlexible";
import { ModuleDivider } from "../ModuleDivider";
import { ImageBox } from "../ImageBox";

export interface CaseStudyHeroSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "hoverOnText" | "defaultProp"
> {
  showUI?: boolean;
  hoverOnText?: boolean;
  defaultProp?: "Text" | "Image + Text";
}

const StyledRoot = styled.section(
  ({ theme }) => css`
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
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
  `,
);

const StyledSectionStatesHero = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 213px;
  `,
);

const StyledText = styled.div<{ $defaultProp: "Text" | "Image + Text" }>(
  ({ $defaultProp }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($defaultProp) {
        case "Text":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 14px;
            justify-content: flex-start;
            align-items: center;
            width: 776px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Image + Text":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 14px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextBoxTight = styled.div(
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

const StyledTextBoxTight2 = styled.div(
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

const StyledFABSubtle = styled.div(
  () => css`
    position: absolute;
    left: 372px;
    bottom: -48px;
    width: 32px;
    height: 32px;
  `,
);

const StyledFABSubtle2 = styled.div(
  () => css`
    position: absolute;
    left: 372px;
    top: -48px;
    width: 32px;
    height: 32px;
  `,
);

const StyledFABSubtle3 = styled.div(
  () => css`
    position: absolute;
    right: -48px;
    top: 31px;
    width: 32px;
    height: 32px;
  `,
);

const StyledBackground = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 213px;
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

/** A hero section for a case study page, supporting text-only or image-and-text layout variants. Displays headline content, optional floating action buttons on hover, and supporting imagery. */
export const CaseStudyHeroSection = React.forwardRef<
  HTMLElement,
  CaseStudyHeroSectionProps
>(function CaseStudyHeroSection(
  { showUI = true, hoverOnText = false, defaultProp = "Text", ...rest },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="Case study hero" {...rest} ref={ref}>
      {showUI && (
        <StyledSectionStatesHero>
          <SectionStatesHero
            addText={false}
            addNavigation={false}
            addMedia={true}
            addSocialLink={false}
            flipHorizontally={false}
            type={"Default"}
            mode={"Light"}
          />
        </StyledSectionStatesHero>
      )}
      <StyledText $defaultProp={defaultProp}>
        <StyledTextBoxTight>
          <TextBoxTight
            reachingLimit={false}
            hasToolbar={true}
            colorOverride={false}
            state={"Default"}
            mode={"Light"}
          />
        </StyledTextBoxTight>
        <StyledTextBoxTight2>
          <TextBoxTight
            reachingLimit={false}
            hasToolbar={false}
            colorOverride={false}
            state={"Default"}
            mode={"Light"}
          />
        </StyledTextBoxTight2>
        {hoverOnText && (
          <StyledFABSubtle>
            <FABSubtle size={"Small"} mode={"Light"} />
          </StyledFABSubtle>
        )}
        {hoverOnText && (
          <StyledFABSubtle2>
            <FABSubtle size={"Small"} mode={"Light"} />
          </StyledFABSubtle2>
        )}
        {hoverOnText && (
          <StyledFABSubtle3>
            <FABSubtle size={"Small"} mode={"Light"} />
          </StyledFABSubtle3>
        )}
      </StyledText>
      <StyledBackground>
        <ImageFlexible snaps={false} defaultProp={"Free"} />
      </StyledBackground>
      {defaultProp === "Image + Text" && (
        <StyledModuleDivider>
          <ModuleDivider
            side={"Normal"}
            canResize={true}
            canAddModule={false}
            size={1}
            state={"Default"}
            mode={"Light"}
          />
        </StyledModuleDivider>
      )}
      {defaultProp === "Image + Text" && (
        <ImageBox
          moveRight={true}
          moveLeft={true}
          hasCaption={false}
          state={"Default"}
          mode={"Light"}
          snaps={false}
          aspectRatio={"1:1"}
          size={"4"}
        />
      )}
    </StyledRoot>
  );
});
