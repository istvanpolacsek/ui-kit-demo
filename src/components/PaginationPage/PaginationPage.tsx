import React from "react";
import styled, { css } from "styled-components";

export interface PaginationPageProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "number" | "state"
> {
  number?: string;
  state?: "Default" | "Hover" | "Current" | "Current Hover";
}

const StyledRoot = styled.button<{
  $state: "Default" | "Hover" | "Current" | "Current Hover";
}>(
  ({ theme, $state }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-right: 12px;
    padding-bottom: 8px;
    padding-left: 12px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            background-color: ${theme["Background"]["Default"]["Default Hover"]};
          `;
        case "Current":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        case "Current Hover":
          return css`
            background-color: ${theme["Background"]["Brand"]["Hover"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Hover":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Current":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case "Current Hover":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled1 = styled.div<{
  $state: "Default" | "Hover" | "Current" | "Current Hover";
}>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Hover":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Current":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        case "Current Hover":
          return css`
            color: ${theme["Text"]["Brand"]["On Brand"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-inter, 'Inter'), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

/** A pagination page button that displays a page number and supports default, hover, current, and current-hover visual states. Used within a pagination navigation component to allow users to jump to a specific page. */
export const PaginationPage = React.forwardRef<
  HTMLButtonElement,
  PaginationPageProps
>(function PaginationPage({ number = "1", state = "Default", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref} $state={state}>
      <Styled1 $state={state}>{number}</Styled1>
    </StyledRoot>
  );
});
