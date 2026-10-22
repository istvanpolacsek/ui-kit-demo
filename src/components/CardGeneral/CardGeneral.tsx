import React from "react";
import styled, { css } from "styled-components";
import { LinkButton } from "../LinkButton";

export interface CardGeneralProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.article<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 616px;
            height: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["button"]["Default"]["default"]};
  `,
);

const StyledImage = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    background-color: transparent;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            width: 350px;
            height: 200px;
            box-sizing: border-box;
          `;
        case "Desktop":
          return css`
            width: 276px;
            height: 350px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.ul<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: ${theme["background"]["bgGray"]};
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo2 = styled.li<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
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
          `;
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCalculateYourTuition = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledEstimateYourTuitionAndExploreReductionsBasedOnMilitaryServiceEmployerBenefitsHouseholdIncomeAndMoreEachYearNUSupportsStudentsWithMillionsInScholarshipsFinancialAidAndTuitionReductions =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledLinkButton = styled.li(() => css``);

const StyledLinkButton2 = styled.li(() => css``);

/** A general card component displaying an image alongside informational content, including a title, descriptive text, and one or more call-to-action link buttons. Supports Mobile and Desktop layout variants. */
export const CardGeneral = React.forwardRef<HTMLElement, CardGeneralProps>(
  function CardGeneral({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="article"
        aria-label="Card General"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledImage $device={device}></StyledImage>
        <StyledInfo $device={device}>
          <StyledInfo2 $device={device}>
            <StyledCalculateYourTuition>
              {"Calculate Your Tuition"}
            </StyledCalculateYourTuition>
            <StyledEstimateYourTuitionAndExploreReductionsBasedOnMilitaryServiceEmployerBenefitsHouseholdIncomeAndMoreEachYearNUSupportsStudentsWithMillionsInScholarshipsFinancialAidAndTuitionReductions>
              {
                "Estimate your tuition and explore reductions based on military service, employer benefits, household income, and more. Each year, NU supports students with millions in scholarships, financial aid, and tuition reductions."
              }
            </StyledEstimateYourTuitionAndExploreReductionsBasedOnMilitaryServiceEmployerBenefitsHouseholdIncomeAndMoreEachYearNUSupportsStudentsWithMillionsInScholarshipsFinancialAidAndTuitionReductions>
          </StyledInfo2>
          <StyledLinkButton>
            <LinkButton
              linkValue={"Use the Tuition Calculator"}
              rightIcon={true}
              leftIcon={false}
              size={"Large"}
              device={"Desktop"}
              state={"Default"}
              hierarchy={"Primary"}
              type={"Default"}
            />
          </StyledLinkButton>
          <StyledLinkButton2>
            <LinkButton
              linkValue={"Scholarships And Financial Aid"}
              rightIcon={true}
              leftIcon={false}
              size={"Large"}
              device={"Desktop"}
              state={"Default"}
              hierarchy={"Primary"}
              type={"Default"}
            />
          </StyledLinkButton2>
        </StyledInfo>
      </StyledRoot>
    );
  },
);
