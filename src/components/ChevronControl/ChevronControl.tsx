import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ChevronControlProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "direction" | "state"
> {
  direction?: "Left" | "Right";
  state?: "Default" | "Hover" | "Pressed" | "Focused";
}

const StyledRoot = styled.button<{
  $state: "Default" | "Hover" | "Pressed" | "Focused";
}>(
  ({ theme, $state }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 100px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Focused":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Hover":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Pressed":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
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
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Hover":
          return css`
            background-color: ${theme["button"]["Inverted"]["hover"]};
          `;
        case "Pressed":
          return css`
            background-color: ${theme["button"]["Inverted"]["pressed"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Focused":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["accent"]["accentGray"]};
  `,
);

const StyledChevronControl = styled.span(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 100px;
  `,
);

/** A chevron navigation control used to indicate directional navigation (left or right). Supports multiple interaction states including default, hover, pressed, and focused. */
export const ChevronControl = React.forwardRef<
  HTMLButtonElement,
  ChevronControlProps
>(function ChevronControl(
  { direction = "Left", state = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="Navigate left" {...rest} ref={ref} $state={state}>
      {((direction === "Left" && state === "Default") ||
        (direction === "Left" && state === "Hover") ||
        (direction === "Left" && state === "Pressed")) && (
        <Icon name={"chevron_left"} size={24} />
      )}
      {((direction === "Right" && state === "Default") ||
        (direction === "Right" && state === "Hover") ||
        (direction === "Right" && state === "Pressed")) && (
        <Icon name={"chevron_right"} size={24} />
      )}
      {state === "Focused" && (
        <StyledChevronControl>
          {direction === "Left" && state === "Focused" && (
            <Icon name={"chevron_left"} size={24} />
          )}
          {direction === "Right" && state === "Focused" && (
            <Icon name={"chevron_right"} size={24} />
          )}
        </StyledChevronControl>
      )}
    </StyledRoot>
  );
});
