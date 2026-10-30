import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionGridSimple } from "../OptionGridSimple";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface PopoverPanelSectionSettingsDividerLineProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "colors"
> {
  colors?: "Original";
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

/** A popover panel section for configuring divider line settings, containing a header and option grids for style customization. */
export const PopoverPanelSectionSettingsDividerLine = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsDividerLineProps
>(function PopoverPanelSectionSettingsDividerLine(
  { colors = "Original", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Divider line settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel type={"No tabs"} />
      <OptionGridSimple
        isHardToSee={false}
        hasSubheader={true}
        type={"Text position"}
      />
      <OptionBarLabeled
        number={"1 option"}
        active={"1"}
        hasDescription={false}
      />
      <OptionGridSimple
        isHardToSee={false}
        hasSubheader={true}
        type={"Line weight"}
      />
    </StyledRoot>
  );
});
