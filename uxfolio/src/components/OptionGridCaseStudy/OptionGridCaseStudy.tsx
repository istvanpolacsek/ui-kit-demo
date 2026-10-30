import React from "react";
import styled, { css } from "styled-components";
import { OptionItemCaseStudy } from "../OptionItemCaseStudy";

export interface OptionGridCaseStudyProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 56px;
    padding-right: 24px;
    padding-bottom: 56px;
    padding-left: 24px;
    gap: 0px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    row-gap: 24px;
    border-radius: 0px;
  `,
);

const StyledOptionItemCaseStudy = styled.li(() => css``);

const StyledOptionItemCaseStudy2 = styled.li(() => css``);

const StyledOptionItemCaseStudy3 = styled.li(() => css``);

const StyledOptionItemCaseStudy4 = styled.li(() => css``);

const StyledOptionItemCaseStudy5 = styled.li(() => css``);

const StyledOptionItemCaseStudy6 = styled.li(() => css``);

const StyledOptionItemCaseStudy7 = styled.li(() => css``);

const StyledOptionItemCaseStudy8 = styled.li(() => css``);

const StyledOptionItemCaseStudy9 = styled.li(() => css``);

const StyledOptionItemCaseStudy10 = styled.li(() => css``);

/** A grid of selectable option items representing case studies, rendered as an unordered list of option entries for the user to choose from. */
export const OptionGridCaseStudy = React.forwardRef<
  HTMLUListElement,
  OptionGridCaseStudyProps
>(function OptionGridCaseStudy({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="group"
      aria-label="Case study options"
      {...rest}
      ref={ref}
    >
      <StyledOptionItemCaseStudy>
        <OptionItemCaseStudy active={"True"} />
      </StyledOptionItemCaseStudy>
      <StyledOptionItemCaseStudy2>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy2>
      <StyledOptionItemCaseStudy3>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy3>
      <StyledOptionItemCaseStudy4>
        <OptionItemCaseStudy active={"True"} />
      </StyledOptionItemCaseStudy4>
      <StyledOptionItemCaseStudy5>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy5>
      <StyledOptionItemCaseStudy6>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy6>
      <StyledOptionItemCaseStudy7>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy7>
      <StyledOptionItemCaseStudy8>
        <OptionItemCaseStudy active={"True"} />
      </StyledOptionItemCaseStudy8>
      <StyledOptionItemCaseStudy9>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy9>
      <StyledOptionItemCaseStudy10>
        <OptionItemCaseStudy active={"False"} />
      </StyledOptionItemCaseStudy10>
    </StyledRoot>
  );
});
