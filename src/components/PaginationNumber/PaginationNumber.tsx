import React from "react";
import styled, { css } from "styled-components";

export interface PaginationNumberProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?:
    | "Default"
    | "Active"
    | "Hover"
    | "Focused Active"
    | "Focuse"
    | "Focused Hover";
}

const StyledRoot = styled.button<{
  $state:
    | "Default"
    | "Active"
    | "Hover"
    | "Focused Active"
    | "Focuse"
    | "Focused Hover";
}>(
  ({ theme, $state }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 1000px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Hover":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Active":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Focuse":
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
        case "Focused Hover":
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
        case "Focused Active":
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
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Active":
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Focuse":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        case "Focused Hover":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        case "Focused Active":
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled1 = styled.div<{
  $state:
    | "Default"
    | "Active"
    | "Hover"
    | "Focused Active"
    | "Focuse"
    | "Focused Hover";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Hover":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Active":
          return css`
            color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledPaginationNumber = styled.div<{
  $state:
    | "Default"
    | "Active"
    | "Hover"
    | "Focused Active"
    | "Focuse"
    | "Focused Hover";
}>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 1000px;
    ${(() => {
      switch ($state) {
        case "Focused Hover":
          return css`
            background-color: ${theme["background"]["bgGray"]};
          `;
        case "Focused Active":
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled12 = styled.span<{
  $state:
    | "Default"
    | "Active"
    | "Hover"
    | "Focused Active"
    | "Focuse"
    | "Focused Hover";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Focuse":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Focused Hover":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Focused Active":
          return css`
            color: ${theme["text"]["textOnDarkDefault"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A pagination number button representing a single page in a paginator. Supports default, active, hover, and focused states to indicate the current or selected page. */
export const PaginationNumber = React.forwardRef<
  HTMLButtonElement,
  PaginationNumberProps
>(function PaginationNumber({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Page 1" {...rest} ref={ref} $state={state}>
      {["Default", "Hover", "Active"].includes(state) && (
        <Styled1 $state={state}>{"1"}</Styled1>
      )}
      {["Focuse", "Focused Hover", "Focused Active"].includes(state) && (
        <StyledPaginationNumber $state={state}>
          {["Focuse", "Focused Hover", "Focused Active"].includes(state) && (
            <Styled12 $state={state}>{"1"}</Styled12>
          )}
        </StyledPaginationNumber>
      )}
    </StyledRoot>
  );
});
