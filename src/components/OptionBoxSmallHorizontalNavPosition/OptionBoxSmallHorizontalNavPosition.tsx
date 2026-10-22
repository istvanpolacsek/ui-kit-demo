import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumHorizontalNavPosition } from "../OptionPreviewMediumHorizontalNavPosition";

export interface OptionBoxSmallHorizontalNavPositionProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "hero"
> {
  type?: "Top" | "Bottom" | "Special";
  hero?: "Normal" | "Sidebar";
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

const StyledLabel = styled.span(
  () => css`
    color: #d1d1d1;
    &:active {
      color: #fefefe;
    }
  `,
);

/** A small horizontal navigation position option box component. Displays a labeled option (e.g., 'Top', 'Bottom', 'Special') for selecting navigation placement, with support for Default, Hover, and Active states in Normal or Sidebar hero layouts. */
export const OptionBoxSmallHorizontalNavPosition = React.forwardRef<
  HTMLDivElement,
  OptionBoxSmallHorizontalNavPositionProps
>(function OptionBoxSmallHorizontalNavPosition(
  { type = "Top", hero = "Normal", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="option"
      aria-label="Navigation position option"
      {...rest}
      ref={ref}
    >
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
