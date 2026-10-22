import React from "react";
import styled, { css } from "styled-components";
import { TabLarge } from "../TabLarge";

export interface TabRowProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "number" | "selected" | "mode"
> {
  number?: 2 | 3 | 4;
  selected?: 1 | 2 | 3 | 4;
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 572px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTabLarge = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTabLarge2 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTabLarge3 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTabLarge4 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A tab row component that renders a horizontal list of navigational tabs. Supports 2–4 tabs with one selected at a time, and adapts to light or dark display modes. */
export const TabRow = React.forwardRef<HTMLElement, TabRowProps>(
  function TabRow({ number = 2, selected = 1, mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        role="tablist"
        aria-label="Tab navigation"
        {...rest}
        ref={ref}
      >
        <StyledTabLarge>
          <TabLarge sideIcon={false} topIcon={false} mode={"Light"} />
        </StyledTabLarge>
        <StyledTabLarge2>
          <TabLarge sideIcon={false} topIcon={false} mode={"Light"} />
        </StyledTabLarge2>
        {[3, 4].includes(number) && (
          <StyledTabLarge3>
            <TabLarge sideIcon={false} topIcon={false} mode={"Light"} />
          </StyledTabLarge3>
        )}
        {number === 4 && (
          <StyledTabLarge4>
            <TabLarge sideIcon={false} topIcon={false} mode={"Light"} />
          </StyledTabLarge4>
        )}
      </StyledRoot>
    );
  },
);
