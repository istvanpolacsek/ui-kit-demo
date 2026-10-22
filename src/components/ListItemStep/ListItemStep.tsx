import React from "react";
import styled, { css } from "styled-components";
import { ToggleCheckBox } from "../ToggleCheckBox";
import { MessageAlert } from "../MessageAlert";

export interface ListItemStepProps extends React.ComponentPropsWithoutRef<"li"> {}

const StyledRoot = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    height: 150px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 4px;
    &:hover {
      background-color: #333333;
    }
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledText2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
    &:hover {
      display: flex;
      flex-direction: column;
      padding-top: 0px;
      padding-right: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      gap: 12px;
      justify-content: flex-start;
      align-items: flex-start;
      flex: 1 1 0;
      align-self: stretch;
    }
    &:active {
      display: flex;
      flex-direction: column;
      padding-top: 0px;
      padding-right: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
      gap: 12px;
      justify-content: flex-start;
      align-items: flex-start;
      flex: 1 1 0;
      align-self: stretch;
    }
  `,
);

const StyledSectionName = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledHelperText = styled.p(
  () => css`
    display: none;
    color: #adadad;
    &:hover {
      display: block;
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

const StyledIllustration = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 224px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: #3d3d3d;
    border-radius: 0px;
  `,
);

/** A single step item in a multi-step list or wizard flow. Displays a section name, optional helper text, an alert message, and a toggle/checkbox to indicate completion state. Supports Default, Hover, and Active interaction states. */
export const ListItemStep = React.forwardRef<HTMLLIElement, ListItemStepProps>(
  function ListItemStep({ ...rest }, ref) {
    return (
      <StyledRoot role="listitem" aria-label="Step item" {...rest} ref={ref}>
        <StyledText>
          <ToggleCheckBox state={"False"} mode={"Dark"} />
          <StyledText2>
            <StyledSectionName>{"Section name"}</StyledSectionName>
            <StyledHelperText>{"Assign for Step 2"}</StyledHelperText>
            <StyledMessageAlert>
              <MessageAlert
                hasIcon={false}
                hasTitle={false}
                type={"Info"}
                mode={"Dark"}
              />
            </StyledMessageAlert>
          </StyledText2>
        </StyledText>
        <StyledIllustration></StyledIllustration>
      </StyledRoot>
    );
  },
);
