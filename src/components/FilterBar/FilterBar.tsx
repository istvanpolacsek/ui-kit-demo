import React from "react";
import styled, { css } from "styled-components";
import { FilterItem, type FilterItemProps } from "../FilterItem";

export interface FilterBarProps {
  items?: FilterItemProps[];
}

const StyledRoot = styled.div(
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
    border-radius: 0px;
  `,
);

const StyledItems = styled.ul(
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
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A horizontal filter bar that renders a collection of filter items, allowing users to apply or remove filters within a UI context. */
export function FilterBar({ items }: FilterBarProps) {
  return (
    <StyledRoot role="group" aria-label="Filter options">
      <StyledItems>
        {items?.map((item, index) => (
          <li key={index}>
            <FilterItem {...item} />
          </li>
        ))}
      </StyledItems>
    </StyledRoot>
  );
}
