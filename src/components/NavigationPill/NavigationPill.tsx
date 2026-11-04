import React from "react";
import styled, { css } from "styled-components";

export interface NavigationPillProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "label"
> {
  label?: string;
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
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    color: ${theme["Text"]["Default"]["Default"]};
    &:active:not(:disabled) {
      background-color: ${theme["Background"]["Brand"]["Tertiary"]};
    }
    &:hover:not(:disabled) {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
  `,
);

const StyledTitle = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:is(button:active:not(:disabled) *) {
      color: ${theme["Text"]["Brand"]["On Brand Secondary"]};
    }
  `,
);

/** A navigation pill link used within a navigation bar or menu. Supports default, active, and hover states to indicate the current or focused navigation item. */
export const NavigationPill = React.forwardRef<
  HTMLButtonElement,
  NavigationPillProps
>(function NavigationPill({ label = "Link", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <StyledTitle>{label}</StyledTitle>
    </StyledRoot>
  );
});
