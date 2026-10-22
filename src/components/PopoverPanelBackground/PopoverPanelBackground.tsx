import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { SmallTypeSelector } from "../SmallTypeSelector";
import { ColorSelector } from "../ColorSelector";
import { OptionBarLabeled } from "../OptionBarLabeled";
import { OptionGridSimple } from "../OptionGridSimple";
import { ImageManagerSingle } from "../ImageManagerSingle";

export interface PopoverPanelBackgroundProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "None" | "Solid" | "Gradient" | "Image";
}

const StyledRoot = styled.div(
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

/** A popover panel background component that supports multiple visual styles (None, Solid, Gradient, or Image) as its backdrop. Contains a header, type selector, color selector, option bar, option grid, and image manager, conditionally rendered based on the selected variant. */
export const PopoverPanelBackground = React.forwardRef<
  HTMLDivElement,
  PopoverPanelBackgroundProps
>(function PopoverPanelBackground({ type = "None", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Popover panel background"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel type={"No tabs"} />
      <SmallTypeSelector state={"Default"} />
      {["Solid", "Gradient"].includes(type) && <ColorSelector type={"Solid"} />}
      {["Solid", "Gradient", "Image"].includes(type) && (
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Enabled"}
          hasDescription={false}
        />
      )}
      {type === "Gradient" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Section background"}
        />
      )}
      {type === "Image" && (
        <ImageManagerSingle
          hasDescription={true}
          hasLabel={true}
          state={"Empty"}
        />
      )}
    </StyledRoot>
  );
});
