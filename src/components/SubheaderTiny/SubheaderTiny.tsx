import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";

export interface SubheaderTinyProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasIcon" | "mode"
> {
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
    align-items: flex-start;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#adadad"};
          `;
        case "Dark":
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#adadad"};
          `;
        case "Dark":
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A small subheader/label component that displays a short text label, optionally accompanied by an icon. Supports light and dark display modes. */
export const SubheaderTiny = React.forwardRef<
  HTMLDivElement,
  SubheaderTinyProps
>(function SubheaderTiny({ hasIcon = false, mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="heading"
      aria-label="Subheader label"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <StyledLabel $mode={mode}>{"Label"}</StyledLabel>
      {hasIcon && <IconButton importance={"Low"} mode={"Light"} />}
    </StyledRoot>
  );
});
