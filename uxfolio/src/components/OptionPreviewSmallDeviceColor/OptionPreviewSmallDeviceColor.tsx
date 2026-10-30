import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewSmallDeviceColorProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "color"
> {
  color?: "Light" | "Dark";
}

const StyledRoot = styled.span<{ $color: "Light" | "Dark" }>(
  ({ $color }) => css`
    background-color: #262626;
    border-radius: 0px;
    ${(() => {
      switch ($color) {
        case "Dark":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 13px;
            padding-right: 13px;
            padding-bottom: 13px;
            padding-left: 13px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 59px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Light":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 14px;
            padding-bottom: 14px;
            padding-left: 14px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 59px;
            height: 59px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 59px;
    height: 59px;
    box-sizing: border-box;
  `,
);

const StyledColor = styled.span<{ $color: "Light" | "Dark" }>(
  ({ $color }) => css`
    width: 33px;
    height: 33px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($color) {
        case "Dark":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A small color swatch preview for a device option, visually representing either a Light or Dark color variant. */
export const OptionPreviewSmallDeviceColor = React.forwardRef<
  HTMLSpanElement,
  OptionPreviewSmallDeviceColorProps
>(function OptionPreviewSmallDeviceColor({ color = "Dark", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Device color option"
      {...rest}
      ref={ref}
      $color={color}
    >
      <StyledColor $color={color} />
    </StyledRoot>
  );
});
