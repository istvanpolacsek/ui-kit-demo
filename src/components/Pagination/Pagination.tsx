import React from "react";
import styled, { css } from "styled-components";
import { PaginationPrevious } from "../PaginationPrevious";
import { PaginationList } from "../PaginationList";
import { PaginationNext } from "../PaginationNext";

export interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {}

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

/** Pagination component that provides navigation controls for moving between pages, including previous/next buttons and a list of page indicators. */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  function Pagination({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Pagination" {...rest} ref={ref}>
        <PaginationPrevious />
        <PaginationList number={"68"} state={"Default"} />
        <PaginationNext />
      </StyledRoot>
    );
  },
);
