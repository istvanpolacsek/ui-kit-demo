import React from "react";
import styled, { css } from "styled-components";

export interface NavigationPillListProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  | "link6"
  | "link2"
  | "link5"
  | "link4"
  | "link3"
  | "link1"
  | "link7"
  | "direction"
  | "slot"
  | "slot2"
> {
  link6?: boolean;
  link2?: boolean;
  link5?: boolean;
  link4?: boolean;
  link3?: boolean;
  link1?: boolean;
  link7?: boolean;
  direction?: "Row" | "Column";
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
}

const StyledRoot = styled.nav<{ $direction: "Row" | "Column" }>(
  ({ $direction }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($direction) {
        case "Row":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Column":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 115px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSlot2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

/** A navigation pill list component that renders a group of pill-style navigation links in either a horizontal (Row) or vertical (Column) layout. Supports up to 7 individually toggleable link slots for flexible navigation structures. */
export const NavigationPillList = React.forwardRef<
  HTMLElement,
  NavigationPillListProps
>(function NavigationPillList(
  {
    link6 = true,
    link2 = true,
    link5 = true,
    link4 = true,
    link3 = true,
    link1 = true,
    link7 = true,
    direction = "Row",
    slot,
    slot2,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Navigation pills"
      {...rest}
      ref={ref}
      $direction={direction}
    >
      {direction === "Row" && <StyledSlot>{slot}</StyledSlot>}
      {direction === "Column" && <StyledSlot2>{slot2}</StyledSlot2>}
    </StyledRoot>
  );
});
