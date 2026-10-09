import React from "react";
import styled, { css } from "styled-components";
import { Logo, type LogoProps } from "../Logo";
import { Tag, type TagProps } from "../Tag";
import { ProgressMain, type ProgressMainProps } from "../ProgressMain";
import { ProfilePicture, type ProfilePictureProps } from "../ProfilePicture";

export interface CRMCardProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  | "client"
  | "showStatusTag"
  | "leadValue"
  | "contact"
  | "owner"
  | "status"
  | "logo"
  | "recentUpdateLabel"
  | "recentUpdateType"
  | "recentUpdateStatus"
  | "progress"
  | "stageLabel"
  | "stageType"
  | "stageStatus"
  | "size"
> {
  client: string;
  showStatusTag: boolean;
  leadValue: string;
  contact: string;
  owner: string;
  status:
    | "qualified"
    | "new"
    | "call-scheduled"
    | "proposal-sent"
    | "negotiation"
    | "contract-sent"
    | "won-&-signed";
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

const StyledRoot = styled.article<{
  $status:
    | "qualified"
    | "new"
    | "call-scheduled"
    | "proposal-sent"
    | "negotiation"
    | "contract-sent"
    | "won-&-signed";
}>(
  ({ theme, $status }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 384px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Neutral"]["Grey Transparency Scale"]["30"]};
    border-radius: 34px;
    ${(() => {
      switch ($status) {
        case "new":
          return css`
            background-color: ${theme["Neutral"]["White Transparency Scale"]["90"]};
          `;
        case "qualified":
          return css`
            background-color: ${theme["Brand"]["Peach"]};
          `;
        case "call-scheduled":
          return css`
            background-color: ${theme["Brand"]["Coral"]};
          `;
        case "proposal-sent":
          return css`
            background-color: ${theme["Brand"]["Beige"]};
          `;
        case "negotiation":
          return css`
            background-color: ${"#f9cfa2"};
          `;
        case "contract-sent":
          return css`
            background-color: ${"#f0c6b1"};
          `;
        case "won-&-signed":
          return css`
            background-color: ${"#e6dfb1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContainer = styled.article(
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

const StyledAirbnb = styled.h3(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledSarahConnor = styled.p(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled10000 = styled.p(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledStatus = styled.div(
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

const StyledQuality = styled.label(
  () => css`
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledStage = styled.div(
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

const StyledFrame48 = styled.div(
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

const StyledFrame35 = styled.div(
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

const StyledOwner = styled.label(
  ({ theme }) => css`
    color: ${theme["Neutral"]["Grey Transparency Scale"]["80"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
  `,
);

const StyledJessicaPierson = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
  `,
);

/** A CRM card component displaying a client's lead information, including brand/logo, contact details, lead value, status tag, pipeline stage, progress indicator, and owner assignment. Supports multiple CRM pipeline statuses. */
export const CRMCard = React.forwardRef<HTMLElement, CRMCardProps>(
  function CRMCard(
    {
      client,
      showStatusTag,
      leadValue,
      contact,
      owner,
      status,
      logo,
      recentUpdateLabel,
      recentUpdateType,
      recentUpdateStatus,
      progress,
      stageLabel,
      stageType,
      stageStatus,
      size,
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="article"
        aria-label="CRM lead card"
        {...rest}
        ref={ref}
        $status={status}
      >
        <StyledContainer>
          <StyledContent>
            <StyledBrand>
              <Logo logo={logo} />
              <StyledText>
                <StyledAirbnb>{client}</StyledAirbnb>
                <StyledSarahConnor>{contact}</StyledSarahConnor>
                <Styled10000>{leadValue}</Styled10000>
              </StyledText>
            </StyledBrand>
            <StyledStatus>
              {showStatusTag && (
                <Tag
                  label={recentUpdateLabel}
                  type={recentUpdateType}
                  status={recentUpdateStatus}
                />
              )}
            </StyledStatus>
          </StyledContent>
          <StyledProgress>
            <StyledQuality>{"Quality"}</StyledQuality>
            <ProgressMain progress={progress} />
          </StyledProgress>
        </StyledContainer>
        <StyledStage>
          <Tag label={stageLabel} type={stageType} status={stageStatus} />
          <StyledFrame48>
            <StyledFrame35>
              <StyledOwner>{"Owner"}</StyledOwner>
              <StyledJessicaPierson>{owner}</StyledJessicaPierson>
            </StyledFrame35>
            <ProfilePicture size={size} />
          </StyledFrame48>
        </StyledStage>
      </StyledRoot>
    );
  },
);
