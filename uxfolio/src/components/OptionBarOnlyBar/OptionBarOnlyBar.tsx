import React from "react";
import styled, { css } from "styled-components";
import { OptionBarItem, type OptionBarItemProps } from "../OptionBarItem";
import { useTabs } from "./OptionBarOnlyBar.tabs";

export type OptionBarOnlyBarItem = Omit<
  OptionBarItemProps,
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

export interface OptionBarOnlyBarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "number"
  | "active"
  | "type"
  | "items"
  | "value"
  | "defaultValue"
  | "onChange"
  | "panels"
> {
  number?: 2 | 3 | 4 | 5;
  active?: 1 | 2 | 3 | 4 | 5;
  type?: "Text" | "Icon";
  items?: OptionBarOnlyBarItem[];
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
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 302px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 4px;
  `,
);

/** A segmented option bar (tab strip) that displays 2–5 selectable items as either text labels or icons, with one item active at a time. Renders as a horizontal list of option bar items. */
export const OptionBarOnlyBar = React.forwardRef<
  HTMLDivElement,
  OptionBarOnlyBarProps
>(function OptionBarOnlyBar(
  {
    number = 4,
    active = 1,
    type = "Text",
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
          <OptionBarItem
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
