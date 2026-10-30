import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { DesktopTextField } from "../DesktopTextField";
import { DesktopTextFieldCountryCode } from "../DesktopTextFieldCountryCode";

export interface ContactDataProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "state"
> {
  state?: "Closed" | "Open";
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1176px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["accent"]["accentBrand"]};
  `,
);

const StyledAccordion = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledQuestion = styled.header(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContactData = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFields = styled.section(
  () => css`
    border-radius: 0px;
  `,
);

/** An accordion-style disclosure component for collecting contact data. It toggles between a collapsed (Closed) state showing only the section header and an expanded (Open) state revealing a set of text input fields for contact information. */
export const ContactData = React.forwardRef<HTMLElement, ContactDataProps>(
  function ContactData({ state = "Closed", ...rest }, ref) {
    return (
      <StyledRoot role="group" {...rest} ref={ref}>
        <StyledAccordion>
          <StyledQuestion>
            <StyledContactData>{"Contact Data"}</StyledContactData>
            <StyledIcon>
              {state === "Closed" && <Icon name={"add"} size={24} />}
              {state === "Open" && <Icon name={"remove"} size={24} />}
            </StyledIcon>
          </StyledQuestion>
        </StyledAccordion>
        {state === "Open" && (
          <StyledFields>
            {state === "Open" && (
              <DesktopTextField
                showRightIcon={true}
                showDuration={false}
                showCountryCode={false}
                showHelperText={false}
                showLeftIcon={true}
                showLink={false}
                textState={"Placeholder"}
                state={"Default"}
              />
            )}
            {state === "Open" && (
              <DesktopTextField
                showRightIcon={true}
                showDuration={false}
                showCountryCode={false}
                showHelperText={false}
                showLeftIcon={true}
                showLink={false}
                textState={"Placeholder"}
                state={"Default"}
              />
            )}
            {state === "Open" && (
              <DesktopTextFieldCountryCode
                showRightIcon={true}
                showDuration={false}
                showCountryCode={true}
                showHelperText={false}
                showLeftIcon={false}
                showLink={false}
                textState={"Placeholder"}
                state={"Default"}
              />
            )}
            {state === "Open" && (
              <DesktopTextField
                showRightIcon={true}
                showDuration={false}
                showCountryCode={false}
                showHelperText={false}
                showLeftIcon={true}
                showLink={false}
                textState={"Placeholder"}
                state={"Default"}
              />
            )}
            {state === "Open" && (
              <DesktopTextField
                showRightIcon={true}
                showDuration={false}
                showCountryCode={false}
                showHelperText={false}
                showLeftIcon={true}
                showLink={false}
                textState={"Placeholder"}
                state={"Default"}
              />
            )}
          </StyledFields>
        )}
      </StyledRoot>
    );
  },
);
