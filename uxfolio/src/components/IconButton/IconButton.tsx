import React from "react";
import styled, { css } from "styled-components";
import { Info } from "../Info";
import { TooltipContainer } from "../TooltipContainer";

export interface IconButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "importance" | "mode"
> {
  importance?: "Low" | "High";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button(
  () => css`
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
    display: inline-flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
  `,
);

/** An icon-only button component that triggers an action. Supports default and hover interaction states, low and high importance variants, and light and dark display modes. */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ importance = "Low", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot type="button" {...rest} ref={ref}>
        <Info />
        <TooltipContainer side={"Left"} mode={"Light"} />
      </StyledRoot>
    );
  },
);
