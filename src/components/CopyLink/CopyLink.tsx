import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";

export interface CopyLinkProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "mode"
> {
  state?: "Default" | "Hover" | "Copied";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.button<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 6px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#d1d1d1"};
          `;
        case "Dark":
          return css`
            border-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
    color: #adadad;
  `,
);

const StyledURL = styled.span(
  () => css`
    color: #adadad;
  `,
);

/** A button that copies a URL to the clipboard. Displays the URL text alongside a copy icon, with visual states for default, hover, and copied confirmation. Supports light and dark display modes. */
export const CopyLink = React.forwardRef<HTMLButtonElement, CopyLinkProps>(
  function CopyLink({ state = "Default", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Copy link" {...rest} ref={ref} $mode={mode}>
        <StyledURL>{"uxfol.io/nathandavidson"}</StyledURL>
        <IconOnlyPrimaryButtonSubtle
          state={"Default"}
          size={"Small"}
          mode={"Light"}
        />
      </StyledRoot>
    );
  },
);
