import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { Table } from "../Table";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalMTransferDomainProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "state" | "numberOfDomains"
> {
  state?: "Not picked" | "Picked";
  numberOfDomains?: "Multiple" | "Single";
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
    width: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 8px;
    box-shadow:
      0px 12px 28px 0px rgba(0, 0, 0, 0.16),
      0px 40px 48px 0px rgba(0, 0, 0, 0.12);
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
    padding-bottom: 48px;
    padding-left: 24px;
    gap: 48px;
    justify-content: flex-start;
    align-items: flex-start;
    height: 371px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
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

const StyledTable = styled.div(
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

/** Modal dialog for transferring a domain. Contains a labeled text field for domain input, a table listing domains (single or multiple), and a primary action button to confirm the transfer. */
export const ModalMTransferDomain = React.forwardRef<
  HTMLElement,
  ModalMTransferDomainProps
>(function ModalMTransferDomain(
  { state = "Not picked", numberOfDomains = "Multiple", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Transfer domain"
      aria-describedby="transfer-domain-body"
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Description"} mode={"Light"} />
      </StyledHeaderModal>
      <StyledBody>
        <StyledTextFieldLabeled>
          <TextFieldLabeled state={"Default"} mode={"Light"} />
        </StyledTextFieldLabeled>
        <StyledTable>
          <Table column={2} row={3} />
        </StyledTable>
      </StyledBody>
      <StyledButtonRow>
        <PrimaryButtonNeutral
          state={"Disabled"}
          size={"Large"}
          mode={"Light"}
        />
      </StyledButtonRow>
    </StyledRoot>
  );
});
