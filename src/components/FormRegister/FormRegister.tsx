import React from "react";
import styled, { css } from "styled-components";
import { InputField } from "../InputField";
import { CheckboxField } from "../CheckboxField";
import { ButtonGroup } from "../ButtonGroup";

export interface FormRegisterProps extends React.ComponentPropsWithoutRef<"form"> {}

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
    width: 320px;
    box-sizing: border-box;
    flex-shrink: 0;
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

const StyledCheckboxField = styled.div(
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

/** A registration form component containing input fields for user data, a checkbox field (e.g. for terms acceptance), and a button group for form submission actions. */
export const FormRegister = React.forwardRef<
  HTMLFormElement,
  FormRegisterProps
>(function FormRegister({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Register" {...rest} ref={ref}>
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
      <StyledCheckboxField>
        <CheckboxField
          label={"Label"}
          description={"Description"}
          hasDescription={true}
          defaultChecked={true}
        />
      </StyledCheckboxField>
      <StyledButtonGroup>
        <ButtonGroup
          iconStart={"Star"}
          hasIconStart={false}
          hasIconEnd={false}
          iconEnd={"X"}
          label={"Register"}
          variant={"Primary"}
          state={"Default"}
          size={"Medium"}
          buttonEnd={true}
          buttonStart={false}
          align={"Justify"}
        />
      </StyledButtonGroup>
    </StyledRoot>
  );
});
