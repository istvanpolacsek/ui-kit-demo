import React from "react";
import styled, { css } from "styled-components";
import { ProfilePicture, type ProfilePictureProps } from "../ProfilePicture";
import { ButtonPrimary, type ButtonPrimaryProps } from "../ButtonPrimary";

export interface ActivityTimelineProps {
  date: string;
  title: string;
  summary: string;
  lastContributorName: string;
  contributors?: ProfilePictureProps[];
  actions?: ButtonPrimaryProps[];
}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-right: 24px;
    padding-bottom: 20px;
    padding-left: 24px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 634px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Neutral"]["White Transparency Scale"]["50"]};
    border-radius: 16px;
  `,
);

const StyledSept4202609 = styled.div(
  ({ theme }) => css`
    color: ${theme["Neutral"]["Maroon Scale"]["70"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledInfo = styled.div(
  () => css`
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

const StyledProposalSent = styled.h3(
  ({ theme }) => css`
    color: ${theme["Neutral"]["Maroon"]};
    font-family: "PT Serif";
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledProposalV2SentToArleneIncludesEnterprisePricingTierAndOnboardingPackage =
  styled.p(
    ({ theme }) => css`
      color: ${theme["Neutral"]["Maroon Scale"]["70"]};
      font-family: "Inter Tight";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledName = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledContributors = styled.ul(
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
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    & > * + * {
      margin-left: -12px;
    }
    border-radius: 0px;
  `,
);

const StyledJessicaPierson = styled.div(
  () => css`
    color: #3c3c3c;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledActions = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** Displays a single activity timeline entry, showing a timestamp, title, summary, contributor avatars, and associated actions for a recorded event or interaction. */
export function ActivityTimeline({
  date,
  title,
  summary,
  lastContributorName,
  contributors,
  actions,
}: ActivityTimelineProps) {
  return (
    <StyledRoot role="article" aria-label="Activity: Proposal Sent">
      <StyledSept4202609>{date}</StyledSept4202609>
      <StyledContent>
        <StyledInfo>
          <StyledProposalSent>{title}</StyledProposalSent>
          <StyledProposalV2SentToArleneIncludesEnterprisePricingTierAndOnboardingPackage>
            {summary}
          </StyledProposalV2SentToArleneIncludesEnterprisePricingTierAndOnboardingPackage>
          <StyledName>
            <StyledContributors>
              {contributors?.map((item, index) => (
                <li key={index}>
                  <ProfilePicture {...item} />
                </li>
              ))}
            </StyledContributors>
            <StyledJessicaPierson>{lastContributorName}</StyledJessicaPierson>
          </StyledName>
        </StyledInfo>
        <StyledActions>
          {actions?.map((item, index) => (
            <ButtonPrimary key={index} {...item} />
          ))}
        </StyledActions>
      </StyledContent>
    </StyledRoot>
  );
}
