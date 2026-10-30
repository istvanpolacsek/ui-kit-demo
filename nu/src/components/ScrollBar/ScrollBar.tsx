import React from "react";
import styled, { css } from "styled-components";

export interface ScrollBarProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledBar = styled.div(
  ({ theme }) => css`
    width: 4px;
    height: 100px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["gray"]["400"]};
    border-radius: 1000px;
  `,
);

/** A scroll bar component used to indicate scrollable content and allow users to navigate through overflow content. */
export const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  function ScrollBar({ ...rest }, ref) {
    return (
      <StyledRoot role="scrollbar" aria-label="Scrollbar" {...rest} ref={ref}>
        <StyledBar />
      </StyledRoot>
    );
  },
);
