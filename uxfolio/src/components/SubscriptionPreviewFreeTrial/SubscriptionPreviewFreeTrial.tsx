import React from "react";
import styled, { css } from "styled-components";
import { Check } from "../Check";

export interface SubscriptionPreviewFreeTrialProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1"
> {
  property1?: "Free trial active" | "Free trial expired";
}

const StyledRoot = styled.section<{
  $property1: "Free trial active" | "Free trial expired";
}>(
  ({ $property1 }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 6px;
    ${(() => {
      switch ($property1) {
        case "Free trial active":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 750px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Free trial expired":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48097193 = styled.div(
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

const StyledYouAreCurrentlyOnThe7DayFreeTrial = styled.p(
  () => css`
    color: #262626;
  `,
);

const Styled0 = styled.span(
  () => css`
    color: #262626;
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

const StyledCountdownBar = styled.div(
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
    background-color: #fefefe;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #f9f9f9;
    border-radius: 6px;
  `,
);

const StyledFrame48097068 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #dcfa37;
    width: 840px;
    height: 20px;
    box-sizing: border-box;
  `,
);

const StyledFrame48097196 = styled.div(
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

const StyledFeaturesIncluded = styled.h3(
  () => css`
    color: #3d3d3d;
    font-family: var(--font-work-sans, "Work Sans"), sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.24;
    letter-spacing: 0.01em;
  `,
);

const StyledSecondaryInfo2 = styled.ul(
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

const StyledBuiltInMockups = styled.span(
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

const StyledAnimations = styled.span(
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

const StyledThumbnailDesigner = styled.span(
  () => css`
    color: #3d3d3d;
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

const StyledWhenYouReReadyUpgradeToAccessAllUXfolioFeatures = styled.p(
  () => css`
    color: #3d3d3d;
  `,
);

const StyledTrialEndedOn20October2024 = styled.p(
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

const StyledFeaturesIncluded2 = styled.h3(
  () => css`
    color: #3d3d3d;
    font-family: var(--font-work-sans, "Work Sans"), sans-serif;
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

const StyledBuiltInMockups2 = styled.span(
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

const StyledAnimations2 = styled.span(
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

const StyledThumbnailDesigner2 = styled.span(
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

const StyledSecondaryInfo5 = styled.div(
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

const StyledWhenYouReReadyUpgradeToAccessAllUXfolioFeatures2 = styled.p(
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

const StyledYour7DayFreeTrialHasEnded = styled.p(
  () => css`
    color: #262626;
  `,
);

const Styled02 = styled.span(
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

const StyledCountdownBar2 = styled.div(
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

const StyledFrame480970682 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #dcfa37;
    width: 1px;
    height: 20px;
    box-sizing: border-box;
  `,
);

/** Displays a subscription preview card for a free trial state, showing trial status (active or expired), current price, a countdown progress bar, included features, and an upgrade prompt. Supports two variants: 'Free trial active' and 'Free trial expired'. */
export const SubscriptionPreviewFreeTrial = React.forwardRef<
  HTMLElement,
  SubscriptionPreviewFreeTrialProps
>(function SubscriptionPreviewFreeTrial(
  { property1 = "Free trial active", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Free trial subscription status"
      {...rest}
      ref={ref}
      $property1={property1}
    >
      {property1 === "Free trial active" && (
        <StyledFrame48097193>
          {property1 === "Free trial active" && (
            <StyledPrimaryInfo>
              {property1 === "Free trial active" && (
                <StyledYouAreCurrentlyOnThe7DayFreeTrial>
                  {"You are currently on the 7-day free trial"}
                </StyledYouAreCurrentlyOnThe7DayFreeTrial>
              )}
              {property1 === "Free trial active" && <Styled0>{"$0"}</Styled0>}
            </StyledPrimaryInfo>
          )}
          {property1 === "Free trial active" && (
            <StyledFrame48097189>
              {property1 === "Free trial active" && (
                <StyledCountdownBar>
                  {property1 === "Free trial active" && (
                    <StyledFrame48097068></StyledFrame48097068>
                  )}
                </StyledCountdownBar>
              )}
            </StyledFrame48097189>
          )}
        </StyledFrame48097193>
      )}
      <StyledFrame48097196>
        {property1 === "Free trial active" && (
          <StyledFrame48097195>
            {property1 === "Free trial active" && (
              <StyledSecondaryInfo>
                {property1 === "Free trial active" && (
                  <StyledFeaturesIncluded>
                    {"Features included:"}
                  </StyledFeaturesIncluded>
                )}
              </StyledSecondaryInfo>
            )}
            {property1 === "Free trial active" && (
              <StyledSecondaryInfo2>
                {property1 === "Free trial active" && (
                  <StyledFrame48097039>
                    {property1 === "Free trial active" && <Check />}
                    {property1 === "Free trial active" && (
                      <StyledBuiltInMockups>
                        {"Built-in mockups"}
                      </StyledBuiltInMockups>
                    )}
                  </StyledFrame48097039>
                )}
                {property1 === "Free trial active" && (
                  <StyledFrame48097041>
                    {property1 === "Free trial active" && <Check />}
                    {property1 === "Free trial active" && (
                      <StyledAnimations>{"Animations"}</StyledAnimations>
                    )}
                  </StyledFrame48097041>
                )}
                {property1 === "Free trial active" && (
                  <StyledFrame48097040>
                    {property1 === "Free trial active" && <Check />}
                    {property1 === "Free trial active" && (
                      <StyledThumbnailDesigner>
                        {"Thumbnail designer"}
                      </StyledThumbnailDesigner>
                    )}
                  </StyledFrame48097040>
                )}
              </StyledSecondaryInfo2>
            )}
          </StyledFrame48097195>
        )}
        <StyledFrame48097194>
          <StyledSecondaryInfo3>
            {property1 === "Free trial active" && (
              <StyledWhenYouReReadyUpgradeToAccessAllUXfolioFeatures>
                {"When you’re ready, upgrade to access all UXfolio features."}
              </StyledWhenYouReReadyUpgradeToAccessAllUXfolioFeatures>
            )}
            {property1 === "Free trial expired" && (
              <StyledTrialEndedOn20October2024>
                {"Trial ended on 20 October, 2024"}
              </StyledTrialEndedOn20October2024>
            )}
          </StyledSecondaryInfo3>
        </StyledFrame48097194>
        {property1 === "Free trial expired" && (
          <StyledFrame480971962>
            {property1 === "Free trial expired" && (
              <StyledFrame480971952>
                {property1 === "Free trial expired" && (
                  <StyledSecondaryInfo4>
                    {property1 === "Free trial expired" && (
                      <StyledFeaturesIncluded2>
                        {"Features included:"}
                      </StyledFeaturesIncluded2>
                    )}
                  </StyledSecondaryInfo4>
                )}
                {property1 === "Free trial expired" && (
                  <StyledSecondaryInfo22>
                    {property1 === "Free trial expired" && (
                      <StyledFrame480970392>
                        {property1 === "Free trial expired" && <Check />}
                        {property1 === "Free trial expired" && (
                          <StyledBuiltInMockups2>
                            {"Built-in mockups"}
                          </StyledBuiltInMockups2>
                        )}
                      </StyledFrame480970392>
                    )}
                    {property1 === "Free trial expired" && (
                      <StyledFrame480970412>
                        {property1 === "Free trial expired" && <Check />}
                        {property1 === "Free trial expired" && (
                          <StyledAnimations2>{"Animations"}</StyledAnimations2>
                        )}
                      </StyledFrame480970412>
                    )}
                    {property1 === "Free trial expired" && (
                      <StyledFrame480970402>
                        {property1 === "Free trial expired" && <Check />}
                        {property1 === "Free trial expired" && (
                          <StyledThumbnailDesigner2>
                            {"Thumbnail designer"}
                          </StyledThumbnailDesigner2>
                        )}
                      </StyledFrame480970402>
                    )}
                  </StyledSecondaryInfo22>
                )}
              </StyledFrame480971952>
            )}
            {property1 === "Free trial expired" && (
              <StyledFrame480971942>
                {property1 === "Free trial expired" && (
                  <StyledSecondaryInfo5>
                    {property1 === "Free trial expired" && (
                      <StyledWhenYouReReadyUpgradeToAccessAllUXfolioFeatures2>
                        {
                          "When you’re ready, upgrade to access all UXfolio features."
                        }
                      </StyledWhenYouReReadyUpgradeToAccessAllUXfolioFeatures2>
                    )}
                  </StyledSecondaryInfo5>
                )}
              </StyledFrame480971942>
            )}
          </StyledFrame480971962>
        )}
      </StyledFrame48097196>
      {property1 === "Free trial expired" && (
        <StyledFrame48097197>
          {property1 === "Free trial expired" && (
            <StyledPrimaryInfo2>
              {property1 === "Free trial expired" && (
                <StyledYour7DayFreeTrialHasEnded>
                  {"Your 7-day free trial has ended"}
                </StyledYour7DayFreeTrialHasEnded>
              )}
              {property1 === "Free trial expired" && (
                <Styled02>{"$0"}</Styled02>
              )}
            </StyledPrimaryInfo2>
          )}
          {property1 === "Free trial expired" && (
            <StyledFrame480971892>
              {property1 === "Free trial expired" && (
                <StyledCountdownBar2>
                  {property1 === "Free trial expired" && (
                    <StyledFrame480970682></StyledFrame480970682>
                  )}
                </StyledCountdownBar2>
              )}
            </StyledFrame480971892>
          )}
        </StyledFrame48097197>
      )}
    </StyledRoot>
  );
});
