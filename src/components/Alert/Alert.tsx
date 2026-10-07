import React from "react";
import styled, { css } from "styled-components";

export interface AlertProps {}

const StyledRoot = styled.section(
  () => css`
    position: relative;
    border-radius: 0px;
    width: 21px;
    height: 21px;
    box-sizing: border-box;
  `,
);

const StyledFrame54 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 21px;
    height: 21px;
    overflow: hidden;
    background-color: ${theme["Semantic"]["Error Scale"]["10"]};
    border-radius: 34px;
  `,
);

const StyledFrame53 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 5px;
    top: 5px;
    width: 11px;
    height: 11px;
    overflow: hidden;
    background-color: ${theme["Semantic"]["Error Scale"]["50"]};
    border-radius: 34px;
  `,
);

/** An Alert component used to display important messages or notifications to the user, such as errors, warnings, or informational content. */
export function Alert() {
  return (
    <StyledRoot role="alert" aria-label="Alert">
      <StyledFrame54></StyledFrame54>
      <StyledFrame53></StyledFrame53>
    </StyledRoot>
  );
}
