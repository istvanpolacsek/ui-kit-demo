import React from "react";
import styled, { css } from "styled-components";
import { Add } from "../Add";

export interface TertiaryButtonNeutralProps extends Omit<
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
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#333333"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      ${(() => {
        switch ($mode) {
          case "Light":
            return css`
              background-color: ${"#0f0f0f"};
            `;
          case "Dark":
            return css`
              background-color: ${"#d1d1d1"};
            `;
          default:
            return css``;
        }
      })()}
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
  $mode: "Dark" | "Light";
  $hasIcon: "True" | "False";
  $size: "Regular" | "Small" | "Large";
}>(
  ({ $mode, $hasIcon, $size }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$mode, $hasIcon, $size])) {
        case '["Light","True","Small"]':
          return css`
            font-family: "Work Sans";
            font-size: 10px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0.01em;
          `;
        case '["Light","False","Small"]':
          return css`
            font-family: "Work Sans";
            font-size: 10px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0.01em;
          `;
        case '["Dark","True","Small"]':
          return css`
            font-family: "Work Sans";
            font-size: 10px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0.01em;
          `;
        case '["Dark","False","Small"]':
          return css`
            font-family: "Work Sans";
            font-size: 10px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: 0.01em;
          `;
        default:
          return css``;
      }
    })()}
  &:disabled {
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

/** A tertiary neutral button component used for low-emphasis actions. Supports multiple sizes (Small, Regular, Large), states (Default, Hover, Disabled), light/dark modes, and an optional leading icon. */
export const TertiaryButtonNeutral = React.forwardRef<
  HTMLButtonElement,
  TertiaryButtonNeutralProps
>(function TertiaryButtonNeutral(
  { mode = "Light", hasIcon = "True", size = "Large", ...rest },
  ref,
) {
  return (
    <StyledRoot
      {...rest}
      ref={ref}
      $hasIcon={hasIcon}
      $size={size}
      $mode={mode}
    >
      {hasIcon === "True" && <Add />}
      <StyledTertiaryButton $mode={mode} $hasIcon={hasIcon} $size={size}>
        {"Tertiary button"}
      </StyledTertiaryButton>
    </StyledRoot>
  );
});
