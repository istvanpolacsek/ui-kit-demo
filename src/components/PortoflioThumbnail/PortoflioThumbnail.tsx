import React from "react";
import styled, { css } from "styled-components";

export interface PortoflioThumbnailProps extends React.ComponentPropsWithoutRef<"a"> {}

const StyledRoot = styled.a(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 186px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledThumbnail = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 8px;
  `,
);

const StyledInfo = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledName = styled.h3(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledURL = styled.p(
  () => css`
    color: #4d4c4c;
  `,
);

/** A portfolio thumbnail component that displays a visual preview alongside the portfolio name and URL. Used as a clickable card linking to a portfolio entry, with Default, Hover, and Active interaction states. */
export const PortoflioThumbnail = React.forwardRef<
  HTMLAnchorElement,
  PortoflioThumbnailProps
>(function PortoflioThumbnail({ ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Legacy portfolio – uxfol.io/xyz1234"
      {...rest}
      ref={ref}
    >
      <StyledThumbnail />
      <StyledInfo>
        <StyledName>{"Legacy portfolio"}</StyledName>
        <StyledURL>{"uxfol.io/xyz1234"}</StyledURL>
      </StyledInfo>
    </StyledRoot>
  );
});
