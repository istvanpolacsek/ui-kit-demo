import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { TabList } from "../TabList";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { ListItemIdea } from "../ListItemIdea";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";

export interface ModalLImageIdeasProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "page"
> {
  type?: "Image" | "Text";
  page?: "Browse" | "Specific";
}

const StyledRoot = styled.section(
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
    width: 880px;
    height: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 12px 28px 0px rgba(0, 0, 0, 0.32),
      0px 40px 48px 0px rgba(0, 0, 0, 0.24);
  `,
);

const StyledHeaderModal = styled.div(
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

const StyledBody = styled.div<{
  $type: "Image" | "Text";
  $page: "Browse" | "Specific";
}>(
  ({ $type, $page }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $page])) {
        case '["Image","Browse"]':
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
            flex: 1 1 0;
            align-self: stretch;
          `;
        case '["Image","Specific"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case '["Text","Browse"]':
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
            flex: 1 1 0;
            align-self: stretch;
          `;
        case '["Text","Specific"]':
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
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTabSidebar = styled.aside(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledContent = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledFilterContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
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

const StyledLabel = styled.label(
  () => css`
    color: #fefefe;
  `,
);

const StyledFrame48096165 = styled.ul(
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
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemIdea = styled.li(
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

const StyledListItemIdea2 = styled.li(
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

const StyledListItemIdea3 = styled.li(
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

const StyledListItemIdea4 = styled.li(
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

const StyledIdea = styled.article(
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

const StyledExample = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledLabel2 = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledIdea2 = styled.article(
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

const StyledExample2 = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledLabel3 = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledKeyPerformanceIndicatorsKPIAreQuantifiableMeasurementsThatAreUsedToDefineAndTrackTheProgressOfBusinessGoalsExampleAndGuidingQuestions =
  styled.p(() => css``);

const StyledFrame48096166 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
  `,
);

const StyledKeyPerformanceIndicatorsWeAgreedThatTheMostImportantTaskWasToIncreaseTheConversionRateWhileMaintainingCustomerRetentionSinceTheseAreTheProductSMostImportantKPIsWeCollaboratedWithTheMarketingTeamToReviewExistingDataAndToSetUpAMeasurementSystemInGoogleTagManagerGoogleAnalyticsAndGoogleDataStudioWhatQuantifiableGoalsDidYouSetOutToAchieveWithYourDesignWhatMethodDidYouUseToDefineTheseGoalsHowDidYouMeasureTheseGoalsWhatHaveYouChangedInTheDesignToThisEnd =
  styled.p(
    () => css`
      color: #fefefe;
      font-family: "Sora";
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    `,
  );

