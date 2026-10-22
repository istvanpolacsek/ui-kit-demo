import React from "react";
import styled, { css } from "styled-components";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalSLightExampleProps extends Omit<
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
    background-color: #fefefe;
    border-radius: 8px;
    box-shadow:
      0px 12px 28px 0px rgba(0, 0, 0, 0.16),
      0px 40px 48px 0px rgba(0, 0, 0, 0.12);
  `,
);

const StyledHeaderSubheader = styled.div(
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
    color: #0f0f0f;
  `,
);

const StyledWithAnSSizeModalYouCanDisplayYesNoQuestionsToEitherGoWithAChoiceOrDiscardChagnes =
  styled.p(
    () => css`
      color: #4d4c4c;
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

/** A small (S) light modal dialog component containing a header with a title and descriptive subheader text, along with a row of action buttons (secondary and primary) for confirming or discarding a choice. */
export const ModalSLightExample = React.forwardRef<
  HTMLElement,
  ModalSLightExampleProps
>(function ModalSLightExample({ defaultProp = 1, ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Modal dialog"
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
            mode={"Light"}
          />
        </StyledSecondaryButtonNeutral>
        <StyledPrimaryButtonNeutral>
          <PrimaryButtonNeutral
            state={"Default"}
            size={"Regular"}
            mode={"Light"}
          />
        </StyledPrimaryButtonNeutral>
      </StyledButtonRow>
    </StyledRoot>
  );
});
