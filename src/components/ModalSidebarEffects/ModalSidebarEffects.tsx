import React from "react";
import styled, { css } from "styled-components";
import { OptionSliderLabeled } from "../OptionSliderLabeled";

export interface ModalSidebarEffectsProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.aside(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 257px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledOptionSliderLabeled = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledOptionSliderLabeled2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 257px;
    height: 48px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A modal sidebar panel for configuring visual effects, containing labeled slider controls for adjusting effect parameters and a decorative scroll overlay at the bottom. */
export const ModalSidebarEffects = React.forwardRef<
  HTMLElement,
  ModalSidebarEffectsProps
>(function ModalSidebarEffects({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Effects settings" {...rest} ref={ref}>
      <StyledOptionSliderLabeled>
        <OptionSliderLabeled value={"50%"} type={"Value"} />
      </StyledOptionSliderLabeled>
      <StyledOptionSliderLabeled2>
        <OptionSliderLabeled value={"0%"} type={"Value"} />
      </StyledOptionSliderLabeled2>
      <StyledBottomScrollOverlay />
    </StyledRoot>
  );
});
