import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { PortoflioThumbnail } from "../PortoflioThumbnail";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalMAddDomainToPortfolioProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "state"
> {
  state?: "Not picked" | "Picked";
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

const StyledBody = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 48px;
    padding-left: 24px;
    gap: 17px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledPortoflioThumbnail = styled.li(() => css``);

const StyledPortoflioThumbnail2 = styled.li(() => css``);

const StyledPortoflioThumbnail3 = styled.li(() => css``);

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

/** Modal dialog for adding a domain to a portfolio. Displays a header, a horizontal row of portfolio thumbnails (each selectable), and a confirmation button. Supports 'Not picked' and 'Picked' states to reflect user selection. */
export const ModalMAddDomainToPortfolio = React.forwardRef<
  HTMLElement,
  ModalMAddDomainToPortfolioProps
>(function ModalMAddDomainToPortfolio({ state = "Not picked", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Add domain to portfolio"
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Description"} mode={"Light"} />
      </StyledHeaderModal>
      <StyledBody>
        <StyledPortoflioThumbnail>
          <PortoflioThumbnail />
        </StyledPortoflioThumbnail>
        <StyledPortoflioThumbnail2>
          <PortoflioThumbnail />
        </StyledPortoflioThumbnail2>
        <StyledPortoflioThumbnail3>
          <PortoflioThumbnail />
        </StyledPortoflioThumbnail3>
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
