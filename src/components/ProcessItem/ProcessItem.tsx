import React from "react";
import styled, { css } from "styled-components";
import { IndicatorStep } from "../IndicatorStep";
import { TextBoxTight } from "../TextBoxTight";
import { ToolbarModule } from "../ToolbarModule";
import { Drag } from "../Drag";

export interface ProcessItemProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "hasNext" | "hasPrevious" | "state" | "mode"
> {
  hasNext?: boolean;
  hasPrevious?: boolean;
  state?: "Default" | "Hover" | "Active" | "Passive";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.li(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 24px;
    padding-bottom: 8px;
    padding-left: 24px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    width: 228px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextBoxTight = styled.div(
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

const StyledNext = styled.div(
  () => css`
    position: absolute;
    left: 114px;
    top: 38px;
    width: 114px;
    height: 0.000005769903054897441px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 48px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    height: 0.000005769903054897441px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledLine = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledPrevious = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 38px;
    width: 114px;
    height: 0.000005769903054897441px;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 48px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 0.000005769903054897441px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledLine2 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledContainer = styled.div(
  () => css`
    position: absolute;
    left: 16px;
    top: 0px;
    width: 196px;
    height: 132px;
    border-radius: 6px;
  `,
);

const StyledToolbarModule = styled.div(
  () => css`
    position: absolute;
    left: 14px;
    top: -64px;
    width: 206px;
    height: 56px;
  `,
);

const StyledDrag = styled.div(
  () => css`
    position: absolute;
    left: -12px;
    top: 0px;
    width: 24px;
    height: 24px;
  `,
);

/** Represents a single step or item within a multi-step process or wizard flow, supporting previous/next connectors and multiple visual states (Default, Hover, Active, Passive) in both light and dark modes. */
export const ProcessItem = React.forwardRef<HTMLLIElement, ProcessItemProps>(
  function ProcessItem(
    {
      hasNext = true,
      hasPrevious = true,
      state = "Default",
      mode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot role="listitem" aria-label="Process step" {...rest} ref={ref}>
        <IndicatorStep />
        <StyledTextBoxTight>
          <TextBoxTight
            reachingLimit={false}
            hasToolbar={false}
            colorOverride={false}
            state={"Default"}
            mode={"Light"}
          />
        </StyledTextBoxTight>
        {hasNext && (
          <StyledNext>
            <StyledLine />
          </StyledNext>
        )}
        {hasPrevious && (
          <StyledPrevious>
            <StyledLine2 />
          </StyledPrevious>
        )}
        {["Hover", "Active", "Passive"].includes(state) && <StyledContainer />}
        {state === "Active" && (
          <StyledToolbarModule>
            <ToolbarModule
              isCustomImage={true}
              type={"Process item"}
              mode={"Light"}
            />
          </StyledToolbarModule>
        )}
        {state === "Active" && (
          <StyledDrag>
            <Drag />
          </StyledDrag>
        )}
      </StyledRoot>
    );
  },
);
