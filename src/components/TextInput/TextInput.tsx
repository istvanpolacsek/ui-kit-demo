import React from "react";
import styled, { css } from "styled-components";

export interface TextInputProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "dropdown" | "size"
> {
  dropdown?: boolean;
  size?: "Default" | "Large";
}

const StyledRoot = styled.div<{ $size: "Default" | "Large" }>(
  ({ theme, $size }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Primary"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Secondary"]};
    border-radius: 8px;
    ${(() => {
      switch ($size) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 12px;
            padding-bottom: 0px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 181px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Large":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 12px;
            padding-bottom: 0px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 181px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Text"]["Tertiary"]};
    &:active {
      border-color: ${theme["Border"]["Primary"]};
    }
    &:active {
      box-shadow:
        0px 0px 0px 2px rgba(255, 255, 255, 1),
        0px 0px 0px 3.5px rgba(50, 102, 173, 0.5);
    }
  `,
);

const StyledPlaceholder = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Tertiary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

/** A text input field component that supports multiple sizes (Default, Large) and states (Default, Active, Disabled), with an optional dropdown variant. Wraps a native input with placeholder text support. */
export const TextInput = React.forwardRef<HTMLDivElement, TextInputProps>(
  function TextInput({ dropdown = false, size = "Large", ...rest }, ref) {
    return (
      <StyledRoot {...rest} ref={ref} $size={size}>
        <StyledPlaceholder>{"Placeholder"}</StyledPlaceholder>
      </StyledRoot>
    );
  },
);
