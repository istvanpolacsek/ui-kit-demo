import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { ListItemStep } from "../ListItemStep";

export interface ModalMAssignStepProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Default";
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

const StyledBody = styled.ol(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledListItemStep = styled.li(
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

const StyledListItemStep2 = styled.li(
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

const StyledListItemStep3 = styled.li(
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

const StyledListItemStep4 = styled.li(
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

/** A modal dialog for assigning a step, containing a header and a list of selectable step items for the user to choose from. */
export const ModalMAssignStep = React.forwardRef<
  HTMLElement,
  ModalMAssignStepProps
>(function ModalMAssignStep({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Assign step"
      aria-describedby="modal-body"
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Simple"} mode={"Dark"} />
      </StyledHeaderModal>
      <StyledBody>
        <StyledListItemStep>
          <ListItemStep />
        </StyledListItemStep>
        <StyledListItemStep2>
          <ListItemStep />
        </StyledListItemStep2>
        <StyledListItemStep3>
          <ListItemStep />
        </StyledListItemStep3>
        <StyledListItemStep4>
          <ListItemStep />
        </StyledListItemStep4>
      </StyledBody>
    </StyledRoot>
  );
});
