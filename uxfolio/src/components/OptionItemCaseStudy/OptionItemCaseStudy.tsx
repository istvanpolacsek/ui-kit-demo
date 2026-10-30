import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";
import { ToggleCheckBox } from "../ToggleCheckBox";

export interface OptionItemCaseStudyProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "active"
> {
  active?: "False" | "True";
}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 118px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #eeeeee;
  `,
);

const StyledSectionIconWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 2px;
    &:is(button:hover:not(:disabled) *) {
      background-color: #262626;
    }
    &:is(button:hover:not(:disabled) *) {
      border-radius: 8px;
    }
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #eeeeee;
  `,
);

const StyledBoldStatement = styled.p(
  () => css`
    display: none;
    color: #eeeeee;
    &:is(button:hover:not(:disabled) *) {
      display: block;
    }
  `,
);

const StyledToggleCheckBox = styled.div(
  () => css`
    position: absolute;
    left: 41px;
    top: 10px;
    width: 36px;
    height: 36px;
  `,
);

/** A selectable option item representing a case study entry, featuring an icon, label, bold statement, and an optional checkbox toggle. Supports default and hover states, as well as active/inactive selection states. */
export const OptionItemCaseStudy = React.forwardRef<
  HTMLButtonElement,
  OptionItemCaseStudyProps
>(function OptionItemCaseStudy({ active = "False", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <StyledSectionIconWrapper>
        <IllustrationIcon type={"Text"} mode={"Dark"} />
      </StyledSectionIconWrapper>
      <StyledLabel>{"Label"}</StyledLabel>
      <StyledBoldStatement>{"Bold statement"}</StyledBoldStatement>
      {active === "True" && (
        <StyledToggleCheckBox>
          <ToggleCheckBox state={"True"} mode={"Dark"} />
        </StyledToggleCheckBox>
      )}
    </StyledRoot>
  );
});
