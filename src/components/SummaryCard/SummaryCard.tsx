import React from "react";
import styled, { css } from "styled-components";
import { Logo, type LogoProps } from "../Logo";
import { Tag, type TagProps } from "../Tag";
import { ProgressMain, type ProgressMainProps } from "../ProgressMain";
import { ProfilePicture, type ProfilePictureProps } from "../ProfilePicture";
import { SummaryItem, type SummaryItemProps } from "../SummaryItem";

export interface SummaryCardProps {
  summary: string;
  client: string;
  contact: string;
  owner: string;
  summaryItems?: SummaryItemProps[];
  logo: LogoProps["logo"];
  recentUpdateLabel: TagProps["label"];
  recentUpdateType: TagProps["type"];
  recentUpdateStatus: TagProps["status"];
  progress: ProgressMainProps["progress"];
  stageLabel: TagProps["label"];
  stageType: TagProps["type"];
  stageStatus: TagProps["status"];
  size: ProfilePictureProps["size"];
}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 393px;
    height: 722px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Neutral"]["White Transparency Scale"]["50"]};
    border-radius: 16px;
  `,
);

const StyledInfo = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 16px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 13px;
  `,
);

const StyledSummary = styled.div(
  () => css`
    color: #4b1e04;
    font-family: "PT Serif";
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledNetflixIsEvaluating3VendorsOurPricingIsCompetitiveButLegalReviewMayDelayTimeline =
  styled.p(
    () => css`
      color: #4b1e04;
      font-family: "Inter Tight";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 3px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 22px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledBrand = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNetflix = styled.div(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledArleneMcCoy = styled.div(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledTag = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 3px;
    padding-right: 0px;
    padding-bottom: 2px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledProgress = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 2px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledQuality = styled.div(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledOwner = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOwner2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledText2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    & > * + * {
      margin-top: -1px;
    }
    border-radius: 0px;
  `,
);

const StyledOwner3 = styled.div(
  ({ theme }) => css`
    color: ${theme["Neutral"]["Grey Transparency Scale"]["80"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
  `,
);

const StyledPhillip = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
  `,
);

const StyledSummaryItems = styled.ul(
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
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
    border-radius: 0px;
  `,
);

/** A summary card displaying a client overview including a text summary, client branding, contact info, quality progress, owner details, and a list of summary items. Used to surface key deal or account information at a glance. */
export function SummaryCard({
  summary,
  client,
  contact,
  owner,
  summaryItems,
  logo,
  recentUpdateLabel,
  recentUpdateType,
  recentUpdateStatus,
  progress,
  stageLabel,
  stageType,
  stageStatus,
  size,
}: SummaryCardProps) {
  return (
    <StyledRoot role="article" aria-label="Summary Card">
      <StyledInfo>
        <StyledSummary>{"Summary"}</StyledSummary>
        <StyledNetflixIsEvaluating3VendorsOurPricingIsCompetitiveButLegalReviewMayDelayTimeline>
          {summary}
        </StyledNetflixIsEvaluating3VendorsOurPricingIsCompetitiveButLegalReviewMayDelayTimeline>
      </StyledInfo>
      <StyledContainer>
        <StyledContent>
          <StyledBrand>
            <Logo logo={logo} />
            <StyledText>
              <StyledNetflix>{client}</StyledNetflix>
              <StyledArleneMcCoy>{contact}</StyledArleneMcCoy>
            </StyledText>
          </StyledBrand>
          <StyledTag>
            <Tag
              label={recentUpdateLabel}
              type={recentUpdateType}
              status={recentUpdateStatus}
            />
          </StyledTag>
        </StyledContent>
        <StyledProgress>
          <StyledQuality>{"Quality"}</StyledQuality>
          <ProgressMain progress={progress} />
        </StyledProgress>
      </StyledContainer>
      <StyledOwner>
        <Tag label={stageLabel} type={stageType} status={stageStatus} />
        <StyledOwner2>
          <StyledText2>
            <StyledOwner3>{"Owner"}</StyledOwner3>
            <StyledPhillip>{owner}</StyledPhillip>
          </StyledText2>
          <ProfilePicture size={size} />
        </StyledOwner2>
      </StyledOwner>
      <StyledSummaryItems>
        {summaryItems?.map((item, index) => (
          <li key={index}>
            <SummaryItem {...item} />
          </li>
        ))}
      </StyledSummaryItems>
    </StyledRoot>
  );
}
