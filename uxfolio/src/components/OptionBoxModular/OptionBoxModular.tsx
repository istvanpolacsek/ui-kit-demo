import React from "react";
import styled, { css } from "styled-components";
import { ColorStyle, type ColorStyleProps } from "../ColorStyle";
import { MicroButton } from "../MicroButton";

export interface OptionBoxModularProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "colorStyleType" | "style"
> {
  type?: "Suggested color" | "Custom color";
  colorStyleType?: ColorStyleProps["type"];
  style?: ColorStyleProps["style"];
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
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledMicroButton = styled.div(
  () => css`
    position: absolute;
    right: -10px;
    top: -10px;
    width: 22px;
    height: 22px;
  `,
);

/** An option box component that allows users to select a color option, either from a suggested palette or via a custom color picker. Supports default, hover, and active interaction states. */
export const OptionBoxModular = React.forwardRef<
  HTMLButtonElement,
  OptionBoxModularProps
>(function OptionBoxModular(
  {
    type = "Suggested color",
    colorStyleType = "Solid",
    style = "Subtle",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <ColorStyle type={colorStyleType} style={style} />
      <StyledMicroButton>
        <MicroButton />
      </StyledMicroButton>
    </StyledRoot>
  );
});
