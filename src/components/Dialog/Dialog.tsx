import React from "react";
import styled, { css } from "styled-components";
import { DialogBody } from "../DialogBody";
import { useModal } from "./Dialog.modal";

export interface DialogProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "open" | "defaultOpen" | "onOpenChange" | "closeOnScrimClick" | "children"
> {
  /** Whether it is shown (controlled). */
  open?: boolean;
  /** Whether it starts shown (uncontrolled). */
  defaultOpen?: boolean;
  /** Called with the new state when the user closes it. */
  onOpenChange?: (open: boolean) => void;
  /** Whether a press on the scrim closes it (defaults to true). */
  closeOnScrimClick?: boolean;
  /** The content of the dialog. */
  children?: React.ReactNode;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 768px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Utilities"]["Scrim"]};
    border-radius: 0px;
    position: fixed;
    inset: 0;
    width: auto;
    height: auto;
    z-index: 1000;
    && > * {
      align-self: center;
      width: 100%;
      max-width: 600px;
    }
  `,
);

const StyledDialogBody = styled.div(
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

/** A dialog component that serves as a modal overlay surface, typically containing a header, body content, and action controls for user interaction. */
export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  function Dialog(
    { open, defaultOpen, onOpenChange, closeOnScrimClick, children, ...rest },
    ref,
  ) {
    const modal = useModal({
      open,
      defaultOpen,
      onOpenChange,
      closeOnScrimClick,
    });
    return modal.open
      ? modal.portal(
          <StyledRoot {...modal.scrimProps} {...rest} ref={ref}>
            <StyledDialogBody>
              <DialogBody
                body={"Body text"}
                heading={"Text Heading"}
                dismissible={true}
                type={"Card"}
                onClose={modal.close}
                slot={children}
                slot2={children}
              />
            </StyledDialogBody>
          </StyledRoot>,
        )
      : null;
  },
);
