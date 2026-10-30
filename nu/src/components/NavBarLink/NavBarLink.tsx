import React from "react";
import styled, { css } from "styled-components";

export interface NavBarLinkProps extends React.ComponentPropsWithoutRef<"a"> {}

const StyledRoot = styled.a(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    width: 300px;
    height: 24px;
    box-sizing: border-box;
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledAdmissions = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    &:hover {
      color: ${theme["text"]["textOnLightBlue"]};
    }
  `,
);

/** A navigation bar link component that represents a single navigable item within a navigation bar. Supports default and hover interaction states. */
export const NavBarLink = React.forwardRef<HTMLAnchorElement, NavBarLinkProps>(
  function NavBarLink({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="Admissions" {...rest} ref={ref}>
        <StyledAdmissions>{"Admissions"}</StyledAdmissions>
      </StyledRoot>
    );
  },
);
