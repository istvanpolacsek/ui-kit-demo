import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewLargeHorizontalAnimatedTextLayout } from "../OptionPreviewLargeHorizontalAnimatedTextLayout";

export interface OptionBoxLargeHorizontalAnimatedTextLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?: "Linear" | "Wavy";
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
    color: #d1d1d1;
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #d1d1d1;
    &:active {
      color: #fefefe;
    }
  `,
);

/** A selectable option box with a large horizontal layout featuring animated text. Supports linear and wavy animation types, and tracks default, hover, and active interaction states. Optionally displays a label indicating the current animation type. */
export const OptionBoxLargeHorizontalAnimatedTextLayout = React.forwardRef<
  HTMLButtonElement,
  OptionBoxLargeHorizontalAnimatedTextLayoutProps
>(function OptionBoxLargeHorizontalAnimatedTextLayout(
  { showLabel = true, type = "Linear", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="option"
      aria-label="Option box - Linear"
      {...rest}
      ref={ref}
    >
      <OptionPreviewLargeHorizontalAnimatedTextLayout type={"Linear"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              { '["Linear"]': "Linear", '["Wavy"]': "Wavy" } as Record<
                string,
                string
              >
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});
