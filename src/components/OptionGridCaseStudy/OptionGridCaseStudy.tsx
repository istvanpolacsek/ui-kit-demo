import React from "react";
import styled, { css } from "styled-components";
import {
  OptionItemCaseStudy,
  type OptionItemCaseStudyProps,
} from "../OptionItemCaseStudy";
import { useTabs } from "./OptionGridCaseStudy.tabs";

export type OptionGridCaseStudyItem = Omit<
  OptionItemCaseStudyProps,
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

export interface OptionGridCaseStudyProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "items" | "value" | "defaultValue" | "onChange" | "panels"
> {
  type?: "Default";
  items?: OptionGridCaseStudyItem[];
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
    padding-top: 56px;
    padding-right: 24px;
    padding-bottom: 56px;
    padding-left: 24px;
    gap: 0px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    row-gap: 24px;
    border-radius: 0px;
  `,
);

/** A grid of selectable option items representing case studies, rendered as an unordered list of option entries for the user to choose from. */
export const OptionGridCaseStudy = React.forwardRef<
  HTMLDivElement,
  OptionGridCaseStudyProps
>(function OptionGridCaseStudy(
  { type = "Default", items, value, defaultValue, onChange, panels, ...rest },
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
          <OptionItemCaseStudy
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
