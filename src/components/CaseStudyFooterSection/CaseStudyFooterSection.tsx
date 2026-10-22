import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesFooter } from "../SectionStatesFooter";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { TextBox } from "../TextBox";
import {
  CaseStudyNavigationItem,
  type CaseStudyNavigationItemProps,
} from "../CaseStudyNavigationItem";

export interface CaseStudyFooterSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  | "hasTitle"
  | "hasDivider"
  | "showUI"
  | "type"
  | "caseStudyNavigationItemHasThumbnail"
  | "caseStudyNavigationItemType"
  | "caseStudyNavigationItem2HasThumbnail"
  | "caseStudyNavigationItem2Type"
  | "caseStudyNavigationItem3HasThumbnail"
  | "caseStudyNavigationItem3Type"
> {
  hasTitle?: boolean;
  hasDivider?: boolean;
  showUI?: boolean;
  type?: "1" | "Empty" | "0" | "3 or more" | "2";
  caseStudyNavigationItemHasThumbnail?: CaseStudyNavigationItemProps["hasThumbnail"];
  caseStudyNavigationItemType?: CaseStudyNavigationItemProps["type"];
  caseStudyNavigationItem2HasThumbnail?: CaseStudyNavigationItemProps["hasThumbnail"];
  caseStudyNavigationItem2Type?: CaseStudyNavigationItemProps["type"];
  caseStudyNavigationItem3HasThumbnail?: CaseStudyNavigationItemProps["hasThumbnail"];
  caseStudyNavigationItem3Type?: CaseStudyNavigationItemProps["type"];
}

const StyledRoot = styled.section<{
  $type: "1" | "Empty" | "0" | "3 or more" | "2";
}>(
  ({ theme, $type }) => css`
    position: relative;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Empty":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: center;
            align-items: center;
            width: 1440px;
            height: 148px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "0":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 44px;
            padding-right: 126px;
            padding-bottom: 44px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "1":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "2":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "3 or more":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: #0f0f0f;
  `,
);

const StyledSectionStatesFooter = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 148px;
  `,
);

const StyledOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 148px;
    background-color: #0f0f0f;
    border-radius: 0px;
  `,
);

const StyledWrapper = styled.div(
  () => css`
    border-radius: 8px;
  `,
);

const StyledBackground = styled.div(
  () => css`
    width: 1188px;
    height: 224px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledDescription = styled.p(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledTitle = styled.header(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDivider = styled.div(
  ({ theme }) => css`
    background-color: ${theme["Color 4"]};
    border-radius: 0px;
  `,
);

const StyledCaseStudies = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCaseStudyNavigationItem = styled.li(() => css``);

const StyledCaseStudyNavigationItem2 = styled.li(() => css``);

const StyledCaseStudyNavigationItem3 = styled.li(() => css``);

/** A footer section for case study pages that displays related case study navigation items, an optional title, and an optional divider. Supports multiple layout variants including empty states and 1–3+ case study links. */
export const CaseStudyFooterSection = React.forwardRef<
  HTMLElement,
  CaseStudyFooterSectionProps
>(function CaseStudyFooterSection(
  {
    hasTitle = true,
    hasDivider = true,
    showUI = true,
    type = "Empty",
    caseStudyNavigationItemHasThumbnail = true,
    caseStudyNavigationItemType = "Default",
    caseStudyNavigationItem2HasThumbnail = true,
    caseStudyNavigationItem2Type = "Default",
    caseStudyNavigationItem3HasThumbnail = true,
    caseStudyNavigationItem3Type = "Default",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Related case studies"
      {...rest}
      ref={ref}
      $type={type}
    >
      {showUI && (
        <StyledSectionStatesFooter>
          <SectionStatesFooter
            addNavigation={false}
            addSocialLink={false}
            addText={false}
            addMedia={false}
            flipHorizontally={false}
            type={"Default"}
            mode={"Light"}
          />
        </StyledSectionStatesFooter>
      )}
      {type === "Empty" && (
        <TertiaryButtonNeutral mode={"Light"} hasIcon={"True"} size={"Large"} />
      )}
      {type === "Empty" && <StyledOverlay />}
      {type === "0" && (
        <StyledWrapper>
          {type === "0" && <StyledBackground />}
          {type === "0" && (
            <StyledDescription>
              {
                "Your related case studies will show up here, once you’ve published more than one case study."
              }
            </StyledDescription>
          )}
        </StyledWrapper>
      )}
      {["1", "2", "3 or more"].includes(type) && (
        <StyledTitle>
          {hasTitle && (
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
          {hasDivider && <StyledDivider />}
        </StyledTitle>
      )}
      {["1", "2", "3 or more"].includes(type) && (
        <StyledCaseStudies>
          {["1", "2", "3 or more"].includes(type) && (
            <StyledCaseStudyNavigationItem>
              <CaseStudyNavigationItem
                hasThumbnail={caseStudyNavigationItemHasThumbnail}
                type={caseStudyNavigationItemType}
              />
            </StyledCaseStudyNavigationItem>
          )}
          {["2", "3 or more"].includes(type) && (
            <StyledCaseStudyNavigationItem2>
              <CaseStudyNavigationItem
                hasThumbnail={caseStudyNavigationItem2HasThumbnail}
                type={caseStudyNavigationItem2Type}
              />
            </StyledCaseStudyNavigationItem2>
          )}
          {type === "3 or more" && (
            <StyledCaseStudyNavigationItem3>
              <CaseStudyNavigationItem
                hasThumbnail={caseStudyNavigationItem3HasThumbnail}
                type={caseStudyNavigationItem3Type}
              />
            </StyledCaseStudyNavigationItem3>
          )}
        </StyledCaseStudies>
      )}
    </StyledRoot>
  );
});
