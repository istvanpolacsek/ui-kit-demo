import React from "react";
import styled, { css } from "styled-components";
import { Tab, type TabProps } from "../Tab";
import { useTabs } from "./Tabs.tabs";

export type TabsItem = Omit<
  TabProps,
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

export interface TabsProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "items" | "value" | "defaultValue" | "onChange" | "panels"
> {
  items?: TabsItem[];
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
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A horizontal tab bar container that renders a list of Tab items, allowing users to switch between different content panels. */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { items, value, defaultValue, onChange, panels, ...rest },
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
        <StyledSlot>
          {items?.map((item) => (
            <Tab
              key={item.value}
              {...item}
              id={tabs.tabId(item.value)}
              aria-controls={tabs.controls(item.value)}
              selected={tabs.isSelected(item.value)}
              onClick={() => tabs.select(item.value)}
              onKeyDown={tabs.onKeyDown}
            />
          ))}
        </StyledSlot>
      </StyledRoot>
      {tabs.selected !== undefined && panels?.[tabs.selected] !== undefined && (
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
});
