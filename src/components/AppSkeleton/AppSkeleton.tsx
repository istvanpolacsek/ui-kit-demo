import React from "react";
import styled, { css } from "styled-components";

export interface AppSkeletonProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "size"
> {
  size?: "Inline card" | "Fullscreen";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledEllipse703 = styled.span(
  ({ theme }) => css`
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Text"]["Ghost"]};
    border-radius: 50%;
  `,
);

const StyledFrame1430106458 = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Text"]["Ghost"]};
    border-radius: 8px;
  `,
);

const StyledFrame1430106459 = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Text"]["Ghost"]};
    border-radius: 8px;
  `,
);

const StyledFrame1430106460 = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Text"]["Ghost"]};
    border-radius: 8px;
  `,
);

/** A skeleton loading placeholder component for an app, available in 'Inline card' and 'Fullscreen' size variants. Used to indicate content is loading before the actual UI is rendered. */
export const AppSkeleton = React.forwardRef<HTMLDivElement, AppSkeletonProps>(
  function AppSkeleton({ size = "Inline card", ...rest }, ref) {
    return (
      <StyledRoot role="status" aria-label="Loading..." {...rest} ref={ref}>
        <StyledEllipse703 />
        <StyledFrame1430106458></StyledFrame1430106458>
        <StyledFrame1430106459></StyledFrame1430106459>
        <StyledFrame1430106460></StyledFrame1430106460>
      </StyledRoot>
    );
  },
);
