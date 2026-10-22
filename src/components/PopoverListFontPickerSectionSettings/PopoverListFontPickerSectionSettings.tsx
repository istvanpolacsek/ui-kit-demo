import React from "react";
import styled, { css } from "styled-components";
import { TabRow } from "../TabRow";
import { ListItemDropdown } from "../ListItemDropdown";
import { Search } from "../Search";

export interface PopoverListFontPickerSectionSettingsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "state"
> {
  state?: "Custom tab" | "My fonts tab" | "Search hover" | "Search typing";
}

const StyledRoot = styled.section<{
  $state: "Custom tab" | "My fonts tab" | "Search hover" | "Search typing";
}>(
  ({ $state }) => css`
    overflow: hidden;
    background-color: #333333;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.24),
      0px 8px 12px 0px rgba(0, 0, 0, 0.2);
    ${(() => {
      switch ($state) {
        case "My fonts tab":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 276px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Custom tab":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 276px;
            height: 255px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Search hover":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 276px;
            height: 255px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Search typing":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 276px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTabBarWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTabRow = styled.div(
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
    background-color: #333333;
    border-radius: 0px;
  `,
);

const StyledSearchFont = styled.div<{
  $state: "Custom tab" | "My fonts tab" | "Search hover" | "Search typing";
}>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Custom tab":
          return css`
            color: ${"#adadad"};
          `;
        case "Search hover":
          return css`
            color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMonts = styled.div(
  () => css`
    color: #fefefe;
  `,
);

/** A font picker popover panel containing a tab bar for switching between font categories (e.g. Custom, My Fonts), an optional search box for filtering fonts, and a list of selectable font items. Supports multiple states including tab views and search interaction modes. */
export const PopoverListFontPickerSectionSettings = React.forwardRef<
  HTMLElement,
  PopoverListFontPickerSectionSettingsProps
>(function PopoverListFontPickerSectionSettings(
  { state = "My fonts tab", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Font picker"
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledTabBarWrapper>
        <StyledTabRow>
          <TabRow number={2} selected={1} mode={"Dark"} />
        </StyledTabRow>
      </StyledTabBarWrapper>
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
        {["My fonts tab", "Custom tab", "Search hover"].includes(state) && (
          <StyledListItemDropdown2>
            <ListItemDropdown
              hasStatus={false}
              hasPlusLock={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown2>
        )}
        {["Custom tab", "Search hover"].includes(state) && (
          <StyledListItemDropdown3>
            <ListItemDropdown
              hasStatus={false}
              hasPlusLock={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown3>
        )}
        {["Custom tab", "Search hover"].includes(state) && (
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
        {["Custom tab", "Search hover"].includes(state) && (
          <StyledListItemDropdown5>
            <ListItemDropdown
              hasPlusLock={false}
              hasStatus={false}
              hasIcon={true}
              type={"Decisive"}
              mode={"Dark"}
            />
          </StyledListItemDropdown5>
        )}
      </StyledList>
      {["Custom tab", "Search hover", "Search typing"].includes(state) && (
        <StyledSearchBox>
          {["Custom tab", "Search hover", "Search typing"].includes(state) && (
            <Search />
          )}
          {["Custom tab", "Search hover"].includes(state) && (
            <StyledSearchFont $state={state}>{"Search font"}</StyledSearchFont>
          )}
          {state === "Search typing" && <StyledMonts>{"Monts"}</StyledMonts>}
        </StyledSearchBox>
      )}
    </StyledRoot>
  );
});
