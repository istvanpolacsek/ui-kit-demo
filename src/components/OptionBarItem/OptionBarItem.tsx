import React from "react";
import styled, { css } from "styled-components";
import { LeftAlignText } from "../LeftAlignText";

export interface OptionBarItemProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "selected"
> {
  type?: "Text" | "Icon";
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{ $active: string }>(
  ({ $active }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 2px;
    ${(() => {
      switch ($active) {
        case "Yes":
          return css`
            background-color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($active) {
        case "Yes":
          return css`
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($active) {
        case "Yes":
          return css`
            color: ${"#fefefe"};
          `;
        case "No":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOptionTitle = styled.div<{ $active: string }>(
  ({ $active }) => css`
    ${(() => {
      switch ($active) {
        case "Yes":
          return css`
            color: ${"#fefefe"};
          `;
        case "No":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
    &:hover {
      ${css`
        color: ${"#fefefe"};
      `}
    }
  `,
);

/** A single item within an option bar (tab-like navigation strip). Supports text or icon display modes, active/inactive states, and hover interactions. Typically used as a selectable option within a group of mutually exclusive choices. */
export const OptionBarItem = React.forwardRef<
  HTMLButtonElement,
  OptionBarItemProps
>(function OptionBarItem({ type = "Text", selected, ...rest }, ref) {
  const active = selected ? "Yes" : "No";
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
      {type === "Text" && (
        <StyledOptionTitle $active={active}>{"Switch"}</StyledOptionTitle>
      )}
      {type === "Icon" && <LeftAlignText />}
    </StyledRoot>
  );
});
