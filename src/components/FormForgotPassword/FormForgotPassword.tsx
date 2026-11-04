import React from "react";
import styled, { css } from "styled-components";
import { InputField } from "../InputField";
import { ButtonGroup } from "../ButtonGroup";

export interface FormForgotPasswordProps extends React.ComponentPropsWithoutRef<"form"> {}

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

/** A forgot password form component containing an input field for the user's email or username and a button group to submit the request or navigate back. */
export const FormForgotPassword = React.forwardRef<
  HTMLFormElement,
  FormForgotPasswordProps
>(function FormForgotPassword({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Forgot password form" {...rest} ref={ref}>
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
      <StyledButtonGroup>
        <ButtonGroup
          iconStart={"Star"}
          hasIconStart={false}
          hasIconEnd={false}
          iconEnd={"X"}
          label={"Reset Password"}
          variant={"Primary"}
          state={"Default"}
          size={"Medium"}
          buttonEnd={true}
          buttonStart={true}
          align={"Center"}
        />
      </StyledButtonGroup>
    </StyledRoot>
  );
});
