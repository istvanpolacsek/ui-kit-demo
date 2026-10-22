import React from "react";
import styled, { css } from "styled-components";
import {
  DesktopTextfieldMaster,
  type DesktopTextfieldMasterProps,
} from "../DesktopTextfieldMaster";

export interface DesktopTextFieldProps extends Omit<
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
        case "Disabled":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Error":
          return css`
            color: ${theme["alert"]["errorText"]};
          `;
        case "Filled":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Active":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Hover":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Default":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Focused":
          return css`
            color: ${theme["gray"]["500"]};
          `;
        case "Locked":
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

/** A desktop text field component that supports multiple interaction states (Default, Hover, Active, Filled, Success, Warning, Error, Locked, Disabled, Focused). Wraps a label, input, and optional helper/validation message for form data entry. */
export const DesktopTextField = React.forwardRef<
  HTMLDivElement,
  DesktopTextFieldProps
>(function DesktopTextField(
  {
    state = "Default",
    showLeftIcon = true,
    showRightIcon = true,
    showLink = true,
    showHelperText = true,
    showCountryCode = false,
    instance = "642:6538",
    showDuration = false,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot aria-label="Text field" {...rest} ref={ref} $state={state}>
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
