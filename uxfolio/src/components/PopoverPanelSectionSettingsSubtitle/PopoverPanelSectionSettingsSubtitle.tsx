import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface PopoverPanelSectionSettingsSubtitleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "tab"
> {
  tab?: "Default";
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

/** A popover panel section displaying subtitle settings, composed of a labeled header and an option bar for configuring subtitle-related properties. */
export const PopoverPanelSectionSettingsSubtitle = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsSubtitleProps
>(function PopoverPanelSectionSettingsSubtitle(
  { tab = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Subtitle settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel type={"No tabs"} />
      <OptionBarLabeled
        number={"1 option"}
        active={"1"}
        hasDescription={false}
      />
    </StyledRoot>
  );
});
