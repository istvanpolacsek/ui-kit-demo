import React from "react";
import styled, { css } from "styled-components";
import { TypePreviewDeviceStyles } from "../TypePreviewDeviceStyles";
import { Check } from "../Check";

export interface ListItemTypeProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "active"
> {
  active?: "True" | "False";
}

const StyledRoot = styled.li<{ $active: "True" | "False" }>(
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

/** A list item component representing a selectable type option, with default and hover states and an optional active/checked indicator. */
export const ListItemType = React.forwardRef<HTMLLIElement, ListItemTypeProps>(
  function ListItemType({ active = "False", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref} $active={active}>
        <TypePreviewDeviceStyles type={"None"} />
        <StyledLabel>{"None"}</StyledLabel>
        {active === "True" && <Check />}
      </StyledRoot>
    );
  },
);
