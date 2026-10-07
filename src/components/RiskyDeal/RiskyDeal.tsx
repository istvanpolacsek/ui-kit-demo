import React from "react";
import styled, { css } from "styled-components";
import { Logo, type LogoProps } from "../Logo";

export interface RiskyDealProps {
  client: string;
  activity: string;
  totalValue: string;
  timeline: string;
  logo: LogoProps["logo"];
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: space-between;
    align-items: flex-start;
    width: 368px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledDeal = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledinFP = styled.div(
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

const StyledMicrosoft = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledEnterpriseExpansion = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled48500 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledLastActivity16DaysAgo = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Secondary"]};
    font-family: "Inter Tight";
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

export function RiskyDeal({
  client,
  activity,
  totalValue,
  timeline,
  logo,
}: RiskyDealProps) {
  return (
    <StyledRoot>
      <StyledDeal>
        <Logo logo={logo} />
        <StyledinFP>
          <StyledMicrosoft>{client}</StyledMicrosoft>
          <StyledEnterpriseExpansion>{activity}</StyledEnterpriseExpansion>
          <Styled48500>{totalValue}</Styled48500>
        </StyledinFP>
      </StyledDeal>
      <StyledLastActivity16DaysAgo>{timeline}</StyledLastActivity16DaysAgo>
    </StyledRoot>
  );
}
