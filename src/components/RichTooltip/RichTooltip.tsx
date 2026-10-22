import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export interface RichTooltipProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 8px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    overflow: hidden;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 12px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 4px;
    padding-left: 16px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 312px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledSubhead = styled.h6(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledSupportingText = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledButtonContainer = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 12px;
    padding-bottom: 0px;
    padding-left: 12px;
    gap: 8px;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButton = styled.li(() => css``);

const StyledButton2 = styled.li(() => css``);

/** A rich tooltip component that displays a title, supporting descriptive text, and one or more action buttons. Used to provide contextual information with interactive options to the user. */
export const RichTooltip = React.forwardRef<HTMLDivElement, RichTooltipProps>(
  function RichTooltip({ ...rest }, ref) {
    return (
      <StyledRoot role="tooltip" aria-label="Rich tooltip" {...rest} ref={ref}>
        <StyledContent>
          <StyledSubhead>{"Title"}</StyledSubhead>
          <StyledSupportingText>
            {"Supporting line text lorem ipsum dolor sit amet, consectetur"}
          </StyledSupportingText>
        </StyledContent>
        <StyledButtonContainer>
          <StyledButton>
            <Button
              label={true}
              bTNValue={"Action"}
              rightIcon={false}
              leftIcon={false}
              iconOnly={"False"}
              device={"Desktop"}
              size={"Small"}
              hierarchy={"Tertiary"}
              state={"Default"}
              type={"Default"}
            />
          </StyledButton>
          <StyledButton2>
            <Button
              label={true}
              bTNValue={"Action"}
              rightIcon={false}
              leftIcon={false}
              iconOnly={"False"}
              device={"Desktop"}
              size={"Small"}
              hierarchy={"Primary"}
              state={"Default"}
              type={"Default"}
            />
          </StyledButton2>
        </StyledButtonContainer>
      </StyledRoot>
    );
  },
);
