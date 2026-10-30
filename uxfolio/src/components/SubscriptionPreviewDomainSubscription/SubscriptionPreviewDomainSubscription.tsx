import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { TertiaryButtonSubtle } from "../TertiaryButtonSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface SubscriptionPreviewDomainSubscriptionProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "canceled" | "connected"
> {
  canceled?: "False" | "True";
  connected?: "True" | "False";
}

const StyledRoot = styled.article(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 24px;
    justify-content: center;
    align-items: flex-start;
    width: 750px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 8px;
  `,
);

const StyledInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDomainPrice = styled.div(
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

const StyledDomain = styled.p(() => css``);

const StyledPrice = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: BASELINE;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledAmount = styled.span(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledDuration = styled.span(
  () => css`
    color: #707070;
  `,
);

const StyledRenewal = styled.div(
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

const StyledLabel = styled.label(
  () => css`
    color: #707070;
  `,
);

const StyledDate = styled.p(
  () => css`
    color: #0f0f0f;
  `,
);

/** Displays a preview card for a domain subscription, showing the domain name, pricing, renewal date, and action buttons. Supports canceled and connected states. */
export const SubscriptionPreviewDomainSubscription = React.forwardRef<
  HTMLElement,
  SubscriptionPreviewDomainSubscriptionProps
>(function SubscriptionPreviewDomainSubscription(
  { canceled = "False", connected = "True", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Domain subscription preview"
      {...rest}
      ref={ref}
    >
      <StyledInfo>
        <StyledDomainPrice>
          <StyledDomain>{"nathandavidson.design"}</StyledDomain>
          <StyledPrice>
            <StyledAmount>{"$35"}</StyledAmount>
            <StyledDuration>{"/ year"}</StyledDuration>
          </StyledPrice>
        </StyledDomainPrice>
        <StyledRenewal>
          <StyledLabel>
            {
              (
                {
                  '["False"]': "Renews on",
                  '["True"]': "Cancels on",
                } as Record<string, string>
              )[JSON.stringify([canceled])]
            }
          </StyledLabel>
          <StyledDate>{"Dec 06, 2025"}</StyledDate>
        </StyledRenewal>
        <IconOnlyPrimaryButtonSubtle
          state={"Default"}
          size={"Small"}
          mode={"Light"}
        />
      </StyledInfo>
      {connected === "True" && (
        <TertiaryButtonSubtle
          mode={"Light"}
          hasIcon={"True"}
          size={"Regular"}
        />
      )}
      {connected === "False" && (
        <TertiaryButtonNeutral
          mode={"Light"}
          hasIcon={"True"}
          size={"Regular"}
        />
      )}
    </StyledRoot>
  );
});
