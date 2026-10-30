import React from "react";
import styled, { css } from "styled-components";
import { OptionPreviewMediumHorizontalNavItem } from "../OptionPreviewMediumHorizontalNavItem";

export interface OptionBoxSmallHorizontalMenuItemProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "type"
> {
  type?: "Simple" | "Underlined" | "Boxed";
}

const StyledRoot = styled.li(
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

/** A small horizontal menu item option box that can appear in simple, underlined, or boxed styles with default, hover, and active states. Represents a single selectable item within a navigation or option menu. */
export const OptionBoxSmallHorizontalMenuItem = React.forwardRef<
  HTMLLIElement,
  OptionBoxSmallHorizontalMenuItemProps
>(function OptionBoxSmallHorizontalMenuItem({ type = "Simple", ...rest }, ref) {
  return (
    <StyledRoot role="menuitem" aria-label="Menu item" {...rest} ref={ref}>
      <OptionPreviewMediumHorizontalNavItem position={"Simple"} />
      <StyledLabel>
        {
          (
            {
              '["Simple"]': "Simple",
              '["Underlined"]': "Underlined",
              '["Boxed"]': "Boxed",
            } as Record<string, string>
          )[JSON.stringify([type])]
        }
      </StyledLabel>
    </StyledRoot>
  );
});
