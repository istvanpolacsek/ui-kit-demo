import React from "react";
import styled, { css } from "styled-components";

export interface NavigationPillProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "label"
> {
  label?: string;
}

const StyledRoot = styled.a(
  ({ theme }) => css`
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
    &:active {
      background-color: ${theme["Background"]["Brand"]["Tertiary"]};
    }
    &:hover {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
  `,
);

const StyledTitle = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:active {
      color: ${theme["Text"]["Brand"]["On Brand Secondary"]};
    }
  `,
);

/** A navigation pill component that represents a single navigable link within a navigation bar or tab group. Supports default, active, and hover states to indicate the current selection or interaction. */
export const NavigationPill = React.forwardRef<
  HTMLAnchorElement,
  NavigationPillProps
>(function NavigationPill({ label = "Link", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Link" {...rest} ref={ref}>
      <StyledTitle>{label}</StyledTitle>
    </StyledRoot>
  );
});
