import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesGeneral } from "../SectionStatesGeneral";
import { CaseStudyBoxOutside } from "../CaseStudyBoxOutside";

export interface PortfolioSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "type"
> {
  showUI?: boolean;
  type?: "Grid" | "Offset" | "List" | "Featured grid" | "Large grid";
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
    gap: 48px;
    flex-wrap: wrap;
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
    height: 1538px;
  `,
);

const StyledColumn1 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyBoxOutside = styled.li(() => css``);

const StyledCaseStudyBoxOutside2 = styled.li(() => css``);

const StyledColumn2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 200px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyBoxOutside3 = styled.li(() => css``);

const StyledCaseStudyBoxOutside22 = styled.li(() => css``);

/** A portfolio section that displays a collection of case study items in various layout configurations (Grid, Offset, List, Featured grid, Large grid). Supports toggling UI visibility and adapts its structure based on the selected variant. */
export const PortfolioSection = React.forwardRef<
  HTMLElement,
  PortfolioSectionProps
>(function PortfolioSection({ showUI = true, type = "Grid", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Portfolio" {...rest} ref={ref}>
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
      {["Grid", "Featured grid", "Large grid", "List"].includes(type) && (
        <CaseStudyBoxOutside
          moveRight={true}
          moveLeft={true}
          hasCTA={false}
          designedThumbnail={true}
          state={"Default"}
          type={"Bottom"}
          mode={"Light"}
        />
      )}
      {["Grid", "Featured grid", "Large grid", "List"].includes(type) && (
        <CaseStudyBoxOutside
          moveRight={true}
          moveLeft={true}
          hasCTA={false}
          designedThumbnail={true}
          state={"Default"}
          type={"Bottom"}
          mode={"Light"}
        />
      )}
      {["Grid", "Featured grid"].includes(type) && (
        <CaseStudyBoxOutside
          moveRight={true}
          moveLeft={true}
          hasCTA={false}
          designedThumbnail={true}
          state={"Default"}
          type={"Bottom"}
          mode={"Light"}
        />
      )}
      {type === "Grid" && (
        <CaseStudyBoxOutside
          moveRight={true}
          moveLeft={true}
          hasCTA={false}
          designedThumbnail={true}
          state={"Default"}
          type={"Bottom"}
          mode={"Light"}
        />
      )}
      {type === "Offset" && (
        <StyledColumn1>
          {type === "Offset" && (
            <StyledCaseStudyBoxOutside>
              <CaseStudyBoxOutside
                moveRight={true}
                moveLeft={true}
                hasCTA={false}
                designedThumbnail={true}
                state={"Default"}
                type={"Bottom"}
                mode={"Light"}
              />
            </StyledCaseStudyBoxOutside>
          )}
          {type === "Offset" && (
            <StyledCaseStudyBoxOutside2>
              <CaseStudyBoxOutside
                moveRight={true}
                moveLeft={true}
                hasCTA={false}
                designedThumbnail={true}
                state={"Default"}
                type={"Bottom"}
                mode={"Light"}
              />
            </StyledCaseStudyBoxOutside2>
          )}
        </StyledColumn1>
      )}
      {type === "Offset" && (
        <StyledColumn2>
          {type === "Offset" && (
            <StyledCaseStudyBoxOutside3>
              <CaseStudyBoxOutside
                moveRight={true}
                moveLeft={true}
                hasCTA={false}
                designedThumbnail={true}
                state={"Default"}
                type={"Bottom"}
                mode={"Light"}
              />
            </StyledCaseStudyBoxOutside3>
          )}
          {type === "Offset" && (
            <StyledCaseStudyBoxOutside22>
              <CaseStudyBoxOutside
                moveRight={true}
                moveLeft={true}
                hasCTA={false}
                designedThumbnail={true}
                state={"Default"}
                type={"Bottom"}
                mode={"Light"}
              />
            </StyledCaseStudyBoxOutside22>
          )}
        </StyledColumn2>
      )}
    </StyledRoot>
  );
});
