import React from "react";
import styled, { css } from "styled-components";
import { ProgressBarContinuous } from "../ProgressBarContinuous";

export interface SubscriptionPreviewFreeTrial2Props extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "timeline"
> {
  timeline?: "Normal" | "Near end";
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
    background-color: #fefefe;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #eeeeee;
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
    color: #0f0f0f;
  `,
);

const StyledDescription = styled.p(
  () => css`
    color: #707070;
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
    color: #707070;
  `,
);

const StyledValue = styled.span(
  () => css`
    color: #0f0f0f;
  `,
);

/** Displays a subscription preview for a free trial, showing the trial title, remaining days, a progress bar indicating timeline status, and the trial end date. Supports 'Normal' and 'Near end' timeline variants to visually indicate urgency. */
export const SubscriptionPreviewFreeTrial2 = React.forwardRef<
  HTMLElement,
  SubscriptionPreviewFreeTrial2Props
>(function SubscriptionPreviewFreeTrial2(
  { timeline = "Normal", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Free trial subscription status"
      {...rest}
      ref={ref}
    >
      <StyledPrice>
        <StyledPrimaryInfo>
          <StyledTitle>{"UXfolio Free trial"}</StyledTitle>
          <StyledDescription>
            {
              (
                {
                  '["Normal"]': "4 days left",
                  '["Near end"]': "22 hours left",
                } as Record<string, string>
              )[JSON.stringify([timeline])]
            }
          </StyledDescription>
        </StyledPrimaryInfo>
      </StyledPrice>
      <StyledProgressBarContinuous>
        <ProgressBarContinuous
          timePast={"1/3"}
          mode={"Light"}
          type={"Active"}
        />
      </StyledProgressBarContinuous>
      <StyledSecondaryInfo>
        <StyledLabel>{"Ends on"}</StyledLabel>
        <StyledValue>{"Nov 13, 2025"}</StyledValue>
      </StyledSecondaryInfo>
    </StyledRoot>
  );
});
