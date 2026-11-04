import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface NavigationButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "label" | "icon" | "hasIcon" | "hasLabel" | "direction" | "designType"
> {
  label?: string;
  icon?: IconProps["name"];
  hasIcon?: boolean;
  hasLabel?: boolean;
  direction?: "Column" | "Row";
  designType?: "Small" | "Medium";
}

const StyledRoot = styled.button<{ $direction: "Column" | "Row" }>(
  ({ theme, $direction }) => css`
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
    border-radius: 0px;
    ${(() => {
      switch ($direction) {
        case "Column":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Row":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Icon"]["Default"]["Secondary"]};
    &:hover:not(:disabled) {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
    &:active:not(:disabled) {
      color: ${theme["Icon"]["Brand"]["Default"]};
    }
  `,
);

const StyledLabel = styled.div<{ $designType: "Small" | "Medium" }>(
  ({ theme, $designType }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    ${(() => {
      switch ($designType) {
        case "Small":
          return css`
            font-family: var(--font-inter, "Inter"), sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
          `;
        case "Medium":
          return css`
            font-family: var(--font-inter, "Inter"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1;
          `;
        default:
          return css``;
      }
    })()}
    &:is(button:active:not(:disabled) *) {
      color: ${theme["Text"]["Brand"]["Default"]};
    }
  `,
);

/** A navigation button component that displays an optional icon and/or label, used for triggering navigation actions. Supports small and medium sizes, column and row layouts, and default, hover, and active states. */
export const NavigationButton = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(function NavigationButton(
  {
    label = "Label",
    icon = "Star",
    hasIcon = true,
    hasLabel = true,
    direction = "Column",
    designType = "Small",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $direction={direction}>
      {hasIcon && <Icon size={24} name={icon} />}
      {hasLabel && <StyledLabel $designType={designType}>{label}</StyledLabel>}
    </StyledRoot>
  );
});
