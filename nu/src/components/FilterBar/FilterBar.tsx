import React from "react";
import styled, { css } from "styled-components";
import { LinkButton } from "../LinkButton";

export interface FilterBarProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    width: 309px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledFilters = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

/** A filter bar component that displays a label and a link button, typically used to present filtering options or actions in a toolbar or content area. */
export const FilterBar = React.forwardRef<HTMLDivElement, FilterBarProps>(
  function FilterBar({ ...rest }, ref) {
    return (
      <StyledRoot role="toolbar" aria-label="Filters" {...rest} ref={ref}>
        <StyledFilters>{"Filters"}</StyledFilters>
        <LinkButton
          linkValue={"Clear all"}
          rightIcon={false}
          leftIcon={false}
          size={"Large"}
          device={"Desktop"}
          state={"Default"}
          hierarchy={"Primary"}
          type={"Default"}
        />
      </StyledRoot>
    );
  },
);
