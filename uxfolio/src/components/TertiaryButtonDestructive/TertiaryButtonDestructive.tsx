import React from "react";
import styled, { css } from "styled-components";
import { Add } from "../Add";

export interface TertiaryButtonDestructiveProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "mode" | "hasIcon" | "size"
> {
  mode?: "Dark" | "Light";
  hasIcon?: "True" | "False";
  size?: "Regular" | "Small" | "Large";
}

const StyledRoot = styled.button<{
  $hasIcon: "True" | "False";
  $size: "Regular" | "Small" | "Large";
  $mode: "Dark" | "Light";
}>(
  ({ $hasIcon, $size, $mode }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    border-radius: 999px;
    ${(() => {
      switch (JSON.stringify([$hasIcon, $size])) {
        case '["True","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Regular"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 14px;
            padding-bottom: 6px;
            padding-left: 10px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 10px;
            padding-bottom: 4px;
            padding-left: 6px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Regular"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 6px;
            padding-right: 14px;
            padding-bottom: 6px;
            padding-left: 14px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 10px;
            padding-bottom: 4px;
            padding-left: 10px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${css`
      background-color: ${"#ef4444"};
    `}
  ${css`
      color: ${"#fefefe"};
    `}
  &:hover:not(:disabled) {
      ${css`
        background-color: ${"#f48787"};
      `}
    }
    &:disabled {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${"#eeeeee"};
            `;
          case "Dark":
            return css`
              background-color: ${"#262626"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

const StyledTertiaryButton = styled.span<{
  $size: "Regular" | "Small" | "Large";
  $mode: "Dark" | "Light";
}>(
  ({ $size, $mode }) => css`
    ${css`
      color: ${"#fefefe"};
    `}
    ${(() => {
      switch ($size) {
        case "Small":
          return css`
            font-family: var(--font-work-sans, "Work Sans"), sans-serif;
            font-size: 10px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0.01em;
          `;
        default:
          return css``;
      }
    })()}
  &:is(button:disabled *) {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              color: ${"#adadad"};
            `;
          case "Dark":
            return css`
              color: ${"#4d4c4c"};
            `;
          default:
            return css``;
        }
      })()}
    }
  `,
);

/** A tertiary destructive button used to trigger irreversible or high-risk actions. Supports icon display, multiple sizes, light/dark modes, and interactive states including hover and disabled. */
export const TertiaryButtonDestructive = React.forwardRef<
  HTMLButtonElement,
  TertiaryButtonDestructiveProps
>(function TertiaryButtonDestructive(
  { mode = "Light", hasIcon = "True", size = "Large", ...rest },
  ref,
) {
  return (
    <StyledRoot
      type="button"
      {...rest}
      ref={ref}
      $hasIcon={hasIcon}
      $size={size}
      $mode={mode}
    >
      {hasIcon === "True" && <Add />}
      <StyledTertiaryButton $size={size} $mode={mode}>
        {"Tertiary button"}
      </StyledTertiaryButton>
    </StyledRoot>
  );
});
