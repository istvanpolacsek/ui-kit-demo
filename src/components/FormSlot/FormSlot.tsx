import React from "react";
import styled, { css } from "styled-components";

export interface FormSlotProps extends Omit<
  React.ComponentPropsWithoutRef<"form">,
  "slot"
> {
  slot?: React.ReactNode;
}

const StyledRoot = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 272px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A flexible form container that accepts slotted consumer content, allowing arbitrary form fields and controls to be composed within a semantic form element. */
export const FormSlot = React.forwardRef<HTMLFormElement, FormSlotProps>(
  function FormSlot({ slot, ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledSlot>{slot}</StyledSlot>
      </StyledRoot>
    );
  },
);
