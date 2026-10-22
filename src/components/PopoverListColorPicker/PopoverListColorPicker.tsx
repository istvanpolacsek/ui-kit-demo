import React from "react";
import styled, { css } from "styled-components";
import { TabRow } from "../TabRow";
import { PaletteSwatchSelectorDefault } from "../PaletteSwatchSelectorDefault";
import { SubheaderSmall } from "../SubheaderSmall";
import { ColorPickerEmbedded } from "../ColorPickerEmbedded";

export interface PopoverListColorPickerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "tab"
> {
  tab?: "Palette" | "Custom";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 288px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.24),
      0px 8px 12px 0px rgba(0, 0, 0, 0.2);
  `,
);

const StyledTabBarWrapper = styled.nav(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTabRow = styled.div(
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

const StyledTabContents = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledPaletteSwatchSelectorDefault = styled.div(
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

const StyledColorPickerEmbedded = styled.div(
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

/** A popover panel containing a color picker with tabbed navigation between a palette view and a custom color input view. Supports switching between preset color swatches and a custom color picker. */
export const PopoverListColorPicker = React.forwardRef<
  HTMLDivElement,
  PopoverListColorPickerProps
>(function PopoverListColorPicker({ tab = "Palette", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Color picker" {...rest} ref={ref}>
      <StyledTabBarWrapper>
        <StyledTabRow>
          <TabRow number={2} selected={1} mode={"Dark"} />
        </StyledTabRow>
      </StyledTabBarWrapper>
      {tab === "Palette" && (
        <StyledTabContents>
          {tab === "Palette" && (
            <StyledPaletteSwatchSelectorDefault>
              <PaletteSwatchSelectorDefault selected={"1"} picker={"Default"} />
            </StyledPaletteSwatchSelectorDefault>
          )}
          {tab === "Palette" && <SubheaderSmall hasIcon={true} mode={"Dark"} />}
        </StyledTabContents>
      )}
      {tab === "Custom" && (
        <StyledColorPickerEmbedded>
          <ColorPickerEmbedded type={"HEX"} />
        </StyledColorPickerEmbedded>
      )}
    </StyledRoot>
  );
});
