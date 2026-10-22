import React from "react";
import styled, { css } from "styled-components";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { MessageAlert } from "../MessageAlert";

export interface ModalSidebarAltTextProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.aside(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 257px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledTextFieldLabeled = styled.div(
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

const StyledMessageAlert = styled.div(
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

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 257px;
    height: 48px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A modal sidebar panel for entering or editing alternative text, containing a labeled text field, an alert message, and a scroll overlay indicator. */
export const ModalSidebarAltText = React.forwardRef<
  HTMLElement,
  ModalSidebarAltTextProps
>(function ModalSidebarAltText({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Alt text editor" {...rest} ref={ref}>
      <StyledTextFieldLabeled>
        <TextFieldLabeled state={"Default"} mode={"Light"} />
      </StyledTextFieldLabeled>
      <StyledMessageAlert>
        <MessageAlert
          hasIcon={false}
          hasTitle={false}
          type={"Info"}
          mode={"Dark"}
        />
      </StyledMessageAlert>
      <StyledBottomScrollOverlay />
    </StyledRoot>
  );
});
