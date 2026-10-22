import React from "react";
import styled, { css } from "styled-components";
import { MobileTextfieldMaster } from "../MobileTextfieldMaster";

export interface MobileTextFieldCountryCode2Props extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?:
    | "Default"
    | "Hover"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "Locked"
    | "Disabled";
}

const StyledRoot = styled.div<{
  $state:
    | "Default"
    | "Hover"
    | "Active"
    | "Filled"
    | "Success"
    | "Warning"
    | "Error"
    | "Locked"
    | "Disabled";
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
    width: 353px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Success":
          return css`
            color: ${theme["alert"]["successText"]};
          `;
        case "Warning":
          return css`
            color: ${theme["alert"]["warningText"]};
          `;
        case "Error":
          return css`
            color: ${theme["alert"]["errorText"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A mobile text field component for entering a country code. Supports multiple visual states including default, hover, active, filled, success, warning, error, locked, and disabled. */
export const MobileTextFieldCountryCode2 = React.forwardRef<
  HTMLDivElement,
  MobileTextFieldCountryCode2Props
>(function MobileTextFieldCountryCode2({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="group"
      aria-label="Country Code"
      {...rest}
      ref={ref}
      $state={state}
    >
      <MobileTextfieldMaster
        showLeftIcon={false}
        showLink={true}
        showRightIcon={true}
        showCountryCode={true}
      />
    </StyledRoot>
  );
});
