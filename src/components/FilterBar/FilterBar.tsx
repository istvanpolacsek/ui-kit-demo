import React from "react";
import styled, { css } from "styled-components";
import { FilterItem, type FilterItemProps } from "../FilterItem";

export interface FilterBarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "items"
> {
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

const StyledItems = styled.div(
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

export const FilterBar = React.forwardRef<HTMLDivElement, FilterBarProps>(
  function FilterBar({ items, ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledItems>
          {items?.map((item, index) => (
            <FilterItem key={index} {...item} />
          ))}
        </StyledItems>
      </StyledRoot>
    );
  },
);
