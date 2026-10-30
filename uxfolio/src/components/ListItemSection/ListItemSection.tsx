import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";

export interface ListItemSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"li">,
  "state"
> {
  state?: "Default" | "Hover" | "Selected";
}

const StyledRoot = styled.li<{ $state: "Default" | "Hover" | "Selected" }>(
  ({ $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 188px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Hover":
          return css`
            background-color: ${"#262626"};
          `;
        case "Selected":
          return css`
            background-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
    color: #eeeeee;
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #eeeeee;
  `,
);

/** A list item representing a section category within a list, supporting default, hover, and selected interaction states. Typically used inside a navigation or categorized list structure. */
export const ListItemSection = React.forwardRef<
  HTMLLIElement,
  ListItemSectionProps
>(function ListItemSection({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="option"
      aria-label="Section category"
      {...rest}
      ref={ref}
      $state={state}
    >
      <IllustrationIcon type={"Image & text"} mode={"Dark"} />
      <StyledLabel>{"Section category"}</StyledLabel>
    </StyledRoot>
  );
});
