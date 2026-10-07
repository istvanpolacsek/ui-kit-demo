import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Logo.markup";

export interface LogoProps {
  logo:
    | "AirBNB"
    | "Amazon"
    | "Beats"
    | "Black Bird"
    | "Canon"
    | "Deloitte"
    | "Logi"
    | "Netflix"
    | "Salesforce"
    | "Razer"
    | "Microsoft";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export function Logo({ logo }: LogoProps) {
  return (
    <StyledRoot>
      {SVG_URLS[JSON.stringify([logo])] && (
        <img src={SVG_URLS[JSON.stringify([logo])]} alt="" />
      )}
    </StyledRoot>
  );
}
