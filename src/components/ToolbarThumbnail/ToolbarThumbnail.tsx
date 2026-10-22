import React from "react";
import styled, { css } from "styled-components";
import { ToolbarButtonNeutral } from "../ToolbarButtonNeutral";
import { Separator } from "../Separator";
import { ToolbarButtonDestructive } from "../ToolbarButtonDestructive";

export interface ToolbarThumbnailProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "flipHorizontally"
  | "addMedia"
  | "addSocialLink"
  | "addText"
  | "addNavigation"
  | "type"
  | "mode"
> {
  flipHorizontally?: boolean;
  addMedia?: boolean;
  addSocialLink?: boolean;
  addText?: boolean;
  addNavigation?: boolean;
  type?:
    | "General"
    | "Column"
    | "Gallery"
    | "Subtitle"
    | "Logo"
    | "Process"
    | "Divider line"
    | "Portfolio"
    | "Navigation"
    | "Hero"
    | "Footer"
    | "Case study nav"
    | "Horizontal"
    | "Horizontal open"
    | "Horizontal closed"
    | "Sidebar hero";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div<{
  $type:
    | "General"
    | "Column"
    | "Gallery"
    | "Subtitle"
    | "Logo"
    | "Process"
    | "Divider line"
    | "Portfolio"
    | "Navigation"
    | "Hero"
    | "Footer"
    | "Case study nav"
    | "Horizontal"
    | "Horizontal open"
    | "Horizontal closed"
    | "Sidebar hero";
  $mode: "Light" | "Dark";
}>(
  ({ $type, $mode }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["General","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Column","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Gallery","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Subtitle","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Logo","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Process","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Divider line","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Portfolio","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Navigation","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hero","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Sidebar hero","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Footer","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Case study nav","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Horizontal open","Light"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Horizontal closed","Light"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["General","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Column","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Gallery","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Subtitle","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Logo","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Process","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Divider line","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Portfolio","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Navigation","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Hero","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Footer","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Case study nav","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Horizontal","Dark"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Horizontal closed","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 0px;
            padding-bottom: 4px;
            padding-left: 0px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            border-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledActionGroup = styled.ul<{
  $type:
    | "General"
    | "Column"
    | "Gallery"
    | "Subtitle"
    | "Logo"
    | "Process"
    | "Divider line"
    | "Portfolio"
    | "Navigation"
    | "Hero"
    | "Footer"
    | "Case study nav"
    | "Horizontal"
    | "Horizontal open"
    | "Horizontal closed"
    | "Sidebar hero";
  $mode: "Light" | "Dark";
}>(
  ({ $type, $mode }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$type, $mode])) {
        case '["General","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Column","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Gallery","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Subtitle","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Logo","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Process","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Divider line","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Portfolio","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Navigation","Light"]':
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
            width: fit-content;
          `;
        case '["Hero","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Sidebar hero","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Footer","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Case study nav","Light"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Horizontal open","Light"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Horizontal closed","Light"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["General","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Column","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Gallery","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Subtitle","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Logo","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Process","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Divider line","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Portfolio","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Navigation","Dark"]':
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
            width: fit-content;
          `;
        case '["Hero","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Footer","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Case study nav","Dark"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Horizontal","Dark"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Horizontal closed","Dark"]':
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
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledToolbarButtonNeutral = styled.li(() => css``);

const StyledToolbarButtonNeutral2 = styled.li(() => css``);

const StyledToolbarButtonNeutral3 = styled.li(() => css``);

const StyledToolbarButtonNeutral4 = styled.li(() => css``);

const StyledToolbarButtonNeutral5 = styled.li(() => css``);

const StyledSeparator = styled.div<{
  $type:
    | "General"
    | "Column"
    | "Gallery"
    | "Subtitle"
    | "Logo"
    | "Process"
    | "Divider line"
    | "Portfolio"
    | "Navigation"
    | "Hero"
    | "Footer"
    | "Case study nav"
    | "Horizontal"
    | "Horizontal open"
    | "Horizontal closed"
    | "Sidebar hero";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "General":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Column":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Gallery":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Subtitle":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Logo":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Process":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Divider line":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Footer":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Case study nav":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A contextual toolbar displaying a group of action buttons relevant to a specific thumbnail type (e.g., General, Gallery, Hero). Supports toggling actions like flip, add media, add text, and navigation, with optional destructive actions and a separator. */
export const ToolbarThumbnail = React.forwardRef<
  HTMLDivElement,
  ToolbarThumbnailProps
>(function ToolbarThumbnail(
  {
    flipHorizontally = false,
    addMedia = false,
    addSocialLink = false,
    addText = false,
    addNavigation = false,
    type = "General",
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="toolbar"
      aria-label="Thumbnail actions"
      {...rest}
      ref={ref}
      $type={type}
      $mode={mode}
    >
      <StyledActionGroup $type={type} $mode={mode}>
        <StyledToolbarButtonNeutral>
          <ToolbarButtonNeutral
            hasIcon={false}
            state={"Default"}
            type={"Icon"}
            mode={"Dark"}
          />
        </StyledToolbarButtonNeutral>
        {[
          "General",
          "Column",
          "Gallery",
          "Subtitle",
          "Logo",
          "Process",
          "Divider line",
          "Portfolio",
          "Hero",
          "Sidebar hero",
          "Footer",
          "Case study nav",
          "Horizontal open",
          "Horizontal",
        ].includes(type) && (
          <StyledToolbarButtonNeutral2>
            <ToolbarButtonNeutral
              hasIcon={false}
              state={"Default"}
              type={"Icon"}
              mode={"Dark"}
            />
          </StyledToolbarButtonNeutral2>
        )}
        {[
          "General",
          "Column",
          "Gallery",
          "Subtitle",
          "Logo",
          "Process",
          "Divider line",
          "Portfolio",
          "Hero",
          "Horizontal open",
          "Horizontal",
        ].includes(type) && (
          <StyledToolbarButtonNeutral3>
            <ToolbarButtonNeutral
              hasIcon={false}
              state={"Default"}
              type={"Icon"}
              mode={"Dark"}
            />
          </StyledToolbarButtonNeutral3>
        )}
        {[
          "General",
          "Column",
          "Gallery",
          "Subtitle",
          "Logo",
          "Divider line",
          "Horizontal open",
          "Horizontal",
        ].includes(type) && (
          <StyledToolbarButtonNeutral4>
            <ToolbarButtonNeutral
              hasIcon={false}
              state={"Default"}
              type={"Icon"}
              mode={"Dark"}
            />
          </StyledToolbarButtonNeutral4>
        )}
        {["General", "Horizontal open", "Horizontal"].includes(type) && (
          <StyledToolbarButtonNeutral5>
            <ToolbarButtonNeutral
              hasIcon={false}
              state={"Default"}
              type={"Icon"}
              mode={"Dark"}
            />
          </StyledToolbarButtonNeutral5>
        )}
      </StyledActionGroup>
      {[
        "General",
        "Column",
        "Gallery",
        "Subtitle",
        "Logo",
        "Process",
        "Divider line",
        "Footer",
        "Case study nav",
        "Horizontal open",
        "Horizontal",
      ].includes(type) && (
        <StyledSeparator $type={type}>
          <Separator angle={"Horizontal"} mode={"Dark"} />
        </StyledSeparator>
      )}
      {[
        "General",
        "Column",
        "Gallery",
        "Subtitle",
        "Logo",
        "Process",
        "Divider line",
        "Footer",
        "Case study nav",
        "Horizontal open",
        "Horizontal",
      ].includes(type) && (
        <ToolbarButtonDestructive
          state={"Default"}
          type={"Icon"}
          dropdown={"False"}
          mode={"Dark"}
        />
      )}
    </StyledRoot>
  );
});
