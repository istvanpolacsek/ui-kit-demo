import React from "react";
import styled, { css } from "styled-components";

export interface BarGraphProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "amount" | "label" | "progress"
> {
  amount: string;
  label: string;
  progress: number;
}

const StyledRoot = styled.div<{ $progress: number }>(
  ({ theme, $progress }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-end;
    align-items: center;
    width: 151px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    min-height: ${Math.max(71.5556 + 2.84444 * Math.min(Math.max($progress, 0), 100), 0)}px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const Styled10 = styled.div<{ $progress: number }>(
  ({ theme, $progress }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    padding-right: 0px;
    padding-bottom: 6px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: flex-end;
    align-self: stretch;
    background-color: ${theme["Semantic"]["Error Scale"]["20"]};
    border-radius: 12px;
    min-height: ${Math.max(4.55556 + 2.84444 * Math.min(Math.max($progress, 0), 100), 0)}px;
  `,
);

const Styled10k = styled.span(
  ({ theme }) => css`
    position: absolute;
    left: 55px;
    top: -27px;
    white-space: nowrap;
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledLabel = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel2 = styled.label(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  `,
);

/** A bar graph component that displays a progress value as a visual bar, with an amount label and a text label. The bar fill is determined by the Progress variant (10, 25, 50, 75, or 100 percent). */
export const BarGraph = React.forwardRef<HTMLDivElement, BarGraphProps>(
  function BarGraph({ amount, label, progress, ...rest }, ref) {
    return (
      <StyledRoot
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        {...rest}
        ref={ref}
        $progress={progress}
      >
        <Styled10 $progress={progress}>
          <Styled10k>{amount}</Styled10k>
        </Styled10>
        <StyledLabel>
          <StyledLabel2>{label}</StyledLabel2>
        </StyledLabel>
      </StyledRoot>
    );
  },
);
