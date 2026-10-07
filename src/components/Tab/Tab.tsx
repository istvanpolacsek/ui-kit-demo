import React from "react";
import styled, { css } from "styled-components";

export interface TabProps {
  label: string;
  state: "Default" | "Selected";
}

const StyledRoot = styled.button<{ $state: "Default" | "Selected" }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
    ${(() => {
      switch ($state) {
        case "Selected":
          return css`
            background-color: ${theme["Brand"]["Grey"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Selected":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        case "Default":
          return css`
            color: ${theme["Text"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDeals = styled.span<{ $state: "Default" | "Selected" }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Selected":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        case "Default":
          return css`
            color: ${theme["Text"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter Tight';
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

/** A tab component used for navigation between content sections. Supports Default and Selected states, visually indicating the active tab. */
export function Tab({ label, state }: TabProps) {
  return (
    <StyledRoot role="tab" aria-label="Deals" $state={state}>
      <StyledDeals $state={state}>{label}</StyledDeals>
    </StyledRoot>
  );
}
