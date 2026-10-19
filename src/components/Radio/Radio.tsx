import React from "react";
import styled, { css } from "styled-components";

export interface RadioProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "size" | "checked" | "disabled" | "focused"
> {
  size?: "Large" | "Small";
  checked?: "Yes" | "No";
  disabled?: "No" | "Yes";
  focused?: "No" | "Yes";
}

const StyledRoot = styled.div<{
  $size: "Large" | "Small";
  $checked: "Yes" | "No";
  $focused: "No" | "Yes";
}>(
  ({ theme, $size, $checked, $focused }) => css`
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 100px;
    ${(() => {
      switch (JSON.stringify([$size, $checked])) {
        case '["Large","No"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","Yes"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","No"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 1px;
            padding-right: 1px;
            padding-bottom: 1px;
            padding-left: 1px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Large","Yes"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 3px;
            padding-right: 3px;
            padding-bottom: 3px;
            padding-left: 3px;
            gap: 8px;
            justify-content: flex-start;
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
      switch (JSON.stringify([$size, $checked])) {
        case '["Large","No"]':
          return css`
            width: 20px;
            height: 20px;
            box-sizing: border-box;
          `;
        case '["Small","No"]':
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
      switch ($focused) {
        case "Yes":
          return css`
            background-color: ${theme["Background"]["Primary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($checked) {
        case "No":
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        case "Yes":
          return css`
            border-color: ${theme["Border"]["Info"]};
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

const StyledFrame = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Border"]["Info"]};
    border-radius: 10px;
  `,
);

/** A radio button input component that allows users to select a single option from a group. Supports large and small sizes, checked/unchecked states, disabled state, and focused state. */
export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  function Radio(
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
      >
        {checked === "Yes" && <StyledFrame></StyledFrame>}
      </StyledRoot>
    );
  },
);
