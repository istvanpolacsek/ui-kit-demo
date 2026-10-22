import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { BannerMedium } from "../BannerMedium";

export interface SetupSummaryCheckoutProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "selected"
> {
  type?: "UXfolio yearly" | "UXfolio monthly" | "Domain";
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{ $studentDiscount: string }>(
  ({ $studentDiscount }) => css`
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 8px;
    ${(() => {
      switch ($studentDiscount) {
        case "False":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "True":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 72px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 500px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
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
    color: #0f0f0f;
    font-family: "Work Sans";
    font-size: 32px;
    font-weight: 600;
  `,
);

const Styled108 = styled.div(
  () => css`
    color: #0f0f0f;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const Styled80 = styled.div(
  () => css`
    color: #0f0f0f;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const Styled15 = styled.div(
  () => css`
    color: #0f0f0f;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const Styled9 = styled.div(
  () => css`
    color: #0f0f0f;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const Styled35 = styled.div(
  () => css`
    color: #0f0f0f;
    font-family: "Work Sans";
    font-size: 48px;
    font-weight: 600;
  `,
);

const StyledDuration = styled.div(
  () => css`
    color: #707070;
    font-family: "Work Sans";
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.01em;
  `,
);

const StyledRenewal = styled.div(
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

const StyledLabel = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledValue = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledAdditionalInfo = styled.ul(
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
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledItem = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCancelAnytime = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledCancelAndTransferAnytime = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledItem2 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledVATIncluded = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledItem3 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSSLEncryptedPayment = styled.div(
  () => css`
    color: #707070;
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
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRenewal2 = styled.div(
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

const StyledLabel2 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledValue2 = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledPostDiscountPrice = styled.div(
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

const StyledLabel3 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledValue3 = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledBannerMedium = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 500px;
    height: 40px;
  `,
);

/** Displays a summary of the selected subscription plan during checkout, including pricing, billing cycle, renewal date, and trust indicators such as cancellation policy, VAT inclusion, and SSL encryption. */
export const SetupSummaryCheckout = React.forwardRef<
  HTMLButtonElement,
  SetupSummaryCheckoutProps
>(function SetupSummaryCheckout(
  { type = "UXfolio yearly", selected, ...rest },
  ref,
) {
  const studentDiscount = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $studentDiscount={studentDiscount}
    >
      <StyledPrice>
        <StyledPrimaryInfo>
          <StyledTitle>
            {
              (
                {
                  '["UXfolio yearly"]': "UXfolio subscription",
                  '["UXfolio monthly"]': "UXfolio subscription",
                  '["Domain"]': "Domain subscription",
                } as Record<string, string>
              )[JSON.stringify([type])]
            }
          </StyledTitle>
          <StyledDescription>
            {
              (
                {
                  '["UXfolio yearly"]': "Billed yearly",
                  '["UXfolio monthly"]': "Billed monthly",
                  '["Domain"]': "Billed yearly",
                } as Record<string, string>
              )[JSON.stringify([type])]
            }
          </StyledDescription>
        </StyledPrimaryInfo>
        <StyledPriceAndDuration>
          <StyledPrice2>
            <Styled>{"$"}</Styled>
            {type === "UXfolio yearly" && studentDiscount === "False" && (
              <Styled108>{"108"}</Styled108>
            )}
            {type === "UXfolio yearly" && studentDiscount === "True" && (
              <Styled80>{"80"}</Styled80>
            )}
            {((type === "UXfolio monthly" && studentDiscount === "False") ||
              (type === "Domain" && studentDiscount === "True")) && (
              <Styled15>{"15"}</Styled15>
            )}
            {type === "UXfolio monthly" && studentDiscount === "True" && (
              <Styled9>{"9"}</Styled9>
            )}
            {type === "Domain" && studentDiscount === "False" && (
              <Styled35>{"35"}</Styled35>
            )}
          </StyledPrice2>
          <StyledDuration>
            {
              (
                {
                  '["UXfolio yearly","False"]': "per\nyear",
                  '["UXfolio yearly","True"]': "first\nyear",
                  '["UXfolio monthly","False"]': "per\nmonth",
                  '["UXfolio monthly","True"]': "first 3\nmonths",
                  '["Domain","False"]': "per\nyear",
                  '["Domain","True"]': "first\nyear",
                } as Record<string, string>
              )[JSON.stringify([type, studentDiscount])]
            }
          </StyledDuration>
        </StyledPriceAndDuration>
      </StyledPrice>
      {studentDiscount === "False" && (
        <StyledRenewal>
          {studentDiscount === "False" && (
            <StyledLabel>{"Renews on"}</StyledLabel>
          )}
          {studentDiscount === "False" && (
            <StyledValue>{"Dec 24, 2025"}</StyledValue>
          )}
        </StyledRenewal>
      )}
      <StyledAdditionalInfo>
        <StyledItem>
          <VisualAsset name={"Close"} size={24} />
          {["UXfolio yearly", "UXfolio monthly"].includes(type) && (
            <StyledCancelAnytime>{"Cancel anytime"}</StyledCancelAnytime>
          )}
          {type === "Domain" && (
            <StyledCancelAndTransferAnytime>
              {"Cancel and transfer anytime"}
            </StyledCancelAndTransferAnytime>
          )}
        </StyledItem>
        <StyledItem2>
          <VisualAsset name={"Success"} size={24} />
          <StyledVATIncluded>{"VAT included"}</StyledVATIncluded>
        </StyledItem2>
        <StyledItem3>
          <VisualAsset name={"Lock"} size={24} />
          <StyledSSLEncryptedPayment>
            {"SSL encrypted payment"}
          </StyledSSLEncryptedPayment>
        </StyledItem3>
      </StyledAdditionalInfo>
      {studentDiscount === "True" && (
        <StyledRenewalPostDiscountPrice>
          {studentDiscount === "True" && (
            <StyledRenewal2>
              {studentDiscount === "True" && (
                <StyledLabel2>{"Renews on"}</StyledLabel2>
              )}
              {studentDiscount === "True" && (
                <StyledValue2>{"Dec 24, 2025"}</StyledValue2>
              )}
            </StyledRenewal2>
          )}
          {studentDiscount === "True" && (
            <StyledPostDiscountPrice>
              {studentDiscount === "True" && (
                <StyledLabel3>
                  {
                    (
                      {
                        '["UXfolio yearly"]': "After first year",
                        '["UXfolio monthly"]': "After first 3 months",
                        '["Domain"]': "After first year",
                      } as Record<string, string>
                    )[JSON.stringify([type])]
                  }
                </StyledLabel3>
              )}
              {studentDiscount === "True" && (
                <StyledValue3>
                  {
                    (
                      {
                        '["UXfolio yearly"]': "$108 / year",
                        '["UXfolio monthly"]': "$15 / month",
                        '["Domain"]': "$35 / year",
                      } as Record<string, string>
                    )[JSON.stringify([type])]
                  }
                </StyledValue3>
              )}
            </StyledPostDiscountPrice>
          )}
        </StyledRenewalPostDiscountPrice>
      )}
      {studentDiscount === "True" && (
        <StyledBannerMedium>
          <BannerMedium type={"Positive"} hasIcon={"True"} />
        </StyledBannerMedium>
      )}
    </StyledRoot>
  );
});
