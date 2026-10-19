import React from "react";
import styled, { css } from "styled-components";
import { InputField } from "../InputField";
import { Button } from "../Button";

export interface FormNewsletterProps extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 338px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledInputField = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A newsletter subscription form component containing an email input field and a submit button, used to capture user email addresses for newsletter sign-ups. */
export const FormNewsletter = React.forwardRef<
  HTMLFormElement,
  FormNewsletterProps
>(function FormNewsletter({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Newsletter subscription form" {...rest} ref={ref}>
      <StyledInputField>
        <InputField
          description={"Description"}
          hasDescription={false}
          value={"you@example.com"}
          error={"Error"}
          label={"Email address"}
          hasError={false}
          hasLabel={false}
          state={"Default"}
          valueType={"Default"}
        />
      </StyledInputField>
      <Button
        iconStart={"Star"}
        hasIconStart={false}
        hasIconEnd={false}
        iconEnd={"X"}
        label={"Submit"}
        variant={"Primary"}
        state={"Default"}
        size={"Medium"}
      />
    </StyledRoot>
  );
});
