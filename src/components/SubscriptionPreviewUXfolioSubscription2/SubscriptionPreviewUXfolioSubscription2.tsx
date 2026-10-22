import React from "react";
import styled, { css } from "styled-components";
import { ProgressBarContinuous } from "../ProgressBarContinuous";

export interface SubscriptionPreviewUXfolioSubscription2Props extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "timeline" | "canceled" | "discount"
> {
  timeline?: "Past due" | "Normal" | "Ending";
  canceled?: "False" | "True";
  discount?: "False" | "True";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: 750px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #0f0f0f;
    border-radius: 8px;
  `,
);

const StyledPrice = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledPrimaryInfo = styled.div(
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
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledDescription = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledPriceAndDuration = styled.div(
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

const StyledPrice2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 51px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styled = styled.div(
  () => css`
    color: #fefefe;
    font-family: "Work Sans";
    font-size: 32px;
    font-weight: 600;
  `,
);

const Styled80 = styled.div(
  () => css`
    color: #fefefe;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const Styled108 = styled.div(
  () => css`
    color: #fefefe;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const StyledDuration = styled.div(
  () => css`
    color: #adadad;
    font-family: "Work Sans";
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.01em;
  `,
);

const StyledProgressBarContinuous = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledSecondaryInfo = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #adadad;
  `,
);

const StyledValue = styled.span(
  () => css`
    color: #fefefe;
  `,
);

const StyledRenewalPostDiscountPrice = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSecondaryInfo2 = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel2 = styled.span(
  () => css`
    color: #adadad;
  `,
);

const StyledValue2 = styled.span(
  () => css`
    color: #fefefe;
  `,
);

const StyledSecondaryInfo22 = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel3 = styled.span(
  () => css`
    color: #adadad;
  `,
);

const StyledValue3 = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** Displays a subscription preview card for UXfolio, showing the plan title, billing description, price, a progress bar, and renewal/discount details. Supports variants for timeline state (Normal, Past due, Ending), cancellation status, and discount visibility. */
export const SubscriptionPreviewUXfolioSubscription2 = React.forwardRef<
  HTMLElement,
  SubscriptionPreviewUXfolioSubscription2Props
