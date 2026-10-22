import React from "react";
import styled, { css } from "styled-components";
import { LogoBox } from "../LogoBox";
import { SectionStatesGeneral } from "../SectionStatesGeneral";

export interface LogoWallSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "logos"
> {
  showUI?: boolean;
  logos?: 2 | 3 | 4;
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    padding-right: 102px;
    padding-bottom: 60px;
    padding-left: 102px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
  `,
);

const StyledLogoBox = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledLogoBox2 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledLogoBox3 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledLogoBox4 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 200px;
  `,
);

/** A logo wall section that displays a configurable number of partner or client logos (2, 3, or 4) alongside optional UI content such as a heading or descriptive text. Used to showcase brand affiliations or social proof on a page. */
export const LogoWallSection = React.forwardRef<
  HTMLElement,
  LogoWallSectionProps
>(function LogoWallSection({ showUI = true, logos = 4, ...rest }, ref) {
  return (
    <StyledRoot aria-label="Logo wall" {...rest} ref={ref}>
      <StyledLogoBox>
        <LogoBox moveRight={true} moveLeft={true} mode={"Light"} />
      </StyledLogoBox>
      <StyledLogoBox2>
        <LogoBox moveRight={true} moveLeft={true} mode={"Light"} />
      </StyledLogoBox2>
      {[4, 3].includes(logos) && (
        <StyledLogoBox3>
          <LogoBox moveRight={true} moveLeft={true} mode={"Light"} />
        </StyledLogoBox3>
      )}
      {logos === 4 && (
        <StyledLogoBox4>
          <LogoBox moveRight={true} moveLeft={true} mode={"Light"} />
        </StyledLogoBox4>
      )}
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
