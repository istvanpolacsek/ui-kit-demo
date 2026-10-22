import React from "react";
import styled, { css } from "styled-components";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { MessageAlert } from "../MessageAlert";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalSCaseStudyPasswordProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 500px;
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

const StyledHeaderSubheader = styled.header(
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

const StyledSetCaseStudyPassword = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledYourThumbnailWillStillAppearOnYourHomepageButOnlyVisitorsWithThePasswordCanOpenIt =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledInputField = styled.div(
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

const StyledTextFieldLabeled = styled.div(
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

const StyledMessageAlert = styled.div(
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

const StyledButtonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
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

const StyledSecondaryButtonNeutral = styled.div(
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

const StyledPrimaryButtonNeutral = styled.div(
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

/** A modal dialog section for setting a case study password. Displays a heading, description, password input field with validation message, and action buttons (cancel/confirm). Supports an optional portfolio password variant. */
export const ModalSCaseStudyPassword = React.forwardRef<
  HTMLButtonElement,
  ModalSCaseStudyPasswordProps
>(function ModalSCaseStudyPassword({ selected, ...rest }, ref) {
  const hasPortfolioPassword = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
    >
      <StyledHeaderSubheader>
        <StyledSetCaseStudyPassword>
          {"Set case study password"}
        </StyledSetCaseStudyPassword>
        <StyledYourThumbnailWillStillAppearOnYourHomepageButOnlyVisitorsWithThePasswordCanOpenIt>
          {
            "Your thumbnail will still appear on your homepage, but only visitors with the password can open it."
          }
        </StyledYourThumbnailWillStillAppearOnYourHomepageButOnlyVisitorsWithThePasswordCanOpenIt>
      </StyledHeaderSubheader>
      <StyledInputField>
        <StyledTextFieldLabeled>
          <TextFieldLabeled state={"Default"} mode={"Dark"} />
        </StyledTextFieldLabeled>
        <StyledMessageAlert>
          <MessageAlert
            hasIcon={false}
            hasTitle={false}
            type={"Info"}
            mode={"Dark"}
          />
        </StyledMessageAlert>
      </StyledInputField>
      <StyledButtonRow>
        <StyledSecondaryButtonNeutral>
          <SecondaryButtonNeutral
            state={"Default"}
            size={"Regular"}
            mode={"Dark"}
          />
        </StyledSecondaryButtonNeutral>
        <StyledPrimaryButtonNeutral>
          <PrimaryButtonNeutral
            state={"Default"}
            size={"Regular"}
            mode={"Dark"}
          />
        </StyledPrimaryButtonNeutral>
      </StyledButtonRow>
    </StyledRoot>
  );
});
