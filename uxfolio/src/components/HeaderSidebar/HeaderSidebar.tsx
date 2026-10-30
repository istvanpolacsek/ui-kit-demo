import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { TabBar, type TabBarProps } from "../TabBar";

export interface HeaderSidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"header">,
  "hasBack" | "hasTabs" | "type" | "tabBarType" | "number" | "selected" | "mode"
> {
  hasBack?: boolean;
  hasTabs?: "False" | "True";
  type?: "Global" | "Simple" | "Local";
  tabBarType?: TabBarProps["type"];
  number?: TabBarProps["number"];
  selected?: TabBarProps["selected"];
  mode?: TabBarProps["mode"];
}

const StyledRoot = styled.header<{
  $hasTabs: "False" | "True";
  $type: "Global" | "Simple" | "Local";
}>(
  ({ $hasTabs, $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$hasTabs, $type])) {
        case '["False","Simple"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 349px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["True","Simple"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 44px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 349px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["False","Global"]':
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
            width: fit-content;
          `;
        case '["True","Global"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 44px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Local"]':
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
            width: fit-content;
          `;
        case '["True","Local"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 44px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: #fefefe;
  `,
);

const StyledTitle = styled.div<{ $type: "Global" | "Simple" | "Local" }>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Simple":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
          `;
        case "Global":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 301px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Local":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 301px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitleWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 6px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTitle2 = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledActionWrapper = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledTabBar = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 349px;
    height: 44px;
  `,
);

/** A sidebar header component that displays a title, optional back navigation button, and optional action buttons. Supports tab bar integration for navigating between sidebar sections. */
export const HeaderSidebar = React.forwardRef<HTMLElement, HeaderSidebarProps>(
  function HeaderSidebar(
    {
      hasBack = false,
      hasTabs = "False",
      type = "Simple",
      tabBarType = "Simple",
      number = 3,
      selected = 1,
      mode = "Dark",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="banner"
        aria-label="Sidebar header"
        {...rest}
        ref={ref}
        $hasTabs={hasTabs}
        $type={type}
      >
        <StyledTitle $type={type}>
          {hasBack && (
            <IconOnlyPrimaryButtonSubtle
              state={"Default (no BG)"}
              size={"Small"}
              mode={"Dark"}
            />
          )}
          <StyledTitleWrapper>
            <StyledTitle2>{"Sidebar title"}</StyledTitle2>
          </StyledTitleWrapper>
          {type === "Simple" && (
            <IconOnlyPrimaryButtonSubtle
              state={"Default (no BG)"}
              size={"Small"}
              mode={"Dark"}
            />
          )}
          {["Global", "Local"].includes(type) && (
            <StyledActionWrapper>
              {["Global", "Local"].includes(type) && (
                <IconOnlyPrimaryButtonSubtle
                  state={"Default (no BG)"}
                  size={"Small"}
                  mode={"Dark"}
                />
              )}
              {["Global", "Local"].includes(type) && (
                <IconOnlyPrimaryButtonSubtle
                  state={"Default (no BG)"}
                  size={"Small"}
                  mode={"Dark"}
                />
              )}
            </StyledActionWrapper>
          )}
        </StyledTitle>
        {hasTabs === "True" && (
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
  },
);
