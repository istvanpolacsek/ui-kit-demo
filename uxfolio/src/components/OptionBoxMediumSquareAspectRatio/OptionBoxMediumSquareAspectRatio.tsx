import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumSquareAspectRatio } from "../OptionPreviewMediumSquareAspectRatio";

export interface OptionBoxMediumSquareAspectRatioProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?: "16:9" | "1:1" | "3:4" | "4:3" | "9:16" | "Original";
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

const StyledLabel = styled.span(
  () => css`
    color: #d1d1d1;
    &:is(button:active:not(:disabled) *) {
      color: #fefefe;
    }
  `,
);

/** A selectable option box representing an aspect ratio choice (e.g. 16:9, 1:1, 3:4). Displays a preview thumbnail and an optional label, with Default, Hover, and Active interaction states. */
export const OptionBoxMediumSquareAspectRatio = React.forwardRef<
  HTMLButtonElement,
  OptionBoxMediumSquareAspectRatioProps
>(function OptionBoxMediumSquareAspectRatio(
  { showLabel = true, type = "16:9", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewMediumSquareAspectRatio aspectRatio={"16:9"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              {
                '["16:9"]': "16:9",
                '["4:3"]': "4:3",
                '["1:1"]': "1:1",
                '["3:4"]': "3:4",
                '["9:16"]': "9:16",
                '["Original"]': "Original",
              } as Record<string, string>
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});
