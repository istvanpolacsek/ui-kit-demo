import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export interface CTABannerProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 115px;
            justify-content: space-between;
            align-items: center;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 32px;
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
        case "Web":
          return css`
            background-color: ${"#003a92"};
          `;
        case "Mobile":
          return css`
            background-color: ${"#f0f4fa"};
          `;
        default:
          return css``;
      }
    })()}
  color: #ffffff;
  `,
);

const StyledRightImage = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    width: 720px;
    height: 570px;
    box-sizing: border-box;
  `,
);

const StyledLeftContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 84px;
    padding-right: 84px;
    padding-bottom: 84px;
    padding-left: 84px;
    gap: 56px;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
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
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
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
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.div(
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

const StyledLiveYourLifeAndEarnYourDegree = styled.h2(
  () => css`
    color: #ffffff;
    font-family: "Georgia";
    font-size: 40px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
  `,
);

const StyledThroughWholeHumanEducationWeReEmpoweringLearnersToBalanceWorkANDFamilyANDSchoolOurANDersMovementSupportsAndChampionsStudentsWhoAreDoingItAllAndStrivingForModeHelpingThemEarnTheirDegreesAndMoveConfidentlyForwardInTheirCareers =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 16px;
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledContent2 = styled.div(
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
    overflow: hidden;
    background-color: #003a92;
    border-radius: 0px;
  `,
);

const StyledImageHeader = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    width: 390px;
    height: 500px;
    box-sizing: border-box;
  `,
);

const StyledLeftContent2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 48px;
    padding-right: 20px;
    padding-bottom: 48px;
    padding-left: 20px;
    gap: 56px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContent3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledInfo2 = styled.div(
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

const StyledTitle2 = styled.div(
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

const StyledLiveYourLifeAndEarnYourDegree2 = styled.h2(
  () => css`
    color: #ffffff;
    font-family: "Georgia";
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.005em;
  `,
);

const StyledThroughWholeHumanEducationWeReEmpoweringLearnersToBalanceWorkANDFamilyANDSchoolOurANDersMovementSupportsAndChampionsStudentsWhoAreDoingItAllAndStrivingForModeHelpingThemEarnTheirDegreesAndMoveConfidentlyForwardInTheirCareers2 =
  styled.p(
    () => css`
      color: #ffffff;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
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
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A full-width call-to-action banner component that combines a headline, descriptive body text, and a primary action button. Supports Web and Mobile layout variants, with the Web variant featuring a side image alongside the content. */
export const CTABanner = React.forwardRef<HTMLElement, CTABannerProps>(
  function CTABanner({ device = "Web", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Call to action banner"
        {...rest}
        ref={ref}
        $device={device}
      >
        {device === "Web" && <StyledRightImage></StyledRightImage>}
        {device === "Web" && (
          <StyledLeftContent>
            {device === "Web" && (
              <StyledContent>
                {device === "Web" && (
                  <StyledInfo>
                    {device === "Web" && (
                      <StyledTitle>
                        {device === "Web" && (
                          <StyledLiveYourLifeAndEarnYourDegree>
                            {"Live your Life and Earn your Degree"}
                          </StyledLiveYourLifeAndEarnYourDegree>
                        )}
                      </StyledTitle>
                    )}
                    {device === "Web" && (
                      <StyledThroughWholeHumanEducationWeReEmpoweringLearnersToBalanceWorkANDFamilyANDSchoolOurANDersMovementSupportsAndChampionsStudentsWhoAreDoingItAllAndStrivingForModeHelpingThemEarnTheirDegreesAndMoveConfidentlyForwardInTheirCareers>
                        {
                          "Through Whole Human Education, we’re empowering learners to balance work AND family AND school. Our ANDers Movement supports and champions students who are doing it all and striving for mode, helping them earn their degrees and move confidently forward in their careers."
                        }
                      </StyledThroughWholeHumanEducationWeReEmpoweringLearnersToBalanceWorkANDFamilyANDSchoolOurANDersMovementSupportsAndChampionsStudentsWhoAreDoingItAllAndStrivingForModeHelpingThemEarnTheirDegreesAndMoveConfidentlyForwardInTheirCareers>
                    )}
                  </StyledInfo>
                )}
                {device === "Web" && (
                  <StyledCTAs>
                    {device === "Web" && (
                      <Button
                        label={true}
                        bTNValue={"Request Info"}
                        rightIcon={false}
                        leftIcon={false}
                        iconOnly={"False"}
                        device={"Desktop"}
                        size={"Medium"}
                        hierarchy={"Primary"}
                        state={"Default"}
                        type={"Inverted"}
                      />
                    )}
                  </StyledCTAs>
                )}
              </StyledContent>
            )}
          </StyledLeftContent>
        )}
        {device === "Mobile" && (
          <StyledContent2>
            {device === "Mobile" && <StyledImageHeader></StyledImageHeader>}
            {device === "Mobile" && (
              <StyledLeftContent2>
                {device === "Mobile" && (
                  <StyledContent3>
                    {device === "Mobile" && (
                      <StyledInfo2>
                        {device === "Mobile" && (
                          <StyledTitle2>
                            {device === "Mobile" && (
                              <StyledLiveYourLifeAndEarnYourDegree2>
                                {"Live your Life and Earn your Degree"}
                              </StyledLiveYourLifeAndEarnYourDegree2>
                            )}
                          </StyledTitle2>
                        )}
                        {device === "Mobile" && (
                          <StyledThroughWholeHumanEducationWeReEmpoweringLearnersToBalanceWorkANDFamilyANDSchoolOurANDersMovementSupportsAndChampionsStudentsWhoAreDoingItAllAndStrivingForModeHelpingThemEarnTheirDegreesAndMoveConfidentlyForwardInTheirCareers2>
                            {
                              "Through Whole Human Education, we’re empowering learners to balance work AND family AND school. Our ANDers Movement supports and champions students who are doing it all and striving for mode, helping them earn their degrees and move confidently forward in their careers."
                            }
                          </StyledThroughWholeHumanEducationWeReEmpoweringLearnersToBalanceWorkANDFamilyANDSchoolOurANDersMovementSupportsAndChampionsStudentsWhoAreDoingItAllAndStrivingForModeHelpingThemEarnTheirDegreesAndMoveConfidentlyForwardInTheirCareers2>
                        )}
                      </StyledInfo2>
                    )}
                    {device === "Mobile" && (
                      <StyledCTAs2>
                        {device === "Mobile" && (
                          <Button
                            label={true}
                            bTNValue={"Request Info"}
                            rightIcon={false}
                            leftIcon={false}
                            iconOnly={"False"}
                            device={"Mobile"}
                            size={"Large"}
                            hierarchy={"Primary"}
                            state={"Default"}
                            type={"Inverted"}
                          />
                        )}
                      </StyledCTAs2>
                    )}
                  </StyledContent3>
                )}
              </StyledLeftContent2>
            )}
          </StyledContent2>
        )}
      </StyledRoot>
    );
  },
);
