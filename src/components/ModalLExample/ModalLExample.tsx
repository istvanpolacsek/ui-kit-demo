import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";

export interface ModalLExampleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "defaultProp"
> {
  defaultProp?: 1;
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
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

/** A large modal dialog component that presents content in an overlay layer, consisting of a header and a body region. Used to focus user attention on a specific task or information. */
export const ModalLExample = React.forwardRef<HTMLElement, ModalLExampleProps>(
  function ModalLExample({ defaultProp = 1, ...rest }, ref) {
    return (
      <StyledRoot
        role="dialog"
        aria-label="Modal dialog"
        aria-expanded
        {...rest}
        ref={ref}
      >
        <StyledHeaderModal>
          <HeaderModal type={"Simple"} mode={"Dark"} />
        </StyledHeaderModal>
        <StyledBody></StyledBody>
      </StyledRoot>
    );
  },
);
