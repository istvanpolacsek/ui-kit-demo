import React from "react";
import styled, { css } from "styled-components";
import { useMenu } from "./Menu.menu";

export interface MenuProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "slot" | "onClose"
> {
  slot?: React.ReactNode;
  /** Called when the user presses Escape in the menu. */
  onClose?: () => void;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 301px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
    box-shadow:
      0px 4px 4px -1px rgba(12, 12, 13, 0.1),
      0px 4px 4px -1px rgba(12, 12, 13, 0.05);
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
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

/** A menu container that renders a vertical list of menu items and separators, typically opened from a trigger button. Accepts slotted content for flexible composition of menu items. */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { slot, onClose, ...rest },
  ref,
) {
  const menu = useMenu({ onClose, forwardedRef: ref });
  return (
    <StyledRoot role="menu" {...rest} ref={menu.ref}>
      <StyledSlot>{slot}</StyledSlot>
    </StyledRoot>
  );
});
