import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { OptionGridSection } from "../OptionGridSection";

export interface ModalMAddSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "page"
> {
  type?: "Basic" | "Recommended";
  page?: "Main" | "Case study";
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

/** A modal dialog for adding a new section to a page. Supports 'Basic' and 'Recommended' section types, and targets either a 'Main' or 'Case study' page context. */
export const ModalMAddSection = React.forwardRef<
  HTMLElement,
  ModalMAddSectionProps
>(function ModalMAddSection({ type = "Basic", page = "Main", ...rest }, ref) {
  return (
    <StyledRoot role="dialog" aria-label="Add section" {...rest} ref={ref}>
      <StyledHeaderModal>
        <HeaderModal
          number={"2"}
          selected={"1"}
          mode={"Dark"}
          type={"Tabs alt"}
        />
      </StyledHeaderModal>
      <OptionGridSection type={"Basic sections"} page={"Main"} />
    </StyledRoot>
  );
});
