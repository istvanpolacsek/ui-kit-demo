import React from "react";
import styled, { css } from "styled-components";
import { Alert } from "../Alert";

export interface FilterItemProps {
  isActive: boolean;
  label: string;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: ${theme["Neutral"]["White"]};
    border-radius: 88px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledItem = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "PT Serif";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledAlert = styled.div(
  () => css`
    position: absolute;
    right: -5.0908203125px;
    top: -5px;
    width: 21px;
    height: 21px;
  `,
);

export function FilterItem({ isActive, label }: FilterItemProps) {
  return (
    <StyledRoot>
      <StyledItem>{label}</StyledItem>
      {isActive && (
        <StyledAlert>
          <Alert />
        </StyledAlert>
      )}
    </StyledRoot>
  );
}
