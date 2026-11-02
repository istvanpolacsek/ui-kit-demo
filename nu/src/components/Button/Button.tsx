import React from "react";
import styled, { css } from "styled-components";
import { ButtonMaster, type ButtonMasterProps } from "../ButtonMaster";

export interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "hierarchy"
  | "type"
  | "leftIcon"
  | "rightIcon"
  | "label"
  | "bTNValue"
  | "iconOnly"
  | "device"
  | "size"
> {
  hierarchy?: "Primary" | "Secondary" | "Tertiary";
  type?: "Default" | "Inverted";
  leftIcon?: ButtonMasterProps["leftIcon"];
  rightIcon?: ButtonMasterProps["rightIcon"];
  label?: ButtonMasterProps["label"];
  bTNValue?: ButtonMasterProps["bTNValue"];
  iconOnly?: ButtonMasterProps["iconOnly"];
  device?: ButtonMasterProps["device"];
  size?: ButtonMasterProps["size"];
}

const StyledRoot = styled.button<{
  $hierarchy: "Primary" | "Secondary" | "Tertiary";
  $type: "Default" | "Inverted";
}>(
  ({ theme, $hierarchy, $type }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    display: inline-flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["button"]["Inverted"]["focusedStroke"]};
    ${css`
      border-radius: 0px;
    `}
    ${(() => {
      switch (JSON.stringify([$hierarchy, $type])) {
        case '["Primary","Default"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Primary","Inverted"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Secondary","Default"]':
          return css`
            color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Secondary","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Tertiary","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Tertiary","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  &:focus-visible {
      display: inline-flex;
      flex-direction: row;
      padding-top: 4px;
      padding-right: 4px;
      padding-bottom: 4px;
      padding-left: 4px;
      gap: 0px;
      justify-content: center;
      align-items: center;
      width: fit-content;
    }
    &:focus-visible {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $type])) {
          case '["Primary","Inverted"]':
            return css`
              border-radius: 12px;
            `;
          case '["Secondary","Default"]':
            return css`
              border-radius: 12px;
            `;
          case '["Secondary","Inverted"]':
            return css`
              border-radius: 12px;
            `;
          case '["Tertiary","Default"]':
            return css`
              border-radius: 8px;
            `;
          case '["Tertiary","Inverted"]':
            return css`
              border-radius: 12px;
            `;
          case '["Primary","Default"]':
            return css`
              border-radius: 12px;
            `;
          default:
            return css``;
        }
      })()}
    }
    &:focus-visible {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $type])) {
          case '["Primary","Inverted"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Secondary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Secondary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Tertiary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Tertiary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Primary","Default"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:disabled {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $type])) {
          case '["Secondary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Tertiary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Secondary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Tertiary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Primary","Default"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Primary","Inverted"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:hover:not(:disabled) {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $type])) {
          case '["Primary","Default"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Primary","Inverted"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Secondary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["hover"]};
            `;
          case '["Secondary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Tertiary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["hover"]};
            `;
          case '["Tertiary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["hover"]};
            `;
          default:
            return css``;
        }
      })()}
    }
    &:active:not(:disabled) {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $type])) {
          case '["Primary","Default"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Primary","Inverted"]':
            return css`
              color: ${theme["button"]["Default"]["default"]};
            `;
          case '["Secondary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["pressed"]};
            `;
          case '["Secondary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["default"]};
            `;
          case '["Tertiary","Default"]':
            return css`
              color: ${theme["button"]["Default"]["pressed"]};
            `;
          case '["Tertiary","Inverted"]':
            return css`
              color: ${theme["button"]["Inverted"]["pressed"]};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** A versatile button component supporting multiple hierarchy levels (Primary, Secondary, Tertiary), visual states (Default, Hover, Pressed, Disabled, Focused), and color types (Default, Inverted). Used to trigger actions or submit forms. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      hierarchy = "Primary",
      type = "Default",
      leftIcon = true,
      rightIcon = true,
      label = true,
      bTNValue = "Button",
      iconOnly = "False",
      device = "Desktop",
      size = "Large",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        type="button"
        {...rest}
        ref={ref}
        $hierarchy={hierarchy}
        $type={type}
      >
        <ButtonMaster
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={label}
          bTNValue={bTNValue}
          iconOnly={iconOnly}
          device={device}
          size={size}
        />
      </StyledRoot>
    );
  },
);
