import React from "react";
import styled, { css } from "styled-components";

export interface ProgressMainProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "progress"
> {
  progress: number;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 1px;
    justify-content: flex-start;
    align-items: center;
    width: 360px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 24px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledProgress = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledLine3 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 24px;
    transform: translateY(-50%);
    -webkit-mask-image: repeating-linear-gradient(
      90deg,
      #000 0,
      #000 4px,
      transparent 4px,
      transparent 5px
    );
    mask-image: repeating-linear-gradient(
      90deg,
      #000 0,
      #000 4px,
      transparent 4px,
      transparent 5px
    );
    background-color: ${theme["Neutral"]["Grey Transparency Scale"]["30"]};
  `,
);

const StyledHighlight = styled.div<{ $progress: number }>(
  ({ $progress }) => css`
    position: relative;
    overflow: hidden;
    border-radius: 100px;
    ${(() => {
      if ($progress < 25)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 24px;
          padding-right: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
          gap: 0px;
          justify-content: flex-end;
          align-items: center;
          height: 24px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($progress < 75)
        return css`
          display: flex;
          flex-direction: column;
          padding-top: 0px;
          padding-right: 0px;
          padding-bottom: 0px;
          padding-left: 0px;
          gap: 10px;
          justify-content: flex-end;
          align-items: flex-start;
          height: 24px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      return css`
        display: flex;
        flex-direction: column;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        gap: 10px;
        justify-content: flex-end;
        align-items: flex-start;
        width: fit-content;
        height: 24px;
        box-sizing: border-box;
        flex-shrink: 0;
      `;
    })()}
    width: ${Math.min(Math.max(7.81759 + 0.921824 * Math.min(Math.max($progress, 0), 100), 0), 100)}%;
    box-sizing: border-box;
  `,
);

const StyledLine4 = styled.div<{ $progress: number }>(
  ({ theme, $progress }) => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 24px;
    transform: translateY(-50%);
    ${(() => {
      if ($progress < 25)
        return css`
          background-color: ${theme["Semantic"]["Error"]};
        `;
      if ($progress < 75)
        return css`
          background-color: ${theme["Semantic"]["Warning"]};
        `;
      return css`
        background-color: ${theme["Semantic"]["Success"]};
      `;
    })()}
  `,
);

const StyledPercentage = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Neutral"]["Grey Scale"]["20"]};
    border-radius: 0px;
  `,
);

const Styled0 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "PT Serif";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

/** A progress bar component that visually represents a completion percentage from 0 to 100, with a highlighted track and a numeric percentage label. */
export const ProgressMain = React.forwardRef<HTMLDivElement, ProgressMainProps>(
  function ProgressMain({ progress, ...rest }, ref) {
    return (
      <StyledRoot
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        {...rest}
        ref={ref}
      >
        <StyledProgress>
          <StyledLine3 />
          <StyledHighlight $progress={progress}>
            <StyledLine4 $progress={progress} />
          </StyledHighlight>
        </StyledProgress>
        <StyledPercentage>
          <Styled0>{`${progress}%`}</Styled0>
        </StyledPercentage>
      </StyledRoot>
    );
  },
);
