import React from "react";
import styled, { css } from "styled-components";
import { SparkRow } from "../SparkRow";

export interface ClaudeResponseProps extends React.ComponentPropsWithoutRef<"article"> {}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 702px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledColumn = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 4px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 12px;
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.02);
  `,
);

const StyledHereSASprintPlanningTemplateWithAStandardAgendaReviewAndHitCreatePageWhenItLooksRightYouCanAddSpecificTicketAssignmentsDuringTheMeeting =
  styled.p(
    ({ theme }) => css`
      color: ${theme["Text"]["Primary"]};
      font-family: "Anthropic Serif Text";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.6;
    `,
  );

const StyledRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    padding-right: 12px;
    padding-bottom: 20px;
    padding-left: 12px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 6px;
  `,
);

const StyledRow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
  `,
);

const StyledFrame2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
  `,
);

const StyledFrame3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
  `,
);

const StyledFrame4 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
  `,
);

const StyledSparkRow = styled.div(
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

/** Displays a Claude AI response message, including the response text and associated action controls (such as feedback or copy actions). */
export const ClaudeResponse = React.forwardRef<
  HTMLElement,
  ClaudeResponseProps
>(function ClaudeResponse({ ...rest }, ref) {
  return (
    <StyledRoot role="article" aria-label="Claude response" {...rest} ref={ref}>
      <StyledColumn>
        <StyledHereSASprintPlanningTemplateWithAStandardAgendaReviewAndHitCreatePageWhenItLooksRightYouCanAddSpecificTicketAssignmentsDuringTheMeeting>
          {
            "Here's a sprint planning template with a standard agenda. Review and hit Create page when it looks right—you can add specific ticket assignments during the meeting."
          }
        </StyledHereSASprintPlanningTemplateWithAStandardAgendaReviewAndHitCreatePageWhenItLooksRightYouCanAddSpecificTicketAssignmentsDuringTheMeeting>
      </StyledColumn>
      <StyledRow>
        <StyledRow2>
          <StyledRow3>
            <StyledFrame></StyledFrame>
            <StyledFrame2></StyledFrame2>
            <StyledFrame3></StyledFrame3>
            <StyledFrame4></StyledFrame4>
          </StyledRow3>
        </StyledRow2>
      </StyledRow>
      <StyledSparkRow>
        <SparkRow state={"Default"} />
      </StyledSparkRow>
    </StyledRoot>
  );
});
