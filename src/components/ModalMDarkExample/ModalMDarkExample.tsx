import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";

export interface ModalMDarkExampleProps extends Omit<
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
    width: 640px;
    height: 426px;
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
    overflow: hidden;
    border-radius: 0px;
    width: 640px;
    height: 317px;
    box-sizing: border-box;
  `,
);

/** A modal dialog component with a dark theme, consisting of a header and a body content area. Used to display overlay content requiring user attention or interaction. */
export const ModalMDarkExample = React.forwardRef<
  HTMLElement,
  ModalMDarkExampleProps
>(function ModalMDarkExample({ defaultProp = 1, ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Modal dialog"
      aria-expanded
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Tabs"} number={"3"} selected={"1"} mode={"Dark"} />
      </StyledHeaderModal>
      <StyledBody></StyledBody>
    </StyledRoot>
  );
});
