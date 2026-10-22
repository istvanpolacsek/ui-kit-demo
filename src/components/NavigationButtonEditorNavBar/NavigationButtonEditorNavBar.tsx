import React from "react";
import styled, { css } from "styled-components";
import { Design } from "../Design";

export interface NavigationButtonEditorNavBarProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "type"
> {
  state?: "Selected" | "Default" | "Hover";
  type?: "Icon only" | "Icon and label" | "Label only";
}

const StyledRoot = styled.button<{
  $type: "Icon only" | "Icon and label" | "Label only";
  $state: "Selected" | "Default" | "Hover";
}>(
  ({ $type, $state }) => css`
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch ($type) {
        case "Icon and label":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 10px;
            padding-bottom: 4px;
            padding-left: 8px;
            gap: 6px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Icon only":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 8px;
            padding-bottom: 4px;
            padding-left: 8px;
            gap: 6px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Label only":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 6px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Selected":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#adadad"};
          `;
        case "Hover":
          return css`
            color: ${"#fefefe"};
          `;
        case "Selected":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDesign = styled.span<{ $state: "Selected" | "Default" | "Hover" }>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#adadad"};
          `;
        case "Hover":
          return css`
            color: ${"#fefefe"};
          `;
        case "Selected":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A navigation button used in the editor navigation bar. Supports icon-only, label-only, or combined icon and label display modes, with selected, default, and hover states. */
export const NavigationButtonEditorNavBar = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonEditorNavBarProps
>(function NavigationButtonEditorNavBar(
  { state = "Default", type = "Icon and label", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Design"
      {...rest}
      ref={ref}
      $type={type}
      $state={state}
    >
      {["Icon and label", "Icon only"].includes(type) && <Design />}
      {["Icon and label", "Label only"].includes(type) && (
        <StyledDesign $state={state}>{"Design"}</StyledDesign>
      )}
    </StyledRoot>
  );
});
