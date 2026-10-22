import React from "react";
import styled, { css } from "styled-components";
import { LinkButton } from "../LinkButton";
import { LogoColor } from "../LogoColor";
import { Button } from "../Button";
import { Social } from "../Social";

export interface FooterProps extends Omit<
  React.ComponentPropsWithoutRef<"footer">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.footer<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 80px;
            padding-right: 84px;
            padding-bottom: 80px;
            padding-left: 84px;
            gap: 56px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 64px;
            padding-right: 20px;
            padding-bottom: 64px;
            padding-left: 20px;
            gap: 10px;
            justify-content: flex-start;
            align-items: center;
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            background-color: ${theme["gray"]["800"]};
          `;
        case "Mobile":
          return css`
            background-color: ${"#191a1c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLinks = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
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

const StyledLinkGroup = styled.section(
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
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledAboutNU = styled.h3(
  ({ theme }) => css`
    color: ${theme["accent"]["accentAqua"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  `,
);

const StyledLinks2 = styled.ul(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton = styled.li(() => css``);

const StyledLinkButton2 = styled.li(() => css``);

const StyledLinkButton3 = styled.li(() => css``);

const StyledLinkButton4 = styled.li(() => css``);

const StyledLinkButton5 = styled.li(() => css``);

const StyledLinkButton6 = styled.li(() => css``);

const StyledLinkButton7 = styled.li(() => css``);

const StyledLinkButton8 = styled.li(() => css``);

const StyledLinkGroup2 = styled.section(
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
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledDegreesPrograms = styled.h3(
  ({ theme }) => css`
    color: ${theme["accent"]["accentAqua"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  `,
);

const StyledLinks3 = styled.ul(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton9 = styled.li(() => css``);

const StyledLinkButton22 = styled.li(() => css``);

const StyledLinkButton32 = styled.li(() => css``);

const StyledLinkButton42 = styled.li(() => css``);

const StyledLinkButton52 = styled.li(() => css``);

const StyledLinkButton62 = styled.li(() => css``);

const StyledLinkButton72 = styled.li(() => css``);

const StyledLinkButton82 = styled.li(() => css``);

const StyledLinkButton92 = styled.li(() => css``);

const StyledLinkButton10 = styled.li(() => css``);

const StyledLinkButton11 = styled.li(() => css``);

const StyledLinkButton12 = styled.li(() => css``);

const StyledLinkButton13 = styled.li(() => css``);

const StyledLinkButton14 = styled.li(() => css``);

const StyledLinkGroup3 = styled.section(
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
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledAdmissionsFinances = styled.h3(
  ({ theme }) => css`
    color: ${theme["accent"]["accentAqua"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  `,
);

const StyledLinks4 = styled.ul(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton15 = styled.li(() => css``);

const StyledLinkButton23 = styled.li(() => css``);

const StyledLinkButton33 = styled.li(() => css``);

const StyledLinkButton43 = styled.li(() => css``);

const StyledLinkButton53 = styled.li(() => css``);

const StyledLinkButton63 = styled.li(() => css``);

const StyledLinkButton73 = styled.li(() => css``);

const StyledLinkGroup4 = styled.section(
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
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledStudentResources = styled.h3(
  () => css`
    color: #53d5d9;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  `,
);

const StyledLinks5 = styled.ul(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton16 = styled.li(() => css``);

const StyledLinkButton24 = styled.li(() => css``);

const StyledLinkButton34 = styled.li(() => css``);

const StyledLinkButton44 = styled.li(() => css``);

const StyledLinkButton54 = styled.li(() => css``);

const StyledLinkButton64 = styled.li(() => css``);

const StyledLinkButton74 = styled.li(() => css``);

const StyledLinkButton83 = styled.li(() => css``);

const StyledLinkButton93 = styled.li(() => css``);

const StyledLinkButton102 = styled.li(() => css``);

const StyledLinkButton112 = styled.li(() => css``);

const StyledLinkButton122 = styled.li(() => css``);

const StyledCarengieContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 56px;
    padding-right: 0px;
    padding-bottom: 56px;
    padding-left: 0px;
    gap: 66px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledUpdatedCarnegieSealContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 35.83000183105469px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 32px;
    padding-bottom: 0px;
    padding-left: 32px;
    gap: 22.360000610351562px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledOCUREVERSE2 = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledContainer2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 0px;
    padding-bottom: 24px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledStrong = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
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

const StyledNationalUniversityAwardedCarnegieClassifications = styled.h4(
  ({ theme }) => css`
    color: ${theme["text"]["textOnDarkDefault"]};
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledContainer3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
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

const StyledRecognizedByTheAmericanCouncilOnEducationAndTheCarnegieFoundationAsAPrestigiousOpportunityUniversityForExpandingAccessToEducationAndAchievingStrongOutcomesForNontraditionalWorkingAndMilitaryAffiliatedStudents =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledEnd = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 60px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
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
    gap: 712px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLogo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 34px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 299px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styled9388LightwaveAveSanDiegoCA92123 = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnDarkDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledContact = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    width: 270px;
    height: 112px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCTAs2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButton = styled.div(
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

const StyledButton2 = styled.div(
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

const StyledSocialLinks = styled.ul(
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
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSocial = styled.li(() => css``);

const StyledSocial2 = styled.li(() => css``);

const StyledSocial3 = styled.li(() => css``);

const StyledSocial4 = styled.li(() => css``);

const StyledSocial5 = styled.li(() => css``);

const StyledSocial6 = styled.li(() => css``);

const StyledFrame1984078218 = styled.div(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCopyright2025NationalUniversityAllRightsReserved = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnDarkDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledEllipse1 = styled.div(
  ({ theme }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["accent"]["accentAqua"]};
    border-radius: 50%;
  `,
);

const StyledEllipse2 = styled.div(
  ({ theme }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["accent"]["accentAqua"]};
    border-radius: 50%;
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
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledLogo2 = styled.div(
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

const Styled9388LightwaveAveSanDiegoCA921232 = styled.p(
  () => css`
    color: #ffffff;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

const StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToAdultLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledContact2 = styled.div(
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

const StyledCTAs3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButton3 = styled.div(
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

const StyledButton22 = styled.div(
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

const StyledSocialLinks2 = styled.ul(
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
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSocial7 = styled.li(() => css``);

const StyledSocial22 = styled.li(() => css``);

const StyledSocial32 = styled.li(() => css``);

const StyledSocial42 = styled.li(() => css``);

const StyledSocial52 = styled.li(() => css``);

const StyledSocial62 = styled.li(() => css``);

const StyledCopyright2025NationalUniversityAllRightsReservedPrivacyPolicyConsumerInformation =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.3;
      letter-spacing: 0.005em;
    `,
  );

/** Site-wide footer component for National University, available in Desktop and Mobile variants. Contains navigation link groups, Carnegie classification badge, logo, address, contact CTAs, social media links, and copyright information. */
export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  function Footer({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Site footer" {...rest} ref={ref} $device={device}>
        {device === "Desktop" && (
          <StyledLinks>
            {device === "Desktop" && (
              <StyledLinkGroup>
                {device === "Desktop" && (
                  <StyledAboutNU>{"About NU"}</StyledAboutNU>
                )}
                {device === "Desktop" && (
                  <StyledLinks2>
                    {device === "Desktop" && (
                      <StyledLinkButton>
                        <LinkButton
                          linkValue={"Faculty"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton2>
                        <LinkButton
                          linkValue={"Locations"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton2>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton3>
                        <LinkButton
                          linkValue={"Employment"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton3>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton4>
                        <LinkButton
                          linkValue={"Contact Us"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton4>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton5>
                        <LinkButton
                          linkValue={"NU News"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton5>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton6>
                        <LinkButton
                          linkValue={"Academic Schools/Colleges"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton6>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton7>
                        <LinkButton
                          linkValue={"Academies at NU"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton7>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton8>
                        <LinkButton
                          linkValue={"Accessibility"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton8>
                    )}
                  </StyledLinks2>
                )}
              </StyledLinkGroup>
            )}
            {device === "Desktop" && (
              <StyledLinkGroup2>
                {device === "Desktop" && (
                  <StyledDegreesPrograms>
                    {"Degrees & Programs"}
                  </StyledDegreesPrograms>
                )}
                {device === "Desktop" && (
                  <StyledLinks3>
                    {device === "Desktop" && (
                      <StyledLinkButton9>
                        <LinkButton
                          linkValue={"Program Finder"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton9>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton22>
                        <LinkButton
                          linkValue={"Bachelor’s Degrees"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton22>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton32>
                        <LinkButton
                          linkValue={"Master’s Degree"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton32>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton42>
                        <LinkButton
                          linkValue={"Doctoral Degrees"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton42>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton52>
                        <LinkButton
                          linkValue={"Certificates"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton52>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton62>
                        <LinkButton
                          linkValue={"Credentials"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton62>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton72>
                        <LinkButton
                          linkValue={"Teaching & Education"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton72>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton82>
                        <LinkButton
                          linkValue={"Business & Marketing"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton82>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton92>
                        <LinkButton
                          linkValue={"Healthcare & Nursing"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton92>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton10>
                        <LinkButton
                          linkValue={"Social Science & Psychology"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton10>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton11>
                        <LinkButton
                          linkValue={"Engineering & Technology"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton11>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton12>
                        <LinkButton
                          linkValue={"Arts & Humanities"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton12>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton13>
                        <LinkButton
                          linkValue={"Criminal Justice & Law"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton13>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton14>
                        <LinkButton
                          linkValue={"Science & Math"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton14>
                    )}
                  </StyledLinks3>
                )}
              </StyledLinkGroup2>
            )}
            {device === "Desktop" && (
              <StyledLinkGroup3>
                {device === "Desktop" && (
                  <StyledAdmissionsFinances>
                    {"Admissions & Finances"}
                  </StyledAdmissionsFinances>
                )}
                {device === "Desktop" && (
                  <StyledLinks4>
                    {device === "Desktop" && (
                      <StyledLinkButton15>
                        <LinkButton
                          linkValue={"Admissions"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton15>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton23>
                        <LinkButton
                          linkValue={"Transfer Information"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton23>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton33>
                        <LinkButton
                          linkValue={"International Students"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton33>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton43>
                        <LinkButton
                          linkValue={"Financial Aid"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton43>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton53>
                        <LinkButton
                          linkValue={"Scholarships"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton53>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton63>
                        <LinkButton
                          linkValue={"Tuition & Fees"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton63>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton73>
                        <LinkButton
                          linkValue={"Cost of Attendance"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton73>
                    )}
                  </StyledLinks4>
                )}
              </StyledLinkGroup3>
            )}
            {device === "Desktop" && (
              <StyledLinkGroup4>
                {device === "Desktop" && (
                  <StyledStudentResources>
                    {"Student Resources"}
                  </StyledStudentResources>
                )}
                {device === "Desktop" && (
                  <StyledLinks5>
                    {device === "Desktop" && (
                      <StyledLinkButton16>
                        <LinkButton
                          linkValue={"FAQs"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton16>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton24>
                        <LinkButton
                          linkValue={"Student Login"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton24>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton34>
                        <LinkButton
                          linkValue={"Graduation"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton34>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton44>
                        <LinkButton
                          linkValue={"Graduation Events"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton44>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton54>
                        <LinkButton
                          linkValue={"Alumni"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton54>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton64>
                        <LinkButton
                          linkValue={"Registrar"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton64>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton74>
                        <LinkButton
                          linkValue={"Community"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton74>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton83>
                        <LinkButton
                          linkValue={"Library"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton83>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton93>
                        <LinkButton
                          linkValue={"Consumer Information"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton93>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton102>
                        <LinkButton
                          linkValue={"Student Portal"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton102>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton112>
                        <LinkButton
                          linkValue={"NU Store"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton112>
                    )}
                    {device === "Desktop" && (
                      <StyledLinkButton122>
                        <LinkButton
                          linkValue={"Course Catalog"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Desktop"}
                          state={"Default"}
                          hierarchy={"Secondary"}
                          type={"Inverted"}
                        />
                      </StyledLinkButton122>
                    )}
                  </StyledLinks5>
                )}
              </StyledLinkGroup4>
            )}
          </StyledLinks>
        )}
        {device === "Desktop" && (
          <StyledCarengieContainer>
            {device === "Desktop" && (
              <StyledUpdatedCarnegieSealContainer>
                {device === "Desktop" && (
                  <StyledContainer>
                    {device === "Desktop" && <StyledOCUREVERSE2 />}
                  </StyledContainer>
                )}
                {device === "Desktop" && (
                  <StyledContainer2>
                    {device === "Desktop" && (
                      <StyledStrong>
                        {device === "Desktop" && (
                          <StyledNationalUniversityAwardedCarnegieClassifications>
                            {
                              "National University Awarded Carnegie Classifications"
                            }
                          </StyledNationalUniversityAwardedCarnegieClassifications>
                        )}
                      </StyledStrong>
                    )}
                    {device === "Desktop" && (
                      <StyledContainer3>
                        {device === "Desktop" && (
                          <StyledRecognizedByTheAmericanCouncilOnEducationAndTheCarnegieFoundationAsAPrestigiousOpportunityUniversityForExpandingAccessToEducationAndAchievingStrongOutcomesForNontraditionalWorkingAndMilitaryAffiliatedStudents>
                            {
                              "Recognized by the American Council on Education and the Carnegie Foundation as a prestigious “Opportunity University” for expanding access to education and achieving strong outcomes for nontraditional, working, and military-affiliated students."
                            }
                          </StyledRecognizedByTheAmericanCouncilOnEducationAndTheCarnegieFoundationAsAPrestigiousOpportunityUniversityForExpandingAccessToEducationAndAchievingStrongOutcomesForNontraditionalWorkingAndMilitaryAffiliatedStudents>
                        )}
                      </StyledContainer3>
                    )}
                  </StyledContainer2>
                )}
              </StyledUpdatedCarnegieSealContainer>
            )}
          </StyledCarengieContainer>
        )}
        {device === "Desktop" && (
          <StyledEnd>
            {device === "Desktop" && (
              <StyledCTAs>
                {device === "Desktop" && (
                  <StyledLogo>
                    {device === "Desktop" && (
                      <LogoColor type={"Monochrome Light"} />
                    )}
                    {device === "Desktop" && (
                      <Styled9388LightwaveAveSanDiegoCA92123>
                        {"9388 Lightwave Ave, San Diego, CA 92123"}
                      </Styled9388LightwaveAveSanDiegoCA92123>
                    )}
                  </StyledLogo>
                )}
                {device === "Desktop" && (
                  <StyledContact>
                    {device === "Desktop" && (
                      <StyledCTAs2>
                        {device === "Desktop" && (
                          <StyledButton>
                            <Button
                              label={true}
                              bTNValue={"Request Info"}
                              rightIcon={false}
                              leftIcon={false}
                              iconOnly={"False"}
                              device={"Desktop"}
                              size={"Medium"}
                              hierarchy={"Secondary"}
                              state={"Default"}
                              type={"Inverted"}
                            />
                          </StyledButton>
                        )}
                        {device === "Desktop" && (
                          <StyledButton2>
                            <Button
                              label={true}
                              bTNValue={"apply now"}
                              rightIcon={false}
                              leftIcon={false}
                              iconOnly={"False"}
                              device={"Desktop"}
                              size={"Medium"}
                              hierarchy={"Primary"}
                              state={"Default"}
                              type={"Inverted"}
                            />
                          </StyledButton2>
                        )}
                      </StyledCTAs2>
                    )}
                    {device === "Desktop" && (
                      <StyledSocialLinks>
                        {device === "Desktop" && (
                          <StyledSocial>
                            <Social property1={"facebook"} />
                          </StyledSocial>
                        )}
                        {device === "Desktop" && (
                          <StyledSocial2>
                            <Social property1={"x"} />
                          </StyledSocial2>
                        )}
                        {device === "Desktop" && (
                          <StyledSocial3>
                            <Social property1={"instagram"} />
                          </StyledSocial3>
                        )}
                        {device === "Desktop" && (
                          <StyledSocial4>
                            <Social property1={"linkedin"} />
                          </StyledSocial4>
                        )}
                        {device === "Desktop" && (
                          <StyledSocial5>
                            <Social property1={"youtube"} />
                          </StyledSocial5>
                        )}
                        {device === "Desktop" && (
                          <StyledSocial6>
                            <Social property1={"tiktok"} />
                          </StyledSocial6>
                        )}
                      </StyledSocialLinks>
                    )}
                  </StyledContact>
                )}
              </StyledCTAs>
            )}
            {device === "Desktop" && (
              <StyledFrame1984078218>
                {device === "Desktop" && (
                  <StyledCopyright2025NationalUniversityAllRightsReserved>
                    {
                      "© Copyright 2025 National University. All Rights Reserved."
                    }
                  </StyledCopyright2025NationalUniversityAllRightsReserved>
                )}
                {device === "Desktop" && <StyledEllipse1 />}
                {device === "Desktop" && <StyledEllipse2 />}
              </StyledFrame1984078218>
            )}
          </StyledEnd>
        )}
        {device === "Mobile" && (
          <StyledContent>
            {device === "Mobile" && (
              <StyledLogo2>
                {device === "Mobile" && <LogoColor type={"Monochrome Light"} />}
                {device === "Mobile" && (
                  <Styled9388LightwaveAveSanDiegoCA921232>
                    {"9388 Lightwave Ave, San Diego, CA 92123"}
                  </Styled9388LightwaveAveSanDiegoCA921232>
                )}
              </StyledLogo2>
            )}
            {device === "Mobile" && (
              <StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToAdultLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide>
                {
                  "For 50 years, we've been putting passion into practice by offering accessible, achievable higher education to adult learners. As San Diego's largest private nonprofit university, we proudly educate students from across the U.S. and around the globe, with over 245,000 alumni worldwide."
                }
              </StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToAdultLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide>
            )}
            {device === "Mobile" && (
              <StyledContact2>
                {device === "Mobile" && (
                  <StyledCTAs3>
                    {device === "Mobile" && (
                      <StyledButton3>
                        <Button
                          label={true}
                          bTNValue={"Request Info"}
                          rightIcon={false}
                          leftIcon={false}
                          iconOnly={"False"}
                          device={"Mobile"}
                          size={"Large"}
                          hierarchy={"Secondary"}
                          state={"Default"}
                          type={"Inverted"}
                        />
                      </StyledButton3>
                    )}
                    {device === "Mobile" && (
                      <StyledButton22>
                        <Button
                          label={true}
                          bTNValue={"apply now"}
                          rightIcon={false}
                          leftIcon={false}
                          iconOnly={"False"}
                          device={"Mobile"}
                          size={"Large"}
                          hierarchy={"Primary"}
                          state={"Default"}
                          type={"Inverted"}
                        />
                      </StyledButton22>
                    )}
                  </StyledCTAs3>
                )}
                {device === "Mobile" && (
                  <StyledSocialLinks2>
                    {device === "Mobile" && (
                      <StyledSocial7>
                        <Social property1={"facebook"} />
                      </StyledSocial7>
                    )}
                    {device === "Mobile" && (
                      <StyledSocial22>
                        <Social property1={"x"} />
                      </StyledSocial22>
                    )}
                    {device === "Mobile" && (
                      <StyledSocial32>
                        <Social property1={"instagram"} />
                      </StyledSocial32>
                    )}
                    {device === "Mobile" && (
                      <StyledSocial42>
                        <Social property1={"linkedin"} />
                      </StyledSocial42>
                    )}
                    {device === "Mobile" && (
                      <StyledSocial52>
                        <Social property1={"youtube"} />
                      </StyledSocial52>
                    )}
                    {device === "Mobile" && (
                      <StyledSocial62>
                        <Social property1={"tiktok"} />
                      </StyledSocial62>
                    )}
                  </StyledSocialLinks2>
                )}
                {device === "Mobile" && (
                  <StyledCopyright2025NationalUniversityAllRightsReservedPrivacyPolicyConsumerInformation>
                    {
                      "© Copyright 2025 National University. All Rights Reserved. Privacy Policy  | Consumer Information "
                    }
                  </StyledCopyright2025NationalUniversityAllRightsReservedPrivacyPolicyConsumerInformation>
                )}
              </StyledContact2>
            )}
          </StyledContent>
        )}
      </StyledRoot>
    );
  },
);
