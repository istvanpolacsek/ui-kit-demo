import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface ButtonProps extends Omit<
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
  variant?: "Primary" | "Neutral" | "Subtle";
  size?: "Medium" | "Small";
}

const StyledRoot = styled.button<{
  $size: "Medium" | "Small";
  $variant: "Primary" | "Neutral" | "Subtle";
}>(
  ({ theme, $size, $variant }) => css`
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
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Neutral":
          return css`
            background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            border-color: ${theme["Border"]["Brand"]["Default"]};
          `;
        case "Neutral":
          return css`
            border-color: ${theme["Border"]["Neutral"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Primary":
          return css`
            color: ${theme["Icon"]["Brand"]["On Brand"]};
          `;
        case "Neutral":
          return css`
            color: ${theme["Icon"]["Default"]["Default"]};
          `;
        case "Subtle":
          return css`
            color: ${theme["Icon"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  &:hover:not(:disabled) {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              background-color: ${theme["Background"]["Brand"]["Hover"]};
            `;
          case "Neutral":
            return css`
              background-color: ${theme["Background"]["Neutral"]["Tertiary Hover"]};
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
    &:hover:not(:disabled) {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              border-color: ${theme["Border"]["Brand"]["Default"]};
            `;
          case "Neutral":
            return css`
              border-color: ${theme["Border"]["Neutral"]["Secondary"]};
            `;
          case "Subtle":
            return css`
              border-color: ${theme["Border"]["Default"]["Default"]};
            `;
          default:
            return css``;
        }
      })()}
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

const StyledButton = styled.span<{
  $variant: "Primary" | "Neutral" | "Subtle";
  $size: "Medium" | "Small";
}>(
  ({ theme, $variant, $size }) => css`
    ${(() => {
      switch (JSON.stringify([$variant, $size])) {
        case '["Primary","Medium"]':
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case '["Neutral","Medium"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Subtle","Medium"]':
          return css`
            color: ${theme["Text"]["Neutral"]["Default"]};
          `;
        case '["Primary","Small"]':
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case '["Neutral","Small"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case '["Subtle","Small"]':
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:is(button:hover:not(:disabled) *) {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              color: ${theme["Text"]["Brand"]["On Brand"]};
            `;
          case "Neutral":
            return css`
              color: ${theme["Text"]["Default"]["Default"]};
            `;
          case "Subtle":
            return css`
              color: ${theme["Text"]["Default"]["Default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:is(button:disabled *) {
      ${css`
        color: ${theme["Text"]["Disabled"]["On Disabled"]};
      `}
    }
  `,
);

/** A versatile button component that triggers actions. Supports optional leading and trailing icons, multiple visual variants (Primary, Neutral, Subtle), sizes (Medium, Small), and interaction states (Default, Hover, Disabled). */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
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
        type="button"
        {...rest}
        ref={ref}
        $size={size}
        $variant={variant}
      >
        {hasIconStart && <Icon size={16} name={iconStart} />}
        <StyledButton $variant={variant} $size={size}>
          {label}
        </StyledButton>
        {hasIconEnd && <Icon size={16} name={iconEnd} />}
      </StyledRoot>
    );
  },
);
