import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { OptionListArray } from "../OptionListArray";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { MessageAlert } from "../MessageAlert";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalLEmbedMediaProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Original";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 880px;
    height: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
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

const StyledHeaderModal = styled.div(
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

const StyledBody = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledOptionListArray = styled.div(
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

const StyledFrame48096242 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
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

const StyledButtonRow = styled.footer(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A modal dialog component for embedding media, containing a header, an option list, a labeled text field with an alert message, and a row of action buttons (secondary and primary). */
export const ModalLEmbedMedia = React.forwardRef<
  HTMLElement,
  ModalLEmbedMediaProps
>(function ModalLEmbedMedia({ type = "Original", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Embed media"
      aria-describedby="modal-body"
      aria-expanded
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Simple"} mode={"Dark"} />
      </StyledHeaderModal>
      <StyledBody>
        <StyledOptionListArray>
          <OptionListArray hasLavel={true} type={"Default"} />
        </StyledOptionListArray>
        <StyledFrame48096242>
          <StyledTextFieldLabeled>
            <TextFieldLabeled state={"Default"} mode={"Dark"} />
          </StyledTextFieldLabeled>
          <StyledMessageAlert>
            <MessageAlert
              hasIcon={false}
              hasTitle={false}
              type={"Info"}
              mode={"Dark"}
            />
          </StyledMessageAlert>
        </StyledFrame48096242>
      </StyledBody>
      <StyledButtonRow>
        <SecondaryButtonNeutral
          state={"Default"}
          size={"Large"}
          mode={"Dark"}
        />
        <PrimaryButtonNeutral state={"Default"} size={"Large"} mode={"Dark"} />
      </StyledButtonRow>
    </StyledRoot>
  );
});
