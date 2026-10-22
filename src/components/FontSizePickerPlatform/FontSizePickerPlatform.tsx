import React from "react";
import styled, { css } from "styled-components";

export interface FontSizePickerPlatformProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Dropdown only" | "Text & dropdown" | "text only";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 16px;
    padding-bottom: 10px;
    padding-left: 16px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #333333;
    border-radius: 4px;
    color: #adadad;
    &:hover {
      background-color: #3d3d3d;
    }
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #adadad;
  `,
);

/** A font size picker component for platform use, supporting dropdown-only, text-and-dropdown, or text-only variants with default and hover states. Allows users to select or input a font size value. */
export const FontSizePickerPlatform = React.forwardRef<
  HTMLDivElement,
  FontSizePickerPlatformProps
>(function FontSizePickerPlatform({ type = "Dropdown only", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Font size" {...rest} ref={ref}>
      <StyledLabel>
        {
          (
            {
              '["Dropdown only"]': "L",
              '["Text & dropdown"]': "64",
              '["text only"]': "64",
            } as Record<string, string>
          )[JSON.stringify([type])]
        }
      </StyledLabel>
    </StyledRoot>
  );
});
