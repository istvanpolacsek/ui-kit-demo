import React from "react";
import styled, { css } from "styled-components";
import { MessageAlert } from "../MessageAlert";

export interface SetupSummaryDomainConnectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "–";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 350px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #d1d1d1;
    border-radius: 8px;
  `,
);

const StyledCartItem = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StylednathandavidsonCom = styled.p(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledFromGoDaddy = styled.p(
  () => css`
    color: #707070;
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

/** Displays a summary of a domain connection setup, showing the connected domain name and its registrar source, along with an associated alert or message component. */
export const SetupSummaryDomainConnection = React.forwardRef<
  HTMLElement,
  SetupSummaryDomainConnectionProps
>(function SetupSummaryDomainConnection({ type = "–", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Domain connection summary" {...rest} ref={ref}>
      <StyledCartItem>
        <StylednathandavidsonCom>
          {"nathandavidson.com"}
        </StylednathandavidsonCom>
        <StyledFromGoDaddy>{"From GoDaddy"}</StyledFromGoDaddy>
      </StyledCartItem>
      <StyledMessageAlert>
        <MessageAlert
          hasIcon={true}
          hasTitle={false}
          type={"Info"}
          mode={"Light"}
        />
      </StyledMessageAlert>
    </StyledRoot>
  );
});
