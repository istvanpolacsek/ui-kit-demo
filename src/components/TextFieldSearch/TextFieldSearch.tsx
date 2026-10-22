import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface TextFieldSearchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "state"
> {
  state?: "Default" | "Active" | "Filled" | "Hover" | "Disabled" | "Error";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 568px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
  `,
);

const StyledInputField = styled.div<{
  $state: "Default" | "Active" | "Filled" | "Hover" | "Disabled" | "Error";
}>(
  ({ $state }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 14px;
    padding-right: 16px;
    padding-bottom: 14px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case "Hover":
          return css`
            border-color: ${"#707070"};
          `;
        case "Active":
          return css`
            border-color: ${"#0f0f0f"};
          `;
        case "Filled":
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case "Error":
          return css`
            border-color: ${"#ef4444"};
          `;
        case "Disabled":
          return css`
            border-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledValue = styled.input<{
  $state: "Default" | "Active" | "Filled" | "Hover" | "Disabled" | "Error";
}>(
  ({ $state }) => css`
    flex: 1 1 auto;
    min-width: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    &::placeholder {
      color: inherit;
      opacity: 1;
    }
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#707070"};
          `;
        case "Hover":
          return css`
            color: ${"#707070"};
          `;
        case "Active":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Filled":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Error":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Disabled":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledValue2 = styled.div(
  () => css`
    position: absolute;
    right: 16px;
    top: 14px;
    white-space: nowrap;
    color: #ef4444;
  `,
);

/** A search text field component that allows users to enter search queries. Supports multiple states including default, active, filled, hover, disabled, and error. */
export const TextFieldSearch = React.forwardRef<
  HTMLInputElement,
  TextFieldSearchProps
>(function TextFieldSearch({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot>
      <StyledInputField $state={state}>
        <VisualAsset name={"Public"} size={24} />
        <StyledValue
          type="search"
          placeholder={"Label"}
          aria-label={"Label"}
          $state={state}
          ref={ref}
          {...rest}
        />
        {state === "Error" && <StyledValue2>{"This is an error"}</StyledValue2>}
      </StyledInputField>
    </StyledRoot>
  );
});
