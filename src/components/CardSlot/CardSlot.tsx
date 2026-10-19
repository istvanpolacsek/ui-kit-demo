import React from "react";
import styled, { css } from "styled-components";

export interface CardSlotProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "slot"
> {
  slot?: React.ReactNode;
}

const StyledRoot = styled.div(
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
    width: 192px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A generic card slot component that renders consumer-provided content within a card container. Acts as a flexible wrapper that accepts arbitrary slotted content. */
export const CardSlot = React.forwardRef<HTMLDivElement, CardSlotProps>(
  function CardSlot({ slot, ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref}>
        <StyledSlot>{slot}</StyledSlot>
      </StyledRoot>
    );
  },
);
