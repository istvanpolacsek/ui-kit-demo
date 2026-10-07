import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./BluejayLogo.markup";

export interface BluejayLogoProps {}

const StyledRoot = styled.div(
  () => css`
    display: inline-flex;
  `,
);

export function BluejayLogo() {
  return (
    <StyledRoot>
      {SVG_URLS[JSON.stringify([])] && (
        <img src={SVG_URLS[JSON.stringify([])]} alt="" />
      )}
    </StyledRoot>
  );
}
