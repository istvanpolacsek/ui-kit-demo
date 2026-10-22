import React from "react";
import styled, { css } from "styled-components";
import { ListItemTab, type ListItemTabProps } from "../ListItemTab";
import { useTabs } from "./TabList.tabs";

export type TabListItem = Omit<
  ListItemTabProps,
  | "selected"
  | "id"
  | "aria-controls"
  | "aria-selected"
  | "role"
  | "tabIndex"
  | "onClick"
  | "onKeyDown"
  | "value"
> & { value: string };

export interface TabListProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "items" | "value" | "defaultValue" | "onChange" | "panels"
> {
  type?: "Default";
  items?: TabListItem[];
  /** The value of the chosen tab (controlled). */
  value?: string;
  /** The value of the tab that starts chosen (uncontrolled). Defaults to the first enabled tab. */
  defaultValue?: string;
  /** Called with the new value when the user chooses a tab. */
  onChange?: (value: string) => void;
  /** The content of each tab by item value; the chosen tab shows its own below the list. */
  panels?: Record<string, React.ReactNode>;
}

const StyledRoot = styled.div(
  () => css`
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

/** A tab list component that renders a horizontal list of tab items, enabling navigation between different content panels. Implements the ARIA tab list pattern for accessible keyboard navigation. */
export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  function TabList(
    { type = "Default", items, value, defaultValue, onChange, panels, ...rest },
    ref,
  ) {
    const tabs = useTabs({ items, value, defaultValue, onChange, panels });
    return (
      <React.Fragment>
        <StyledRoot
          role="tablist"
          aria-orientation="vertical"
          {...rest}
          ref={ref}
        >
          {items?.map((item) => (
            <ListItemTab
              key={item.value}
              {...item}
              id={tabs.tabId(item.value)}
              aria-controls={tabs.controls(item.value)}
              selected={tabs.isSelected(item.value)}
              onClick={() => tabs.select(item.value)}
              onKeyDown={tabs.onKeyDown}
            />
          ))}
        </StyledRoot>
        {tabs.selected !== undefined &&
          panels?.[tabs.selected] !== undefined && (
            <div
              role="tabpanel"
              id={tabs.panelId(tabs.selected)}
              aria-labelledby={tabs.tabId(tabs.selected)}
              tabIndex={0}
            >
              {panels[tabs.selected]}
            </div>
          )}
      </React.Fragment>
    );
  },
);
