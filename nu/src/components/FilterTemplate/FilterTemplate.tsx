import React from "react";
import styled, { css } from "styled-components";
import { FilterBar } from "../FilterBar";
import { FilterDropdown } from "../FilterDropdown";

export interface FilterTemplateProps extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 317px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
  `,
);

const StyledFilterBar = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterDropdown = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterDropdown2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFilterDropdown3 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A filter template component that renders a filter bar containing multiple filter dropdown controls, allowing users to apply one or more filters to a dataset. */
export const FilterTemplate = React.forwardRef<
  HTMLFormElement,
  FilterTemplateProps
>(function FilterTemplate({ ...rest }, ref) {
  return (
    <StyledRoot role="search" aria-label="Filter options" {...rest} ref={ref}>
      <StyledFilterBar>
        <FilterBar />
      </StyledFilterBar>
      <StyledFilterDropdown>
        <FilterDropdown defaultOpen={true} />
      </StyledFilterDropdown>
      <StyledFilterDropdown2>
        <FilterDropdown defaultOpen={true} />
      </StyledFilterDropdown2>
      <StyledFilterDropdown3>
        <FilterDropdown defaultOpen={true} />
      </StyledFilterDropdown3>
    </StyledRoot>
  );
});
