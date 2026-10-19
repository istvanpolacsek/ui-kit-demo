import React from "react";
import styled, { css } from "styled-components";
import { InputField } from "../InputField";
import { ButtonGroup } from "../ButtonGroup";
import { TextLink } from "../TextLink";

export interface FormLogInProps extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledInputField = styled.div(
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

const StyledInputField2 = styled.div(
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

const StyledButtonGroup = styled.div(
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

const StyledTextLink = styled.div(
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

/** A login form component containing input fields for user credentials, a button group for form submission, and a text link for auxiliary actions such as password recovery or registration. */
export const FormLogIn = React.forwardRef<HTMLFormElement, FormLogInProps>(
  function FormLogIn({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Log in" {...rest} ref={ref}>
        <StyledInputField>
          <InputField
            hasDescription={false}
            description={"Description"}
            error={"Error"}
            label={"Email"}
            hasError={false}
            value={"Value"}
            hasLabel={true}
            state={"Default"}
            valueType={"Placeholder"}
          />
        </StyledInputField>
        <StyledInputField2>
          <InputField
            hasDescription={false}
            description={"Description"}
            error={"Error"}
            label={"Password"}
            hasError={false}
            value={"Value"}
            hasLabel={true}
            state={"Default"}
            valueType={"Placeholder"}
          />
        </StyledInputField2>
        <StyledButtonGroup>
          <ButtonGroup
            iconStart={"Star"}
            hasIconStart={false}
            hasIconEnd={false}
            iconEnd={"X"}
            label={"Sign In"}
            variant={"Primary"}
            state={"Default"}
            size={"Medium"}
            buttonEnd={true}
            buttonStart={false}
            align={"Justify"}
          />
        </StyledButtonGroup>
        <StyledTextLink>
          <TextLink text={"Forgot password?"} />
        </StyledTextLink>
      </StyledRoot>
    );
  },
);
