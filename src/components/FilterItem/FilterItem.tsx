import React from "react";
import styled, { css } from "styled-components";
import { Alert } from "../Alert";

export interface FilterItemProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "isActive" | "label"
> {
  isActive: boolean;
  label: string;
}

const StyledRoot = styled.button(
  ({ theme }) => css`
    position: relative;
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
    background-color: ${theme["Neutral"]["White"]};
    border-radius: 88px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledItem = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "PT Serif";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledAlert = styled.div(
  () => css`
    position: absolute;
    right: -5.0908203125px;
    top: -5px;
    width: 21px;
    height: 21px;
  `,
);

/** A filter item component that represents a selectable filter option. Displays a label and optionally an active/alert indicator when the filter is currently applied. */
export const FilterItem = React.forwardRef<HTMLButtonElement, FilterItemProps>(
  function FilterItem({ isActive, label, ...rest }, ref) {
    return (
      <StyledRoot aria-label="Item" {...rest} ref={ref}>
        <StyledItem>{label}</StyledItem>
        {isActive && (
          <StyledAlert>
            <Alert />
          </StyledAlert>
        )}
      </StyledRoot>
    );
  },
);
