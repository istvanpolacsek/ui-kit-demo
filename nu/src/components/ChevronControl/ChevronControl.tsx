import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ChevronControlProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "direction"
> {
  direction?: "Left" | "Right";
}

const StyledRoot = styled.button(
  ({ theme }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    display: inline-flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["background"]["bgGray"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 100px;
    color: ${theme["accent"]["accentGray"]};
    &:focus-visible {
      display: inline-flex;
      flex-direction: row;
      padding-top: 2px;
      padding-right: 2px;
      padding-bottom: 2px;
      padding-left: 2px;
      gap: 10px;
      justify-content: center;
      align-items: center;
      width: fit-content;
    }
    &:hover:not(:disabled) {
      background-color: ${theme["button"]["Inverted"]["hover"]};
    }
    &:active:not(:disabled) {
      background-color: ${theme["button"]["Inverted"]["pressed"]};
    }
    &:focus-visible {
      border-color: ${theme["button"]["Default"]["focusedStroke"]};
    }
  `,
);

const StyledChevronControl = styled.div(
  ({ theme }) => css`
    display: none;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 100px;
    &:is(button:focus-visible *) {
      display: flex;
    }
  `,
);

/** A directional chevron control used to navigate left or right, typically within carousels, sliders, or paginated content. Supports Default, Hover, Pressed, and Focused interaction states. */
export const ChevronControl = React.forwardRef<
  HTMLButtonElement,
  ChevronControlProps
>(function ChevronControl({ direction = "Left", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <Icon name={"chevron_left"} size={24} />
      <Icon name={"chevron_right"} size={24} />
      <StyledChevronControl>
        <Icon name={"chevron_left"} size={24} />
        <Icon name={"chevron_right"} size={24} />
      </StyledChevronControl>
    </StyledRoot>
  );
});
