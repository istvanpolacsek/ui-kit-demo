import React from "react";
import styled, { css } from "styled-components";

export interface PaginationGapProps extends React.ComponentPropsWithoutRef<"span"> {}

const StyledRoot = styled.span(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 16px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    color: #000000;
  `,
);

const Styled = styled.span(
  () => css`
    color: #000000;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
  `,
);

/** Displays a visual gap or ellipsis indicator within a pagination component, signifying that there are more pages between the visible page numbers. */
export const PaginationGap = React.forwardRef<
  HTMLSpanElement,
  PaginationGapProps
>(function PaginationGap({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="More pages" aria-disabled {...rest} ref={ref}>
      <Styled>{"..."}</Styled>
    </StyledRoot>
  );
});
