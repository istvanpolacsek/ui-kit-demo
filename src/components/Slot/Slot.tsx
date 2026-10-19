import React from "react";
import styled, { css } from "styled-components";

export interface SlotProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 240px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Utilities"]["Measurement"]};
    border-radius: 0px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledSwapMe = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A slot component that acts as a placeholder for swappable content within a layout or composition. It renders a default text label ('Swap me') that can be replaced with actual content. */
export const Slot = React.forwardRef<HTMLDivElement, SlotProps>(function Slot(
  { ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledSwapMe>{"Swap me"}</StyledSwapMe>
    </StyledRoot>
  );
});
