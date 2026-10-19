import React from "react";
import styled, { css } from "styled-components";

export interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "size" | "checked" | "disabled" | "focused"
> {
  size?: "Large" | "Small";
  checked?: "No" | "Yes";
  disabled?: "No" | "Yes";
  focused?: "No" | "Yes";
}

const StyledRoot = styled.span<{
  $size: "Large" | "Small";
  $checked: "No" | "Yes";
  $focused: "No" | "Yes";
}>(
  ({ theme, $size, $checked, $focused }) => css`
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$size, $checked])) {
        case '["Small","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Large","Yes"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 3.75px;
            padding-right: 3.75px;
            padding-bottom: 3.75px;
            padding-left: 3.75px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            width: 20px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Small":
          return css`
            width: 16px;
            height: 16px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$checked, $focused])) {
        case '["No","No"]':
          return css`
            background-color: ${theme["Text"]["Inverse"]};
          `;
        case '["Yes","No"]':
          return css`
            background-color: ${theme["Border"]["Info"]};
          `;
        case '["No","Yes"]':
          return css`
            background-color: ${theme["Background"]["Primary"]};
          `;
        case '["Yes","Yes"]':
          return css`
            background-color: ${theme["Border"]["Info"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$checked, $focused])) {
        case '["No","No"]':
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        case '["Yes","No"]':
          return css`
            border-color: ${theme["Border"]["Info"]};
          `;
        case '["No","Yes"]':
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        case '["Yes","Yes"]':
          return css`
            border-color: ${theme["Border"]["Info"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($size) {
        case "Large":
          return css`
            border-radius: 6px;
          `;
        case "Small":
          return css`
            border-radius: 4px;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($focused) {
        case "Yes":
          return css`
            box-shadow:
              0px 0px 0px 2px rgba(255, 255, 255, 1),
              0px 0px 0px 3.5px rgba(50, 102, 173, 0.5);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(
  function Checkbox(
    {
      size = "Large",
      checked = "No",
      disabled = "No",
      focused = "No",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        $size={size}
        $checked={checked}
        $focused={focused}
      ></StyledRoot>
    );
  },
);
