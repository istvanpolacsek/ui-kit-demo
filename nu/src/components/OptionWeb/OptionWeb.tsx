import React from "react";
import styled, { css } from "styled-components";

export interface OptionWebProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["gray"]["500"]};
    &:hover {
      background-color: ${theme["background"]["bgGray"]};
    }
  `,
);

const StyledatomsDefault = styled.div(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:hover {
      color: ${theme["text"]["textOnLightDefault"]};
    }
  `,
);

/** A selectable option item used in web-based option lists or dropdowns, supporting default and hover interaction states. */
export const OptionWeb = React.forwardRef<HTMLButtonElement, OptionWebProps>(
  function OptionWeb({ ...rest }, ref) {
    return (
      <StyledRoot role="option" aria-label="Option 1" {...rest} ref={ref}>
        <StyledatomsDefault>{"Option 1"}</StyledatomsDefault>
      </StyledRoot>
    );
  },
);