>(function SubscriptionPreviewUXfolioSubscription2(
  { timeline = "Normal", canceled = "False", discount = "False", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="UXfolio subscription details" {...rest} ref={ref}>
      <StyledPrice>
        <StyledPrimaryInfo>
          <StyledTitle>{"UXfolio subscription"}</StyledTitle>
          <StyledDescription>{"Billed yearly"}</StyledDescription>
        </StyledPrimaryInfo>
        <StyledPriceAndDuration>
          <StyledPrice2>
            <Styled>{"$"}</Styled>
            {((timeline === "Normal" && discount === "False") ||
              (timeline === "Ending" && discount === "False") ||
              (timeline === "Past due" && discount === "False") ||
              (timeline === "Normal" && discount === "True") ||
              (timeline === "Ending" && discount === "True")) && (
              <Styled80>{"80"}</Styled80>
            )}
            {timeline === "Past due" && discount === "True" && (
              <Styled108>{"108"}</Styled108>
            )}
          </StyledPrice2>
          <StyledDuration>
            {
              (
                {
                  '["Normal","False"]': "per\nyear",
                  '["Ending","False"]': "per\nyear",
                  '["Past due","False"]': "per\nyear",
                  '["Normal","True"]': "first\nyear",
                  '["Ending","True"]': "first\nyear",
                  '["Past due","True"]': "per\nyear",
                } as Record<string, string>
              )[JSON.stringify([timeline, discount])]
            }
          </StyledDuration>
        </StyledPriceAndDuration>
      </StyledPrice>
      <StyledProgressBarContinuous>
        <ProgressBarContinuous timePast={"1/3"} mode={"Dark"} type={"Active"} />
      </StyledProgressBarContinuous>
      {((timeline === "Normal" &&
        canceled === "False" &&
        discount === "False") ||
        (timeline === "Ending" &&
          canceled === "False" &&
          discount === "False") ||
        (timeline === "Past due" &&
          canceled === "False" &&
          discount === "False") ||
        (timeline === "Normal" &&
          canceled === "True" &&
          discount === "False") ||
        (timeline === "Ending" &&
          canceled === "True" &&
          discount === "False") ||
        (timeline === "Past due" &&
          canceled === "False" &&
          discount === "True") ||
        (timeline === "Normal" && canceled === "True" && discount === "True") ||
        (timeline === "Ending" &&
          canceled === "True" &&
          discount === "True")) && (
        <StyledSecondaryInfo>
          {((timeline === "Normal" &&
            canceled === "False" &&
            discount === "False") ||
            (timeline === "Ending" &&
              canceled === "False" &&
              discount === "False") ||
            (timeline === "Past due" &&
              canceled === "False" &&
              discount === "False") ||
            (timeline === "Normal" &&
              canceled === "True" &&
              discount === "False") ||
            (timeline === "Ending" &&
              canceled === "True" &&
              discount === "False") ||
            (timeline === "Past due" &&
              canceled === "False" &&
              discount === "True") ||
            (timeline === "Normal" &&
              canceled === "True" &&
              discount === "True") ||
            (timeline === "Ending" &&
              canceled === "True" &&
              discount === "True")) && (
            <StyledLabel>
              {
                (
                  {
                    '["Normal","False"]': "Renews on",
                    '["Ending","False"]': "Renews on",
                    '["Past due","False"]':
                      "Update your payment details to avoid cancellation.",
                    '["Normal","True"]': "Cancels on",
                    '["Ending","True"]': "Cancels on",
                  } as Record<string, string>
                )[JSON.stringify([timeline, canceled])]
              }
            </StyledLabel>
          )}
          {((timeline === "Normal" &&
            canceled === "False" &&
            discount === "False") ||
            (timeline === "Ending" &&
              canceled === "False" &&
              discount === "False") ||
            (timeline === "Past due" &&
              canceled === "False" &&
              discount === "False") ||
            (timeline === "Normal" &&
              canceled === "True" &&
              discount === "False") ||
            (timeline === "Ending" &&
              canceled === "True" &&
              discount === "False") ||
            (timeline === "Past due" &&
              canceled === "False" &&
              discount === "True") ||
            (timeline === "Normal" &&
              canceled === "True" &&
              discount === "True") ||
            (timeline === "Ending" &&
              canceled === "True" &&
              discount === "True")) && (
            <StyledValue>
              {
                (
                  {
                    '["Normal"]': "Nov 13, 2025",
                    '["Ending"]': "Nov 13, 2025",
                    '["Past due"]': "Past due:",
                  } as Record<string, string>
                )[JSON.stringify([timeline])]
              }
            </StyledValue>
          )}
        </StyledSecondaryInfo>
      )}
      {((timeline === "Normal" &&
        canceled === "False" &&
        discount === "True") ||
        (timeline === "Ending" &&
          canceled === "False" &&
          discount === "True")) && (
        <StyledRenewalPostDiscountPrice>
          {((timeline === "Normal" &&
            canceled === "False" &&
            discount === "True") ||
            (timeline === "Ending" &&
              canceled === "False" &&
              discount === "True")) && (
            <StyledSecondaryInfo2>
              {((timeline === "Normal" &&
                canceled === "False" &&
                discount === "True") ||
                (timeline === "Ending" &&
                  canceled === "False" &&
                  discount === "True")) && (
                <StyledLabel2>{"Renews on"}</StyledLabel2>
              )}
              {((timeline === "Normal" &&
                canceled === "False" &&
                discount === "True") ||
                (timeline === "Ending" &&
                  canceled === "False" &&
                  discount === "True")) && (
                <StyledValue2>{"Nov 13, 2025"}</StyledValue2>
              )}
            </StyledSecondaryInfo2>
          )}
          {((timeline === "Normal" &&
            canceled === "False" &&
            discount === "True") ||
            (timeline === "Ending" &&
              canceled === "False" &&
              discount === "True")) && (
            <StyledSecondaryInfo22>
              {((timeline === "Normal" &&
                canceled === "False" &&
                discount === "True") ||
                (timeline === "Ending" &&
                  canceled === "False" &&
                  discount === "True")) && (
                <StyledLabel3>{"After first year"}</StyledLabel3>
              )}
              {((timeline === "Normal" &&
                canceled === "False" &&
                discount === "True") ||
                (timeline === "Ending" &&
                  canceled === "False" &&
                  discount === "True")) && (
                <StyledValue3>{"$108 / year"}</StyledValue3>
              )}
            </StyledSecondaryInfo22>
          )}
        </StyledRenewalPostDiscountPrice>
      )}
    </StyledRoot>
  );
});
