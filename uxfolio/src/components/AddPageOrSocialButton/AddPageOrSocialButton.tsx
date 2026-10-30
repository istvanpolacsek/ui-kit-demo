import React from "react";
import styled, { css } from "styled-components";
import { Add } from "../Add";

export interface AddPageOrSocialButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

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
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 305px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
    color: #adadad;
    &:hover:not(:disabled) {
      background-color: #262626;
    }
  `,
);

const StyledAddPageOrLink = styled.div(
  () => css`
    color: #adadad;
    &:is(button:hover:not(:disabled) *) {
      color: #fefefe;
    }
  `,
);

/** A button component for adding a new page or social link. Renders with default and hover interaction states. */
export const AddPageOrSocialButton = React.forwardRef<
  HTMLButtonElement,
  AddPageOrSocialButtonProps
>(function AddPageOrSocialButton({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <Add />
      <StyledAddPageOrLink>{"Add page or link"}</StyledAddPageOrLink>
    </StyledRoot>
  );
});
