import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { OptionGridCaseStudy } from "../OptionGridCaseStudy";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalMAddCaseStudyProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "defaultProp"
> {
  defaultProp?: "Default";
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
    width: 640px;
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

const StyledButtonRow = styled.footer(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** Modal dialog for adding a case study, containing a header, an option grid for selecting or configuring a case study, and a button row with secondary (cancel) and primary (confirm) actions. */
export const ModalMAddCaseStudy = React.forwardRef<
  HTMLElement,
  ModalMAddCaseStudyProps
>(function ModalMAddCaseStudy({ defaultProp = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Add case study" {...rest} ref={ref}>
      <StyledHeaderModal>
        <HeaderModal type={"Description"} mode={"Dark"} />
      </StyledHeaderModal>
      <OptionGridCaseStudy type={"Default"} />
      <StyledButtonRow>
        <SecondaryButtonNeutral
          state={"Default"}
          size={"Large"}
          mode={"Dark"}
        />
        <PrimaryButtonNeutral state={"Default"} size={"Large"} mode={"Dark"} />
      </StyledButtonRow>
    </StyledRoot>
  );
});
