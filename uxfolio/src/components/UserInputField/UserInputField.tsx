import React from "react";
import styled, { css } from "styled-components";

export interface UserInputFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?: "Empty" | "Filled" | "State3" | "State4";
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    height: 82px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["Color 2"]};
  `,
);

const StyledEmail = styled.div(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledInputField = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Color 4"]};
    border-radius: 0px;
  `,
);

const StyledYourEmail = styled.div(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StylednathandavidsonGmailCom = styled.div(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A user input field component for collecting email addresses, supporting empty and filled states with placeholder and value text display. */
export const UserInputField = React.forwardRef<
  HTMLDivElement,
  UserInputFieldProps
>(function UserInputField({ state = "Empty", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Email input field" {...rest} ref={ref}>
      <StyledEmail>{"Email"}</StyledEmail>
      <StyledInputField>
        {["Empty", "State4"].includes(state) && (
          <StyledYourEmail>{"Your email"}</StyledYourEmail>
        )}
        {["Filled", "State3"].includes(state) && (
          <StylednathandavidsonGmailCom>
            {"nathandavidson@gmail.com"}
          </StylednathandavidsonGmailCom>
        )}
      </StyledInputField>
    </StyledRoot>
  );
});
