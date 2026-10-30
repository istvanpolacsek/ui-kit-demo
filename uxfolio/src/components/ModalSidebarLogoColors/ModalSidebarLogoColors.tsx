import React from "react";
import styled, { css } from "styled-components";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface ModalSidebarLogoColorsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "hasColor" | "hasSecondColor" | "hasThirdColor" | "type"
> {
  hasColor?: boolean;
  hasSecondColor?: boolean;
  hasThirdColor?: boolean;
  type?: "Default";
}

const StyledRoot = styled.section(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 332px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 332px;
    height: 48px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledOptionBarLabeled = styled.div(
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

const StyledOptionBarLabeled2 = styled.div(
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

const StyledOptionBarLabeled3 = styled.div(
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

/** A modal sidebar panel for configuring logo color options, presenting a set of labeled color option controls with optional visibility toggles for primary, secondary, and tertiary brand colors. */
export const ModalSidebarLogoColors = React.forwardRef<
  HTMLElement,
  ModalSidebarLogoColorsProps
>(function ModalSidebarLogoColors(
  {
    hasColor = true,
    hasSecondColor = true,
    hasThirdColor = true,
    type = "Default",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Logo color options"
      {...rest}
      ref={ref}
    >
      <StyledBottomScrollOverlay />
      <StyledOptionBarLabeled>
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          hasDescription={false}
        />
      </StyledOptionBarLabeled>
      <StyledOptionBarLabeled2>
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          hasDescription={false}
        />
      </StyledOptionBarLabeled2>
      <StyledOptionBarLabeled3>
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          hasDescription={false}
        />
      </StyledOptionBarLabeled3>
    </StyledRoot>
  );
});
