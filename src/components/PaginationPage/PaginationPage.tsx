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

const Styled1 = styled.span<{
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
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  `,
);

/** A pagination page button that displays a page number and supports default, hover, current, and current-hover visual states. */
export const PaginationPage = React.forwardRef<
  HTMLButtonElement,
  PaginationPageProps
>(function PaginationPage({ number = "1", state = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Page 1" {...rest} ref={ref} $state={state}>
      <Styled1 $state={state}>{number}</Styled1>
    </StyledRoot>
  );
});
