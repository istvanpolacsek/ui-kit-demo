import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewSmallImageShape } from "../OptionPreviewSmallImageShape";

export interface OptionBoxSmallImageShapeProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Sharp" | "Super rounded rectangle" | "Arch" | "Oval";
}

const StyledRoot = styled.button(
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

/** A selectable option box component with a small image shape preview. Supports multiple shape variants (Sharp, Super rounded rectangle, Arch, Oval) and interactive states (Default, Hover, Active), typically used in a shape picker or style selector UI. */
export const OptionBoxSmallImageShape = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallImageShapeProps
>(function OptionBoxSmallImageShape({ type = "Sharp", ...rest }, ref) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Select image shape"
      {...rest}
      ref={ref}
    >
      <OptionPreviewSmallImageShape type={"Rectangle"} />
    </StyledRoot>
  );
});
