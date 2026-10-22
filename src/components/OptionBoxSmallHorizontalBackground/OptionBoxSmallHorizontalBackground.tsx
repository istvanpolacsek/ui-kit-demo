import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumHorizontalBackground } from "../OptionPreviewMediumHorizontalBackground";

export interface OptionBoxSmallHorizontalBackgroundProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?:
    | "Special"
    | "Solid"
    | "Transparent"
    | "Vertical"
    | "Horizontal"
    | "Left corner"
    | "Right corner"
    | "Radial"
    | "Corner";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A small horizontal option box background component that provides a styled container for option/selection UI elements. Supports multiple visual types (transparent, solid, special, gradient variants) and interactive states (default, hover, active). */
export const OptionBoxSmallHorizontalBackground = React.forwardRef<
  HTMLDivElement,
  OptionBoxSmallHorizontalBackgroundProps
>(function OptionBoxSmallHorizontalBackground(
  { type = "Transparent", ...rest },
  ref,
) {
  return (
    <StyledRoot role="presentation" {...rest} ref={ref}>
      <OptionPreviewMediumHorizontalBackground style={"Transparent"} />
    </StyledRoot>
  );
});
