import React from "react";
import styled, { css } from "styled-components";
import { OptionItemSection } from "../OptionItemSection";

export interface OptionGridSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "type" | "page"
> {
  type?: "Basic sections" | "Recommended sections";
  page?: "Main" | "Case study";
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

const StyledOptionItemSection = styled.li(() => css``);

const StyledOptionItemSection2 = styled.li(() => css``);

const StyledOptionItemSection3 = styled.li(() => css``);

const StyledOptionItemSection4 = styled.li(() => css``);

const StyledOptionItemSection5 = styled.li(() => css``);

const StyledOptionItemSection6 = styled.li(() => css``);

const StyledOptionItemSection7 = styled.li(() => css``);

const StyledOptionItemSection8 = styled.li(() => css``);

const StyledOptionItemSection9 = styled.li(() => css``);

const StyledOptionItemSection10 = styled.li(() => css``);

const StyledOptionItemSection11 = styled.li(() => css``);

const StyledOptionItemSection12 = styled.li(() => css``);

const StyledOptionItemSection13 = styled.li(() => css``);

const StyledOptionItemSection14 = styled.li(() => css``);

const StyledOptionItemSection15 = styled.li(() => css``);

const StyledOptionItemSection16 = styled.li(() => css``);

/** A grid of selectable section options, rendered as a list of Option item / Section instances. Supports Basic and Recommended section variants across Main and Case study page contexts. */
export const OptionGridSection = React.forwardRef<
  HTMLUListElement,
  OptionGridSectionProps
>(function OptionGridSection(
  { type = "Basic sections", page = "Main", ...rest },
  ref,
) {
  return (
    <StyledRoot role="listbox" aria-label="Section options" {...rest} ref={ref}>
      <StyledOptionItemSection>
        <OptionItemSection />
      </StyledOptionItemSection>
      <StyledOptionItemSection2>
        <OptionItemSection />
      </StyledOptionItemSection2>
      <StyledOptionItemSection3>
        <OptionItemSection />
      </StyledOptionItemSection3>
      <StyledOptionItemSection4>
        <OptionItemSection />
      </StyledOptionItemSection4>
      <StyledOptionItemSection5>
        <OptionItemSection />
      </StyledOptionItemSection5>
      <StyledOptionItemSection6>
        <OptionItemSection />
      </StyledOptionItemSection6>
      <StyledOptionItemSection7>
        <OptionItemSection />
      </StyledOptionItemSection7>
      <StyledOptionItemSection8>
        <OptionItemSection />
      </StyledOptionItemSection8>
      {((type === "Basic sections" && page === "Main") ||
        (type === "Basic sections" && page === "Case study") ||
        (type === "Recommended sections" && page === "Case study")) && (
        <StyledOptionItemSection9>
          <OptionItemSection />
        </StyledOptionItemSection9>
      )}
      {((type === "Basic sections" && page === "Main") ||
        (type === "Basic sections" && page === "Case study") ||
        (type === "Recommended sections" && page === "Case study")) && (
        <StyledOptionItemSection10>
          <OptionItemSection />
        </StyledOptionItemSection10>
      )}
      {type === "Basic sections" && (
        <StyledOptionItemSection11>
          <OptionItemSection />
        </StyledOptionItemSection11>
      )}
      {type === "Basic sections" && (
        <StyledOptionItemSection12>
          <OptionItemSection />
        </StyledOptionItemSection12>
      )}
      {type === "Basic sections" && (
        <StyledOptionItemSection13>
          <OptionItemSection />
        </StyledOptionItemSection13>
      )}
      {type === "Basic sections" && (
        <StyledOptionItemSection14>
          <OptionItemSection />
        </StyledOptionItemSection14>
      )}
      {type === "Basic sections" && page === "Case study" && (
        <StyledOptionItemSection15>
          <OptionItemSection />
        </StyledOptionItemSection15>
      )}
      {type === "Basic sections" && page === "Case study" && (
        <StyledOptionItemSection16>
          <OptionItemSection />
        </StyledOptionItemSection16>
      )}
    </StyledRoot>
  );
});
