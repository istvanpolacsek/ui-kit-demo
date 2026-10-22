import React from "react";
import styled, { css } from "styled-components";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalSDarkExampleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "defaultProp"
> {
  defaultProp?: 1;
}

const StyledRoot = styled.section(
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

const StyledThisIsAnExample = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledWithAnSSizeModalYouCanDisplayYesNoQuestionsToEitherGoWithAChoiceOrDiscardChagnes =
  styled.p(
    () => css`
      color: #adadad;
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

/** A small dark modal dialog containing a header with title and descriptive subtitle, plus a row of secondary and primary action buttons for confirming or discarding a choice. */
export const ModalSDarkExample = React.forwardRef<
  HTMLElement,
  ModalSDarkExampleProps
>(function ModalSDarkExample({ defaultProp = 1, ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Confirmation dialog"
      aria-describedby="modal-description"
      {...rest}
      ref={ref}
    >
      <StyledHeaderSubheader>
        <StyledThisIsAnExample>{"This is an example"}</StyledThisIsAnExample>
        <StyledWithAnSSizeModalYouCanDisplayYesNoQuestionsToEitherGoWithAChoiceOrDiscardChagnes>
          {
            "With an S size modal you can display yes & no questions to either go with a choice or discard chagnes."
          }
        </StyledWithAnSSizeModalYouCanDisplayYesNoQuestionsToEitherGoWithAChoiceOrDiscardChagnes>
      </StyledHeaderSubheader>
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
