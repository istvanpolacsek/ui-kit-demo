import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumSquareAnimation } from "../OptionPreviewMediumSquareAnimation";

export interface OptionBoxMediumSquareAnimationProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?:
    | "None"
    | "Rise"
    | "Pan left"
    | "Pan right"
    | "Fall"
    | "Fade in"
    | "Move in"
    | "Bring in"
    | "Scale";
}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
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

const StyledLabel = styled.div(
  () => css`
    color: #d1d1d1;
    &:is(button:active:not(:disabled) *) {
      color: #fefefe;
    }
  `,
);

/** A selectable option box of medium square size that previews an animation type (e.g., Rise, Pan, Fade). Displays an animation preview alongside an optional label, and supports Default, Hover, and Active interaction states. */
export const OptionBoxMediumSquareAnimation = React.forwardRef<
  HTMLButtonElement,
  OptionBoxMediumSquareAnimationProps
>(function OptionBoxMediumSquareAnimation(
  { showLabel = true, type = "None", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewMediumSquareAnimation type={"None"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              {
                '["None"]': "None",
                '["Rise"]': "Rise",
                '["Fall"]': "Fall",
                '["Pan left"]': "Pan left",
                '["Pan right"]': "Pan right",
                '["Fade in"]': "Fade in",
                '["Move in"]': "Move in",
                '["Bring in"]': "Bring in",
                '["Scale"]': "Scale",
              } as Record<string, string>
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});
