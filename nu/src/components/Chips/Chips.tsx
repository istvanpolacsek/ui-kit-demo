import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ChipsProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "leftIcon" | "value" | "rightIcon" | "state" | "size"
> {
  leftIcon?: boolean;
  value?: string;
  rightIcon?: boolean;
  state?: "Default" | "Hover" | "Disabled" | "Selected" | "Focused";
  size?: "Large" | "Small";
}

const StyledRoot = styled.button<{
  $state: "Default" | "Hover" | "Disabled" | "Selected" | "Focused";
  $size: "Large" | "Small";
}>(
  ({ theme, $state, $size }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$state, $size])) {
        case '["Default","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Hover","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Disabled","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Selected","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Focused","Large"]':
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case '["Default","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Hover","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Disabled","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Selected","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case '["Focused","Small"]':
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${theme["royalBlue"]["100"]};
          `;
        case "Hover":
          return css`
            background-color: ${theme["royalBlue"]["100"]};
          `;
        case "Disabled":
          return css`
            background-color: ${theme["royalBlue"]["100"]};
          `;
        case "Selected":
          return css`
            background-color: ${theme["royalBlue"]["100"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            border-color: ${theme["royalBlue"]["500"]};
          `;
        case "Selected":
          return css`
            border-color: ${theme["royalBlue"]["500"]};
          `;
        case "Focused":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-radius: 20px;
          `;
        case "Hover":
          return css`
            border-radius: 20px;
          `;
        case "Disabled":
          return css`
            border-radius: 20px;
          `;
        case "Selected":
          return css`
            border-radius: 20px;
          `;
        case "Focused":
          return css`
            border-radius: 100px;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledChips = styled.span<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Small":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

const StyledChipsFocusedDefault = styled.div<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    overflow: hidden;
    background-color: ${theme["royalBlue"]["100"]};
    border-radius: 20px;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Small":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledChips2 = styled.span<{ $size: "Large" | "Small" }>(
  ({ theme, $size }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Small":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

/** A chip component that represents a compact, interactive element used for filtering, selection, or triggering actions. Supports optional left and right icons, multiple sizes, and various interaction states including hover, disabled, selected, and focused. */
export const Chips = React.forwardRef<HTMLButtonElement, ChipsProps>(
  function Chips(
    {
      leftIcon = true,
      value = "Chips",
      rightIcon = true,
      state = "Default",
      size = "Large",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        aria-label="Chips"
        {...rest}
        ref={ref}
        $state={state}
        $size={size}
      >
        {leftIcon && <Icon name={"check_small"} size={24} />}
        {["Default", "Hover", "Disabled", "Selected"].includes(state) && (
          <StyledText>
            {["Default", "Hover", "Disabled", "Selected"].includes(state) && (
              <StyledChips $size={size}>{value}</StyledChips>
            )}
          </StyledText>
        )}
        {rightIcon && <Icon name={"check_small"} size={24} />}
        {state === "Focused" && (
          <StyledChipsFocusedDefault $size={size}>
            {leftIcon && <Icon name={"check_small"} size={24} />}
            {state === "Focused" && (
              <StyledText2>
                {state === "Focused" && (
                  <StyledChips2 $size={size}>{"Chips"}</StyledChips2>
                )}
              </StyledText2>
            )}
            {rightIcon && <Icon name={"check_small"} size={24} />}
          </StyledChipsFocusedDefault>
        )}
        {leftIcon && <Icon name={"close"} size={24} />}
      </StyledRoot>
    );
  },
);
