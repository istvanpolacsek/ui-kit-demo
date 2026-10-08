import React from "react";
import styled, { css } from "styled-components";
import { ProfilePicture } from "../ProfilePicture";
import { ButtonPrimary, type ButtonPrimaryProps } from "../ButtonPrimary";

export interface ContactCardProps {
  title: string;
  description: string;
  actions?: ButtonPrimaryProps[];
}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 324px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame57 = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPrimaryContact = styled.h3(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledArleneMcCoyBusinessExecutive = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Inter Tight";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledActions = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
    border-radius: 0px;
  `,
);

/** Displays a contact's profile information (title and description) alongside primary action buttons. Use within contact directories or detail panels. */
export function ContactCard({ title, description, actions }: ContactCardProps) {
  return (
    <StyledRoot aria-label="Primary Contact">
      <StyledContent>
        <ProfilePicture size={"L"} />
        <StyledFrame57>
          <StyledPrimaryContact>{title}</StyledPrimaryContact>
          <StyledArleneMcCoyBusinessExecutive>
            {description}
          </StyledArleneMcCoyBusinessExecutive>
        </StyledFrame57>
      </StyledContent>
      <StyledActions>
        {actions?.map((item, index) => (
          <li key={index}>
            <ButtonPrimary {...item} />
          </li>
        ))}
      </StyledActions>
    </StyledRoot>
  );
}
