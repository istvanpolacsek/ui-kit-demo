import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface IconButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "icon" | "variant" | "size"
> {
  icon?: IconProps["name"];
  variant?: "Primary" | "Neutral" | "Subtle";
  size?: "Medium" | "Small";
}

const StyledRoot = styled.button<{
  $variant: "Primary" | "Neutral" | "Subtle";
  $size: "Medium" | "Small";
}>(
  ({ theme, $variant, $size }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 32px;
    ${(() => {
      switch (JSON.stringify([$variant, $size])) {
        case '["Primary","Medium"]':
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
        case '["Primary","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Neutral","Medium"]':
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
        case '["Neutral","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["Subtle","Medium"]':
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
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Subtle","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 0px;
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
            background-color: ${theme["Background"]["Default"]["Secondary"]};
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
            border-color: ${theme["Border"]["Default"]["Default"]};
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
  &:hover {
      ${(() => {
        switch ($variant) {
          case "Primary":
            return css`
              background-color: ${theme["Background"]["Brand"]["Hover"]};
            `;
          case "Neutral":
            return css`
              background-color: ${theme["Background"]["Default"]["Secondary Hover"]};
            `;
          case "Subtle":
            return css`
              background-color: ${theme["Background"]["Default"]["Default Hover"]};
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
  `,
);

/** A compact, icon-only button component that triggers an action. Supports multiple visual variants (Primary, Neutral, Subtle), sizes (Medium, Small), and interaction states (Default, Hover, Disabled). */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { icon = "Star", variant = "Primary", size = "Medium", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        aria-label="Action name"
        {...rest}
        ref={ref}
        $variant={variant}
        $size={size}
      >
        <Icon size={20} name={icon} />
      </StyledRoot>
    );
  },
);
