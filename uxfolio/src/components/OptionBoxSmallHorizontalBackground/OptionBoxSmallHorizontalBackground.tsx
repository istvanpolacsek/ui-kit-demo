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

/** A small horizontal option box background component that provides visual styling for option/selection containers. Supports multiple visual types (Transparent, Solid, Special, gradient variants) and interactive states (Default, Hover, Active). */
export const OptionBoxSmallHorizontalBackground = React.forwardRef<
  HTMLDivElement,
  OptionBoxSmallHorizontalBackgroundProps
>(function OptionBoxSmallHorizontalBackground(
  { type = "Transparent", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <OptionPreviewMediumHorizontalBackground style={"Transparent"} />
    </StyledRoot>
  );
});
