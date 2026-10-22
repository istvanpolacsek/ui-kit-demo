import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { TabBar, type TabBarProps } from "../TabBar";
import { TabRow, type TabRowProps } from "../TabRow";

export interface HeaderModalProps extends Omit<
  React.ComponentPropsWithoutRef<"header">,
  | "type"
  | "mode"
  | "tabBarType"
  | "number"
  | "selected"
  | "tabBarMode"
  | "tabRowMode"
> {
  type?: "Tabs" | "Description" | "Simple" | "Tabs alt";
  mode?: "Dark" | "Light";
  tabBarType?: TabBarProps["type"];
  number?: TabBarProps["number"];
  selected?: TabBarProps["selected"];
  tabBarMode?: TabBarProps["mode"];
  tabRowMode?: TabRowProps["mode"];
}

const StyledRoot = styled.header(
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
    width: 552px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledTitleContainer = styled.div<{
  $type: "Tabs" | "Description" | "Simple" | "Tabs alt";
}>(
  ({ $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Simple":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            height: 73px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case "Description":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 4px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Tabs":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Tabs alt":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 32px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.h2<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIconOnlyPrimaryButtonSubtle = styled.div(
  () => css`
    position: absolute;
    right: 18px;
    top: 18px;
    width: 36px;
    height: 36px;
  `,
);

const StyledDescriptionContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 70px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.p<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Dark":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
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

/** Header component for modal dialogs. Displays a title and optional close button, with support for descriptive text and tab navigation variants. Adapts to light and dark modes. */
export const HeaderModal = React.forwardRef<HTMLElement, HeaderModalProps>(
  function HeaderModal(
    {
      type = "Simple",
      mode = "Light",
      tabBarType = "Simple",
      number = 3,
      selected = 1,
      tabBarMode = "Light",
      tabRowMode = "Light",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot role="dialog" aria-label="Modal title" {...rest} ref={ref}>
        <StyledTitleContainer $type={type}>
          <StyledTitle $mode={mode}>{"Modal title"}</StyledTitle>
          <StyledIconOnlyPrimaryButtonSubtle>
            <IconOnlyPrimaryButtonSubtle
              state={"Default (no BG)"}
              size={"Small"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryButtonSubtle>
        </StyledTitleContainer>
        {type === "Description" && (
          <StyledDescriptionContainer>
            {type === "Description" && (
              <StyledLabel $mode={mode}>
                {"Here goes the description. It can be up to 2 rows of text."}
              </StyledLabel>
            )}
          </StyledDescriptionContainer>
        )}
        {type === "Tabs" && (
          <StyledTabBar>
            <TabBar
              type={tabBarType}
              number={number}
              selected={selected}
              mode={tabBarMode}
            />
          </StyledTabBar>
        )}
        {type === "Tabs alt" && (
          <StyledTabRow>
            <TabRow number={number} selected={selected} mode={tabRowMode} />
          </StyledTabRow>
        )}
      </StyledRoot>
    );
  },
);
