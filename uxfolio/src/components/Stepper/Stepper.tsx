import React from "react";
import styled, { css } from "styled-components";

export interface StepperProps extends Omit<
  React.ComponentPropsWithoutRef<"ol">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.ol(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 16px;
  `,
);

const StyledStep = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse = styled.div(
  ({ theme }) => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 1"]};
    border-radius: 50%;
  `,
);

const StyledStep2 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse2 = styled.div(
  ({ theme }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 1"]};
    border-radius: 50%;
  `,
);

const StyledStep3 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse3 = styled.div(
  ({ theme }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 1"]};
    border-radius: 50%;
  `,
);

const StyledStep4 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse4 = styled.div(
  ({ theme }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 1"]};
    border-radius: 50%;
  `,
);

const StyledStep5 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse5 = styled.div(
  ({ theme }) => css`
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 1"]};
    border-radius: 50%;
  `,
);

/** A stepper component that visually represents a sequence of steps, typically used for multi-step forms or wizards. Each step is indicated by an ellipse/dot marker. */
export const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  function Stepper({ mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot role="list" aria-label="Progress steps" {...rest} ref={ref}>
        <StyledStep>
          <StyledEllipse />
        </StyledStep>
        <StyledStep2>
          <StyledEllipse2 />
        </StyledStep2>
        <StyledStep3>
          <StyledEllipse3 />
        </StyledStep3>
        <StyledStep4>
          <StyledEllipse4 />
        </StyledStep4>
        <StyledStep5>
          <StyledEllipse5 />
        </StyledStep5>
      </StyledRoot>
    );
  },
);
