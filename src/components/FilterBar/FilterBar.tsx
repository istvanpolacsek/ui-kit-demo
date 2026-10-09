import React from "react";
import styled, { css } from "styled-components";
import { FilterItem, type FilterItemProps } from "../FilterItem";

export interface FilterBarProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "items"
> {
  items?: FilterItemProps[];
}

const StyledRoot = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledItems = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A horizontal filter bar that renders a list of filter items, allowing users to select or toggle filters. Accepts a slot for consumer-provided filter item components. */
export const FilterBar = React.forwardRef<HTMLUListElement, FilterBarProps>(
  function FilterBar({ items, ...rest }, ref) {
    return (
      <StyledRoot role="list" aria-label="Filter options" {...rest} ref={ref}>
        <StyledItems>
          {items?.map((item, index) => (
            <FilterItem key={index} {...item} />
          ))}
        </StyledItems>
      </StyledRoot>
    );
  },
);
