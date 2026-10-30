import React from "react";
import styled, { css } from "styled-components";
import { ModalXSSatisfactionSurvey } from "../ModalXSSatisfactionSurvey";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";
import { IconOnlyPrimaryToggleSubtle } from "../IconOnlyPrimaryToggleSubtle";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { Check } from "../Check";

export interface ModalG2Props extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "property1" | "property2" | "property3"
> {
  property1?: "XS";
  property2?: "G2 feedback";
  property3?:
    | "Base"
    | "Comments"
    | "Selected"
    | "Survey info"
    | "Survey thank you"
    | "Thank you";
}

const StyledRoot = styled.section<{
  $property3:
    | "Base"
    | "Comments"
    | "Selected"
    | "Survey info"
    | "Survey thank you"
    | "Thank you";
}>(
  ({ $property3 }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    box-shadow:
      0px 6px 16px 0px rgba(0, 0, 0, 0.32),
      0px 16px 24px 0px rgba(0, 0, 0, 0.24);
    ${(() => {
      switch ($property3) {
        case "Base":
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
            width: fit-content;
          `;
        case "Selected":
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
            width: fit-content;
          `;
        case "Survey info":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 400px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Survey thank you":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 400px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Comments":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 400px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Thank you":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 40px;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 411px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($property3) {
        case "Survey info":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Survey thank you":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Comments":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Thank you":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($property3) {
        case "Survey info":
          return css`
            border-color: ${"#262626"};
          `;
        case "Survey thank you":
          return css`
            border-color: ${"#262626"};
          `;
        case "Comments":
          return css`
            border-color: ${"#262626"};
          `;
        case "Thank you":
          return css`
            border-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($property3) {
        case "Base":
          return css`
            border-radius: 0px;
          `;
        case "Selected":
          return css`
            border-radius: 0px;
          `;
        case "Survey info":
          return css`
            border-radius: 8px;
          `;
        case "Survey thank you":
          return css`
            border-radius: 8px;
          `;
        case "Comments":
          return css`
            border-radius: 8px;
          `;
        case "Thank you":
          return css`
            border-radius: 8px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame48096248 = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledShareYourUXfolioExperienceAndReceiveA25AmazonGiftCard = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledThankYou = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledHeaderSubheader = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHereSHowItWorks = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledHereSAQuickRecap = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledButtonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
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

const StyledSecondaryButtonNeutral = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledPrimaryButtonNeutral = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFrame48096249 = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledShareYourExperience = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #adadad;
  `,
);

const StyledFrame48096247 = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledFrame48096243 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
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

const StyledIconOnlyPrimaryToggleSubtle = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledIconOnlyPrimaryToggleSubtle2 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledIconOnlyPrimaryToggleSubtle3 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledIconOnlyPrimaryToggleSubtle4 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledIconOnlyPrimaryToggleSubtle5 = styled.li(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFrame48096246 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNotSatisfied = styled.div(
  () => css`
    color: #fefefe;
  `,
);

const StyledVerySatisfied = styled.div(
  () => css`
    color: #fefefe;
  `,
);

const StyledTextFieldLabeled = styled.div(
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

const StyledPrimaryButtonNeutral2 = styled.div(
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

const StyledFrame48096256 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
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

const StyledIllustration = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: #4d4c4c;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #707070;
    border-radius: 999px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMessage = styled.h2(
  () => css`
    color: #eeeeee;
  `,
);

const StyledInfo = styled.p(
  () => css`
    color: #adadad;
  `,
);

/** A multi-variant G2 review modal dialog that guides users through a satisfaction survey flow, including rating input, written feedback, and thank-you confirmation states. Used to collect G2 reviews in exchange for an Amazon gift card incentive. */
export const ModalG2 = React.forwardRef<HTMLElement, ModalG2Props>(
  function ModalG2(
    {
      property1 = "XS",
      property2 = "G2 feedback",
      property3 = "Base",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="dialog"
        aria-label="G2 Feedback"
        {...rest}
        ref={ref}
        $property3={property3}
      >
        {["Base", "Selected"].includes(property3) && (
          <ModalXSSatisfactionSurvey type={"Idle"} />
        )}
        {["Survey info", "Survey thank you"].includes(property3) && (
          <StyledFrame48096248>
            {property3 === "Survey info" && (
              <StyledShareYourUXfolioExperienceAndReceiveA25AmazonGiftCard>
                {
                  "Share your UXfolio experience and receive a $25 Amazon gift card!"
                }
              </StyledShareYourUXfolioExperienceAndReceiveA25AmazonGiftCard>
            )}
            {property3 === "Survey thank you" && (
              <StyledThankYou>{"Thank you!"}</StyledThankYou>
            )}
          </StyledFrame48096248>
        )}
        {["Survey info", "Survey thank you"].includes(property3) && (
          <StyledHeaderSubheader>
            {property3 === "Survey info" && (
              <StyledHereSHowItWorks>
                {
                  "Here’s how it works:\nWrite an honest review about UXfolio on G2,\nSend us a screenshot of your review to support@uxfol.io,\nWe’ll send you a $25 Amazon gift card."
                }
              </StyledHereSHowItWorks>
            )}
            {property3 === "Survey thank you" && (
              <StyledHereSAQuickRecap>
                {
                  "Here's a quick recap:\nWrite an honest review about UXfolio on G2,\nSend us a screenshot of your review to support@uxfol.io,\nWe’ll send you a $25 Amazon gift card."
                }
              </StyledHereSAQuickRecap>
            )}
          </StyledHeaderSubheader>
        )}
        {["Survey info", "Survey thank you"].includes(property3) && (
          <StyledButtonRow>
            {property3 === "Survey info" && (
              <StyledSecondaryButtonNeutral>
                <SecondaryButtonNeutral
                  state={"Default"}
                  size={"Regular"}
                  mode={"Dark"}
                />
              </StyledSecondaryButtonNeutral>
            )}
            {["Survey info", "Survey thank you"].includes(property3) && (
              <StyledPrimaryButtonNeutral>
                <PrimaryButtonNeutral
                  state={"Default"}
                  size={"Regular"}
                  mode={"Dark"}
                />
              </StyledPrimaryButtonNeutral>
            )}
          </StyledButtonRow>
        )}
        {property3 === "Comments" && (
          <StyledFrame48096249>
            {property3 === "Comments" && (
              <StyledShareYourExperience>
                {"Share your experience"}
              </StyledShareYourExperience>
            )}
            {property3 === "Comments" && (
              <StyledLabel>
                {"How satisfied are you with UXfolio today?"}
              </StyledLabel>
            )}
          </StyledFrame48096249>
        )}
        {property3 === "Comments" && (
          <StyledFrame48096247>
            {property3 === "Comments" && (
              <StyledFrame48096243>
                {property3 === "Comments" && (
                  <StyledIconOnlyPrimaryToggleSubtle>
                    <IconOnlyPrimaryToggleSubtle
                      state={"Default"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledIconOnlyPrimaryToggleSubtle>
                )}
                {property3 === "Comments" && (
                  <StyledIconOnlyPrimaryToggleSubtle2>
                    <IconOnlyPrimaryToggleSubtle
                      state={"Default"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledIconOnlyPrimaryToggleSubtle2>
                )}
                {property3 === "Comments" && (
                  <StyledIconOnlyPrimaryToggleSubtle3>
                    <IconOnlyPrimaryToggleSubtle
                      state={"Selected"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledIconOnlyPrimaryToggleSubtle3>
                )}
                {property3 === "Comments" && (
                  <StyledIconOnlyPrimaryToggleSubtle4>
                    <IconOnlyPrimaryToggleSubtle
                      state={"Default"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledIconOnlyPrimaryToggleSubtle4>
                )}
                {property3 === "Comments" && (
                  <StyledIconOnlyPrimaryToggleSubtle5>
                    <IconOnlyPrimaryToggleSubtle
                      state={"Default"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledIconOnlyPrimaryToggleSubtle5>
                )}
              </StyledFrame48096243>
            )}
            {property3 === "Comments" && (
              <StyledFrame48096246>
                {property3 === "Comments" && (
                  <StyledNotSatisfied>{"Not satisfied"}</StyledNotSatisfied>
                )}
                {property3 === "Comments" && (
                  <StyledVerySatisfied>{"Very satisfied"}</StyledVerySatisfied>
                )}
              </StyledFrame48096246>
            )}
          </StyledFrame48096247>
        )}
        {property3 === "Comments" && (
          <StyledTextFieldLabeled>
            <TextFieldLabeled />
          </StyledTextFieldLabeled>
        )}
        {property3 === "Comments" && (
          <StyledPrimaryButtonNeutral2>
            <PrimaryButtonNeutral
              state={"Default"}
              size={"Regular"}
              mode={"Dark"}
            />
          </StyledPrimaryButtonNeutral2>
        )}
        {property3 === "Thank you" && (
          <StyledFrame48096256>
            {property3 === "Thank you" && (
              <StyledIllustration>
                {property3 === "Thank you" && <Check />}
              </StyledIllustration>
            )}
            {property3 === "Thank you" && (
              <StyledContent>
                {property3 === "Thank you" && (
                  <StyledMessage>{"Thank you"}</StyledMessage>
                )}
                {property3 === "Thank you" && (
                  <StyledInfo>{"Your feedback has been submitted"}</StyledInfo>
                )}
              </StyledContent>
            )}
          </StyledFrame48096256>
        )}
      </StyledRoot>
    );
  },
);
