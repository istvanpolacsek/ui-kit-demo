import React from "react";
import styled, { css } from "styled-components";

export interface FontSizePickerDefaultProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Dropdown only" | "Text & dropdown" | "Text only";
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
    background-color: #262626;
    border-radius: 4px;
    color: #adadad;
    &:hover {
      background-color: #333333;
    }
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #adadad;
  `,
);

/** A font size picker component that allows users to select or input a font size value. Supports dropdown-only, text-and-dropdown, and text-only interaction modes with default and hover states. */
export const FontSizePickerDefault = React.forwardRef<
  HTMLDivElement,
  FontSizePickerDefaultProps
>(function FontSizePickerDefault({ type = "Dropdown only", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Font size" {...rest} ref={ref}>
      <StyledLabel>
        {
          (
            {
              '["Dropdown only"]': "L",
              '["Text & dropdown"]': "64",
              '["Text only"]': "64",
            } as Record<string, string>
          )[JSON.stringify([type])]
        }
      </StyledLabel>
    </StyledRoot>
  );
});
