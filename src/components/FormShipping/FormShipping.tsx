import React from "react";
import styled, { css } from "styled-components";
import { Text } from "../Text";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import { TextareaField } from "../TextareaField";
import { CheckboxField } from "../CheckboxField";
import { ButtonGroup } from "../ButtonGroup";

export interface FormShippingProps extends React.ComponentPropsWithoutRef<"form"> {}

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
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledLegend = styled.section(
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

const StyledShippingInformation = styled.h2(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
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

const StyledSelectField = styled.div(
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

/** A shipping information form containing fields for collecting user shipping details, including text inputs, a select dropdown, a textarea, a checkbox, and a submit button group. */
export const FormShipping = React.forwardRef<
  HTMLFormElement,
  FormShippingProps
>(function FormShipping({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Shipping information" {...rest} ref={ref}>
      <StyledLegend>
        <StyledShippingInformation>
          {"Shipping information"}
        </StyledShippingInformation>
        <Text text={"We ship within 2 working days"} />
      </StyledLegend>
      <StyledInputField>
        <InputField
          hasDescription={false}
          description={"Description"}
          error={"Error"}
          label={"Full Name"}
          hasError={false}
          value={"Value"}
          hasLabel={true}
          state={"Default"}
          valueType={"Placeholder"}
        />
      </StyledInputField>
      <StyledSelectField>
        <SelectField
          error={"Error"}
          value={"Value"}
          hasDescription={false}
          description={"Description"}
          hasError={true}
          open={false}
          label={"Location"}
          hasLabel={true}
          state={"Default"}
          valueType={"Default"}
        />
      </StyledSelectField>
      <StyledTextareaField>
        <TextareaField
          value={"Value"}
          error={"Hint"}
          label={"Delivery note"}
          hasError={false}
          hasDescription={false}
          description={"Description"}
          hasLabel={true}
          state={"Default"}
          valueType={"Placeholder"}
        />
      </StyledTextareaField>
      <StyledCheckboxField>
        <CheckboxField
          label={"I accept the terms"}
          description={"Read our T&Cs"}
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
          label={"Save shipping information"}
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
