import React from "react";
import styled, { css } from "styled-components";
import { ProgressBar, type ProgressBarProps } from "../ProgressBar";

export interface ProgressProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "label" | "amount" | "progress"
> {
  label?: string;
  amount?: string;
  progress?: ProgressBarProps["progress"];
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 43px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledLabel = styled.label(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const Styled00k = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** Displays a labeled progress indicator with a numeric amount, typically used to show progress toward a goal or budget (e.g., fundraising, spending limits). */
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(
    { label = "Label", amount = "€00k", progress = 0, ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="group" aria-label="Progress" {...rest} ref={ref}>
        <StyledLabel>{label}</StyledLabel>
        <ProgressBar progress={progress} />
        <Styled00k>{amount}</Styled00k>
      </StyledRoot>
    );
  },
);
