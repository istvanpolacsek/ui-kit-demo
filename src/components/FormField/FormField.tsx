import React from "react";
import styled, { css } from "styled-components";
import { DesktopTextField } from "../DesktopTextField";
import { DesktopTextFieldCountryCode } from "../DesktopTextFieldCountryCode";
import { Button } from "../Button";

export interface FormFieldProps extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-right: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    gap: 40px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
  `,
);

const StyledText = styled.header(
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
    width: 800px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledThankYou = styled.h2(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Georgia";
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.015em;
  `,
);

const StyledWeWouldLoveToHearMoreAboutYou = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledFields = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledByClickingNextYouAgreeThatYouHaveReadUnderstoodAndAgreeToTermsAndConditionsIncludingReceivingAutomatedCallsTextMessagesAndMailBothElectronicAndPhysicalForAnyPurposeIUnderstandThatSuchConsentIsNotAConditionOfAnyServiceAndThatIMayOptOutAnyTime =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledCTAs = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 40px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A multi-field form component containing a heading, descriptive text, multiple text input fields (including a country code field), a legal disclaimer paragraph, and primary/secondary action buttons. */
export const FormField = React.forwardRef<HTMLFormElement, FormFieldProps>(
  function FormField({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Contact information form" {...rest} ref={ref}>
        <StyledText>
          <StyledThankYou>{"Thank you! "}</StyledThankYou>
          <StyledWeWouldLoveToHearMoreAboutYou>
            {"We would love to hear more about you."}
          </StyledWeWouldLoveToHearMoreAboutYou>
        </StyledText>
        <StyledFields>
          <DesktopTextField
            showRightIcon={true}
            showDuration={false}
            showCountryCode={false}
            showHelperText={false}
            showLeftIcon={true}
            showLink={false}
            textState={"Placeholder"}
            state={"Default"}
          />
          <DesktopTextField
            showRightIcon={true}
            showDuration={false}
            showCountryCode={false}
            showHelperText={false}
            showLeftIcon={true}
            showLink={false}
            textState={"Placeholder"}
            state={"Default"}
          />
          <DesktopTextField
            showRightIcon={true}
            showDuration={false}
            showCountryCode={false}
            showHelperText={false}
            showLeftIcon={true}
            showLink={false}
            textState={"Placeholder"}
            state={"Default"}
          />
          <DesktopTextField
            showRightIcon={true}
            showDuration={false}
            showCountryCode={false}
            showHelperText={false}
            showLeftIcon={true}
            showLink={false}
            textState={"Placeholder"}
            state={"Default"}
          />
          <DesktopTextFieldCountryCode
            showRightIcon={true}
            showDuration={false}
            showCountryCode={true}
            showHelperText={false}
            showLeftIcon={false}
            showLink={false}
            textState={"Placeholder"}
            state={"Default"}
          />
        </StyledFields>
        <StyledByClickingNextYouAgreeThatYouHaveReadUnderstoodAndAgreeToTermsAndConditionsIncludingReceivingAutomatedCallsTextMessagesAndMailBothElectronicAndPhysicalForAnyPurposeIUnderstandThatSuchConsentIsNotAConditionOfAnyServiceAndThatIMayOptOutAnyTime>
          {
            "By clicking Next, you agree that you have read, understood, and agree to Terms and Conditions, including receiving automated calls, text messages and mail, both electronic and physical for any purpose. I understand that such consent is not a condition of any service and that I may opt-out any time."
          }
        </StyledByClickingNextYouAgreeThatYouHaveReadUnderstoodAndAgreeToTermsAndConditionsIncludingReceivingAutomatedCallsTextMessagesAndMailBothElectronicAndPhysicalForAnyPurposeIUnderstandThatSuchConsentIsNotAConditionOfAnyServiceAndThatIMayOptOutAnyTime>
        <StyledCTAs>
          <Button
            bTNValue={"Previous"}
            label={true}
            rightIcon={false}
            leftIcon={true}
            iconOnly={"False"}
            device={"Desktop"}
            size={"Large"}
            hierarchy={"Secondary"}
            state={"Default"}
            type={"Default"}
          />
          <Button
            bTNValue={"Next"}
            label={true}
            rightIcon={true}
            leftIcon={false}
            iconOnly={"False"}
            device={"Desktop"}
            size={"Large"}
            hierarchy={"Primary"}
            state={"Default"}
            type={"Default"}
          />
        </StyledCTAs>
      </StyledRoot>
    );
  },
);
