import React from "react";
import styled, { css } from "styled-components";

export interface ModuleDividerOnlyDividerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "side"
> {
  side?: "Left image" | "Normal" | "Right image";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 1px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    width: 1px;
    height: 295px;
    box-sizing: border-box;
  `,
);

const StyledVisual = styled.span(
  () => css`
    width: 103px;
    height: 295px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
  `,
);

/** A visual divider component used to separate content sections. Supports layout variants including left image, normal, and right image configurations. */
export const ModuleDividerOnlyDivider = React.forwardRef<
  HTMLDivElement,
  ModuleDividerOnlyDividerProps
>(function ModuleDividerOnlyDivider({ side = "Left image", ...rest }, ref) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Section divider"
      {...rest}
      ref={ref}
    >
      <StyledVisual />
    </StyledRoot>
  );
});
