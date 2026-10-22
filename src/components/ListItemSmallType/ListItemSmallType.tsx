import React from "react";
import styled, { css } from "styled-components";
import { TypePreviewBackground } from "../TypePreviewBackground";
import { Check } from "../Check";

export interface ListItemSmallTypeProps extends Omit<
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

const StyledLabel = styled.div(
  () => css`
    color: #fefefe;
  `,
);

/** A small-type list item component with default and hover states, and an optional active/selected state indicated by a checkmark. */
export const ListItemSmallType = React.forwardRef<
  HTMLButtonElement,
  ListItemSmallTypeProps
>(function ListItemSmallType({ selected, ...rest }, ref) {
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
      <TypePreviewBackground type={"None"} />
      <StyledLabel>{"None"}</StyledLabel>
      {active === "True" && <Check />}
    </StyledRoot>
  );
});
