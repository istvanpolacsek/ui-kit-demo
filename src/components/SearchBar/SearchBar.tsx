import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface SearchBarProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "placeholder"
> {
  placeholder?: string;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: 199px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 100px;
    box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.06);
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledSearchBar = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 100px;
  `,
);

const StyledSearchInThisDeal = styled.input(
  () => css`
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
    color: #4b1e04;
    font-family: "Inter Tight";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

/** A search bar component that allows users to search within a deal. Contains a search icon and a placeholder text input. */
export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ placeholder = "Search in this deal", ...rest }, ref) {
    return (
      <StyledRoot>
        <StyledSearchBar>
          <Icon iconName={"search"} />
        </StyledSearchBar>
        <StyledSearchInThisDeal
          type="search"
          placeholder={placeholder}
          aria-label={placeholder}
          ref={ref}
          {...rest}
        />
      </StyledRoot>
    );
  },
);
