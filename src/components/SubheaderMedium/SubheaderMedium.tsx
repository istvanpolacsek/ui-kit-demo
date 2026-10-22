import React from "react";
import styled, { css } from "styled-components";
import { TagFilled } from "../TagFilled";
import { IconButton } from "../IconButton";

export interface SubheaderMediumProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasTag" | "hasIcon" | "mode"
> {
  hasTag?: boolean;
  hasIcon?: boolean;
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

/** A medium-sized subheader component that displays a label with optional tag and icon button. Supports light and dark display modes. */
export const SubheaderMedium = React.forwardRef<
  HTMLDivElement,
  SubheaderMediumProps
>(function SubheaderMedium(
  { hasTag = false, hasIcon = false, mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="heading"
      aria-label="Subheader"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledLabel $mode={mode}>{"Label"}</StyledLabel>
      {hasTag && <TagFilled type={"Emphasized"} />}
      {hasIcon && <IconButton importance={"High"} mode={"Light"} />}
    </StyledRoot>
  );
});
