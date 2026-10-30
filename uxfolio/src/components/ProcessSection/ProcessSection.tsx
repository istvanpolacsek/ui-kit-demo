import React from "react";
import styled, { css } from "styled-components";
import { ProcessItem } from "../ProcessItem";
import { SectionStatesGeneral } from "../SectionStatesGeneral";

export interface ProcessSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "steps"
> {
  showUI?: boolean;
  steps?: 1 | 2 | 3 | 4 | 5;
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    padding-right: 102px;
    padding-bottom: 60px;
    padding-left: 102px;
    gap: 48px;
    justify-content: space-between;
    align-items: flex-start;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
  `,
);

const StyledSteps = styled.ol(
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
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledProcessItem = styled.li(
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

const StyledProcessItem2 = styled.li(
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

const StyledProcessItem3 = styled.li(
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

const StyledProcessItem4 = styled.li(
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

const StyledProcessItem5 = styled.li(
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

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 252px;
  `,
);

/** A process section that displays a sequence of steps (1–5) in a horizontal layout. Supports a configurable number of visible process items and an optional UI overlay for section states. */
export const ProcessSection = React.forwardRef<
  HTMLElement,
  ProcessSectionProps
>(function ProcessSection({ showUI = true, steps = 5, ...rest }, ref) {
  return (
    <StyledRoot role="region" aria-label="Process steps" {...rest} ref={ref}>
      <StyledSteps>
        <StyledProcessItem>
          <ProcessItem
            hasPrevious={false}
            hasNext={true}
            state={"Default"}
            mode={"Light"}
          />
        </StyledProcessItem>
        {[5, 4, 3, 2].includes(steps) && (
          <StyledProcessItem2>
            <ProcessItem
              hasPrevious={true}
              hasNext={true}
              state={"Default"}
              mode={"Light"}
            />
          </StyledProcessItem2>
        )}
        {[5, 4, 3].includes(steps) && (
          <StyledProcessItem3>
            <ProcessItem
              hasPrevious={true}
              hasNext={true}
              state={"Default"}
              mode={"Light"}
            />
          </StyledProcessItem3>
        )}
        {[5, 4].includes(steps) && (
          <StyledProcessItem4>
            <ProcessItem
              hasPrevious={true}
              hasNext={true}
              state={"Default"}
              mode={"Light"}
            />
          </StyledProcessItem4>
        )}
        {steps === 5 && (
          <StyledProcessItem5>
            <ProcessItem
              hasPrevious={true}
              hasNext={false}
              state={"Default"}
              mode={"Light"}
            />
          </StyledProcessItem5>
        )}
      </StyledSteps>
      {showUI && (
        <StyledSectionStatesGeneral>
          <SectionStatesGeneral
            addNavigation={false}
            addText={false}
            addSocialLink={false}
            addMedia={false}
            flipHorizontally={false}
            type={"Default"}
            mode={"Light"}
          />
        </StyledSectionStatesGeneral>
      )}
    </StyledRoot>
  );
});
