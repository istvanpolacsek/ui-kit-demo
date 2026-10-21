import React from "react";
import styled, { css } from "styled-components";

export interface AppComposerProps extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    width: 370px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6000000238418579);
    border-radius: 26px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    color: #7b7974;
  `,
);

const StyledinputLayout = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 24px;
  `,
);

const StyledbuttonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8.000003814697266px;
    padding-bottom: 8px;
    padding-left: 8.000003814697266px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledleadingButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styledplaceholder = styled.p(
  () => css`
    color: #7b7974;
  `,
);

const StyledtrailingButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A composer input area for submitting queries or messages to an app, containing a text prompt placeholder and leading/trailing action button slots. */
export const AppComposer = React.forwardRef<HTMLFormElement, AppComposerProps>(
  function AppComposer({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="App composer" {...rest} ref={ref}>
        <StyledinputLayout>
          <StyledbuttonRow>
            <StyledleadingButtons></StyledleadingButtons>
            <Styledplaceholder>{"Ask App"}</Styledplaceholder>
            <StyledtrailingButtons></StyledtrailingButtons>
          </StyledbuttonRow>
        </StyledinputLayout>
      </StyledRoot>
    );
  },
);
