import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface PopoverPanelEmptyPageProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-right: 32px;
    padding-bottom: 40px;
    padding-left: 32px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 8px;
  `,
);

const StyledIllustration = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: #333333;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #4d4c4c;
    border-radius: 999px;
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

const StyledStartAddingSectionsToYourCaseStudy = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledYouCanChooseFromGenericAndUXSpecificSectionsToPresentYourWorkflow =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

/** A popover panel displayed when a page or section is empty, containing an illustration, a heading with descriptive subtext, and a primary call-to-action button to guide the user toward adding content. */
export const PopoverPanelEmptyPage = React.forwardRef<
  HTMLElement,
  PopoverPanelEmptyPageProps
>(function PopoverPanelEmptyPage({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Empty state panel"
      {...rest}
      ref={ref}
    >
      <StyledIllustration>
        <VisualAsset name={"Add page"} size={24} />
      </StyledIllustration>
      <StyledHeaderSubheader>
        <StyledStartAddingSectionsToYourCaseStudy>
          {"Start adding sections to your case study"}
        </StyledStartAddingSectionsToYourCaseStudy>
        <StyledYouCanChooseFromGenericAndUXSpecificSectionsToPresentYourWorkflow>
          {
            "You can choose from generic and UX specific sections to present your workflow."
          }
        </StyledYouCanChooseFromGenericAndUXSpecificSectionsToPresentYourWorkflow>
      </StyledHeaderSubheader>
      <PrimaryButtonNeutral state={"Default"} size={"Regular"} mode={"Dark"} />
    </StyledRoot>
  );
});
