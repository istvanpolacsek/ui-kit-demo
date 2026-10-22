import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumSquareAnimation } from "../OptionPreviewMediumSquareAnimation";

export interface OptionBoxMediumSquareAnimationProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
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

/** An option box component with a medium square layout for selecting animation types (e.g., Rise, Pan left, Fade in). Supports Default, Hover, and Active states with an optional visible label. */
export const OptionBoxMediumSquareAnimation = React.forwardRef<
  HTMLDivElement,
  OptionBoxMediumSquareAnimationProps
>(function OptionBoxMediumSquareAnimation(
  { showLabel = true, type = "None", ...rest },
  ref,
) {
  return (
    <StyledRoot role="option" aria-label="Animation option" {...rest} ref={ref}>
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
