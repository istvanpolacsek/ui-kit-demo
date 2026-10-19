import React from "react";
import styled, { css } from "styled-components";

export interface MenuShortcutProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "shortcut"
> {
  shortcut?: string;
}

const StyledRoot = styled.span(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledA = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

/** Displays a keyboard shortcut hint within a menu item, such as '⇧A'. Typically used as a secondary label to indicate the keyboard shortcut associated with a menu action. */
export const MenuShortcut = React.forwardRef<
  HTMLSpanElement,
  MenuShortcutProps
>(function MenuShortcut({ shortcut = "⇧A", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Keyboard shortcut" {...rest} ref={ref}>
      <StyledA>{shortcut}</StyledA>
    </StyledRoot>
  );
});
