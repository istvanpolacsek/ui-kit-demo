import React from "react";
import styled, { css } from "styled-components";

export interface NavigationButtonListProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "link2" | "link5" | "link4" | "link3" | "link1" | "direction" | "slot"
> {
  link2?: boolean;
  link5?: boolean;
  link4?: boolean;
  link3?: boolean;
  link1?: boolean;
  direction?: "Row" | "Column";
  slot?: React.ReactNode;
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
            gap: 0px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
            height: 68px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Column":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
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

const StyledSlot = styled.div<{ $direction: "Row" | "Column" }>(
  ({ $direction }) => css`
    && > * {
      align-self: stretch;
      height: auto;
    }
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
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
            height: 68px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Column":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A navigation button list component that renders a group of navigation links either in a row or column direction. Supports up to 5 individually toggleable links and accepts slotted consumer content. */
export const NavigationButtonList = React.forwardRef<
  HTMLElement,
  NavigationButtonListProps
>(function NavigationButtonList(
  {
    link2 = true,
    link5 = true,
    link4 = true,
    link3 = true,
    link1 = true,
    direction = "Row",
    slot,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Navigation"
      {...rest}
      ref={ref}
      $direction={direction}
    >
      <StyledSlot $direction={direction}>{slot}</StyledSlot>
    </StyledRoot>
  );
});
