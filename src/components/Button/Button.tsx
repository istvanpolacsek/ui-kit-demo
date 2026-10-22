import React from "react";
import styled, { css } from "styled-components";
import { ButtonMaster, type ButtonMasterProps } from "../ButtonMaster";

export interface ButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "hierarchy"
  | "state"
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
  state?: "Default" | "Hover" | "Pressed" | "Disabled" | "Focused";
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
  $state: "Default" | "Hover" | "Pressed" | "Disabled" | "Focused";
  $hierarchy: "Primary" | "Secondary" | "Tertiary";
  $type: "Default" | "Inverted";
}>(
  ({ theme, $state, $hierarchy, $type }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
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
          `;
        case "Focused":
          return css`
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
          `;
        case "Disabled":
          return css`
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
          `;
        case "Hover":
          return css`
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
          `;
        case "Pressed":
          return css`
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
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $type])) {
        case '["Focused","Inverted"]':
          return css`
            border-color: ${theme["button"]["Inverted"]["focusedStroke"]};
          `;
        case '["Focused","Default"]':
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$hierarchy, $state, $type])) {
        case '["Primary","Default","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Default","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Focused","Inverted"]':
          return css`
            border-radius: 12px;
          `;
        case '["Secondary","Default","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Focused","Default"]':
          return css`
            border-radius: 12px;
          `;
        case '["Secondary","Default","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Focused","Inverted"]':
          return css`
            border-radius: 12px;
          `;
        case '["Secondary","Disabled","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Default","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Focused","Default"]':
          return css`
            border-radius: 8px;
          `;
        case '["Tertiary","Default","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Focused","Inverted"]':
          return css`
            border-radius: 12px;
          `;
        case '["Tertiary","Disabled","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Disabled","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Disabled","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Disabled","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Disabled","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Hover","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Hover","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Hover","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Hover","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Hover","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Hover","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Pressed","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Pressed","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Pressed","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Secondary","Pressed","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Pressed","Default"]':
          return css`
            border-radius: 0px;
          `;
        case '["Tertiary","Pressed","Inverted"]':
          return css`
            border-radius: 0px;
          `;
        case '["Primary","Focused","Default"]':
          return css`
            border-radius: 12px;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$hierarchy, $state, $type])) {
        case '["Primary","Default","Default"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Primary","Default","Inverted"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Primary","Focused","Inverted"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Secondary","Default","Default"]':
          return css`
            color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Secondary","Focused","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Secondary","Default","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Secondary","Focused","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Secondary","Disabled","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Tertiary","Default","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Tertiary","Focused","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Tertiary","Default","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Tertiary","Focused","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Tertiary","Disabled","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Secondary","Disabled","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Tertiary","Disabled","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Primary","Disabled","Default"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Primary","Disabled","Inverted"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Primary","Hover","Default"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Primary","Hover","Inverted"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Secondary","Hover","Default"]':
          return css`
            color: ${theme["button"]["Default"]["hover"]};
          `;
        case '["Secondary","Hover","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Tertiary","Hover","Default"]':
          return css`
            color: ${theme["button"]["Default"]["hover"]};
          `;
        case '["Tertiary","Hover","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["hover"]};
          `;
        case '["Primary","Pressed","Default"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Primary","Pressed","Inverted"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Secondary","Pressed","Default"]':
          return css`
            color: ${theme["button"]["Default"]["pressed"]};
          `;
        case '["Secondary","Pressed","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        case '["Tertiary","Pressed","Default"]':
          return css`
            color: ${theme["button"]["Default"]["pressed"]};
          `;
        case '["Tertiary","Pressed","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["pressed"]};
          `;
        case '["Primary","Focused","Default"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A versatile button component supporting multiple hierarchy levels (Primary, Secondary, Tertiary), interaction states (Default, Hover, Pressed, Disabled, Focused), and display types (Default, Inverted). Used to trigger actions or submit forms. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      hierarchy = "Primary",
      state = "Default",
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
        {...rest}
        ref={ref}
        $state={state}
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
