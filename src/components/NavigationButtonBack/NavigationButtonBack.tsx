import React from "react";
import styled, { css } from "styled-components";
import { ArrowLeft } from "../ArrowLeft";

export interface NavigationButtonBackProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 4px;
    color: #707070;
  `,
);

const StyledBack = styled.span(
  () => css`
    color: #707070;
    &:hover {
      color: #0f0f0f;
    }
  `,
);

/** A back navigation button that triggers navigation to the previous page or step. Displays an arrow icon alongside a 'Back' label. */
export const NavigationButtonBack = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonBackProps
>(function NavigationButtonBack({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Back" {...rest} ref={ref}>
      <ArrowLeft />
      <StyledBack>{"Back"}</StyledBack>
    </StyledRoot>
  );
});
