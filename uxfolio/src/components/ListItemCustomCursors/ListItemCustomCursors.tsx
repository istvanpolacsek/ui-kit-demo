import React from "react";
import styled, { css } from "styled-components";
import { TypePreviewCustomCursors } from "../TypePreviewCustomCursors";

export interface ListItemCustomCursorsProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "state"
> {
  state?: "Selected" | "Hover" | "Default";
}

const StyledRoot = styled.li<{ $state: "Selected" | "Hover" | "Default" }>(
  ({ $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 284px;
    height: 80px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"#262626"};
          `;
        case "Hover":
          return css`
            background-color: ${"#333333"};
          `;
        case "Selected":
          return css`
            background-color: ${"#4d4c4c"};
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
            color: ${"#adadad"};
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

const StyledName = styled.span<{ $state: "Selected" | "Hover" | "Default" }>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#adadad"};
          `;
        case "Hover":
          return css`
            color: ${"#adadad"};
          `;
        case "Selected":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            font-family: var(--font-work-sans, "Work Sans"), sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.01em;
          `;
        case "Hover":
          return css`
            font-family: var(--font-work-sans, "Work Sans"), sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.01em;
          `;
        case "Selected":
          return css`
            font-family: var(--font-work-sans, "Work Sans"), sans-serif;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0.01em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A list item component representing a selectable row with custom cursor behavior. Supports Default, Hover, and Selected states for interactive list UIs. */
export const ListItemCustomCursors = React.forwardRef<
  HTMLLIElement,
  ListItemCustomCursorsProps
>(function ListItemCustomCursors({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="option"
      aria-label="List item"
      {...rest}
      ref={ref}
      $state={state}
    >
      <TypePreviewCustomCursors type={"Default"} />
      <StyledName $state={state}>{"Default"}</StyledName>
    </StyledRoot>
  );
});
