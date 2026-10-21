import React from "react";
import styled, { css } from "styled-components";

export interface ButtonMobileProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "icon" | "icon2" | "icon3" | "type" | "size" | "state" | "icon4"
> {
  icon?: boolean;
  icon2?: string;
  icon3?: string;
  type?: "Primary" | "Secondary" | "Destructive";
  size?: "Large" | "Small";
  state?: "Resting" | "Disabled";
  icon4?: "False";
}

const StyledRoot = styled.button<{
  $size: "Large" | "Small";
  $type: "Primary" | "Secondary" | "Destructive";
  $state: "Resting" | "Disabled";
}>(
  ({ theme, $size, $type, $state }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 999px;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 44px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Primary","Resting"]':
          return css`
            background-color: ${"#131313"};
          `;
        case '["Primary","Disabled"]':
          return css`
            background-color: ${theme["Background"]["Inverse"]};
          `;
        case '["Destructive","Resting"]':
          return css`
            background-color: ${theme["Background"]["Danger"]};
          `;
        case '["Destructive","Disabled"]':
          return css`
            background-color: ${theme["Background"]["Danger"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "Secondary":
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Primary","Resting"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Primary","Disabled"]':
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        case '["Secondary","Resting"]':
          return css`
            color: ${"#131313"};
          `;
        case '["Secondary","Disabled"]':
          return css`
            color: ${"#131313"};
          `;
        case '["Destructive","Resting"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Destructive","Disabled"]':
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledButton = styled.span<{
  $type: "Primary" | "Secondary" | "Destructive";
  $state: "Resting" | "Disabled";
  $size: "Large" | "Small";
}>(
  ({ theme, $type, $state, $size }) => css`
    ${(() => {
      switch (JSON.stringify([$type, $state])) {
        case '["Primary","Resting"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Primary","Disabled"]':
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        case '["Secondary","Resting"]':
          return css`
            color: ${"#131313"};
          `;
        case '["Secondary","Disabled"]':
          return css`
            color: ${"#131313"};
          `;
        case '["Destructive","Resting"]':
          return css`
            color: ${"#ffffff"};
          `;
        case '["Destructive","Disabled"]':
          return css`
            color: ${theme["Text"]["Inverse"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: "Anthropic Sans Text";
            font-size: 16px;
            font-weight: 400;
            line-height: 22.4px;
          `;
        case "Small":
          return css`
            font-family: "Anthropic Sans Text";
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A mobile button component supporting Primary, Secondary, and Destructive variants in Large and Small sizes, with optional icon support and Disabled state. */
export const ButtonMobile = React.forwardRef<
  HTMLButtonElement,
  ButtonMobileProps
>(function ButtonMobile(
  {
    icon = true,
    icon2 = "448:4926",
    icon3 = "448:4926",
    type = "Primary",
    size = "Large",
    state = "Resting",
    icon4 = "False",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref} $size={size} $type={type} $state={state}>
      <StyledButton $type={type} $state={state} $size={size}>
        {"Button"}
      </StyledButton>
    </StyledRoot>
  );
});
