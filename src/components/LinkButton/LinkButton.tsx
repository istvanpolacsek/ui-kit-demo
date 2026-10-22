import React from "react";
import styled, { css } from "styled-components";
import {
  LinkButtonMaster,
  type LinkButtonMasterProps,
} from "../LinkButtonMaster";

export interface LinkButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  | "state"
  | "hierarchy"
  | "type"
  | "leftIcon"
  | "rightIcon"
  | "linkValue"
  | "size"
  | "device"
> {
  state?: "Default" | "Hover" | "Pressed" | "Disabled" | "Focused";
  hierarchy?: "Primary" | "Secondary";
  type?: "Inverted" | "Default";
  leftIcon?: LinkButtonMasterProps["leftIcon"];
  rightIcon?: LinkButtonMasterProps["rightIcon"];
  linkValue?: LinkButtonMasterProps["linkValue"];
  size?: LinkButtonMasterProps["size"];
  device?: LinkButtonMasterProps["device"];
}

const StyledRoot = styled.a<{
  $state: "Default" | "Hover" | "Pressed" | "Disabled" | "Focused";
  $hierarchy: "Primary" | "Secondary";
  $type: "Inverted" | "Default";
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
            justify-content: flex-start;
            align-items: flex-start;
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
            justify-content: flex-start;
            align-items: flex-start;
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
            justify-content: flex-start;
            align-items: flex-start;
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
            justify-content: flex-start;
            align-items: flex-start;
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
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $hierarchy, $type])) {
        case '["Focused","Primary","Default"]':
          return css`
            border-color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Focused","Secondary","Default"]':
          return css`
            border-color: ${theme["gray"]["800"]};
          `;
        case '["Focused","Secondary","Inverted"]':
          return css`
            border-color: ${theme["button"]["Inverted"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-radius: 0px;
          `;
        case "Focused":
          return css`
            border-radius: 8px;
          `;
        case "Disabled":
          return css`
            border-radius: 0px;
          `;
        case "Hover":
          return css`
            border-radius: 0px;
          `;
        case "Pressed":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$hierarchy, $type])) {
        case '["Primary","Default"]':
          return css`
            color: ${theme["button"]["Default"]["default"]};
          `;
        case '["Secondary","Default"]':
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        case '["Secondary","Inverted"]':
          return css`
            color: ${theme["button"]["Inverted"]["default"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A link styled as a button, supporting primary and secondary hierarchy variants, default and inverted types, and interactive states including hover, pressed, disabled, and focused. Use when navigation is required but a button appearance is desired. */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton(
    {
      state = "Default",
      hierarchy = "Primary",
      type = "Default",
      leftIcon = true,
      rightIcon = true,
      linkValue = "Link",
      size = "Large",
      device = "Desktop",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        aria-label="Link button"
        {...rest}
        ref={ref}
        $state={state}
        $hierarchy={hierarchy}
        $type={type}
      >
        <LinkButtonMaster
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          linkValue={linkValue}
          size={size}
          device={device}
        />
      </StyledRoot>
    );
  },
);
