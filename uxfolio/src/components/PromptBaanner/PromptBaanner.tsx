import React from "react";
import styled, { css } from "styled-components";
import { Lock } from "../Lock";
import { LinkButton } from "../LinkButton";

export interface PromptBaannerProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1"
> {
  property1?:
    "Trial ended" | "Trial in progress" | "Subscription ended" | "Past due";
}

const StyledRoot = styled.section<{
  $property1:
    "Trial ended" | "Trial in progress" | "Subscription ended" | "Past due";
}>(
  ({ $property1 }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 24px;
    padding-bottom: 0px;
    padding-left: 24px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 798px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($property1) {
        case "Trial in progress":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Trial ended":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Subscription ended":
          return css`
            background-color: ${"#ef4444"};
          `;
        case "Past due":
          return css`
            background-color: ${"#ef4444"};
          `;
        default:
          return css``;
      }
    })()}
    color: #fefefe;
  `,
);

const StyledYourFreeTrialEndsIn7DaysUpgradeNowToUnlockPublishingDomainsAndMore =
  styled.p(
    () => css`
      color: #fefefe;
    `,
  );

const StyledYourFreeTrialHasEndedUpgradeToUnlockEditingPublishingDomainsAndMore =
  styled.p(
    () => css`
      color: #fefefe;
    `,
  );

const StyledYourSubscriptionHasEndedUpgradeToUnlockEditingPublishingDomainsAndMore =
  styled.p(
    () => css`
      color: #fefefe;
    `,
  );

const StyledUpdateYourPaymentMethodToUnlockEditing = styled.p(
  () => css`
    color: #fefefe;
  `,
);

/** A dismissible banner component that displays contextual messages related to trial or subscription status (trial in progress, trial ended, subscription ended, or past due). Prompts users to take action such as upgrading or updating payment details. */
export const PromptBaanner = React.forwardRef<HTMLElement, PromptBaannerProps>(
  function PromptBaanner({ property1 = "Trial in progress", ...rest }, ref) {
    return (
      <StyledRoot
        role="alert"
        aria-label="Subscription status banner"
        {...rest}
        ref={ref}
        $property1={property1}
      >
        <Lock />
        {property1 === "Trial in progress" && (
          <StyledYourFreeTrialEndsIn7DaysUpgradeNowToUnlockPublishingDomainsAndMore>
            {
              "Your free trial ends in 7 days. Upgrade now to unlock publishing, domains, and more!"
            }
          </StyledYourFreeTrialEndsIn7DaysUpgradeNowToUnlockPublishingDomainsAndMore>
        )}
        <LinkButton size={"Regular"} mode={"Dark"} />
        {property1 === "Trial ended" && (
          <StyledYourFreeTrialHasEndedUpgradeToUnlockEditingPublishingDomainsAndMore>
            {
              "Your free trial has ended. Upgrade to unlock editing, publishing, domains, and more!"
            }
          </StyledYourFreeTrialHasEndedUpgradeToUnlockEditingPublishingDomainsAndMore>
        )}
        {property1 === "Subscription ended" && (
          <StyledYourSubscriptionHasEndedUpgradeToUnlockEditingPublishingDomainsAndMore>
            {
              "Your subscription has ended. Upgrade to unlock editing, publishing, domains, and more!"
            }
          </StyledYourSubscriptionHasEndedUpgradeToUnlockEditingPublishingDomainsAndMore>
        )}
        {property1 === "Past due" && (
          <StyledUpdateYourPaymentMethodToUnlockEditing>
            {"Update your payment method to unlock editing!"}
          </StyledUpdateYourPaymentMethodToUnlockEditing>
        )}
      </StyledRoot>
    );
  },
);
