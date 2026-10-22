import React from "react";
import styled, { css } from "styled-components";
import { Check } from "../Check";

export interface SubscriptionPreviewUXfolioSubscriptionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1"
> {
  property1?:
    | "Canceled"
    | "Yearly Set to Cancel"
    | "VIP"
    | "Monthly Payment Failed"
    | "Monthly Active"
    | "Yearly Payment Failed"
    | "Yearly Active";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 6px;
  `,
);

const StyledFrame48097193 = styled.section(
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

const StyledPrimaryInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 132px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledYearlySubscription = styled.h2(
  () => css`
    color: #262626;
  `,
);

const Styled108 = styled.div(
  () => css`
    color: #262626;
  `,
);

const StyledMonthlySubscription = styled.h2(
  () => css`
    color: #262626;
  `,
);

const Styled15 = styled.div(
  () => css`
    color: #262626;
  `,
);

const StyledVIPSubscription = styled.h2(
  () => css`
    color: #262626;
  `,
);

const Styled0 = styled.div(
  () => css`
    color: #262626;
  `,
);

const StyledFrame48097188 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCountdownBar = styled.div<{
  $property1:
    | "Canceled"
    | "Yearly Set to Cancel"
    | "VIP"
    | "Monthly Payment Failed"
    | "Monthly Active"
    | "Yearly Payment Failed"
    | "Yearly Active";
}>(
  ({ $property1 }) => css`
    overflow: hidden;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #eeeeee;
    border-radius: 6px;
    ${(() => {
      switch ($property1) {
        case "Yearly Active":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 643px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Monthly Active":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Monthly Payment Failed":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "VIP":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Yearly Set to Cancel":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 643px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48097068 = styled.div<{
  $property1:
    | "Canceled"
    | "Yearly Set to Cancel"
    | "VIP"
    | "Monthly Payment Failed"
    | "Monthly Active"
    | "Yearly Payment Failed"
    | "Yearly Active";
}>(
  ({ $property1 }) => css`
    overflow: hidden;
    ${(() => {
      switch ($property1) {
        case "Yearly Active":
          return css`
            width: 67px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Monthly Active":
          return css`
            width: 724px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Monthly Payment Failed":
          return css`
            width: 800px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "VIP":
          return css`
            width: 800px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Yearly Set to Cancel":
          return css`
            width: 67px;
            height: 20px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($property1) {
        case "Yearly Active":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Monthly Active":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Monthly Payment Failed":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "VIP":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Yearly Set to Cancel":
          return css`
            background-color: ${"#ef4444"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48097189 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCountdownBar2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    overflow: hidden;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #eeeeee;
    border-radius: 6px;
  `,
);

const StyledFrame480970682 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #ef4444;
    width: 800px;
    height: 20px;
    box-sizing: border-box;
  `,
);

const StyledFrame48097196 = styled.section(
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

const StyledFrame48097194 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSecondaryInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled27DaysUntilSubscriptionExpires = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledPaidYearly = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledRenewsOn5January2025 = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledYourYearlyPaymentFailed = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledSubscriptionWasSupposedToRenewOn20October2024 = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledPaidMonthly = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledRenewsOn25November2024 = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledYourPaymentFailedAndYourSubscriptionEndedOnNextTryDate = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledWeLlTryToChargeYourBankAccountAgainOnNextTryDate = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledUnlimitedForLifeForVIPsOnly = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledCancelsOn5January2025 = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledCanceledOn4January2024 = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame48097195 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSecondaryInfo2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFeaturesIncluded = styled.h3(
  () => css`
    color: #3d3d3d;
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: 0.01em;
  `,
);

const StyledSecondaryInfo22 = styled.ul(
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
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame48097039 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPublishYourPortfolioAndCaseStudies = styled.span(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame48097041 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledAddCustomDomain = styled.span(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame48097040 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSendYourPortfolioForReview = styled.span(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame480971962 = styled.div(
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

const StyledFrame480971952 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSecondaryInfo3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledToKeepYourEditingAccess = styled.h3(
  () => css`
    color: #3d3d3d;
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: 0.01em;
  `,
);

const StyledSecondaryInfo23 = styled.ul(
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
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame480970392 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledEnsureThatYouHaveSufficientFunds = styled.div(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame480970412 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledUpdateYourPaymentMethodOr = styled.div(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame480970402 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRequestAPaymentLinkHere = styled.div(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledFrame480971942 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSecondaryInfo4 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledWeLlAutomaticallyTryToChargeYourBankAccountAgainOnNextTryDate =
  styled.p(
    () => css`
      color: #3d3d3d;
    `,
  );

const StyledFrame48097197 = styled.div(
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

const StyledPrimaryInfo2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 132px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCanceled = styled.h2(
  () => css`
    color: #262626;
  `,
);

const Styled02 = styled.div(
  () => css`
    color: #262626;
  `,
);

const StyledFrame480971892 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCountdownBar3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 587px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    overflow: hidden;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #eeeeee;
    border-radius: 6px;
  `,
);

const StyledFrame480970683 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #dcfa37;
    width: 1px;
    height: 20px;
    box-sizing: border-box;
  `,
);

/** Displays a preview of a user's UXfolio subscription status, including subscription type (Yearly, Monthly, VIP, or Canceled), pricing, a countdown/progress bar, and contextual details such as renewal dates, cancellation info, payment failure messages, and included features. */
export const SubscriptionPreviewUXfolioSubscription = React.forwardRef<
  HTMLElement,
  SubscriptionPreviewUXfolioSubscriptionProps
>(function SubscriptionPreviewUXfolioSubscription(
  { property1 = "Yearly Active", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Subscription details"
      {...rest}
      ref={ref}
    >
      {[
        "Yearly Active",
        "Yearly Payment Failed",
        "Monthly Active",
        "Monthly Payment Failed",
        "VIP",
        "Yearly Set to Cancel",
      ].includes(property1) && (
        <StyledFrame48097193>
          {[
            "Yearly Active",
            "Yearly Payment Failed",
            "Monthly Active",
            "Monthly Payment Failed",
            "VIP",
            "Yearly Set to Cancel",
          ].includes(property1) && (
            <StyledPrimaryInfo>
              {[
                "Yearly Active",
                "Yearly Payment Failed",
                "Yearly Set to Cancel",
              ].includes(property1) && (
                <StyledYearlySubscription>
                  {"Yearly subscription"}
                </StyledYearlySubscription>
              )}
              {[
                "Yearly Active",
                "Yearly Payment Failed",
                "Yearly Set to Cancel",
              ].includes(property1) && <Styled108>{"$108"}</Styled108>}
              {["Monthly Active", "Monthly Payment Failed"].includes(
                property1,
              ) && (
                <StyledMonthlySubscription>
                  {"Monthly subscription"}
                </StyledMonthlySubscription>
              )}
              {["Monthly Active", "Monthly Payment Failed"].includes(
                property1,
              ) && <Styled15>{"$15"}</Styled15>}
              {property1 === "VIP" && (
                <StyledVIPSubscription>
                  {"VIP subscription"}
                </StyledVIPSubscription>
              )}
              {property1 === "VIP" && <Styled0>{"$0"}</Styled0>}
            </StyledPrimaryInfo>
          )}
          {[
            "Yearly Active",
            "Monthly Active",
            "Monthly Payment Failed",
            "VIP",
            "Yearly Set to Cancel",
          ].includes(property1) && (
            <StyledFrame48097188>
              {[
                "Yearly Active",
                "Monthly Active",
                "Monthly Payment Failed",
                "VIP",
                "Yearly Set to Cancel",
              ].includes(property1) && (
                <StyledCountdownBar $property1={property1}>
                  {[
                    "Yearly Active",
                    "Monthly Active",
                    "Monthly Payment Failed",
                    "VIP",
                    "Yearly Set to Cancel",
                  ].includes(property1) && (
                    <StyledFrame48097068
                      $property1={property1}
                    ></StyledFrame48097068>
                  )}
                </StyledCountdownBar>
              )}
            </StyledFrame48097188>
          )}
          {property1 === "Yearly Payment Failed" && (
            <StyledFrame48097189>
              {property1 === "Yearly Payment Failed" && (
                <StyledCountdownBar2>
                  {property1 === "Yearly Payment Failed" && (
                    <StyledFrame480970682></StyledFrame480970682>
                  )}
                </StyledCountdownBar2>
              )}
            </StyledFrame48097189>
          )}
        </StyledFrame48097193>
      )}
      <StyledFrame48097196>
        <StyledFrame48097194>
          <StyledSecondaryInfo>
            {[
              "Yearly Active",
              "Monthly Active",
              "Yearly Set to Cancel",
              "Canceled",
            ].includes(property1) && (
              <Styled27DaysUntilSubscriptionExpires>
                {"27 days until subscription expires"}
              </Styled27DaysUntilSubscriptionExpires>
            )}
            {["Yearly Active", "Yearly Set to Cancel", "Canceled"].includes(
              property1,
            ) && <StyledPaidYearly>{"Paid yearly"}</StyledPaidYearly>}
            {property1 === "Yearly Active" && (
              <StyledRenewsOn5January2025>
                {"Renews on 5 January, 2025"}
              </StyledRenewsOn5January2025>
            )}
            {property1 === "Yearly Payment Failed" && (
              <StyledYourYearlyPaymentFailed>
                {"Your Yearly payment failed"}
              </StyledYourYearlyPaymentFailed>
            )}
            {property1 === "Yearly Payment Failed" && (
              <StyledSubscriptionWasSupposedToRenewOn20October2024>
                {"Subscription was supposed to renew on 20 October 2024"}
              </StyledSubscriptionWasSupposedToRenewOn20October2024>
            )}
            {property1 === "Monthly Active" && (
              <StyledPaidMonthly>{"Paid monthly"}</StyledPaidMonthly>
            )}
            {property1 === "Monthly Active" && (
              <StyledRenewsOn25November2024>
                {"Renews on 25 November, 2024"}
              </StyledRenewsOn25November2024>
            )}
            {property1 === "Monthly Payment Failed" && (
              <StyledYourPaymentFailedAndYourSubscriptionEndedOnNextTryDate>
                {
                  "Your payment failed and your subscription ended on {{ next try date }}"
                }
              </StyledYourPaymentFailedAndYourSubscriptionEndedOnNextTryDate>
            )}
            {property1 === "Monthly Payment Failed" && (
              <StyledWeLlTryToChargeYourBankAccountAgainOnNextTryDate>
                {
                  "We'll try to charge your bank account again on {{ next try date }}."
                }
              </StyledWeLlTryToChargeYourBankAccountAgainOnNextTryDate>
            )}
            {property1 === "VIP" && (
              <StyledUnlimitedForLifeForVIPsOnly>
                {"Unlimited for life for VIPs only"}
              </StyledUnlimitedForLifeForVIPsOnly>
            )}
            {property1 === "Yearly Set to Cancel" && (
              <StyledCancelsOn5January2025>
                {"Cancels on 5 January, 2025"}
              </StyledCancelsOn5January2025>
            )}
            {property1 === "Canceled" && (
              <StyledCanceledOn4January2024>
                {"Canceled on 4 January, 2024"}
              </StyledCanceledOn4January2024>
            )}
          </StyledSecondaryInfo>
        </StyledFrame48097194>
        {[
          "Yearly Active",
          "Monthly Active",
          "VIP",
          "Yearly Set to Cancel",
          "Canceled",
        ].includes(property1) && (
          <StyledFrame48097195>
            {[
              "Yearly Active",
              "Monthly Active",
              "VIP",
              "Yearly Set to Cancel",
              "Canceled",
            ].includes(property1) && (
              <StyledSecondaryInfo2>
                {[
                  "Yearly Active",
                  "Monthly Active",
                  "VIP",
                  "Yearly Set to Cancel",
                  "Canceled",
                ].includes(property1) && (
                  <StyledFeaturesIncluded>
                    {"Features included:"}
                  </StyledFeaturesIncluded>
                )}
              </StyledSecondaryInfo2>
            )}
            {[
              "Yearly Active",
              "Monthly Active",
              "VIP",
              "Yearly Set to Cancel",
              "Canceled",
            ].includes(property1) && (
              <StyledSecondaryInfo22>
                {[
                  "Yearly Active",
                  "Monthly Active",
                  "VIP",
                  "Yearly Set to Cancel",
                  "Canceled",
                ].includes(property1) && (
                  <StyledFrame48097039>
                    {[
                      "Yearly Active",
                      "Monthly Active",
                      "VIP",
                      "Yearly Set to Cancel",
                      "Canceled",
                    ].includes(property1) && <Check />}
                    {[
                      "Yearly Active",
                      "Monthly Active",
                      "VIP",
                      "Yearly Set to Cancel",
                      "Canceled",
                    ].includes(property1) && (
                      <StyledPublishYourPortfolioAndCaseStudies>
                        {"Publish your portfolio and case studies"}
                      </StyledPublishYourPortfolioAndCaseStudies>
                    )}
                  </StyledFrame48097039>
                )}
                {[
                  "Yearly Active",
                  "Monthly Active",
                  "VIP",
                  "Yearly Set to Cancel",
                  "Canceled",
                ].includes(property1) && (
                  <StyledFrame48097041>
                    {[
                      "Yearly Active",
                      "Monthly Active",
                      "VIP",
                      "Yearly Set to Cancel",
                      "Canceled",
                    ].includes(property1) && <Check />}
                    {[
                      "Yearly Active",
                      "Monthly Active",
                      "VIP",
                      "Yearly Set to Cancel",
                      "Canceled",
                    ].includes(property1) && (
                      <StyledAddCustomDomain>
                        {"Add custom domain"}
                      </StyledAddCustomDomain>
                    )}
                  </StyledFrame48097041>
                )}
                {[
                  "Yearly Active",
                  "Monthly Active",
                  "VIP",
                  "Yearly Set to Cancel",
                  "Canceled",
                ].includes(property1) && (
                  <StyledFrame48097040>
                    {[
                      "Yearly Active",
                      "Monthly Active",
                      "VIP",
                      "Yearly Set to Cancel",
                      "Canceled",
                    ].includes(property1) && <Check />}
                    {[
                      "Yearly Active",
                      "Monthly Active",
                      "VIP",
                      "Yearly Set to Cancel",
                      "Canceled",
                    ].includes(property1) && (
                      <StyledSendYourPortfolioForReview>
                        {"Send your portfolio for review"}
                      </StyledSendYourPortfolioForReview>
                    )}
                  </StyledFrame48097040>
                )}
              </StyledSecondaryInfo22>
            )}
          </StyledFrame48097195>
        )}
        {["Yearly Payment Failed", "Monthly Payment Failed"].includes(
          property1,
        ) && (
          <StyledFrame480971962>
            {["Yearly Payment Failed", "Monthly Payment Failed"].includes(
              property1,
            ) && (
              <StyledFrame480971952>
                {["Yearly Payment Failed", "Monthly Payment Failed"].includes(
                  property1,
                ) && (
                  <StyledSecondaryInfo3>
                    {[
                      "Yearly Payment Failed",
                      "Monthly Payment Failed",
                    ].includes(property1) && (
                      <StyledToKeepYourEditingAccess>
                        {"To keep your editing access:"}
                      </StyledToKeepYourEditingAccess>
                    )}
                  </StyledSecondaryInfo3>
                )}
                {["Yearly Payment Failed", "Monthly Payment Failed"].includes(
                  property1,
                ) && (
                  <StyledSecondaryInfo23>
                    {[
                      "Yearly Payment Failed",
                      "Monthly Payment Failed",
                    ].includes(property1) && (
                      <StyledFrame480970392>
                        {[
                          "Yearly Payment Failed",
                          "Monthly Payment Failed",
                        ].includes(property1) && (
                          <StyledEnsureThatYouHaveSufficientFunds>
                            {"Ensure that you have sufficient funds"}
                          </StyledEnsureThatYouHaveSufficientFunds>
                        )}
                      </StyledFrame480970392>
                    )}
                    {[
                      "Yearly Payment Failed",
                      "Monthly Payment Failed",
                    ].includes(property1) && (
                      <StyledFrame480970412>
                        {[
                          "Yearly Payment Failed",
                          "Monthly Payment Failed",
                        ].includes(property1) && (
                          <StyledUpdateYourPaymentMethodOr>
                            {"Update your payment method, or"}
                          </StyledUpdateYourPaymentMethodOr>
                        )}
                      </StyledFrame480970412>
                    )}
                    {[
                      "Yearly Payment Failed",
                      "Monthly Payment Failed",
                    ].includes(property1) && (
                      <StyledFrame480970402>
                        {[
                          "Yearly Payment Failed",
                          "Monthly Payment Failed",
                        ].includes(property1) && (
                          <StyledRequestAPaymentLinkHere>
                            {"Request a payment link here"}
                          </StyledRequestAPaymentLinkHere>
                        )}
                      </StyledFrame480970402>
                    )}
                  </StyledSecondaryInfo23>
                )}
              </StyledFrame480971952>
            )}
            {property1 === "Yearly Payment Failed" && (
              <StyledFrame480971942>
                {property1 === "Yearly Payment Failed" && (
                  <StyledSecondaryInfo4>
                    {property1 === "Yearly Payment Failed" && (
                      <StyledWeLlAutomaticallyTryToChargeYourBankAccountAgainOnNextTryDate>
                        {
                          "We'll automatically try to charge your bank account again on {{ next try date }}."
                        }
                      </StyledWeLlAutomaticallyTryToChargeYourBankAccountAgainOnNextTryDate>
                    )}
                  </StyledSecondaryInfo4>
                )}
              </StyledFrame480971942>
            )}
          </StyledFrame480971962>
        )}
      </StyledFrame48097196>
      {property1 === "Canceled" && (
        <StyledFrame48097197>
          {property1 === "Canceled" && (
            <StyledPrimaryInfo2>
              {property1 === "Canceled" && (
                <StyledCanceled>{"Canceled"}</StyledCanceled>
              )}
              {property1 === "Canceled" && <Styled02>{"$0"}</Styled02>}
            </StyledPrimaryInfo2>
          )}
          {property1 === "Canceled" && (
            <StyledFrame480971892>
              {property1 === "Canceled" && (
                <StyledCountdownBar3>
                  {property1 === "Canceled" && (
                    <StyledFrame480970683></StyledFrame480970683>
                  )}
                </StyledCountdownBar3>
              )}
            </StyledFrame480971892>
          )}
        </StyledFrame48097197>
      )}
    </StyledRoot>
  );
});
