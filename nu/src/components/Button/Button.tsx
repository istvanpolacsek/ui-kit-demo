import React from "react";
import styled, { css } from "styled-components";
import { ButtonMaster, type ButtonMasterProps } from "../ButtonMaster";

export interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "hierarchy"
  | "designType"
  | "leftIcon"
  | "rightIcon"
  | "label"
  | "bTNValue"
  | "iconOnly"
  | "device"
  | "size"
> {
  hierarchy?: "Primary" | "Secondary" | "Tertiary";
  designType?: "Default" | "Inverted";
  leftIcon?: ButtonMasterProps["leftIcon"];
  rightIcon?: ButtonMasterProps["rightIcon"];
  label?: ButtonMasterProps["label"];
  bTNValue?: ButtonMasterProps["bTNValue"];
  iconOnly?: ButtonMasterProps["iconOnly"];
  device?: ButtonMasterProps["device"];
  size?: ButtonMasterProps["size"];
}

const StyledRoot = styled.span<{
  $hierarchy: "Primary" | "Secondary" | "Tertiary";
  $designType: "Default" | "Inverted";
}>(
  ({ theme, $hierarchy, $designType }) => css`
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
      switch (JSON.stringify([$hierarchy, $designType])) {
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
  &:focus-within {
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
    &:focus-within {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $designType])) {
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
    &:focus-within {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $designType])) {
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
    &:has(:disabled) {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $designType])) {
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
    &:hover {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $designType])) {
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
    &:active {
      ${(() => {
        switch (JSON.stringify([$hierarchy, $designType])) {
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

/** A versatile button component supporting multiple hierarchy levels (Primary, Secondary, Tertiary), interaction states (Default, Hover, Pressed, Disabled, Focused), and visual types (Default, Inverted). Used to trigger actions or submit forms. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      hierarchy = "Primary",
      designType = "Default",
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
      <StyledRoot $hierarchy={hierarchy} $designType={designType}>
        <ButtonMaster
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          label={label}
          bTNValue={bTNValue}
          iconOnly={iconOnly}
          device={device}
          size={size}
          {...rest}
          ref={ref}
        />
      </StyledRoot>
    );
  },
);
