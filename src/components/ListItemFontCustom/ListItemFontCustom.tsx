import React from "react";
import styled, { css } from "styled-components";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { DropListLabelless } from "../DropListLabelless";
import { FontSizePickerDefault } from "../FontSizePickerDefault";
import { ColorStyle } from "../ColorStyle";

export interface ListItemFontCustomProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Grouped" | "Individual";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 288px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #adadad;
  `,
);

const StyledLabel = styled.div<{ $type: "Grouped" | "Individual" }>(
  ({ $type }) => css`
    position: relative;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Grouped":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 40px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Individual":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel2 = styled.label(
  () => css`
    color: #fefefe;
  `,
);

const StyledIconOnlyPrimaryButtonSubtle = styled.div(
  () => css`
    position: absolute;
    right: -6px;
    top: -6px;
    width: 36px;
    height: 36px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDropListLabelless = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledSecondRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDropListLabelless2 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A list item component for configuring custom font settings, containing a label/heading section and a content area with font-related controls such as font family pickers, font size selector, and color style chooser. Supports grouped and individual display variants. */
export const ListItemFontCustom = React.forwardRef<
  HTMLDivElement,
  ListItemFontCustomProps
>(function ListItemFontCustom({ type = "Grouped", ...rest }, ref) {
  return (
    <StyledRoot
      role="group"
      aria-label="Font custom settings"
      {...rest}
      ref={ref}
    >
      <StyledLabel $type={type}>
        <StyledLabel2>{"Title & heading"}</StyledLabel2>
        {type === "Grouped" && (
          <StyledIconOnlyPrimaryButtonSubtle>
            <IconOnlyPrimaryButtonSubtle
              state={"Default (no BG)"}
              size={"Small"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryButtonSubtle>
        )}
      </StyledLabel>
      <StyledContent>
        <StyledDropListLabelless>
          <DropListLabelless mode={"Dark"} />
        </StyledDropListLabelless>
        <StyledSecondRow>
          <StyledDropListLabelless2>
            <DropListLabelless mode={"Dark"} />
          </StyledDropListLabelless2>
          <FontSizePickerDefault type={"Dropdown only"} />
          <ColorStyle type={"Solid"} style={"Custom"} />
        </StyledSecondRow>
      </StyledContent>
    </StyledRoot>
  );
});
