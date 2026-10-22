import React from "react";
import styled, { css } from "styled-components";
import { ContactData } from "../ContactData";
import { StudiesStatus } from "../StudiesStatus";
import { EmploymentStatus } from "../EmploymentStatus";
import { CheckboxLegal } from "../CheckboxLegal";
import { Button } from "../Button";

export interface FormField2Props extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    padding-right: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    gap: 40px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1272px;
    height: 2809.666748046875px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
    color: ${theme["button"]["Inverted"]["default"]};
  `,
);

const StyledCheckbox = styled.div(
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

const StyledCTAs = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 40px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A form component that groups related input fields (contact data, studies status, employment status, legal checkbox) and a submit action. Renders as a semantic form element containing multiple field instances and a CTA button. */
export const FormField2 = React.forwardRef<HTMLFormElement, FormField2Props>(
  function FormField2({ ...rest }, ref) {
    return (
      <StyledRoot
        role="form"
        aria-label="Registration form"
        {...rest}
        ref={ref}
      >
        <ContactData defaultOpen={true} />
        <StudiesStatus defaultOpen={true} />
        <EmploymentStatus defaultOpen={true} />
        <StyledCheckbox>
          <CheckboxLegal device={"Desktop"} />
        </StyledCheckbox>
        <StyledCTAs>
          <Button
            bTNValue={"Submit"}
            label={true}
            rightIcon={true}
            leftIcon={false}
            iconOnly={"False"}
            device={"Desktop"}
            size={"Large"}
            hierarchy={"Primary"}
            state={"Default"}
            type={"Default"}
          />
        </StyledCTAs>
      </StyledRoot>
    );
  },
);
