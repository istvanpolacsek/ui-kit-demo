import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { Tab, type TabProps } from "../Tab";
import { SearchBar } from "../SearchBar";

export interface NavBarProps {
  type: "Detail" | "Default";
  items?: TabProps[];
}

const StyledRoot = styled.nav<{ $type: "Detail" | "Default" }>(
  ({ theme, $type }) => css`
    ${(() => {
      switch ($type) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 2px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Detail":
          return css`
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
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Default":
          return css`
            background-color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "Default":
          return css`
            border-radius: 100px;
          `;
        case "Detail":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "Default":
          return css`
            box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.06);
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["Text"]["Primary"]};
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledItems = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
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
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledSharedFiles = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    padding-right: 16px;
    padding-bottom: 3px;
    padding-left: 16px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 50px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 100px;
    box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.06);
  `,
);

const StyledItems2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
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
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A navigation bar component that contains tab items and a search bar, used for primary app navigation. Supports a default and detail variant. */
export function NavBar({ type, items }: NavBarProps) {
  return (
    <StyledRoot aria-label="Main navigation" $type={type}>
      {type === "Default" && (
        <StyledIcon>
          {type === "Default" && <Icon iconName={"layout-sidebar"} />}
        </StyledIcon>
      )}
      {type === "Default" && (
        <StyledItems>
          {items?.map((item, index) => (
            <li key={index}>
              <Tab {...item} />
            </li>
          ))}
        </StyledItems>
      )}
      {type === "Detail" && <SearchBar placeholder={"Search in this deal"} />}
      {type === "Detail" && (
        <StyledSharedFiles>
          {type === "Detail" && (
            <StyledItems2>
              {items?.map((item, index) => (
                <li key={index}>
                  <Tab {...item} />
                </li>
              ))}
            </StyledItems2>
          )}
        </StyledSharedFiles>
      )}
    </StyledRoot>
  );
}
