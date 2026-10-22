import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { ColorStyle } from "../ColorStyle";

export interface ListItemCustomColorProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "selected"
> {
  state?: "Default" | "Hover color" | "Hover edit";
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{
  $hasGroup: string;
  $state: "Default" | "Hover color" | "Hover edit";
}>(
  ({ $hasGroup, $state }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($hasGroup) {
        case "True":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 40px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
          `;
        case "False":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#adadad"};
          `;
        case "Hover color":
          return css`
            color: ${"#fefefe"};
          `;
        case "Hover edit":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIconOnlyPrimaryButtonSubtle = styled.div(
  () => css`
    position: absolute;
    right: -6px;
    top: 4px;
    width: 36px;
    height: 36px;
  `,
);

const StyledLabel = styled.span<{
  $state: "Default" | "Hover color" | "Hover edit";
}>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#adadad"};
          `;
        case "Hover color":
          return css`
            color: ${"#fefefe"};
          `;
        case "Hover edit":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A list item component with a customizable color style, optional group indicator, and interactive states including default, hover with color, and hover with edit functionality. */
export const ListItemCustomColor = React.forwardRef<
  HTMLButtonElement,
  ListItemCustomColorProps
>(function ListItemCustomColor({ state = "Default", selected, ...rest }, ref) {
  const hasGroup = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $hasGroup={hasGroup}
      $state={state}
    >
      {hasGroup === "True" && (
        <StyledIconOnlyPrimaryButtonSubtle>
          <IconOnlyPrimaryButtonSubtle
            state={"Default (no BG)"}
            size={"Small"}
            mode={"Dark"}
          />
        </StyledIconOnlyPrimaryButtonSubtle>
      )}
      <ColorStyle type={"Solid"} style={"Custom"} />
      <StyledLabel $state={state}>{"Title & heading"}</StyledLabel>
    </StyledRoot>
  );
});
