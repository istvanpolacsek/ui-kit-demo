import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumSquareSectionAlignment } from "../OptionPreviewMediumSquareSectionAlignment";

export interface OptionBoxMediumSquareSectionAlignmentProps extends Omit<
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

const StyledLabel = styled.label(
  () => css`
    color: #d1d1d1;
    &:active {
      color: #fefefe;
    }
  `,
);

/** An option box component that allows users to select a section alignment type (e.g., 16:9, 1:1, 3:4). Displays a preview of the alignment option with an optional label, and supports Default, Hover, and Active interaction states. */
export const OptionBoxMediumSquareSectionAlignment = React.forwardRef<
  HTMLButtonElement,
  OptionBoxMediumSquareSectionAlignmentProps
>(function OptionBoxMediumSquareSectionAlignment(
  { showLabel = true, type = "16:9", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="radio"
      aria-label="Section alignment option"
      {...rest}
      ref={ref}
    >
      <OptionPreviewMediumSquareSectionAlignment alignment={"Left"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              {
                '["16:9"]': "Left",
                '["4:3"]': "Center",
                '["1:1"]': "Right",
                '["3:4"]': "Top",
                '["9:16"]': "Middle",
                '["Original"]': "Bottom",
              } as Record<string, string>
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});
