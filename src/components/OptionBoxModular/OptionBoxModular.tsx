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

/** An interactive option box component that allows users to select a color option, either from a suggested palette or a custom color input. Supports default, hover, and active interaction states. */
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
    <StyledRoot role="option" aria-label="Color option" {...rest} ref={ref}>
      <ColorStyle type={colorStyleType} style={style} />
      <StyledMicroButton>
        <MicroButton />
      </StyledMicroButton>
    </StyledRoot>
  );
});
