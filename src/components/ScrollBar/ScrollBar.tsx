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
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    height: 339px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #333333;
    border-radius: 0px;
  `,
);

const StyledThumb = styled.div(
  () => css`
    width: 8px;
    height: 150px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #707070;
    border-radius: 0px;
  `,
);

/** A scrollbar component containing a draggable thumb element used to indicate and control scroll position within a scrollable container. */
export const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  function ScrollBar({ ...rest }, ref) {
    return (
      <StyledRoot role="scrollbar" aria-label="Scrollbar" {...rest} ref={ref}>
        <StyledThumb />
      </StyledRoot>
    );
  },
);
