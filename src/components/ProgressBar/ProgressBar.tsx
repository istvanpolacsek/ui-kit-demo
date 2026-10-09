import React from "react";
import styled, { css } from "styled-components";

export interface ProgressBarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "progress"
> {
  progress: number;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 315px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Neutral"]["Grey Scale"]["20"]};
    border-radius: 23px;
  `,
);

const StyledProgress = styled.div<{ $progress: number }>(
  ({ $progress }) => css`
    border-radius: 0px;
    ${(() => {
      if ($progress < 50)
        return css`
          display: flex;
          flex-direction: column;
          padding-top: 0px;
          padding-right: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
          gap: 10px;
          justify-content: flex-start;
          align-items: flex-start;
        `;
      return css`
        display: flex;
        flex-direction: column;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        gap: 10px;
        justify-content: flex-start;
        align-items: flex-start;
        align-self: stretch;
      `;
    })()}
    width: ${Math.min(Math.max(9.20635 + 0.907937 * Math.min(Math.max($progress, 0), 100), 0), 100)}%;
    box-sizing: border-box;
  `,
);

const StyledHighlight = styled.div<{ $progress: number }>(
  ({ theme, $progress }) => css`
    background-color: ${theme["Neutral"]["Maroon Scale"]["40"]};
    border-radius: 12px;
    ${(() => {
      if ($progress < 50)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 6px;
          padding-right: 0px;
          padding-bottom: 6px;
          padding-left: 0px;
          gap: 8px;
          justify-content: center;
          align-items: flex-end;
          height: 9px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      return css`
        display: flex;
        flex-direction: row;
        padding-top: 6px;
        padding-right: 0px;
        padding-bottom: 6px;
        padding-left: 0px;
        gap: 8px;
        justify-content: center;
        align-items: flex-end;
        height: 9px;
        box-sizing: border-box;
        flex-shrink: 0;
        align-self: stretch;
      `;
    })()}
    min-width: ${Math.max(9 + 3.06 * Math.min(Math.max($progress, 0), 100), 0)}px;
  `,
);

/** A progress bar component that visually represents a value between 0 and 100, indicating completion or loading status. */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  function ProgressBar({ progress, ...rest }, ref) {
    return (
      <StyledRoot
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        {...rest}
        ref={ref}
      >
        <StyledProgress $progress={progress}>
          <StyledHighlight $progress={progress}></StyledHighlight>
        </StyledProgress>
      </StyledRoot>
    );
  },
);
