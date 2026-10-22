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

/** An icon-only button component with multiple visual states (default/hover), importance levels (low/high), and theme modes (dark/light). Typically used for compact actions where a label is not displayed inline. */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ importance = "Low", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Action name" {...rest} ref={ref}>
        <Info />
        <TooltipContainer side={"Left"} mode={"Light"} />
      </StyledRoot>
    );
  },
);
