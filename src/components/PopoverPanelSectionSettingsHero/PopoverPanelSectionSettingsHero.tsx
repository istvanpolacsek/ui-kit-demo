import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { TypeSelector } from "../TypeSelector";
import { OptionGridSimple } from "../OptionGridSimple";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface PopoverPanelSectionSettingsHeroProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Overlay" | "Modular" | "Sidebar";
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

/** A popover panel for configuring hero section settings, supporting Overlay, Modular, and Sidebar layout type variants. */
export const PopoverPanelSectionSettingsHero = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsHeroProps
>(function PopoverPanelSectionSettingsHero({ type = "Modular", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Hero section settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel type={"No tabs"} />
      <TypeSelector state={"Default"} />
      {type === "Modular" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Hero layout"}
        />
      )}
      <OptionBarLabeled
        number={"1 option"}
        active={"1"}
        type={"Enabled"}
        hasDescription={false}
      />
    </StyledRoot>
  );
});
