import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionBarLabeled } from "../OptionBarLabeled";
import { OptionGridSimple } from "../OptionGridSimple";

export interface PopoverPanelSectionSettingsColumnsProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button(
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

/** A popover panel section for configuring column settings, optionally including image options. Contains a labeled option bar and a simple option grid for layout configuration. */
export const PopoverPanelSectionSettingsColumns = React.forwardRef<
  HTMLButtonElement,
  PopoverPanelSectionSettingsColumnsProps
>(function PopoverPanelSectionSettingsColumns({ selected, ...rest }, ref) {
  const hasImages = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
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
      {hasImages === "True" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Height of images"}
        />
      )}
    </StyledRoot>
  );
});
