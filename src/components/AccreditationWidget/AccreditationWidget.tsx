import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export interface AccreditationWidgetProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    position: relative;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 843px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 16px;
            padding-bottom: 24px;
            padding-left: 16px;
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentAqua"]};
    border-radius: 0px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTrustedAndAccredited = styled.h2(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Georgia";
    font-size: 40px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
  `,
);

const StyledCredentials = styled.ul(
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
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    height: 235px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLogo = styled.li(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 24px;
    justify-content: center;
    align-items: center;
    height: 235px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 12px;
  `,
);

const StyledImage = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 350px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const Styledimage9208 = styled.div(
  () => css`
    width: 310px;
    height: 75px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTheWesternAssociationOfSchoolsAndCollegesWASCAccreditsPublicAndPrivateSchoolsCollegesAndUniversitiesInTheUS =
  styled.div(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledLogo2 = styled.li(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 24px;
    justify-content: center;
    align-items: center;
    height: 235px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 12px;
  `,
);

const StyledImage2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 350px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const Styledimage9210 = styled.div(
  () => css`
    width: 96px;
    height: 71px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAAQEPIsANationalAccreditingBodyFocusedOnImprovingTheQualityAndEffectivenessOfEducatorPreparationPrograms =
  styled.div(
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
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 261px;
    box-sizing: border-box;
    flex-shrink: 0;
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

const StyledContainer = styled.div(
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
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.header(
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

const StyledTrustedAndAccredited2 = styled.h2(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Georgia";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
  `,
);

