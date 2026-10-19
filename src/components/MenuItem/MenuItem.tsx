import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";
import { MenuShortcut } from "../MenuShortcut";

export interface MenuItemProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "hasDescription"
  | "hasIcon"
  | "icon"
  | "hasShortcut"
  | "label"
  | "description"
  | "shortcut"
> {
  hasDescription?: boolean;
  hasIcon?: boolean;
  icon?: IconProps["name"];
  hasShortcut?: boolean;
  label?: string;
  description?: string;
  /** The shortcut shown at the end (when hasShortcut is set). */
  shortcut?: string;
}

const StyledRoot = styled.button(
  ({ theme }) => css`
    appearance: none;
    background: transparent;
    border: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-align: left;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: -2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 320px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
    &:hover {
      background-color: ${theme["Background"]["Brand"]["Default"]};
    }
    &:hover {
      color: ${theme["Icon"]["Brand"]["On Brand"]};
    }
    &:disabled {
      color: ${theme["Icon"]["Disabled"]["Default"]};
    }
  `,
);

const StyledBody = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:hover {
      color: ${theme["Text"]["Brand"]["On Brand"]};
    }
    &:disabled {
      color: ${theme["Text"]["Disabled"]["Default"]};
    }
  `,
);

const StyledDescription = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    &:hover {
      color: ${theme["Text"]["Brand"]["On Brand"]};
    }
    &:disabled {
      color: ${theme["Text"]["Disabled"]["Default"]};
    }
  `,
);

/** A menu item component that displays a label with an optional icon, description text, and keyboard shortcut. Supports default, hover, and disabled states. */
export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  function MenuItem(
    {
      hasDescription = true,
      hasIcon = true,
      icon = "Star",
      hasShortcut = true,
      label = "Menu Label",
      description = "Menu description.",
      shortcut,
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="menuitem"
        type="button"
        tabIndex={-1}
        {...rest}
        ref={ref}
      >
        {hasIcon && <Icon size={20} name={icon} />}
        <StyledBody>
          <StyledRow>
            <StyledLabel>{label}</StyledLabel>
            {hasShortcut && <MenuShortcut shortcut={shortcut ?? "⇧A"} />}
          </StyledRow>
          {hasDescription && (
            <StyledDescription>{description}</StyledDescription>
          )}
        </StyledBody>
      </StyledRoot>
    );
  },
);
