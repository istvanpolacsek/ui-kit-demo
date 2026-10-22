import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionBarLabeled } from "../OptionBarLabeled";
import { OptionGridSimple } from "../OptionGridSimple";
import { OptionToggleLabeled } from "../OptionToggleLabeled";

export interface PopoverPanelSectionSettingsFooterProps extends Omit<
  React.ComponentPropsWithoutRef<"footer">,
  "type"
> {
  type?: "Case study" | "Portfolio";
}

const StyledRoot = styled.footer(
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

/** Footer section of a popover panel used for section settings, providing configuration options such as type selection (e.g., Case study or Portfolio) via labeled option bars and toggles. */
export const PopoverPanelSectionSettingsFooter = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsFooterProps
>(function PopoverPanelSectionSettingsFooter(
  { type = "Portfolio", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="contentinfo"
      aria-label="Section settings footer"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel type={"No tabs"} />
      <OptionBarLabeled
        number={"1 option"}
        active={"1"}
        type={"Enabled"}
        hasDescription={false}
      />
      <OptionGridSimple
        isHardToSee={false}
        hasSubheader={true}
        type={"Line weight"}
      />
      <OptionToggleLabeled state={"Off"} numberOfItems={3} />
    </StyledRoot>
  );
});
