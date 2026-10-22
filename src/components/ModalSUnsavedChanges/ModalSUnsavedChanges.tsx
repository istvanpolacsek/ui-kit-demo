import React from "react";
import styled, { css } from "styled-components";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalSUnsavedChangesProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "defaultProp"
> {
  defaultProp?: "General" | "Delete colors" | "Edit colors";
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

const StyledYouHaveUnsavedChanges = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledYourLatestChangesHavenTBeenSavedYetHowWouldYouLikeToProceed =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledThisColorIsSelectedElsewhere = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledIfYouDeleteThisColorStyleAllSectionsAndThumbnailsSetWithItWillBeRevertedToTheDefaultOption =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledIfYouSaveThisColorStyleAllSectionsAndThumbnailsSetWithTheSameStyleWillAlsoChange =
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

/** A modal dialog section that warns users about unsaved changes, deleted color styles, or edited color styles. Contains a header with a title and descriptive message, and a row of action buttons (secondary and primary) for the user to proceed. */
export const ModalSUnsavedChanges = React.forwardRef<
  HTMLElement,
  ModalSUnsavedChangesProps
>(function ModalSUnsavedChanges({ defaultProp = "General", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Unsaved changes"
      aria-describedby="modal-description"
      {...rest}
      ref={ref}
    >
      <StyledHeaderSubheader>
        {defaultProp === "General" && (
          <StyledYouHaveUnsavedChanges>
            {"You have unsaved changes"}
          </StyledYouHaveUnsavedChanges>
        )}
        {defaultProp === "General" && (
          <StyledYourLatestChangesHavenTBeenSavedYetHowWouldYouLikeToProceed>
            {
              "Your latest changes haven't been saved yet. How would you like to proceed?"
            }
          </StyledYourLatestChangesHavenTBeenSavedYetHowWouldYouLikeToProceed>
        )}
        {["Delete colors", "Edit colors"].includes(defaultProp) && (
          <StyledThisColorIsSelectedElsewhere>
            {"This color is selected elsewhere"}
          </StyledThisColorIsSelectedElsewhere>
        )}
        {defaultProp === "Delete colors" && (
          <StyledIfYouDeleteThisColorStyleAllSectionsAndThumbnailsSetWithItWillBeRevertedToTheDefaultOption>
            {
              "If you delete this color style, all sections and thumbnails set with it will be reverted to the default option."
            }
          </StyledIfYouDeleteThisColorStyleAllSectionsAndThumbnailsSetWithItWillBeRevertedToTheDefaultOption>
        )}
        {defaultProp === "Edit colors" && (
          <StyledIfYouSaveThisColorStyleAllSectionsAndThumbnailsSetWithTheSameStyleWillAlsoChange>
            {
              "If you save this color style, all sections and thumbnails set with the same style will also change."
            }
          </StyledIfYouSaveThisColorStyleAllSectionsAndThumbnailsSetWithTheSameStyleWillAlsoChange>
        )}
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
