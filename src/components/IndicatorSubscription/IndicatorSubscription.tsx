import React from "react";
import styled, { css } from "styled-components";
import { IndicatorProject } from "../IndicatorProject";

export interface IndicatorSubscriptionProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "property2"
> {
  type?: "Indicator";
  property2?: "Warning";
}

const StyledRoot = styled.span(
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
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
  `,
);

/** An indicator badge used to display a subscription warning status. Typically rendered as a small visual cue to alert users of subscription-related issues or warnings. */
export const IndicatorSubscription = React.forwardRef<
  HTMLSpanElement,
  IndicatorSubscriptionProps
>(function IndicatorSubscription(
  { type = "Indicator", property2 = "Warning", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="status"
      aria-label="Subscription warning"
      {...rest}
      ref={ref}
    >
      <IndicatorProject type={"Draft"} />
    </StyledRoot>
  );
});
