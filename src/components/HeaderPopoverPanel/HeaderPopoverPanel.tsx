import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { TabBar, type TabBarProps } from "../TabBar";

export interface HeaderPopoverPanelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "tabBarType" | "number" | "selected" | "mode"
> {
  type?: "No tabs" | "Tabs";
  tabBarType?: TabBarProps["type"];
  number?: TabBarProps["number"];
  selected?: TabBarProps["selected"];
  mode?: TabBarProps["mode"];
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    width: 332px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #fefefe;
  `,
);

const StyledTitle = styled.div<{ $type: "No tabs" | "Tabs" }>(
  ({ $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "No tabs":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Tabs":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 8px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle2 = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledIconOnlyPrimaryButtonSubtle = styled.div(
  () => css`
    position: absolute;
    right: 18px;
    top: 17px;
    width: 36px;
    height: 36px;
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

/** A popover panel header component that displays a panel title and a close/action button. Optionally includes a tab bar for navigating between multiple content sections within the popover. */
export const HeaderPopoverPanel = React.forwardRef<
  HTMLElement,
  HeaderPopoverPanelProps
>(function HeaderPopoverPanel(
  {
    type = "No tabs",
    tabBarType = "Simple",
    number = 3,
    selected = 1,
    mode = "Dark",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot role="dialog" aria-label="Panel title" {...rest} ref={ref}>
      <StyledTitle $type={type}>
        <StyledTitle2>{"Panel title"}</StyledTitle2>
        <StyledIconOnlyPrimaryButtonSubtle>
          <IconOnlyPrimaryButtonSubtle
            state={"Default (no BG)"}
            size={"Small"}
            mode={"Dark"}
          />
        </StyledIconOnlyPrimaryButtonSubtle>
      </StyledTitle>
      {type === "Tabs" && (
        <StyledTabBar>
          <TabBar
            type={tabBarType}
            number={number}
            selected={selected}
            mode={mode}
          />
        </StyledTabBar>
      )}
    </StyledRoot>
  );
});