const StyledButtonRow = styled.div<{ $type: "Image" | "Text" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Image":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Text":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 16px;
            justify-content: flex-end;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel4 = styled.p(() => css``);

/** A modal dialog for browsing or selecting image ideas to illustrate a case study. Supports two modes: 'Browse' (showing a tabbed sidebar with filterable list items) and 'Specific' (showing individual image idea cards with descriptive text). Includes a header, body content area, and action buttons. */
export const ModalLImageIdeas = React.forwardRef<
  HTMLElement,
  ModalLImageIdeasProps
>(function ModalLImageIdeas({ type = "Image", page = "Browse", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Image Ideas"
      aria-expanded
      aria-haspopup
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Simple"} mode={"Dark"} />
      </StyledHeaderModal>
      <StyledBody $type={type} $page={page}>
        {page === "Browse" && (
          <StyledTabSidebar>
            {page === "Browse" && <TabList type={"Default"} />}
          </StyledTabSidebar>
        )}
        {page === "Browse" && (
          <StyledContent>
            {page === "Browse" && (
              <StyledFilterContainer>
                {page === "Browse" && (
                  <StyledLabel>
                    {
                      (
                        {
                          '["Image"]': "Choose a method to illustrate",
                          '["Text"]':
                            "Click on a topic you want to write about",
                        } as Record<string, string>
                      )[JSON.stringify([type])]
                    }
                  </StyledLabel>
                )}
                {page === "Browse" && (
                  <TextFieldLabeled state={"Default"} mode={"Dark"} />
                )}
              </StyledFilterContainer>
            )}
            {page === "Browse" && (
              <StyledFrame48096165>
                {page === "Browse" && (
                  <StyledListItemIdea>
                    <ListItemIdea />
                  </StyledListItemIdea>
                )}
                {page === "Browse" && (
                  <StyledListItemIdea2>
                    <ListItemIdea />
                  </StyledListItemIdea2>
                )}
                {page === "Browse" && (
                  <StyledListItemIdea3>
                    <ListItemIdea />
                  </StyledListItemIdea3>
                )}
                {page === "Browse" && (
                  <StyledListItemIdea4>
                    <ListItemIdea />
                  </StyledListItemIdea4>
                )}
              </StyledFrame48096165>
            )}
          </StyledContent>
        )}
        {type === "Image" && page === "Specific" && (
          <StyledIdea>
            {type === "Image" && page === "Specific" && <StyledExample />}
            {type === "Image" && page === "Specific" && (
              <StyledLabel2>
                {"Here goes the description of the relevant image idea."}
              </StyledLabel2>
            )}
          </StyledIdea>
        )}
        {type === "Image" && page === "Specific" && (
          <StyledIdea2>
            {type === "Image" && page === "Specific" && <StyledExample2 />}
            {type === "Image" && page === "Specific" && (
              <StyledLabel3>
                {"Here goes the description of the relevant image idea."}
              </StyledLabel3>
            )}
          </StyledIdea2>
        )}
        {type === "Text" && page === "Specific" && (
          <StyledKeyPerformanceIndicatorsKPIAreQuantifiableMeasurementsThatAreUsedToDefineAndTrackTheProgressOfBusinessGoalsExampleAndGuidingQuestions>
            {
              "Key Performance Indicators (KPI) are quantifiable measurements that are used to define and track the progress of business goals.\n\nExample and guiding questions:"
            }
          </StyledKeyPerformanceIndicatorsKPIAreQuantifiableMeasurementsThatAreUsedToDefineAndTrackTheProgressOfBusinessGoalsExampleAndGuidingQuestions>
        )}
        {type === "Text" && page === "Specific" && (
          <StyledFrame48096166>
            {type === "Text" && page === "Specific" && (
              <StyledKeyPerformanceIndicatorsWeAgreedThatTheMostImportantTaskWasToIncreaseTheConversionRateWhileMaintainingCustomerRetentionSinceTheseAreTheProductSMostImportantKPIsWeCollaboratedWithTheMarketingTeamToReviewExistingDataAndToSetUpAMeasurementSystemInGoogleTagManagerGoogleAnalyticsAndGoogleDataStudioWhatQuantifiableGoalsDidYouSetOutToAchieveWithYourDesignWhatMethodDidYouUseToDefineTheseGoalsHowDidYouMeasureTheseGoalsWhatHaveYouChangedInTheDesignToThisEnd>
                {
                  "Key Performance Indicators\nWe agreed that the most important task was to increase the conversion rate while maintaining customer retention since these are the product's most important KPIs. We collaborated with the marketing team to review existing data and to set up a measurement system in Google Tag Manager, Google Analytics, and Google Data Studio.\nWhat quantifiable goals did you set out to achieve with your design?\nWhat method did you use to define these goals?\nHow did you measure these goals?\nWhat have you changed in the design to this end?"
                }
              </StyledKeyPerformanceIndicatorsWeAgreedThatTheMostImportantTaskWasToIncreaseTheConversionRateWhileMaintainingCustomerRetentionSinceTheseAreTheProductSMostImportantKPIsWeCollaboratedWithTheMarketingTeamToReviewExistingDataAndToSetUpAMeasurementSystemInGoogleTagManagerGoogleAnalyticsAndGoogleDataStudioWhatQuantifiableGoalsDidYouSetOutToAchieveWithYourDesignWhatMethodDidYouUseToDefineTheseGoalsHowDidYouMeasureTheseGoalsWhatHaveYouChangedInTheDesignToThisEnd>
            )}
          </StyledFrame48096166>
        )}
      </StyledBody>
      {((type === "Image" && page === "Browse") ||
        (type === "Image" && page === "Specific") ||
        (type === "Text" && page === "Specific")) && (
        <StyledButtonRow $type={type}>
          {type === "Image" && (
            <StyledLabel4>
              {"Learn more about how to use images in your case study"}
            </StyledLabel4>
          )}
          {((type === "Image" && page === "Browse") ||
            (type === "Image" && page === "Specific") ||
            (type === "Text" && page === "Specific")) && (
            <PrimaryButtonNeutral
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          )}
          {page === "Specific" && (
            <SecondaryButtonNeutral
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          )}
        </StyledButtonRow>
      )}
    </StyledRoot>
  );
});
