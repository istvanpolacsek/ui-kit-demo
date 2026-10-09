import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface ButtonPrimaryProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "text" | "hasIcon" | "hasText" | "mode" | "size" | "iconName"
> {
  text: string;
  hasIcon: boolean;
  hasText: boolean;
  mode: "Dark" | "Light";
  size: "Default" | "L";
  iconName: IconProps["iconName"];
}

const StyledRoot = styled.button<{
  $size: "Default" | "L";
  $mode: "Dark" | "Light";
}>(
  ({ theme, $size, $mode }) => css`
    border-radius: 16px;
    ${(() => {
      switch ($size) {
        case "L":
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
            width: 98px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Default":
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
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${theme["Neutral"]["White"]};
          `;
        case "Dark":
          return css`
            background-color: ${theme["Neutral"]["Maroon"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        case "Dark":
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${theme["Brand"]["Grey"]};
            `;
          case "Dark":
            return css`
              background-color: ${theme["Neutral"]["Maroon Scale"]["70"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:disabled {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${theme["Neutral"]["White"]};
            `;
          case "Dark":
            return css`
              background-color: ${theme["Neutral"]["Maroon Scale"]["80"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledIcon = styled.div<{ $size: "Default" | "L" }>(
  ({ $size }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "L":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 10px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledButton = styled.span<{
  $mode: "Dark" | "Light";
  $size: "Default" | "L";
}>(
  ({ theme, $mode, $size }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        case "Dark":
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "L":
          return css`
            font-family: "Inter Tight";
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
          `;
        case "Default":
          return css`
            font-family: "Inter Tight";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A primary action button supporting optional icon and text content, with multiple states (default, hover, disabled) and size/mode variants. */
export const ButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  ButtonPrimaryProps
>(function ButtonPrimary(
  { text, hasIcon, hasText, mode, size, iconName, ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Button"
      {...rest}
      ref={ref}
      $size={size}
      $mode={mode}
    >
      {hasIcon && (
        <StyledIcon $size={size}>
          <Icon iconName={iconName} />
        </StyledIcon>
      )}
      {hasText && (
        <StyledText>
          <StyledButton $mode={mode} $size={size}>
            {text}
          </StyledButton>
        </StyledText>
      )}
    </StyledRoot>
  );
});
