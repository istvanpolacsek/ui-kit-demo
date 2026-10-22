import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallDividerLineWeight } from "../OptionPreviewSmallDividerLineWeight";

export interface OptionBoxSmallDividerLineWeightProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Medium" | "Light" | "Bold";
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

/** A selectable option box component for choosing divider line weight (Light, Medium, or Bold), available in small size with Default, Hover, and Active states. */
export const OptionBoxSmallDividerLineWeight = React.forwardRef<
  HTMLDivElement,
  OptionBoxSmallDividerLineWeightProps
>(function OptionBoxSmallDividerLineWeight({ type = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Divider line weight option"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallDividerLineWeight weight={"Light"} />
    </StyledRoot>
  );
});
