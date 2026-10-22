import React from "react";
import styled, { css } from "styled-components";
import { Add } from "../Add";

export interface AddColorButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 2px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    &:hover {
      border-color: #4d4c4c;
    }
  `,
);

/** A button component that allows users to add a color, with default and hover interaction states. */
export const AddColorButton = React.forwardRef<
  HTMLButtonElement,
  AddColorButtonProps
>(function AddColorButton({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Add color" {...rest} ref={ref}>
      <Add />
    </StyledRoot>
  );
});
