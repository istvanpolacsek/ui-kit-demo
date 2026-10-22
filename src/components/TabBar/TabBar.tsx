import React from "react";
import styled, { css } from "styled-components";
import { TabSmall, type TabSmallProps } from "../TabSmall";
import { useTabs } from "./TabBar.tabs";

export type TabBarItem = Omit<
  TabSmallProps,
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

export interface TabBarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "type"
  | "number"
  | "selected"
  | "mode"
  | "items"
  | "value"
  | "defaultValue"
  | "onChange"
  | "panels"
> {
  type?: "Simple" | "Side icon" | "Top icon";
  number?: 2 | 3 | 4 | 5;
  selected?: 1 | 2 | 3 | 4 | 5;
  mode?: "Dark" | "Light";
  items?: TabBarItem[];
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

/** A tab bar navigation component that displays 2–5 tab items, supporting simple, side icon, and top icon layouts in light or dark mode. Used to switch between primary sections of an application. */
export const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  function TabBar(
    {
      type = "Simple",
      number = 2,
      selected = 1,
      mode = "Light",
      items,
      value,
      defaultValue,
      onChange,
      panels,
      ...rest
    },
    ref,
  ) {
    const tabs = useTabs({ items, value, defaultValue, onChange, panels });
    return (
      <React.Fragment>
        <StyledRoot
          role="tablist"
          aria-orientation="horizontal"
          {...rest}
          ref={ref}
        >
          {items?.map((item) => (
            <TabSmall
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
