import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface PopoverPanelSectionSettingsLogoWallProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "colors"
> {
  colors?: "Original" | "Unified";
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

/** A popover panel section for configuring Logo Wall settings, allowing users to toggle between Original and Unified color modes for displayed logos. */
export const PopoverPanelSectionSettingsLogoWall = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsLogoWallProps
>(function PopoverPanelSectionSettingsLogoWall(
  { colors = "Original", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Logo wall settings"
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
      {colors === "Unified" && (
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Enabled"}
          hasDescription={false}
        />
      )}
      {colors === "Unified" && (
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
