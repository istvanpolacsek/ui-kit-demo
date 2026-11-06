import React from "react";
import styled, { css } from "styled-components";
import { Logo, type LogoProps } from "../Logo";

export interface RiskyDealProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "client" | "activity" | "totalValue" | "timeline" | "logo"
> {
  client?: string;
  activity?: string;
  totalValue?: string;
  timeline?: string;
  logo?: LogoProps["logo"];
}

const StyledRoot = styled.article(
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

const StyledDeal = styled.header(
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

const StyledMicrosoft = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: var(--font-inter-tight, "Inter Tight"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledEnterpriseExpansion = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: var(--font-inter-tight, "Inter Tight"), sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled48500 = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: var(--font-inter-tight, "Inter Tight"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledLastActivity16DaysAgo = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Secondary"]};
    font-family: var(--font-inter-tight, "Inter Tight"), sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A card summarizing an at-risk sales deal, showing the client logo, client name, activity name, total deal value, and a timeline note about the last activity. */
export const RiskyDeal = React.forwardRef<HTMLElement, RiskyDealProps>(
  function RiskyDeal(
    {
      client = "Microsoft",
      activity = "Enterprise Expansion",
      totalValue = "$48,500",
      timeline = "Last activity 16 days ago",
      logo = "Microsoft",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot {...rest} ref={ref}>
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
  },
);
