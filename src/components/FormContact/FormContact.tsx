import React from "react";
import styled, { css } from "styled-components";
import { InputField } from "../InputField";
import { TextareaField } from "../TextareaField";
import { ButtonGroup } from "../ButtonGroup";

export interface FormContactProps extends React.ComponentPropsWithoutRef<"form"> {}

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

const StyledInputField3 = styled.div(
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

const StyledTextareaField = styled.div(
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

/** A contact form component composed of multiple input fields, a textarea, and a button group, used to collect user contact information and submit it. */
export const FormContact = React.forwardRef<HTMLFormElement, FormContactProps>(
  function FormContact({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Contact form" {...rest} ref={ref}>
        <StyledInputField>
          <InputField
            hasDescription={false}
            description={"Description"}
            error={"Error"}
            label={"Name"}
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
            label={"Surname"}
            hasError={false}
            value={"Value"}
            hasLabel={true}
            state={"Default"}
            valueType={"Placeholder"}
          />
        </StyledInputField2>
        <StyledInputField3>
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
        </StyledInputField3>
        <StyledTextareaField>
          <TextareaField
            value={"Value"}
            error={"Hint"}
            label={"Message"}
            hasError={false}
            hasDescription={false}
            description={"Description"}
            hasLabel={true}
            state={"Default"}
            valueType={"Placeholder"}
          />
        </StyledTextareaField>
        <StyledButtonGroup>
          <ButtonGroup
            iconStart={"Star"}
            hasIconStart={false}
            hasIconEnd={false}
            iconEnd={"X"}
            label={"Submit"}
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
  },
);
