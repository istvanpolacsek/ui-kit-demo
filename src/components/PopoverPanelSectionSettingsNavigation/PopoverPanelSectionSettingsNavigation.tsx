import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { TypeSelector } from "../TypeSelector";
import { OptionGridSimple } from "../OptionGridSimple";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface PopoverPanelSectionSettingsNavigationProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "tab"
> {
  tab?: "Layout simple" | "Layout complex" | "Layout sidebar" | "Menu item";
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

/** A popover panel section for configuring navigation settings, offering multiple layout variants (simple, complex, sidebar, menu item) via tab-based selection and option controls. */
export const PopoverPanelSectionSettingsNavigation = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsNavigationProps
>(function PopoverPanelSectionSettingsNavigation(
  { tab = "Layout simple", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Navigation settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel
        type={"Tabs"}
        number={"2"}
        selected={"1"}
        mode={"Dark"}
      />
      {["Layout simple", "Layout complex"].includes(tab) && (
        <TypeSelector state={"Default"} />
      )}
      {["Layout simple", "Layout sidebar", "Menu item"].includes(tab) && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Nav position normal"}
        />
      )}
      <OptionBarLabeled
        number={"1 option"}
        active={"1"}
        type={"Enabled"}
        hasDescription={false}
      />
      {tab === "Menu item" && (
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Enabled"}
          hasDescription={false}
        />
      )}
    </StyledRoot>
  );
});
