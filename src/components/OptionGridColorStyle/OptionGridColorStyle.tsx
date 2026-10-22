import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { SubheaderTiny } from "../SubheaderTiny";
import { OptionBoxModular } from "../OptionBoxModular";
import { AddColorButton } from "../AddColorButton";

export interface OptionGridColorStyleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Gradient" | "Solid";
}

const StyledRoot = styled.section(
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
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall = styled.div(
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

const StyledContent = styled.div(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledSuggested = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderTiny = styled.div(
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

const StyledSuggestedList = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOptionBoxModular = styled.li(() => css``);

const StyledOptionBoxModular2 = styled.li(() => css``);

const StyledOptionBoxModular3 = styled.li(() => css``);

const StyledOptionBoxModular4 = styled.li(() => css``);

const StyledOptionBoxModular5 = styled.li(() => css``);

const StyledCustom = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderTiny2 = styled.div(
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

const StyledCustomGrid = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOptionBoxModular6 = styled.li(() => css``);

const StyledAddColorButton = styled.li(() => css``);

/** A color style option grid component that displays suggested and custom color options (solid or gradient) organized in labeled sections, allowing users to select or add color styles. */
export const OptionGridColorStyle = React.forwardRef<
  HTMLElement,
  OptionGridColorStyleProps
>(function OptionGridColorStyle({ type = "Solid", ...rest }, ref) {
  return (
    <StyledRoot
      role="group"
      aria-label="Color style options"
      {...rest}
      ref={ref}
    >
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      <StyledContent>
        <StyledSuggested>
          <StyledSubheaderTiny>
            <SubheaderTiny hasIcon={false} mode={"Dark"} />
          </StyledSubheaderTiny>
          <StyledSuggestedList>
            <StyledOptionBoxModular>
              <OptionBoxModular type={"Suggested color"} style={"Subtle"} />
            </StyledOptionBoxModular>
            <StyledOptionBoxModular2>
              <OptionBoxModular type={"Suggested color"} style={"Platform"} />
            </StyledOptionBoxModular2>
            <StyledOptionBoxModular3>
              <OptionBoxModular type={"Suggested color"} style={"Accent"} />
            </StyledOptionBoxModular3>
            <StyledOptionBoxModular4>
              <OptionBoxModular
                type={"Suggested color"}
                style={"Accent platform"}
              />
            </StyledOptionBoxModular4>
            <StyledOptionBoxModular5>
              <OptionBoxModular type={"Suggested color"} style={"Contrast"} />
            </StyledOptionBoxModular5>
          </StyledSuggestedList>
        </StyledSuggested>
        <StyledCustom>
          <StyledSubheaderTiny2>
            <SubheaderTiny hasIcon={false} mode={"Dark"} />
          </StyledSubheaderTiny2>
          <StyledCustomGrid>
            <StyledOptionBoxModular6>
              <OptionBoxModular type={"Custom color"} style={"Custom"} />
            </StyledOptionBoxModular6>
            <StyledAddColorButton>
              <AddColorButton />
            </StyledAddColorButton>
          </StyledCustomGrid>
        </StyledCustom>
      </StyledContent>
    </StyledRoot>
  );
});
