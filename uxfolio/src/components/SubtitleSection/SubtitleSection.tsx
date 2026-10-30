import React from "react";
import styled, { css } from "styled-components";
import { ModuleDivider } from "../ModuleDivider";
import { TextBox, type TextBoxProps } from "../TextBox";
import { SectionStatesGeneral } from "../SectionStatesGeneral";

export interface SubtitleSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "type" | "size"
> {
  showUI?: boolean;
  type?: "Default";
  size?: TextBoxProps["size"];
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    padding-right: 78px;
    padding-bottom: 60px;
    padding-left: 78px;
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

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 174px;
  `,
);

/** A subtitle section component that groups a text box between two module dividers, with an optional UI state overlay. Used to display a labeled subtitle block within a page layout. */
export const SubtitleSection = React.forwardRef<
  HTMLElement,
  SubtitleSectionProps
>(function SubtitleSection(
  { showUI = true, type = "Default", size = "8", ...rest },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="Subtitle section" {...rest} ref={ref}>
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
        size={size}
      />
      <StyledModuleDivider2>
        <ModuleDivider
          side={"Normal"}
          canResize={true}
          canAddModule={false}
          size={0}
          state={"Default"}
          mode={"Light"}
        />
      </StyledModuleDivider2>
      {showUI && (
        <StyledSectionStatesGeneral>
          <SectionStatesGeneral
            addText={false}
            addSocialLink={false}
            addNavigation={false}
            addMedia={false}
            flipHorizontally={false}
            type={"Default"}
            mode={"Light"}
          />
        </StyledSectionStatesGeneral>
      )}
    </StyledRoot>
  );
});
