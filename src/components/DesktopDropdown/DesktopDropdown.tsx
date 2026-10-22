import React from "react";
import styled, { css } from "styled-components";
import { DesktopDropdownMaster } from "../DesktopDropdownMaster";

export interface DesktopDropdownProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?:
    "Default" | "Hover" | "Open" | "Selected" | "Error" | "Locked" | "Disabled";
}

const StyledRoot = styled.button<{
  $state:
    "Default" | "Hover" | "Open" | "Selected" | "Error" | "Locked" | "Disabled";
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
        case "Open":
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        case "Selected":
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        case "Locked":
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        case "Error":
          return css`
            color: ${theme["accent"]["accentGray"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDesktopDropdownMaster = styled.div(
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

/** A dropdown trigger component that allows users to open a menu or select an option. Supports multiple states including default, hover, open, selected, error, locked, and disabled. */
export const DesktopDropdown = React.forwardRef<
  HTMLButtonElement,
  DesktopDropdownProps
>(function DesktopDropdown({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="combobox"
      aria-haspopup
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledDesktopDropdownMaster>
        <DesktopDropdownMaster
          showLabel={true}
          showHelperText={true}
          showOptions={false}
        />
      </StyledDesktopDropdownMaster>
    </StyledRoot>
  );
});
