import React from "react";
import styled, { css } from "styled-components";
import { Checkbox } from "../Checkbox";

export interface FilterItemProps extends React.ComponentPropsWithoutRef<"label"> {}

const StyledRoot = styled.label(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 221px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledItem = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A filter item component combining a checkbox with a text label, used to toggle individual filter options within a filter group. */
export const FilterItem = React.forwardRef<HTMLLabelElement, FilterItemProps>(
  function FilterItem({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Filter item" {...rest} ref={ref}>
        <Checkbox />
        <StyledItem>{"Item"}</StyledItem>
      </StyledRoot>
    );
  },
);
