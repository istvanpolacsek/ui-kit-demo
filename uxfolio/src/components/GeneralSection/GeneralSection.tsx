import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesGeneral } from "../SectionStatesGeneral";
import { ModuleDivider } from "../ModuleDivider";
import { TextBox, type TextBoxProps } from "../TextBox";
import { ImageBox, type ImageBoxProps } from "../ImageBox";

export interface GeneralSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "module" | "module1" | "module2" | "showUI" | "modules" | "size"
> {
  module?: string;
  module1?: string;
  module2?: string;
  showUI?: boolean;
  modules?: 1 | 2;
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
    align-items: flex-start;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
  `,
);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 234px;
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

/** A general content section composed of configurable modules (text box, image box, and dividers). Supports 1 or 2 module layout variants and can be toggled visible via the Show UI property. */
export const GeneralSection = React.forwardRef<
  HTMLElement,
  GeneralSectionProps
>(function GeneralSection(
  {
    module = "265:14895",
    module1 = "265:14894",
    module2 = "265:15070",
    showUI = true,
    modules = 1,
    size = "6",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="General section" {...rest} ref={ref}>
      {showUI && (
        <StyledSectionStatesGeneral>
          <SectionStatesGeneral
            addNavigation={false}
            addText={false}
            addSocialLink={false}
            addMedia={false}
            flipHorizontally={false}
            type={"Default"}
            mode={"Light"}
          />
        </StyledSectionStatesGeneral>
      )}
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
      {modules === 2 && (
        <ImageBox
          moveRight={true}
          moveLeft={true}
          hasCaption={true}
          state={"Default"}
          mode={"Light"}
          snaps={false}
          aspectRatio={"3:2"}
          size={size}
        />
      )}
      {modules === 2 && (
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
    </StyledRoot>
  );
});
