import React from "react";
import styled, { css } from "styled-components";
import { TagFilled } from "../TagFilled";
import { IconButton } from "../IconButton";
import { ToggleSwitch } from "../ToggleSwitch";

export interface SubheaderLargeProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasTag" | "hasIcon" | "hasSwitch" | "mode"
> {
  hasTag?: boolean;
  hasIcon?: boolean;
  hasSwitch?: boolean;
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.div<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.h3<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A large subheader component that displays a section label with optional tag, icon button, and toggle switch. Used to introduce or label content sections with optional interactive controls. */
export const SubheaderLarge = React.forwardRef<
  HTMLDivElement,
  SubheaderLargeProps
>(function SubheaderLarge(
  {
    hasTag = false,
    hasIcon = false,
    hasSwitch = false,
    mode = "Light",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Subheader"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledLabel $mode={mode}>{"Label"}</StyledLabel>
      {hasTag && <TagFilled type={"Emphasized"} />}
      {hasIcon && <IconButton importance={"High"} mode={"Light"} />}
      {hasSwitch && <ToggleSwitch state={"False"} mode={"Dark"} />}
    </StyledRoot>
  );
});
