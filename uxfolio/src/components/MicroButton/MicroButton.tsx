import React from "react";
import styled, { css } from "styled-components";
import { EditSmall } from "../EditSmall";

export interface MicroButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

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
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 999px;
    &:hover:not(:disabled) {
      background-color: #d1d1d1;
    }
  `,
);

/** A compact micro-sized button component used to trigger actions. Supports default and hover interaction states. */
export const MicroButton = React.forwardRef<
  HTMLButtonElement,
  MicroButtonProps
>(function MicroButton({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <EditSmall />
    </StyledRoot>
  );
});
