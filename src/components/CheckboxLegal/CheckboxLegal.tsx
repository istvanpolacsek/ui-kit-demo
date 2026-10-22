import React from "react";
import styled, { css } from "styled-components";
import { Checkbox } from "../Checkbox";

export interface CheckboxLegalProps extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.label<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1176px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1176px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledICertifyThatAllInformationGivenOnThisApplicationIsTrueAndAccurateAtTheTimeOfSubmissionIUnderstandThatBySubmittingThisScholarshipApplicationMyEntireNURecordWillBeReviewedForScholarshipConsiderationIncludingTheFAFSASubmittedTranscriptsAndAdmissionApplicationIUnderstandThatDemographicInformationIsNotIncludedInDeterminingEligibilityButCollectedToDetermineStatisticAboutTheScholarshipApplicantPoolIHaveReadAndAgreeToTheScholarshipTermsAndConditionsAtHttps =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledCheckbox = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame2131330738 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledICertifyThatAllInformationGivenOnThisApplicationIsTrueAndAccurateAtTheTimeOfSubmissionIUnderstandThatBySubmittingThisScholarshipApplicationMyEntireNURecordWillBeReviewedForScholarshipConsiderationIncludingTheFAFSASubmittedTranscriptsAndAdmissionApplicationIUnderstandThatDemographicInformationIsNotIncludedInDeterminingEligibilityButCollectedToDetermineStatisticAboutTheScholarshipApplicantPoolIHaveReadAndAgreeToTheScholarshipTermsAndConditionsAtHttps2 =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

/** A legal acknowledgment checkbox component that pairs a checkbox input with a lengthy certification statement. Used in scholarship application forms to capture user agreement to terms and conditions. */
export const CheckboxLegal = React.forwardRef<
  HTMLLabelElement,
  CheckboxLegalProps
>(function CheckboxLegal({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="group"
      aria-label="Legal certification agreement"
      {...rest}
      ref={ref}
      $device={device}
    >
      {device === "Desktop" && <Checkbox />}
      {device === "Desktop" && (
        <StyledICertifyThatAllInformationGivenOnThisApplicationIsTrueAndAccurateAtTheTimeOfSubmissionIUnderstandThatBySubmittingThisScholarshipApplicationMyEntireNURecordWillBeReviewedForScholarshipConsiderationIncludingTheFAFSASubmittedTranscriptsAndAdmissionApplicationIUnderstandThatDemographicInformationIsNotIncludedInDeterminingEligibilityButCollectedToDetermineStatisticAboutTheScholarshipApplicantPoolIHaveReadAndAgreeToTheScholarshipTermsAndConditionsAtHttps>
          {
            "I certify that all information given on this application is true and accurate at the time of submission. I understand that by submitting this scholarship application, my entire NU record will be reviewed for scholarship consideration, including the FAFSA, submitted transcripts, and admission application. I understand that demographic information is not included in determining eligibility, but collected to determine statistic about the scholarship applicant pool. I have read and agree to the scholarship terms and conditions at https://www.nu.edu/opportunity-scholarship-terms-and-conditions/."
          }
        </StyledICertifyThatAllInformationGivenOnThisApplicationIsTrueAndAccurateAtTheTimeOfSubmissionIUnderstandThatBySubmittingThisScholarshipApplicationMyEntireNURecordWillBeReviewedForScholarshipConsiderationIncludingTheFAFSASubmittedTranscriptsAndAdmissionApplicationIUnderstandThatDemographicInformationIsNotIncludedInDeterminingEligibilityButCollectedToDetermineStatisticAboutTheScholarshipApplicantPoolIHaveReadAndAgreeToTheScholarshipTermsAndConditionsAtHttps>
      )}
      {device === "Mobile" && (
        <StyledCheckbox>{device === "Mobile" && <Checkbox />}</StyledCheckbox>
      )}
      {device === "Mobile" && (
        <StyledFrame2131330738>
          {device === "Mobile" && (
            <StyledICertifyThatAllInformationGivenOnThisApplicationIsTrueAndAccurateAtTheTimeOfSubmissionIUnderstandThatBySubmittingThisScholarshipApplicationMyEntireNURecordWillBeReviewedForScholarshipConsiderationIncludingTheFAFSASubmittedTranscriptsAndAdmissionApplicationIUnderstandThatDemographicInformationIsNotIncludedInDeterminingEligibilityButCollectedToDetermineStatisticAboutTheScholarshipApplicantPoolIHaveReadAndAgreeToTheScholarshipTermsAndConditionsAtHttps2>
              {
                "I certify that all information given on this application is true and accurate at the time of submission. I understand that by submitting this scholarship application, my entire NU record will be reviewed for scholarship consideration, including the FAFSA, submitted transcripts, and admission application. I understand that demographic information is not included in determining eligibility, but collected to determine statistic about the scholarship applicant pool. I have read and agree to the scholarship terms and conditions at https://www.nu.edu/opportunity-scholarship-terms-and-conditions/."
              }
            </StyledICertifyThatAllInformationGivenOnThisApplicationIsTrueAndAccurateAtTheTimeOfSubmissionIUnderstandThatBySubmittingThisScholarshipApplicationMyEntireNURecordWillBeReviewedForScholarshipConsiderationIncludingTheFAFSASubmittedTranscriptsAndAdmissionApplicationIUnderstandThatDemographicInformationIsNotIncludedInDeterminingEligibilityButCollectedToDetermineStatisticAboutTheScholarshipApplicantPoolIHaveReadAndAgreeToTheScholarshipTermsAndConditionsAtHttps2>
          )}
        </StyledFrame2131330738>
      )}
    </StyledRoot>
  );
});
