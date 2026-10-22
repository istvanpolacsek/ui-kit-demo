import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewLargeHorizontalHeroLayout } from "../OptionPreviewLargeHorizontalHeroLayout";

export interface OptionBoxLargeHorizontalTextPosition2Props extends Omit<
  React.ComponentPropsWithoutRef<"label">,
  "showLabel" | "type"
> {
  showLabel?: boolean;
  type?: "Horizontal" | "Vertical";
}

const StyledRoot = styled.label(
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

/** A large horizontal option box component that presents a selectable choice with an optional label. Supports default, hover, and active states, and can be oriented horizontally or vertically. */
export const OptionBoxLargeHorizontalTextPosition2 = React.forwardRef<
  HTMLLabelElement,
  OptionBoxLargeHorizontalTextPosition2Props
>(function OptionBoxLargeHorizontalTextPosition2(
  { showLabel = true, type = "Horizontal", ...rest },
  ref,
) {
  return (
    <StyledRoot role="radio" aria-label="Option box" {...rest} ref={ref}>
      <OptionPreviewLargeHorizontalHeroLayout type={"Horizontal"} />
      {showLabel && (
        <StyledLabel>
          {
            (
              {
                '["Horizontal"]': "Horizontal",
                '["Vertical"]': "Vertical",
              } as Record<string, string>
            )[JSON.stringify([type])]
          }
        </StyledLabel>
      )}
    </StyledRoot>
  );
});
