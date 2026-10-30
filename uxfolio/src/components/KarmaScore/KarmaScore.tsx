import React from "react";
import styled, { css } from "styled-components";

export interface KarmaScoreProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type"
> {
  type?: "Small";
}

const StyledRoot = styled.span(
  () => css`
    border-radius: 0px;
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    color: #0f0f0f;
  `,
);

const StyledBackground = styled.div(
  () => css`
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #dcfa37;
    border-radius: 0px;
  `,
);

const StyledNumber = styled.span(
  () => css`
    color: #0f0f0f;
    font-family:
      var(--font-bricolage-grotesque, "Bricolage Grotesque"), sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.24;
  `,
);

/** Displays a user's karma score as a small numeric badge or indicator. */
export const KarmaScore = React.forwardRef<HTMLSpanElement, KarmaScoreProps>(
  function KarmaScore({ type = "Small", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Karma score: 3" {...rest} ref={ref}>
        <StyledBackground />
        <StyledNumber>{"3"}</StyledNumber>
      </StyledRoot>
    );
  },
);
