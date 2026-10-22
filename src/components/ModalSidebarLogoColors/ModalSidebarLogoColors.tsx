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

const StyledBottomScrollOverlay = styled.span(
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

/** A modal sidebar panel for configuring logo color options. Displays up to three labeled color option controls, allowing users to select or toggle primary, secondary, and tertiary logo colors. */
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
          type={"Enabled"}
          hasDescription={false}
        />
      </StyledOptionBarLabeled>
      <StyledOptionBarLabeled2>
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Disabled"}
          hasDescription={false}
        />
      </StyledOptionBarLabeled2>
      <StyledOptionBarLabeled3>
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Disabled"}
          hasDescription={false}
        />
      </StyledOptionBarLabeled3>
    </StyledRoot>
  );
});
