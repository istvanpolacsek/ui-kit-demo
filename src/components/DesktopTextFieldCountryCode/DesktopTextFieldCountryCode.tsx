import React from "react";
import styled, { css } from "styled-components";
import {
  DesktopTextfieldMaster,
  type DesktopTextfieldMasterProps,
} from "../DesktopTextfieldMaster";

export interface DesktopTextFieldCountryCodeProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  | "state"
  | "showLeftIcon"
  | "showRightIcon"
  | "showLink"
  | "showHelperText"
  | "showCountryCode"
  | "instance"
  | "showDuration"
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
    | "Disabled"
    | "Focused";
  showLeftIcon?: DesktopTextfieldMasterProps["showLeftIcon"];
  showRightIcon?: DesktopTextfieldMasterProps["showRightIcon"];
  showLink?: DesktopTextfieldMasterProps["showLink"];
  showHelperText?: DesktopTextfieldMasterProps["showHelperText"];
  showCountryCode?: DesktopTextfieldMasterProps["showCountryCode"];
  instance?: DesktopTextfieldMasterProps["instance"];
  showDuration?: DesktopTextfieldMasterProps["showDuration"];
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
    | "Disabled"
    | "Focused";
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
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Hover":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Active":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Filled":
          return css`
            color: ${theme["gray"]["500"]};
          `;
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
        case "Locked":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Disabled":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Focused":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledWebTextfieldMaster = styled.div(
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

/** A text field component for entering a country code, supporting multiple visual states such as default, hover, active, filled, success, warning, error, locked, disabled, and focused. Typically used in forms requiring phone number or regional input. */
export const DesktopTextFieldCountryCode = React.forwardRef<
  HTMLDivElement,
  DesktopTextFieldCountryCodeProps
>(function DesktopTextFieldCountryCode(
  {
    state = "Default",
    showLeftIcon = false,
    showRightIcon = true,
    showLink = true,
    showHelperText = true,
    showCountryCode = true,
    instance = "642:6538",
    showDuration = false,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Country code"
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledWebTextfieldMaster>
        <DesktopTextfieldMaster
          textState={"Placeholder"}
          showLeftIcon={showLeftIcon}
          showRightIcon={showRightIcon}
          showLink={showLink}
          showHelperText={showHelperText}
          showCountryCode={showCountryCode}
          instance={instance}
          showDuration={showDuration}
        />
      </StyledWebTextfieldMaster>
    </StyledRoot>
  );
});
