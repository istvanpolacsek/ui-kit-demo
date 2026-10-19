import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface NavigationButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "label" | "icon" | "hasIcon" | "hasLabel" | "direction" | "type"
> {
  label?: string;
  icon?: IconProps["name"];
  hasIcon?: boolean;
  hasLabel?: boolean;
  direction?: "Column" | "Row";
  type?: "Small" | "Medium";
}

const StyledRoot = styled.button<{ $direction: "Column" | "Row" }>(
  ({ theme, $direction }) => css`
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
    &:hover {
      background-color: ${theme["Background"]["Default"]["Default Hover"]};
    }
    &:active {
      color: ${theme["Icon"]["Brand"]["Default"]};
    }
  `,
);

const StyledLabel = styled.span<{ $type: "Small" | "Medium" }>(
  ({ theme, $type }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    ${(() => {
      switch ($type) {
        case "Small":
          return css`
            font-family: "Inter";
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
          `;
        case "Medium":
          return css`
            font-family: "Inter";
            font-size: 16px;
            font-weight: 400;
            line-height: 1;
          `;
        default:
          return css``;
      }
    })()}
    &:active {
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
    type = "Small",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot aria-label="Label" {...rest} ref={ref} $direction={direction}>
      {hasIcon && <Icon size={24} name={icon} />}
      {hasLabel && <StyledLabel $type={type}>{label}</StyledLabel>}
    </StyledRoot>
  );
});
