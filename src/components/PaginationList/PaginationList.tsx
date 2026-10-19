import React from "react";
import styled, { css } from "styled-components";

export interface PaginationListProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "slot"
> {
  slot?: React.ReactNode;
}

const StyledRoot = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A pagination list component that renders a horizontal row of pagination controls (page numbers, arrows, etc.) provided via a slot. Intended to be used as a navigation landmark for paginated content. */
export const PaginationList = React.forwardRef<
  HTMLElement,
  PaginationListProps
>(function PaginationList({ slot, ...rest }, ref) {
  return (
    <StyledRoot role="navigation" aria-label="Pagination" {...rest} ref={ref}>
      <StyledSlot>{slot}</StyledSlot>
    </StyledRoot>
  );
});
