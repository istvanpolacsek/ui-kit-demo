import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionGridSimple } from "../OptionGridSimple";

export interface PopoverPanelMoveSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Default";
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

/** A popover panel that allows users to move a section, containing a header and a grid of movement options. */
export const PopoverPanelMoveSection = React.forwardRef<
  HTMLElement,
  PopoverPanelMoveSectionProps
>(function PopoverPanelMoveSection({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Move section" {...rest} ref={ref}>
      <HeaderPopoverPanel type={"No tabs"} />
      <OptionGridSimple
        isHardToSee={false}
        hasSubheader={true}
        type={"Move section"}
      />
    </StyledRoot>
  );
});
