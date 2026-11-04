import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ButtonMasterProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  | "leftIcon"
  | "rightIcon"
  | "label"
  | "bTNValue"
  | "iconOnly"
  | "device"
  | "size"
> {
  leftIcon?: boolean;
  rightIcon?: boolean;
  label?: boolean;
  bTNValue?: string;
  iconOnly?: "False" | "True";
  device?: "Desktop" | "Mobile";
  size?: "Large" | "Medium" | "Small";
}

const StyledRoot = styled.button<{
  $iconOnly: "False" | "True";
  $device: "Desktop" | "Mobile";
  $size: "Large" | "Medium" | "Small";
}>(
  ({ theme, $iconOnly, $device, $size }) => css`
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
    background-color: ${theme["accent"]["accentGray"]};
    border-radius: 8px;
    ${(() => {
      switch (JSON.stringify([$iconOnly, $device, $size])) {
        case '["False","Desktop","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Mobile","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 20px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Desktop","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Mobile","Large"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Desktop","Medium"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 20px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Desktop","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Mobile","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Desktop","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Mobile","Small"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["False","Mobile","Medium"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Desktop","Medium"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case '["True","Mobile","Medium"]':
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["button"]["Inverted"]["default"]};
  `,
);

const StyledTextContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledButton = styled.span<{
  $device: "Desktop" | "Mobile";
  $size: "Large" | "Medium" | "Small";
}>(
  ({ theme, $device, $size }) => css`
    color: ${theme["button"]["Inverted"]["default"]};
    ${(() => {
      switch (JSON.stringify([$device, $size])) {
        case '["Desktop","Large"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            text-transform: capitalize;
          `;
        case '["Mobile","Large"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            text-transform: capitalize;
          `;
        case '["Desktop","Medium"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            text-transform: capitalize;
          `;
        case '["Desktop","Small"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            text-transform: capitalize;
          `;
        case '["Mobile","Small"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.5;
            text-transform: capitalize;
          `;
        case '["Mobile","Medium"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.5;
            text-transform: capitalize;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A versatile button component supporting optional left/right icons, a text label, and icon-only mode. Available in multiple sizes (Large, Medium, Small) and optimized for Desktop and Mobile devices. */
export const ButtonMaster = React.forwardRef<
  HTMLButtonElement,
  ButtonMasterProps
>(function ButtonMaster(
  {
    leftIcon = true,
    rightIcon = true,
    label = true,
    bTNValue = "Button",
    iconOnly = "False",
    device = "Desktop",
    size = "Large",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      type="button"
      {...rest}
      ref={ref}
      $iconOnly={iconOnly}
      $device={device}
      $size={size}
    >
      {leftIcon && <Icon name={"keyboard_arrow_down"} size={24} />}
      {label && (
        <StyledTextContent>
          {iconOnly === "False" && (
            <StyledButton $device={device} $size={size}>
              {bTNValue}
            </StyledButton>
          )}
        </StyledTextContent>
      )}
      {rightIcon && <Icon name={"keyboard_arrow_down"} size={24} />}
    </StyledRoot>
  );
});
