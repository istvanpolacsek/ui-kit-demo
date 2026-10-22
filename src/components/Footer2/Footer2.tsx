import React from "react";
import styled, { css } from "styled-components";
import { LogoColor } from "../LogoColor";
import { Button } from "../Button";
import { Social } from "../Social";

export interface Footer2Props extends Omit<
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
            padding-top: 120px;
            padding-right: 20px;
            padding-bottom: 32px;
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
  color: ${theme["accent"]["accentWhite"]};
  `,
);

const StyledFrame2131329780 = styled.div(
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

const StyledFrame2131329779 = styled.div(
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

const StyledFrame2131329777 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 34px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledVector330 = styled.div(
  () => css`
    border-radius: 190px;
  `,
);

const StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToBusyLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnDarkDefault"]};
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledFrame2131329778 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-end;
    width: 261px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFrame1984078189 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-end;
    align-items: flex-start;
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
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
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

const StyledFrame21313297802 = styled.div(
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

const StyledLogo = styled.div(
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

const Styled9388LightwaveAveSanDiegoCA92123 = styled.p(
  () => css`
    color: #ffffff;
  `,
);

const StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToBusyLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide2 =
  styled.p(
    () => css`
      color: #ffffff;
    `,
  );

const StyledInfo = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButton2 = styled.div(
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
    height: 36px;
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
    `,
  );

/** Site-wide footer component for National University, available in Desktop and Mobile variants. Contains the university logo, a brief institutional description, a call-to-action button, social media links, and copyright information. */
export const Footer2 = React.forwardRef<HTMLElement, Footer2Props>(
  function Footer2({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="contentinfo"
        aria-label="Site footer"
        {...rest}
        ref={ref}
        $device={device}
      >
        {device === "Desktop" && (
          <StyledFrame2131329780>
            {device === "Desktop" && (
              <StyledFrame2131329779>
                {device === "Desktop" && (
                  <StyledFrame2131329777>
                    {device === "Desktop" && (
                      <LogoColor type={"Monochrome Light"} />
                    )}
                    {device === "Desktop" && <StyledVector330 />}
                    {device === "Desktop" && (
                      <StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToBusyLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide>
                        {
                          "For 50 years, we’ve been putting passion into practice by offering accessible, achievable higher education to busy learners. As San Diego’s largest private nonprofit university, we proudly educate students from across the U.S. and around the globe, with over 245,000 alumni worldwide."
                        }
                      </StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToBusyLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide>
                    )}
                  </StyledFrame2131329777>
                )}
                {device === "Desktop" && (
                  <StyledFrame2131329778>
                    {device === "Desktop" && (
                      <StyledFrame1984078189>
                        {device === "Desktop" && (
                          <StyledButton>
                            <Button
                              label={true}
                              bTNValue={"Contact Us"}
                              rightIcon={false}
                              leftIcon={false}
                              iconOnly={"False"}
                              device={"Desktop"}
                              size={"Medium"}
                              hierarchy={"Primary"}
                              state={"Default"}
                              type={"Inverted"}
                            />
                          </StyledButton>
                        )}
                      </StyledFrame1984078189>
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
                  </StyledFrame2131329778>
                )}
              </StyledFrame2131329779>
            )}
            {device === "Desktop" && (
              <StyledFrame21313297802>
                {device === "Desktop" && (
                  <StyledCopyright2025NationalUniversityAllRightsReserved>
                    {
                      "© Copyright 2025 National University. All Rights Reserved."
                    }
                  </StyledCopyright2025NationalUniversityAllRightsReserved>
                )}
                {device === "Desktop" && <StyledEllipse1 />}
                {device === "Desktop" && <StyledEllipse2 />}
              </StyledFrame21313297802>
            )}
          </StyledFrame2131329780>
        )}
        {device === "Mobile" && (
          <StyledContent>
            {device === "Mobile" && (
              <StyledLogo>
                {device === "Mobile" && <LogoColor type={"Monochrome Light"} />}
                {device === "Mobile" && (
                  <Styled9388LightwaveAveSanDiegoCA92123>
                    {"9388 Lightwave Ave, San Diego, CA 92123"}
                  </Styled9388LightwaveAveSanDiegoCA92123>
                )}
              </StyledLogo>
            )}
            {device === "Mobile" && (
              <StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToBusyLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide2>
                {
                  "For 50 years, we’ve been putting passion into practice by offering accessible, achievable higher education to busy learners. As San Diego’s largest private nonprofit university, we proudly educate students from across the U.S. and around the globe, with over 245,000 alumni worldwide."
                }
              </StyledFor50YearsWeVeBeenPuttingPassionIntoPracticeByOfferingAccessibleAchievableHigherEducationToBusyLearnersAsSanDiegoSLargestPrivateNonprofitUniversityWeProudlyEducateStudentsFromAcrossTheUSAndAroundTheGlobeWithOver245000AlumniWorldwide2>
            )}
            {device === "Mobile" && (
              <StyledInfo>
                {device === "Mobile" && (
                  <StyledButton2>
                    <Button
                      label={true}
                      bTNValue={"Contact Us"}
                      rightIcon={false}
                      leftIcon={false}
                      iconOnly={"False"}
                      device={"Mobile"}
                      size={"Large"}
                      hierarchy={"Primary"}
                      state={"Default"}
                      type={"Inverted"}
                    />
                  </StyledButton2>
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
              </StyledInfo>
            )}
          </StyledContent>
        )}
      </StyledRoot>
    );
  },
);
