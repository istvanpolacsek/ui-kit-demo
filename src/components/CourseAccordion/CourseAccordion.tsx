import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface CourseAccordionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "state" | "device"
> {
  state?: "Open" | "Closed";
  device?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["accent"]["accentBrand"]};
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 8px;
  `,
);

const StyledCourseAccordion = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    background-color: ${theme["background"]["bgGray"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 628px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 334px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.div(
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
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledEDU805 = styled.div(
  ({ theme }) => css`
    color: ${theme["aqua"]["700"]};
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
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledFoundationsOfAdvancedGraduateStudyAndResearch = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const Styled30CreditHoursThisFoundationalCourseWillIntroduceYouToTheConceptsAndPracticesOfAdvancedGraduateStudyYouWillExamineConceptsAndExpectationsOfAdvancedGraduateStudyAndAcademicIntegrityAsWellAsInvestigateBestPracticesOfScholarshipAndResearchYouWillExploreUniversityResourcesAndSupportsAssociatedWithStudentSuccessIncludingTechnologiesForLearningAndResearchYouWillAlsoEvaluateTheProgramProcessAndRequirementsForSuccessFinallyYouWillAdvocateForSelfCareAndReflectionDuringYourStudies =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
    `,
  );

const StyledFrame2131330730 = styled.div(
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

const StyledInfo2 = styled.div(
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
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledEDU8052 = styled.span(
  ({ theme }) => css`
    color: ${theme["aqua"]["700"]};
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
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
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFoundationsOfAdvancedGraduateStudyAndResearch2 = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled30CreditHoursThisFoundationalCourseWillIntroduceYouToTheConceptsAndPracticesOfAdvancedGraduateStudyYouWillExamineConceptsAndExpectationsOfAdvancedGraduateStudyAndAcademicIntegrityAsWellAsInvestigateBestPracticesOfScholarshipAndResearchYouWillExploreUniversityResourcesAndSupportsAssociatedWithStudentSuccessIncludingTechnologiesForLearningAndResearchYouWillAlsoEvaluateTheProgramProcessAndRequirementsForSuccessFinallyYouWillAdvocateForSelfCareAndReflectionDuringYourStudies2 =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
    `,
  );

/** An accordion component for displaying course information (course code, title, and description) that can be toggled between open and closed states. Supports both desktop and mobile layouts. */
export const CourseAccordion = React.forwardRef<
  HTMLElement,
  CourseAccordionProps
>(function CourseAccordion(
  { state = "Closed", device = "Desktop", ...rest },
  ref,
) {
  return (
    <StyledRoot role="region" {...rest} ref={ref}>
      <StyledDecorativeLine />
      <StyledCourseAccordion $device={device}>
        {device === "Desktop" && (
          <StyledInfo>
            {device === "Desktop" && <StyledEDU805>{"EDU-805"}</StyledEDU805>}
            {device === "Desktop" && (
              <StyledContent>
                {device === "Desktop" && (
                  <StyledFoundationsOfAdvancedGraduateStudyAndResearch>
                    {"Foundations of Advanced Graduate Study and Research"}
                  </StyledFoundationsOfAdvancedGraduateStudyAndResearch>
                )}
                {state === "Open" && device === "Desktop" && (
                  <Styled30CreditHoursThisFoundationalCourseWillIntroduceYouToTheConceptsAndPracticesOfAdvancedGraduateStudyYouWillExamineConceptsAndExpectationsOfAdvancedGraduateStudyAndAcademicIntegrityAsWellAsInvestigateBestPracticesOfScholarshipAndResearchYouWillExploreUniversityResourcesAndSupportsAssociatedWithStudentSuccessIncludingTechnologiesForLearningAndResearchYouWillAlsoEvaluateTheProgramProcessAndRequirementsForSuccessFinallyYouWillAdvocateForSelfCareAndReflectionDuringYourStudies>
                    {
                      "3.0 Credit Hours\nThis foundational course will introduce you to the concepts and practices of advanced graduate study. You will examine concepts and expectations of advanced graduate study and academic integrity as well as investigate best practices of scholarship and research. You will explore university resources and supports associated with student success, including technologies for learning and research. You will also evaluate the program process and requirements for success. Finally, you will advocate for self-care and reflection during your studies."
                    }
                  </Styled30CreditHoursThisFoundationalCourseWillIntroduceYouToTheConceptsAndPracticesOfAdvancedGraduateStudyYouWillExamineConceptsAndExpectationsOfAdvancedGraduateStudyAndAcademicIntegrityAsWellAsInvestigateBestPracticesOfScholarshipAndResearchYouWillExploreUniversityResourcesAndSupportsAssociatedWithStudentSuccessIncludingTechnologiesForLearningAndResearchYouWillAlsoEvaluateTheProgramProcessAndRequirementsForSuccessFinallyYouWillAdvocateForSelfCareAndReflectionDuringYourStudies>
                )}
              </StyledContent>
            )}
          </StyledInfo>
        )}
        {state === "Closed" && device === "Desktop" && (
          <Icon name={"keyboard_arrow_down"} size={24} />
        )}
        {state === "Open" && device === "Desktop" && (
          <Icon name={"keyboard_arrow_up"} size={24} />
        )}
        {device === "Mobile" && (
          <StyledFrame2131330730>
            {device === "Mobile" && (
              <StyledInfo2>
                {device === "Mobile" && (
                  <StyledEDU8052>{"EDU-805"}</StyledEDU8052>
                )}
                {device === "Mobile" && (
                  <StyledContent2>
                    {device === "Mobile" && (
                      <StyledFoundationsOfAdvancedGraduateStudyAndResearch2>
                        {"Foundations of Advanced Graduate Study and Research"}
                      </StyledFoundationsOfAdvancedGraduateStudyAndResearch2>
                    )}
                  </StyledContent2>
                )}
              </StyledInfo2>
            )}
            {state === "Closed" && device === "Mobile" && (
              <Icon name={"keyboard_arrow_down"} size={24} />
            )}
            {state === "Open" && device === "Mobile" && (
              <Icon name={"keyboard_arrow_up"} size={24} />
            )}
          </StyledFrame2131330730>
        )}
        {state === "Open" && device === "Mobile" && (
          <Styled30CreditHoursThisFoundationalCourseWillIntroduceYouToTheConceptsAndPracticesOfAdvancedGraduateStudyYouWillExamineConceptsAndExpectationsOfAdvancedGraduateStudyAndAcademicIntegrityAsWellAsInvestigateBestPracticesOfScholarshipAndResearchYouWillExploreUniversityResourcesAndSupportsAssociatedWithStudentSuccessIncludingTechnologiesForLearningAndResearchYouWillAlsoEvaluateTheProgramProcessAndRequirementsForSuccessFinallyYouWillAdvocateForSelfCareAndReflectionDuringYourStudies2>
            {
              "3.0 Credit Hours\nThis foundational course will introduce you to the concepts and practices of advanced graduate study. You will examine concepts and expectations of advanced graduate study and academic integrity as well as investigate best practices of scholarship and research. You will explore university resources and supports associated with student success, including technologies for learning and research. You will also evaluate the program process and requirements for success. Finally, you will advocate for self-care and reflection during your studies."
            }
          </Styled30CreditHoursThisFoundationalCourseWillIntroduceYouToTheConceptsAndPracticesOfAdvancedGraduateStudyYouWillExamineConceptsAndExpectationsOfAdvancedGraduateStudyAndAcademicIntegrityAsWellAsInvestigateBestPracticesOfScholarshipAndResearchYouWillExploreUniversityResourcesAndSupportsAssociatedWithStudentSuccessIncludingTechnologiesForLearningAndResearchYouWillAlsoEvaluateTheProgramProcessAndRequirementsForSuccessFinallyYouWillAdvocateForSelfCareAndReflectionDuringYourStudies2>
        )}
      </StyledCourseAccordion>
    </StyledRoot>
  );
});
