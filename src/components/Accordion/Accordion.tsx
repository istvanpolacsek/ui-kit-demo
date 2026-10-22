import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface AccordionProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "device"
> {
  state?: "Open" | "Closed";
  device?: "Desktop" | "Mobile";
}

const StyledRoot = styled.button<{
  $state: "Open" | "Closed";
  $device: "Desktop" | "Mobile";
}>(
  ({ theme, $state, $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$state, $device])) {
        case '["Closed","Desktop"]':
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        case '["Open","Desktop"]':
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        case '["Closed","Mobile"]':
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Open","Mobile"]':
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 350px;
            height: 308px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["accent"]["accentBrand"]};
  `,
);

const StyledQuestion = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledWhatIsThePhDInEducationalAndOrganizationalLeadershipAtNationalUniversityAndWhoIsItFor =
  styled.h3(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
    `,
  );

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledAnswer = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 8px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThePhDEdLIsAResearchOrientedDoctoralProgramDesignedToPrepareEducationalLeadersToEngageWithTheoryResearchAndPolicyForLearningOrganizationsItSDesignedForProfessionalsAimingToInfluenceEducationalPracticeOrOrganizationalLeadershipAcrossSectorsIncludingK12SchoolsHigherEducationMilitaryOrCorporateLearningOrganizationsNonprofitsOrPolicyAgencies =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

/** An accordion component that toggles the visibility of an answer panel when the question header is clicked. Supports open and closed states and adapts to desktop and mobile layouts. */
export const Accordion = React.forwardRef<HTMLButtonElement, AccordionProps>(
  function Accordion({ state = "Closed", device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref} $state={state} $device={device}>
        <StyledQuestion>
          <StyledWhatIsThePhDInEducationalAndOrganizationalLeadershipAtNationalUniversityAndWhoIsItFor>
            {
              "What is the PhD in Educational and Organizational Leadership at National University, and who is it for?"
            }
          </StyledWhatIsThePhDInEducationalAndOrganizationalLeadershipAtNationalUniversityAndWhoIsItFor>
          <StyledIcon>
            {state === "Closed" && <Icon name={"add"} size={24} />}
            {state === "Open" && <Icon name={"remove"} size={24} />}
          </StyledIcon>
        </StyledQuestion>
        {state === "Open" && (
          <StyledAnswer $device={device}>
            {state === "Open" && (
              <StyledThePhDEdLIsAResearchOrientedDoctoralProgramDesignedToPrepareEducationalLeadersToEngageWithTheoryResearchAndPolicyForLearningOrganizationsItSDesignedForProfessionalsAimingToInfluenceEducationalPracticeOrOrganizationalLeadershipAcrossSectorsIncludingK12SchoolsHigherEducationMilitaryOrCorporateLearningOrganizationsNonprofitsOrPolicyAgencies>
                {
                  "The PhD-EdL is a research-oriented doctoral program designed to prepare educational leaders to engage with theory, research, and policy for learning organizations. It’s designed for professionals aiming to influence educational practice or organizational leadership across sectors; including K–12 schools, higher education, military or corporate learning organizations, nonprofits, or policy agencies."
                }
              </StyledThePhDEdLIsAResearchOrientedDoctoralProgramDesignedToPrepareEducationalLeadersToEngageWithTheoryResearchAndPolicyForLearningOrganizationsItSDesignedForProfessionalsAimingToInfluenceEducationalPracticeOrOrganizationalLeadershipAcrossSectorsIncludingK12SchoolsHigherEducationMilitaryOrCorporateLearningOrganizationsNonprofitsOrPolicyAgencies>
            )}
          </StyledAnswer>
        )}
      </StyledRoot>
    );
  },
);
