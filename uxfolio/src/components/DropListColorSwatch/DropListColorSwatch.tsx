import React from "react";
import styled, { css } from "styled-components";

export interface DropListColorSwatchProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?: "Default";
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #262626;
    border-radius: 4px;
    color: #fefefe;
  `,
);

const StyledForeground = styled.div(
  () => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #0073c7;
    border-radius: 50%;
  `,
);

const Styled0073C7 = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** A color swatch component used within a drop list, displaying a color preview and its corresponding hex value. Allows users to select a specific color option. */
export const DropListColorSwatch = React.forwardRef<
  HTMLButtonElement,
  DropListColorSwatchProps
>(function DropListColorSwatch({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Color swatch #0073C7" {...rest} ref={ref}>
      <StyledForeground />
      <Styled0073C7>{"#0073C7"}</Styled0073C7>
    </StyledRoot>
  );
});
