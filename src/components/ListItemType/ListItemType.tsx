import React from "react";
import styled, { css } from "styled-components";
import { TypePreviewDeviceStyles } from "../TypePreviewDeviceStyles";
import { VisualAsset } from "../VisualAsset";

export interface ListItemTypeProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{ $active: string }>(
  ({ $active }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
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

/** A list item component representing a selectable type option, with default and hover states and an optional active/selected state indicated by a visual asset. */
export const ListItemType = React.forwardRef<
  HTMLButtonElement,
  ListItemTypeProps
>(function ListItemType({ selected, ...rest }, ref) {
  const active = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $active={active}
    >
      <TypePreviewDeviceStyles type={"None"} />
      <StyledLabel>{"None"}</StyledLabel>
      {active === "True" && <VisualAsset name={"Check"} size={24} />}
    </StyledRoot>
  );
});
