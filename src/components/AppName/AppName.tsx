import React from "react";
import styled, { css } from "styled-components";

export interface AppNameProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledLogo = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledGeneric = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 5.408536911010742px;
    padding-right: 5.499797821044922px;
    padding-bottom: 5.408432960510254px;
    padding-left: 5.500202178955078px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Primary"]};
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Primary"]};
    border-radius: 4px;
  `,
);

const StyledA = styled.span(
  ({ theme }) => css`
    width: 9px;
    height: 9.183030128479004px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Text"]["Primary"]};
    border-radius: 0px;
  `,
);

const StyledName = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

/** Displays the application name alongside its logo mark, typically used in headers or navigation bars to identify the product. */
export const AppName = React.forwardRef<HTMLDivElement, AppNameProps>(
  function AppName({ ...rest }, ref) {
    return (
      <StyledRoot aria-label="App name" {...rest} ref={ref}>
        <StyledLogo>
          <StyledGeneric>
            <StyledA />
          </StyledGeneric>
        </StyledLogo>
        <StyledName>{"App "}</StyledName>
      </StyledRoot>
    );
  },
);
