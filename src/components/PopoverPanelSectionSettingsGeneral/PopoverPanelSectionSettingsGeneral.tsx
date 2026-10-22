import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionBarLabeled } from "../OptionBarLabeled";

export interface PopoverPanelSectionSettingsGeneralProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "modules"
> {
  modules?: "Two" | "One";
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

/** A popover panel section for configuring general settings, containing a header and a labeled option bar for selecting module layout (one or two modules). */
export const PopoverPanelSectionSettingsGeneral = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsGeneralProps
>(function PopoverPanelSectionSettingsGeneral(
  { modules = "One", ...rest },
  ref,
) {
  return (
    <StyledRoot role="region" aria-label="General settings" {...rest} ref={ref}>
      <HeaderPopoverPanel type={"No tabs"} />
      <OptionBarLabeled
        number={"1 option"}
        active={"1"}
        type={"Enabled"}
        hasDescription={false}
      />
    </StyledRoot>
  );
});
