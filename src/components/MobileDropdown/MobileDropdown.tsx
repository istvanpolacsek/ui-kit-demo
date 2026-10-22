import React from "react";
import styled, { css } from "styled-components";
import { MobileDropdownMaster } from "../MobileDropdownMaster";

export interface MobileDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?:
    "Default" | "Hover" | "Open" | "Filled" | "Error" | "Locked" | "Disabled";
}

const StyledRoot = styled.div<{
  $state:
    "Default" | "Hover" | "Open" | "Filled" | "Error" | "Locked" | "Disabled";
}>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 396px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Error":
          return css`
            color: ${theme["alert"]["errorText"]};
          `;
        case "Open":
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMobileDropdownMaster = styled.div(
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

/** A mobile dropdown component that allows users to select an option from a collapsible list. Supports multiple states including Default, Hover, Open, Filled, Error, Locked, and Disabled. */
export const MobileDropdown = React.forwardRef<
  HTMLDivElement,
  MobileDropdownProps
>(function MobileDropdown({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="combobox"
      aria-haspopup
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledMobileDropdownMaster>
        <MobileDropdownMaster
          showHelperText={true}
          showLabel={true}
          showOptions={false}
        />
      </StyledMobileDropdownMaster>
    </StyledRoot>
  );
});
