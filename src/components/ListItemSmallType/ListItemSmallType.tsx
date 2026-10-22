import React from "react";
import styled, { css } from "styled-components";
import { TypePreviewBackground } from "../TypePreviewBackground";
import { VisualAsset } from "../VisualAsset";

export interface ListItemSmallTypeProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "active"
> {
  active?: "True" | "False";
}

const StyledRoot = styled.li<{ $active: "True" | "False" }>(
  ({ $active }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 268px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 2px;
    ${(() => {
      switch ($active) {
        case "True":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
    color: #fefefe;
    &:hover {
      ${css`
        background-color: ${"#3d3d3d"};
      `}
    }
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #fefefe;
  `,
);

/** A small-type list item component with default and hover states, and an active/inactive variant. Used within a list to display labeled entries, optionally accompanied by a visual asset. */
export const ListItemSmallType = React.forwardRef<
  HTMLLIElement,
  ListItemSmallTypeProps
>(function ListItemSmallType({ active = "False", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref} $active={active}>
      <TypePreviewBackground type={"None"} />
      <StyledLabel>{"None"}</StyledLabel>
      {active === "True" && <VisualAsset name={"Check"} size={24} />}
    </StyledRoot>
  );
});
