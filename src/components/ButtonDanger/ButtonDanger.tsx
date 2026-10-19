import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface ButtonDangerProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "label"
  | "iconEnd"
  | "hasIconEnd"
  | "hasIconStart"
  | "iconStart"
  | "variant"
  | "size"
> {
  label?: string;
  iconEnd?: IconProps["name"];
  hasIconEnd?: boolean;
  hasIconStart?: boolean;
  iconStart?: IconProps["name"];
  variant?: "Primary" | "Subtle";
  size?: "Medium" | "Small";
}

const StyledRoot = styled.button<{
  $size: "Medium" | "Small";
  $variant: "Primary" | "Subtle";
}>(
  ({ theme, $size, $variant }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($size) {
        case "Medium":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            background-color: ${theme["Background"]["Danger"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            border-color: ${theme["Border"]["Danger"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            color: ${theme["Icon"]["Danger"]["On Danger"]};
          `;
        case "Subtle":
          return css`
            color: ${theme["Icon"]["Danger"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              background-color: ${theme["Background"]["Danger"]["Hover"]};
            `;
          case "Subtle":
            return css`
              background-color: ${theme["Background"]["Danger"]["Tertiary Hover"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:disabled {
      ${css`
        background-color: ${theme["Background"]["Disabled"]["Default"]};
      `}
    }
    &:hover {
      ${css`
        border-color: ${theme["Border"]["Danger"]["Default"]};
      `}
    }
    &:disabled {
      ${css`
        border-color: ${theme["Border"]["Disabled"]["default"]};
      `}
    }
    &:disabled {
      ${css`
        color: ${theme["Icon"]["Disabled"]["On Disabled"]};
      `}
    }
    &:disabled {
      ${css`
        color: ${theme["Icon"]["Disabled"]["On Disabled"]};
      `}
    }
  `,
);

const StyledButton = styled.span<{ $variant: "Primary" | "Subtle" }>(
  ({ theme, $variant }) => css`
    ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            color: ${theme["Text"]["Danger"]["On Danger"]};
          `;
        case "Subtle":
          return css`
            color: ${theme["Text"]["Danger"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:disabled {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              color: ${theme["Text"]["Disabled"]["On Disabled"]};
            `;
          case "Subtle":
            return css`
              color: ${theme["Text"]["Disabled"]["Default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** A danger-styled button component used to indicate destructive or high-risk actions. Supports optional leading and trailing icons, multiple sizes (Medium, Small), variants (Primary, Subtle), and states (Default, Hover, Disabled). */
export const ButtonDanger = React.forwardRef<
  HTMLButtonElement,
  ButtonDangerProps
>(function ButtonDanger(
  {
    label = "Button",
    iconEnd = "X",
    hasIconEnd = false,
    hasIconStart = false,
    iconStart = "Star",
    variant = "Primary",
    size = "Medium",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Button"
      {...rest}
      ref={ref}
      $size={size}
      $variant={variant}
    >
      {hasIconStart && <Icon size={16} name={iconStart} />}
      <StyledButton $variant={variant}>{label}</StyledButton>
      {hasIconEnd && <Icon size={16} name={iconEnd} />}
    </StyledRoot>
  );
});
