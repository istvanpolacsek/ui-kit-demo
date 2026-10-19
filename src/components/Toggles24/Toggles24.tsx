import React from "react";
import styled, { css } from "styled-components";

export interface Toggles24Props extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    border-radius: 0px;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
  `,
);

const StyledRectangle3278 = styled.div(
  () => css`
    width: 18px;
    height: 9px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 5px;
  `,
);

const StyledRectangle3279 = styled.div(
  () => css`
    width: 18px;
    height: 9px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 5px;
  `,
);

const StyledRectangle3280 = styled.div(
  () => css`
    width: 9px;
    height: 9px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 5px;
  `,
);

const StyledRectangle3281 = styled.div(
  () => css`
    width: 9px;
    height: 9px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 5px;
  `,
);

/** A toggle switch component (24px variant) that allows users to switch between two states, such as on/off or enabled/disabled. */
export const Toggles24 = React.forwardRef<HTMLDivElement, Toggles24Props>(
  function Toggles24({ ...rest }, ref) {
    return (
      <StyledRoot role="switch" aria-label="Toggle" {...rest} ref={ref}>
        <StyledRectangle3278 />
        <StyledRectangle3279 />
        <StyledRectangle3280 />
        <StyledRectangle3281 />
      </StyledRoot>
    );
  },
);
