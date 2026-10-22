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

/** A selectable option box for choosing an aspect ratio (e.g. 16:9, 1:1, 3:4). Renders as a clickable button with an optional label, supporting Default, Hover, and Active states. */
export const OptionBoxMediumSquareAspectRatio = React.forwardRef<
  HTMLButtonElement,
  OptionBoxMediumSquareAspectRatioProps
>(function OptionBoxMediumSquareAspectRatio(
  { showLabel = true, type = "16:9", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="16:9" {...rest} ref={ref}>
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
