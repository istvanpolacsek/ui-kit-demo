import React from "react";
import styled, { css } from "styled-components";
import { ArrowLeft } from "../ArrowLeft";

export interface NavigationButtonBackProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
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

const StyledBack = styled.div(
  () => css`
    color: #707070;
    &:is(button:hover:not(:disabled) *) {
      color: #0f0f0f;
    }
  `,
);

/** A navigation button that takes the user back to the previous page or step. Displays a left arrow icon alongside a 'Back' label. */
export const NavigationButtonBack = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonBackProps
>(function NavigationButtonBack({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <ArrowLeft />
      <StyledBack>{"Back"}</StyledBack>
    </StyledRoot>
  );
});
