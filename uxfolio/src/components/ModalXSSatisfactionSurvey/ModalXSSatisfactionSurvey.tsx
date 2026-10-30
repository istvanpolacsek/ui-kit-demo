import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryToggleSubtle } from "../IconOnlyPrimaryToggleSubtle";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalXSSatisfactionSurveyProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Idle" | "Selected";
}

const StyledRoot = styled.section(
  () => css`
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

const StyledShareYourExperience = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledLabel = styled.p(
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

const StyledNotSatisfied = styled.span(
  () => css`
    color: #fefefe;
  `,
);

const StyledVerySatisfied = styled.span(
  () => css`
    color: #fefefe;
  `,
);

const StyledPrimaryButtonNeutral = styled.div(
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

/** A satisfaction survey modal (extra small variant) that prompts users to rate their experience with UXfolio using a set of icon toggle buttons, with labels indicating the satisfaction scale and a submit action. */
export const ModalXSSatisfactionSurvey = React.forwardRef<
  HTMLElement,
  ModalXSSatisfactionSurveyProps
>(function ModalXSSatisfactionSurvey({ type = "Idle", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Satisfaction survey"
      {...rest}
      ref={ref}
    >
      <StyledFrame48096248>
        <StyledShareYourExperience>
          {"Share your experience"}
        </StyledShareYourExperience>
        <StyledLabel>{"How satisfied are you with UXfolio today?"}</StyledLabel>
      </StyledFrame48096248>
      <StyledFrame48096247>
        <StyledFrame48096243>
          <StyledIconOnlyPrimaryToggleSubtle>
            <IconOnlyPrimaryToggleSubtle
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryToggleSubtle>
          <StyledIconOnlyPrimaryToggleSubtle2>
            <IconOnlyPrimaryToggleSubtle
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryToggleSubtle2>
          <StyledIconOnlyPrimaryToggleSubtle3>
            <IconOnlyPrimaryToggleSubtle
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryToggleSubtle3>
          <StyledIconOnlyPrimaryToggleSubtle4>
            <IconOnlyPrimaryToggleSubtle
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryToggleSubtle4>
          <StyledIconOnlyPrimaryToggleSubtle5>
            <IconOnlyPrimaryToggleSubtle
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryToggleSubtle5>
        </StyledFrame48096243>
        <StyledFrame48096246>
          <StyledNotSatisfied>{"Not satisfied"}</StyledNotSatisfied>
          <StyledVerySatisfied>{"Very satisfied"}</StyledVerySatisfied>
        </StyledFrame48096246>
      </StyledFrame48096247>
      <StyledPrimaryButtonNeutral>
        <PrimaryButtonNeutral
          state={"Disabled"}
          size={"Regular"}
          mode={"Dark"}
        />
      </StyledPrimaryButtonNeutral>
    </StyledRoot>
  );
});
