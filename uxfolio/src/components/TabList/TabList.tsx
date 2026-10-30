import React from "react";
import styled, { css } from "styled-components";
import { ListItemTab } from "../ListItemTab";

export interface TabListProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 150px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledListItemTab = styled.li(
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

const StyledListItemTab2 = styled.li(
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

const StyledListItemTab3 = styled.li(
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

/** A tab list component that renders a horizontal list of tab items, enabling navigation between different content panels. Implements the ARIA tab list pattern for accessible keyboard navigation. */
export const TabList = React.forwardRef<HTMLUListElement, TabListProps>(
  function TabList({ type = "Default", ...rest }, ref) {
    return (
      <StyledRoot
        role="tablist"
        aria-label="Tab navigation"
        {...rest}
        ref={ref}
      >
        <StyledListItemTab>
          <ListItemTab />
        </StyledListItemTab>
        <StyledListItemTab2>
          <ListItemTab />
        </StyledListItemTab2>
        <StyledListItemTab3>
          <ListItemTab />
        </StyledListItemTab3>
      </StyledRoot>
    );
  },
);
