import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "showStartIcon"
  | "startIcon"
  | "endIcon"
  | "showEndIcon"
  | "variant"
  | "size"
  | "state"
> {
  showStartIcon?: boolean;
  startIcon?: IconProps["name"];
  endIcon?: IconProps["name"];
  showEndIcon?: boolean;
  variant?: "Default" | "Secondary" | "Danger";
  size?: "Default" | "Small";
  state?: "Default" | "Disabled" | "Focused";
}

const StyledRoot = styled.button<{
  $size: "Default" | "Small";
  $variant: "Default" | "Secondary" | "Danger";
  $state: "Default" | "Disabled" | "Focused";
}>(
  ({ theme, $size, $variant, $state }) => css`
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($size) {
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 12px;
            padding-bottom: 0px;
            padding-left: 12px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$variant, $state])) {
        case '["Default","Default"]':
          return css`
            background-color: ${theme["Background"]["Inverse"]};
          `;
        case '["Danger","Default"]':
          return css`
            background-color: ${theme["Background"]["Danger"]};
          `;
        case '["Danger","Disabled"]':
          return css`
            background-color: ${theme["Background"]["Danger"]};
          `;
        case '["Default","Disabled"]':
          return css`
            background-color: ${theme["Background"]["Inverse"]};
          `;
        case '["Default","Focused"]':
          return css`
            background-color: ${theme["Background"]["Inverse"]};
          `;
        case '["Secondary","Focused"]':
          return css`
            background-color: ${theme["Background"]["Primary"]};
          `;
        case '["Danger","Focused"]':
          return css`
            background-color: ${theme["Background"]["Danger"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Secondary":
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($size) {
        case "Default":
          return css`
            border-radius: 8px;
          `;
        case "Small":
          return css`
            border-radius: 6px;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$variant, $state])) {
        case '["Default","Focused"]':
          return css`
            box-shadow:
              0px 0px 0px 2px rgba(255, 255, 255, 1),
              0px 0px 0px 3.5px rgba(20, 20, 19, 0.7);
          `;
        case '["Secondary","Focused"]':
          return css`
            box-shadow:
              0px 0px 0px 2px rgba(255, 255, 255, 1),
              0px 0px 0px 3.5px rgba(50, 102, 173, 0.5);
          `;
        case '["Danger","Focused"]':
          return css`
            box-shadow:
              0px 0px 0px 2px rgba(255, 255, 255, 1),
              0px 0px 0px 3.5px rgba(167, 61, 57, 0.5);
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Default":
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        case "Danger":
          return css`
            color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLeftIconContainer = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledButton = styled.span<{
  $variant: "Default" | "Secondary" | "Danger";
  $size: "Default" | "Small";
}>(
  ({ theme, $variant, $size }) => css`
    ${(() => {
      switch ($variant) {
        case "Default":
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        case "Danger":
          return css`
            color: ${"#ffffff"};
          `;
        case "Secondary":
          return css`
            color: ${theme["Text"]["Primary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$variant, $size])) {
        case '["Default","Default"]':
          return css`
            font-family: "Anthropic Sans Text";
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
          `;
        case '["Danger","Default"]':
          return css`
            font-family: "Anthropic Sans Text";
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
          `;
        case '["Secondary","Default"]':
          return css`
            font-family: "Anthropic Sans Text";
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
          `;
        case '["Default","Small"]':
          return css`
            font-family: "Anthropic Sans Text";
            font-size: 12px;
            font-weight: 400;
            line-height: 16.8px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRightIconContainer = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

/** A clickable button component with optional leading and trailing icons. Supports Default, Secondary, and Danger variants, Default and Small sizes, and Default, Disabled, and Focused states. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      showStartIcon = false,
      startIcon = "Add",
      endIcon = "Caret Down Small",
      showEndIcon = false,
      variant = "Default",
      size = "Default",
      state = "Default",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        $size={size}
        $variant={variant}
        $state={state}
      >
        {showStartIcon && (
          <StyledLeftIconContainer>
            {showStartIcon && <Icon size={20} name={startIcon} />}
          </StyledLeftIconContainer>
        )}
        <StyledButton $variant={variant} $size={size}>
          {"Button"}
        </StyledButton>
        {showEndIcon && (
          <StyledRightIconContainer>
            {showEndIcon && <Icon size={20} name={endIcon} />}
          </StyledRightIconContainer>
        )}
      </StyledRoot>
    );
  },
);
