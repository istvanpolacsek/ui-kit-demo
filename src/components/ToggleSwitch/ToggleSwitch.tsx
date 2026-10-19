import React from "react";
import styled, { css } from "styled-components";

export interface ToggleSwitchProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "size" | "checked" | "disabled" | "focused"
> {
  size?: "Default" | "Small";
  checked?: "No" | "Yes";
  disabled?: "No" | "Yes";
  focused?: "No" | "Yes";
}

const StyledRoot = styled.div<{
  $size: "Default" | "Small";
  $checked: "No" | "Yes";
  $focused: "No" | "Yes";
}>(
  ({ theme, $size, $checked, $focused }) => css`
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    ${(() => {
      switch (JSON.stringify([$size, $checked])) {
        case '["Default","No"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 18px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 36px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","No"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 14px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 28px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Yes"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 18px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 36px;
            height: 20px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","Yes"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 14px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: 28px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Default":
          return css`
            width: 36px;
            height: 20px;
            box-sizing: border-box;
          `;
        case "Small":
          return css`
            width: 28px;
            height: 16px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($checked) {
        case "No":
          return css`
            background-color: ${theme["Background"]["Tertiary"]};
          `;
        case "Yes":
          return css`
            background-color: ${theme["Border"]["Info"]};
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

const StyledToggle = styled.div<{
  $size: "Default" | "Small";
  $checked: "No" | "Yes";
}>(
  ({ theme, $size, $checked }) => css`
    overflow: hidden;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    ${(() => {
      switch ($size) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Small":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 12px;
            height: 12px;
            box-sizing: border-box;
            flex-shrink: 0;
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
        default:
          return css``;
      }
    })()}
  `,
);

/** A toggle switch component that allows users to switch between two states (on/off). Supports default and small sizes, checked/unchecked states, disabled, and focused variants. */
export const ToggleSwitch = React.forwardRef<HTMLDivElement, ToggleSwitchProps>(
  function ToggleSwitch(
    {
      size = "Default",
      checked = "No",
      disabled = "No",
      focused = "No",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="switch"
        aria-label="Toggle"
        {...rest}
        ref={ref}
        $size={size}
        $checked={checked}
        $focused={focused}
      >
        <StyledToggle $size={size} $checked={checked}></StyledToggle>
      </StyledRoot>
    );
  },
);
