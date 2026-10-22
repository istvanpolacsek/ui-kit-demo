import React from "react";
import styled, { css } from "styled-components";
import { ToggleCheckBox } from "../ToggleCheckBox";

export interface SubscriptionPreviewDomainCancellationProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button(
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

/** Displays a preview of a domain subscription scheduled for cancellation, showing the domain name, pricing, and renewal date. Includes a checkbox/toggle to select the item for action. */
export const SubscriptionPreviewDomainCancellation = React.forwardRef<
  HTMLButtonElement,
  SubscriptionPreviewDomainCancellationProps
>(function SubscriptionPreviewDomainCancellation({ selected, ...rest }, ref) {
  const selectedState = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
    >
      <StyledInfo>
        <ToggleCheckBox state={"False"} mode={"Light"} />
        <StyledDomainPrice>
          <StyledDomain>{"nathandavidson.design"}</StyledDomain>
          <StyledPrice>
            <StyledAmount>{"$35"}</StyledAmount>
            <StyledDuration>{"/ year"}</StyledDuration>
          </StyledPrice>
        </StyledDomainPrice>
        <StyledRenewal>
          <StyledLabel>{"Renews on"}</StyledLabel>
          <StyledDate>{"Dec 06, 2025"}</StyledDate>
        </StyledRenewal>
      </StyledInfo>
    </StyledRoot>
  );
});
