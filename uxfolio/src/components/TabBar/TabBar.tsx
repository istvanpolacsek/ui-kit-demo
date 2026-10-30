import React from "react";
import styled, { css } from "styled-components";
import { TabSmall } from "../TabSmall";

export interface TabBarProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "type" | "number" | "selected" | "mode"
> {
  type?: "Simple" | "Side icon" | "Top icon";
  number?: 2 | 3 | 4 | 5;
  selected?: 1 | 2 | 3 | 4 | 5;
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 24px;
    padding-bottom: 0px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 604px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A tab bar navigation component that displays 2–5 tab items, supporting simple, side icon, and top icon layouts in light or dark mode. Used for primary navigation between top-level views. */
export const TabBar = React.forwardRef<HTMLElement, TabBarProps>(
  function TabBar(
    { type = "Simple", number = 2, selected = 1, mode = "Light", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="tablist"
        aria-label="Tab navigation"
        {...rest}
        ref={ref}
      >
        <TabSmall sideIcon={false} topIcon={false} mode={"Light"} />
        <TabSmall sideIcon={false} topIcon={false} mode={"Light"} />
        {[3, 4, 5].includes(number) && (
          <TabSmall sideIcon={false} topIcon={false} mode={"Light"} />
        )}
        {[4, 5].includes(number) && (
          <TabSmall sideIcon={false} topIcon={false} mode={"Light"} />
        )}
        {number === 5 && (
          <TabSmall sideIcon={false} topIcon={false} mode={"Light"} />
        )}
      </StyledRoot>
    );
  },
);