const StyledTakeTheFirstStepWithNationalUniversity = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledBullets = styled.ul(
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
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLogo3 = styled.li(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 12px;
  `,
);

const StyledImage3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 3.7701148986816406px;
    padding-right: 3.7701148986816406px;
    padding-bottom: 3.7701148986816406px;
    padding-left: 3.7701148986816406px;
    gap: 4.712643623352051px;
    justify-content: center;
    align-items: center;
    width: 164.94253540039062px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 3.7701148986816406px;
  `,
);

const Styledimage92082 = styled.div(
  () => css`
    width: 146.09194946289062px;
    height: 35.344825744628906px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledContent4 = styled.div(
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

const StyledTheWesternAssociationOfSchoolsAndCollegesWASCAccreditsPublicAndPrivateSchoolsCollegesAndUniversitiesInTheUS2 =
  styled.div(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledLogo22 = styled.li(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 12px;
  `,
);

const StyledImage4 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 3.7701148986816406px;
    padding-right: 3.7701148986816406px;
    padding-bottom: 3.7701148986816406px;
    padding-left: 3.7701148986816406px;
    gap: 4.712643623352051px;
    justify-content: center;
    align-items: center;
    width: 164.94253540039062px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 3.7701148986816406px;
  `,
);

const Styledimage92102 = styled.div(
  () => css`
    width: 45.370079040527344px;
    height: 33.3651237487793px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledContent5 = styled.div(
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

const StyledAAQEPIsANationalAccreditingBodyFocusedOnImprovingTheQualityAndEffectivenessOfEducatorPreparationPrograms2 =
  styled.div(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 14px;
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
    width: 261px;
    box-sizing: border-box;
    flex-shrink: 0;
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

const StyledRectangle4134298 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0px;
    top: -0.234375px;
    width: 350px;
    height: 8px;
    background-color: ${theme["accent"]["accentAqua"]};
    border-radius: 0px;
  `,
);

/** Displays institutional accreditation information including logos and descriptions for accrediting bodies (WASC and AAQEP), a heading, and call-to-action buttons. Supports Desktop and Mobile layout variants. */
export const AccreditationWidget = React.forwardRef<
  HTMLElement,
  AccreditationWidgetProps
>(function AccreditationWidget({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Accreditation information"
      {...rest}
      ref={ref}
      $device={device}
    >
      {device === "Desktop" && <StyledDecorativeLine />}
      {device === "Desktop" && (
        <StyledContent>
          {device === "Desktop" && (
            <StyledTrustedAndAccredited>
              {"Trusted and Accredited"}
            </StyledTrustedAndAccredited>
          )}
          {device === "Desktop" && (
            <StyledCredentials>
              {device === "Desktop" && (
                <StyledLogo>
                  {device === "Desktop" && (
                    <StyledImage>
                      {device === "Desktop" && <Styledimage9208 />}
                    </StyledImage>
                  )}
                  {device === "Desktop" && (
                    <StyledContent2>
                      {device === "Desktop" && (
                        <StyledTheWesternAssociationOfSchoolsAndCollegesWASCAccreditsPublicAndPrivateSchoolsCollegesAndUniversitiesInTheUS>
                          {
                            "The Western Association of Schools and Colleges (WASC) accredits public and private schools, colleges, and universities in the U.S."
                          }
                        </StyledTheWesternAssociationOfSchoolsAndCollegesWASCAccreditsPublicAndPrivateSchoolsCollegesAndUniversitiesInTheUS>
                      )}
                    </StyledContent2>
                  )}
                </StyledLogo>
              )}
              {device === "Desktop" && (
                <StyledLogo2>
                  {device === "Desktop" && (
                    <StyledImage2>
                      {device === "Desktop" && <Styledimage9210 />}
                    </StyledImage2>
                  )}
                  {device === "Desktop" && (
                    <StyledContent3>
                      {device === "Desktop" && (
                        <StyledAAQEPIsANationalAccreditingBodyFocusedOnImprovingTheQualityAndEffectivenessOfEducatorPreparationPrograms>
                          {
                            "AAQEP is a national accrediting body focused on improving the quality and effectiveness of educator preparation programs."
                          }
                        </StyledAAQEPIsANationalAccreditingBodyFocusedOnImprovingTheQualityAndEffectivenessOfEducatorPreparationPrograms>
                      )}
                    </StyledContent3>
                  )}
                </StyledLogo2>
              )}
            </StyledCredentials>
          )}
          {device === "Desktop" && (
            <StyledCTAs>
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
                    type={"Default"}
                  />
                </StyledButton>
              )}
              {device === "Desktop" && (
                <StyledButton2>
                  <Button
                    label={true}
                    bTNValue={"Apply Now"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Medium"}
                    hierarchy={"Primary"}
                    state={"Default"}
                    type={"Default"}
                  />
                </StyledButton2>
              )}
            </StyledCTAs>
          )}
        </StyledContent>
      )}
      {device === "Mobile" && (
        <StyledContainer>
          {device === "Mobile" && (
            <StyledTitle>
              {device === "Mobile" && (
                <StyledTrustedAndAccredited2>
                  {"Trusted and Accredited"}
                </StyledTrustedAndAccredited2>
              )}
              {device === "Mobile" && (
                <StyledTakeTheFirstStepWithNationalUniversity>
                  {"Take the first step with National University"}
                </StyledTakeTheFirstStepWithNationalUniversity>
              )}
            </StyledTitle>
          )}
          {device === "Mobile" && (
            <StyledBullets>
              {device === "Mobile" && (
                <StyledLogo3>
                  {device === "Mobile" && (
                    <StyledImage3>
                      {device === "Mobile" && <Styledimage92082 />}
                    </StyledImage3>
                  )}
                  {device === "Mobile" && (
                    <StyledContent4>
                      {device === "Mobile" && (
                        <StyledTheWesternAssociationOfSchoolsAndCollegesWASCAccreditsPublicAndPrivateSchoolsCollegesAndUniversitiesInTheUS2>
                          {
                            "The Western Association of Schools and Colleges (WASC) accredits public and private schools, colleges, and universities in the U.S."
                          }
                        </StyledTheWesternAssociationOfSchoolsAndCollegesWASCAccreditsPublicAndPrivateSchoolsCollegesAndUniversitiesInTheUS2>
                      )}
                    </StyledContent4>
                  )}
                </StyledLogo3>
              )}
              {device === "Mobile" && (
                <StyledLogo22>
                  {device === "Mobile" && (
                    <StyledImage4>
                      {device === "Mobile" && <Styledimage92102 />}
                    </StyledImage4>
                  )}
                  {device === "Mobile" && (
                    <StyledContent5>
                      {device === "Mobile" && (
                        <StyledAAQEPIsANationalAccreditingBodyFocusedOnImprovingTheQualityAndEffectivenessOfEducatorPreparationPrograms2>
                          {
                            "AAQEP is a national accrediting body focused on improving the quality and effectiveness of educator preparation programs."
                          }
                        </StyledAAQEPIsANationalAccreditingBodyFocusedOnImprovingTheQualityAndEffectivenessOfEducatorPreparationPrograms2>
                      )}
                    </StyledContent5>
                  )}
                </StyledLogo22>
              )}
            </StyledBullets>
          )}
          {device === "Mobile" && (
            <StyledCTAs2>
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
                    type={"Default"}
                  />
                </StyledButton3>
              )}
              {device === "Mobile" && (
                <StyledButton22>
                  <Button
                    label={true}
                    bTNValue={"Apply Now"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Mobile"}
                    size={"Large"}
                    hierarchy={"Primary"}
                    state={"Default"}
                    type={"Default"}
                  />
                </StyledButton22>
              )}
            </StyledCTAs2>
          )}
        </StyledContainer>
      )}
      {device === "Mobile" && <StyledRectangle4134298 />}
    </StyledRoot>
  );
});
