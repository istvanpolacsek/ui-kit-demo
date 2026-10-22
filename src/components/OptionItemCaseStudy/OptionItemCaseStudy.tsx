import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";
import { ToggleCheckBox } from "../ToggleCheckBox";

export interface OptionItemCaseStudyProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button(
  () => css`
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
    &:hover {
      background-color: #262626;
    }
    &:hover {
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
    &:hover {
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

/** A selectable option item used in a case study context, featuring an icon, label, bold statement, and an optional checkbox. Supports default and hover states, as well as active/inactive selection states. */
export const OptionItemCaseStudy = React.forwardRef<
  HTMLButtonElement,
  OptionItemCaseStudyProps
>(function OptionItemCaseStudy({ selected, ...rest }, ref) {
  const active = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
    >
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
