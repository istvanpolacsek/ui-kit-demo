import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";
import { useDialog } from "./DialogBody.dialog";

export interface DialogBodyProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  | "dismissible"
  | "body"
  | "heading"
  | "type"
  | "slot"
  | "slot2"
  | "onClose"
  | "closeLabel"
> {
  dismissible?: boolean;
  body?: string;
  heading?: string;
  type?: "Card" | "Sheet";
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  /** Called when the user asks to close it (Escape or the close button). */
  onClose?: () => void;
  /** The accessible name of the close button (defaults to "Close"). */
  closeLabel?: string;
}

const StyledRoot = styled.section<{ $type: "Card" | "Sheet" }>(
  ({ theme, $type }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 466px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    box-shadow:
      0px 16px 32px -4px rgba(12, 12, 13, 0.1),
      0px 4px 4px -4px rgba(12, 12, 13, 0.05);
    ${(() => {
      switch ($type) {
        case "Card":
          return css`
            border-radius: 8px;
          `;
        case "Sheet":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["Icon"]["Default"]["Default"]};
  `,
);

const StyledSlot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

const StyledIconButton = styled.div(
  () => css`
    position: absolute;
    right: 8px;
    top: 8px;
    width: 36px;
    height: 36px;
  `,
);

const StyledSlot2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

/** The body container of a dialog component, supporting card and sheet variants. Contains optional consumer content slots and a dismissible close button. Serves as the primary surface for modal dialog or sheet content. */
export const DialogBody = React.forwardRef<HTMLElement, DialogBodyProps>(
  function DialogBody(
    {
      dismissible = true,
      body = "Body text",
      heading = "Text Heading",
      type = "Card",
      slot,
      slot2,
      onClose,
      closeLabel,
      ...rest
    },
    ref,
  ) {
    const dialog = useDialog({ onClose, forwardedRef: ref });
    return (
      <StyledRoot
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...rest}
        ref={dialog.ref}
        $type={type}
      >
        {type === "Card" && <StyledSlot>{slot}</StyledSlot>}
        {dismissible && (
          <StyledIconButton>
            <IconButton
              icon={"X"}
              variant={"Subtle"}
              size={"Small"}
              onClick={onClose}
              aria-label={closeLabel ?? "Close"}
            />
          </StyledIconButton>
        )}
        {type === "Sheet" && <StyledSlot2>{slot2}</StyledSlot2>}
      </StyledRoot>
    );
  },
);
