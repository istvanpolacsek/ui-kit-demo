import React from "react";
import styled, { css } from "styled-components";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalXSSwitchToDesktopProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "defaultProp"
> {
  defaultProp?: 1;
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 12px 28px 0px rgba(0, 0, 0, 0.32),
      0px 40px 48px 0px rgba(0, 0, 0, 0.24);
  `,
);

const StyledHeaderSubheader = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledPleaseSwitchToADesktopDevice = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledTheEditorIsOptimizedForDesktopUse = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledPrimaryButtonNeutral = styled.div(
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

/** A modal dialog prompting users on mobile/small-screen devices to switch to a desktop device, as the editor is optimized for desktop use. Contains a heading, descriptive text, and a primary action button. */
export const ModalXSSwitchToDesktop = React.forwardRef<
  HTMLElement,
  ModalXSSwitchToDesktopProps
>(function ModalXSSwitchToDesktop({ defaultProp = 1, ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Switch to desktop"
      {...rest}
      ref={ref}
    >
      <StyledHeaderSubheader>
        <StyledPleaseSwitchToADesktopDevice>
          {"Please switch to a desktop device"}
        </StyledPleaseSwitchToADesktopDevice>
        <StyledTheEditorIsOptimizedForDesktopUse>
          {"The editor is optimized for desktop use."}
        </StyledTheEditorIsOptimizedForDesktopUse>
      </StyledHeaderSubheader>
      <StyledPrimaryButtonNeutral>
        <PrimaryButtonNeutral
          state={"Default"}
          size={"Regular"}
          mode={"Dark"}
        />
      </StyledPrimaryButtonNeutral>
    </StyledRoot>
  );
});
