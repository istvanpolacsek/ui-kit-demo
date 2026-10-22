import React from "react";
import styled, { css } from "styled-components";
import { SmallTypeSelector } from "../SmallTypeSelector";
import { OptionGridColorStyle } from "../OptionGridColorStyle";
import { OptionGridSimple } from "../OptionGridSimple";

export interface ModalSidebarSectionBackgroundProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "hasColor" | "hasSecondColor" | "hasThirdColor" | "type"
> {
  hasColor?: boolean;
  hasSecondColor?: boolean;
  hasThirdColor?: boolean;
  type?: "Transparent" | "Solid" | "Gradient";
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

const StyledOptionGridColorStyle = styled.div(
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

const StyledOptionGridSimple = styled.div(
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

/** A sidebar panel section used within a modal, providing a background container that supports transparent, solid, or gradient color styles. Includes a scroll overlay, a type selector, and color option grids. */
export const ModalSidebarSectionBackground = React.forwardRef<
  HTMLElement,
  ModalSidebarSectionBackgroundProps
>(function ModalSidebarSectionBackground(
  {
    hasColor = true,
    hasSecondColor = true,
    hasThirdColor = true,
    type = "Transparent",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Sidebar section background"
      {...rest}
      ref={ref}
    >
      <StyledBottomScrollOverlay />
      <SmallTypeSelector state={"Default"} />
      {["Solid", "Gradient"].includes(type) && (
        <StyledOptionGridColorStyle>
          <OptionGridColorStyle type={"Solid"} />
        </StyledOptionGridColorStyle>
      )}
      {type === "Gradient" && (
        <StyledOptionGridSimple>
          <OptionGridSimple
            isHardToSee={false}
            hasSubheader={true}
            type={"Section background"}
          />
        </StyledOptionGridSimple>
      )}
    </StyledRoot>
  );
});
