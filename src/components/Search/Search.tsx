import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface SearchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "valueType"
> {
  value?: string;
  valueType?: "Filled" | "Placeholder";
}

const StyledRoot = styled.div<{ $valueType: "Filled" | "Placeholder" }>(
  ({ theme, $valueType }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 9999px;
    ${(() => {
      switch ($valueType) {
        case "Filled":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Placeholder":
          return css`
            color: ${theme["Text"]["Default"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    &:has(:disabled) {
      background-color: ${theme["Background"]["Disabled"]["Default"]};
    }
    &:has(:disabled) {
      border-color: #b2b2b2;
    }
    &:has(:disabled) {
      color: ${theme["Icon"]["Disabled"]["On Disabled"]};
    }
    &:has(:disabled) {
      color: ${theme["Icon"]["Disabled"]["On Disabled"]};
    }
  `,
);

const StyledValue = styled.input<{ $valueType: "Filled" | "Placeholder" }>(
  ({ theme, $valueType }) => css`
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
      switch ($valueType) {
        case "Filled":
          return css`
            color: ${theme["Text"]["Default"]["Default"]};
          `;
        case "Placeholder":
          return css`
            color: ${theme["Text"]["Default"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    &:disabled {
      ${css`
        color: ${theme["Text"]["Disabled"]["On Disabled"]};
      `}
    }
  `,
);

/** A search input field that allows users to enter search queries. Supports placeholder and filled value states, as well as a disabled state. */
export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  function Search(
    { value = "Value", valueType = "Placeholder", ...rest },
    ref,
  ) {
    return (
      <StyledRoot $valueType={valueType}>
        <StyledValue
          type="text"
          placeholder={value}
          aria-label={value}
          $valueType={valueType}
          ref={ref}
          {...rest}
        />
        {valueType === "Filled" && <Icon name={"X"} size={16} />}
        {valueType === "Placeholder" && <Icon name={"Search"} size={16} />}
      </StyledRoot>
    );
  },
);
