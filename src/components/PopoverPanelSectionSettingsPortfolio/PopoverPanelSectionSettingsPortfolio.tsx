import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { TypeSelector } from "../TypeSelector";
import { SubheaderSmall } from "../SubheaderSmall";
import { OptionBarOnlyBar } from "../OptionBarOnlyBar";
import { SmallTypeSelector } from "../SmallTypeSelector";
import { OptionBarLabeled } from "../OptionBarLabeled";
import { OptionToggleLabeled } from "../OptionToggleLabeled";

export interface PopoverPanelSectionSettingsPortfolioProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "horizontalVertical" | "horizontalOnly" | "hoverBackground" | "colors"
> {
  horizontalVertical?: boolean;
  horizontalOnly?: boolean;
  hoverBackground?: boolean;
  colors?: "Layout grid" | "Layout list" | "Content";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 24px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 6px 16px 0px rgba(0, 0, 0, 0.32),
      0px 16px 24px 0px rgba(0, 0, 0, 0.24);
  `,
);

const StyledAlignmentOptions = styled.section(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 4px;
  `,
);

const StyledSubheaderSmall = styled.div(
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

const StyledAlignmentOptions2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOptionBarOnlyBar = styled.div(
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

const StyledOptionBarOnlyBar2 = styled.div(
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

/** A popover panel for configuring section settings related to a Portfolio block. Supports layout type selection (grid/list/content), alignment options (horizontal and/or vertical), hover background toggle, and labeled option bars for fine-grained layout control. */
export const PopoverPanelSectionSettingsPortfolio = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsPortfolioProps
>(function PopoverPanelSectionSettingsPortfolio(
  {
    horizontalVertical = false,
    horizontalOnly = true,
    hoverBackground = false,
    colors = "Layout grid",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Portfolio section settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel
        type={"Tabs"}
        number={"2"}
        selected={"1"}
        mode={"Dark"}
      />
      {["Layout grid", "Layout list"].includes(colors) && (
        <TypeSelector state={"Default"} />
      )}
      {horizontalVertical && (
        <StyledAlignmentOptions>
          {colors === "Layout grid" && (
            <StyledSubheaderSmall>
              <SubheaderSmall hasIcon={false} mode={"Dark"} />
            </StyledSubheaderSmall>
          )}
          {colors === "Layout grid" && (
            <StyledAlignmentOptions2>
              {colors === "Layout grid" && (
                <StyledOptionBarOnlyBar>
                  <OptionBarOnlyBar number={3} active={1} type={"Icon"} />
                </StyledOptionBarOnlyBar>
              )}
              {colors === "Layout grid" && (
                <StyledOptionBarOnlyBar2>
                  <OptionBarOnlyBar number={3} active={1} type={"Icon"} />
                </StyledOptionBarOnlyBar2>
              )}
            </StyledAlignmentOptions2>
          )}
        </StyledAlignmentOptions>
      )}
      {["Layout grid", "Layout list"].includes(colors) && (
        <SmallTypeSelector state={"Default"} />
      )}
      {horizontalOnly && (
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Enabled"}
          hasDescription={false}
        />
      )}
      {hoverBackground && (
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Enabled"}
          hasDescription={true}
        />
      )}
      {colors === "Content" && (
        <OptionToggleLabeled state={"Off"} numberOfItems={2} />
      )}
    </StyledRoot>
  );
});
