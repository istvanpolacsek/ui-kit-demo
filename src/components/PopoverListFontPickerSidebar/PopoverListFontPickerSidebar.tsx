import React from "react";
import styled, { css } from "styled-components";
import { Search } from "../Search";
import { TabBar } from "../TabBar";
import { ListItemDropdown } from "../ListItemDropdown";

export interface PopoverListFontPickerSidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?: "Value typed" | "Default" | "Hover search";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 288px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.24),
      0px 8px 12px 0px rgba(0, 0, 0, 0.2);
  `,
);

const StyledSearchBox = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 14px;
    padding-right: 12px;
    padding-bottom: 14px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    background-color: #1a1a1a;
    border-radius: 0px;
  `,
);

const StyledSearchFont = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledMonts = styled.div(
  () => css`
    color: #fefefe;
  `,
);

const StyledTabBar = styled.div(
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

const StyledList = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemDropdown = styled.li(
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

const StyledListItemDropdown2 = styled.li(
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

const StyledListItemDropdown3 = styled.li(
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

const StyledListItemDropdown4 = styled.li(
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

const StyledListItemDropdown5 = styled.li(
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

/** A popover panel for selecting a font, containing a search input with optional tab navigation and a scrollable list of font options. Supports states for default display, active search input, and hover interaction. */
export const PopoverListFontPickerSidebar = React.forwardRef<
  HTMLDivElement,
  PopoverListFontPickerSidebarProps
>(function PopoverListFontPickerSidebar({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Font picker" {...rest} ref={ref}>
      <StyledSearchBox>
        <Search />
        {["Default", "Hover search"].includes(state) && (
          <StyledSearchFont>{"Search font"}</StyledSearchFont>
        )}
        {state === "Value typed" && <StyledMonts>{"Monts"}</StyledMonts>}
      </StyledSearchBox>
      {["Default", "Hover search"].includes(state) && (
        <StyledTabBar>
          <TabBar type={"Top icon"} number={4} selected={1} mode={"Dark"} />
        </StyledTabBar>
      )}
      <StyledList>
        <StyledListItemDropdown>
          <ListItemDropdown
            hasPlusLock={false}
            hasStatus={false}
            hasIcon={true}
            type={"Decisive"}
            mode={"Dark"}
          />
        </StyledListItemDropdown>
        {["Default", "Hover search"].includes(state) && (
          <StyledListItemDropdown2>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown2>
        )}
        {["Default", "Hover search"].includes(state) && (
          <StyledListItemDropdown3>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown3>
        )}
        {["Default", "Hover search"].includes(state) && (
          <StyledListItemDropdown4>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown4>
        )}
        {["Default", "Hover search"].includes(state) && (
          <StyledListItemDropdown5>
            <ListItemDropdown
              hasStatus={false}
              hasPlusLock={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown5>
        )}
      </StyledList>
    </StyledRoot>
  );
});
