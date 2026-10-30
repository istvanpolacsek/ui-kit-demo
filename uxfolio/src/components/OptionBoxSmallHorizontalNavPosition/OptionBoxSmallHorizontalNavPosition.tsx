import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumHorizontalNavPosition } from "../OptionPreviewMediumHorizontalNavPosition";

export interface OptionBoxSmallHorizontalNavPositionProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "hero"
> {
  type?: "Top" | "Bottom" | "Special";
  hero?: "Normal" | "Sidebar";
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

/** A small horizontal navigation position option box that allows users to select a navigation placement (Top, Bottom, or Special). Supports Default, Hover, and Active states for interactive feedback. */
export const OptionBoxSmallHorizontalNavPosition = React.forwardRef<
  HTMLButtonElement,
  OptionBoxSmallHorizontalNavPositionProps
>(function OptionBoxSmallHorizontalNavPosition(
  { type = "Top", hero = "Normal", ...rest },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <OptionPreviewMediumHorizontalNavPosition
        position={"Top"}
        hero={"Normal"}
      />
      <StyledLabel>
        {
          (
            {
              '["Top","Normal"]': "Top",
              '["Bottom","Normal"]': "Bottom",
              '["Special","Normal"]': "Under text",
              '["Top","Sidebar"]': "Top",
              '["Bottom","Sidebar"]': "Bottom",
              '["Special","Sidebar"]': "Outside",
            } as Record<string, string>
          )[JSON.stringify([type, hero])]
        }
      </StyledLabel>
    </StyledRoot>
  );
});
