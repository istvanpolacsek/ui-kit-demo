import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { TypePreviewDeviceStyles } from "../TypePreviewDeviceStyles";
import { PopoverListTypeDropdown } from "../PopoverListTypeDropdown";

export interface TypeSelectorProps extends Omit<
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
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
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

const StyledPopoverListTypeDropdown = styled.div(
  () => css`
    position: absolute;
    left: 4px;
    top: 36px;
    width: 276px;
    height: 235px;
  `,
);

/** A type selector component that displays a type preview and a label, and opens a popover dropdown for selecting typography styles. Supports default, hover, and open states. */
export const TypeSelector = React.forwardRef<
  HTMLButtonElement,
  TypeSelectorProps
>(function TypeSelector({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Select type style"
      aria-haspopup
      {...rest}
      ref={ref}
    >
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      <StyledTypeSelector $state={state}>
        <TypePreviewDeviceStyles type={"None"} />
        <StyledLabel>{"None"}</StyledLabel>
      </StyledTypeSelector>
      {state === "Open" && (
        <StyledPopoverListTypeDropdown>
          <PopoverListTypeDropdown type={"Gallery layout"} />
        </StyledPopoverListTypeDropdown>
      )}
    </StyledRoot>
  );
});
