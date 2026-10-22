import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { TypePreviewBackground } from "../TypePreviewBackground";
import { PopoverListSmallTypeDropdown } from "../PopoverListSmallTypeDropdown";

export interface SmallTypeSelectorProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?: "Default" | "Hover" | "Open";
}

const StyledRoot = styled.button(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #adadad;
  `,
);

const StyledSubheaderSmall = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledTypeSelector = styled.div<{ $state: "Default" | "Hover" | "Open" }>(
  ({ $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"#262626"};
          `;
        case "Hover":
          return css`
            background-color: ${"#333333"};
          `;
        case "Open":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #adadad;
  `,
);

const StyledPopoverListSmallTypeDropdown = styled.div(
  () => css`
    position: absolute;
    left: 4px;
    top: 36px;
    width: 276px;
    height: 232px;
  `,
);

/** A small type selector component that displays a type preview and a label, and opens a popover dropdown when activated. Supports default, hover, and open states. */
export const SmallTypeSelector = React.forwardRef<
  HTMLButtonElement,
  SmallTypeSelectorProps
>(function SmallTypeSelector({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Select type" aria-haspopup {...rest} ref={ref}>
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      <StyledTypeSelector $state={state}>
        <TypePreviewBackground type={"None"} />
        <StyledLabel>{"None"}</StyledLabel>
      </StyledTypeSelector>
      {state === "Open" && (
        <StyledPopoverListSmallTypeDropdown>
          <PopoverListSmallTypeDropdown type={"Background"} />
        </StyledPopoverListSmallTypeDropdown>
      )}
    </StyledRoot>
  );
});
