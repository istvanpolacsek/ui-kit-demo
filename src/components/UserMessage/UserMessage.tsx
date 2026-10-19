import React from "react";
import styled, { css } from "styled-components";

export interface UserMessageProps extends React.ComponentPropsWithoutRef<"article"> {}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    border-radius: 0px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledColumn = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: #f0efec;
    border-radius: 12px;
  `,
);

const StyledCreateASprintPlanningPageInAppForTodaySEngineeringMeeting =
  styled.p(
    ({ theme }) => css`
      color: ${theme["Text"]["Primary"]};
    `,
  );

/** Displays a user-authored message within a conversation or chat interface, containing the text content submitted by the user. */
export const UserMessage = React.forwardRef<HTMLElement, UserMessageProps>(
  function UserMessage({ ...rest }, ref) {
    return (
      <StyledRoot role="article" aria-label="User message" {...rest} ref={ref}>
        <StyledColumn>
          <StyledCreateASprintPlanningPageInAppForTodaySEngineeringMeeting>
            {
              "Create a sprint planning page in App for today's engineering meeting"
            }
          </StyledCreateASprintPlanningPageInAppForTodaySEngineeringMeeting>
        </StyledColumn>
      </StyledRoot>
    );
  },
);
