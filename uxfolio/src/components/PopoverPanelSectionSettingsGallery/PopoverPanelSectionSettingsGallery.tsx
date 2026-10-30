import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { ImageManagerMultiple } from "../ImageManagerMultiple";
import { TypeSelector } from "../TypeSelector";
import { OptionSliderLabeled } from "../OptionSliderLabeled";
import { OptionGridSimple } from "../OptionGridSimple";

export interface PopoverPanelSectionSettingsGalleryProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "tab"
> {
  tab?: "Images" | "Layout" | "Devices (none)" | "Devices";
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

/** A popover panel for configuring gallery section settings, with tabbed views for Images, Layout, and Devices options. Renders different controls based on the active tab variant. */
export const PopoverPanelSectionSettingsGallery = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsGalleryProps
>(function PopoverPanelSectionSettingsGallery(
  { tab = "Images", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Gallery section settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel
        type={"Tabs"}
        number={"3"}
        selected={"1"}
        mode={"Dark"}
      />
      {tab === "Images" && <ImageManagerMultiple reorder={"False"} />}
      {["Layout", "Devices (none)", "Devices"].includes(tab) && (
        <TypeSelector state={"Default"} />
      )}
      {tab === "Layout" && <OptionSliderLabeled value={"25%"} type={"Value"} />}
      {["Devices (none)", "Devices"].includes(tab) && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Aspect ratio"}
        />
      )}
      {tab === "Devices" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Device color"}
        />
      )}
      {tab === "Devices" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Corner radius"}
        />
      )}
      {tab === "Devices" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Shadow"}
        />
      )}
    </StyledRoot>
  );
});
