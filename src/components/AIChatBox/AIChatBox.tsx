import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";

export interface AIChatBoxProps extends React.ComponentPropsWithoutRef<"form"> {}

const StyledRoot = styled.form(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 16px;
    &:active {
      color: ${theme["Icon"]["Brand"]["On Brand"]};
    }
  `,
);

const StyledWhatWouldYouLikeToKnow = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Tertiary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:active {
      color: ${theme["Text"]["Default"]["Default"]};
    }
  `,
);

const Styledblock = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledBlock = styled.ul(
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
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledIconButton = styled.li(() => css``);

const StyledIconButton2 = styled.li(() => css``);

const StyledIconButton3 = styled.li(() => css``);

/** An AI chat input box component that allows users to type and submit queries. Supports default and active states, with action buttons for additional controls. */
export const AIChatBox = React.forwardRef<HTMLFormElement, AIChatBoxProps>(
  function AIChatBox({ ...rest }, ref) {
    return (
      <StyledRoot role="search" aria-label="AI Chat Input" {...rest} ref={ref}>
        <StyledWhatWouldYouLikeToKnow>
          {"What would you like to know?"}
        </StyledWhatWouldYouLikeToKnow>
        <Styledblock>
          <StyledBlock>
            <StyledIconButton>
              <IconButton icon={"Image"} variant={"Subtle"} size={"Small"} />
            </StyledIconButton>
            <StyledIconButton2>
              <IconButton icon={"Code"} variant={"Subtle"} size={"Small"} />
            </StyledIconButton2>
            <StyledIconButton3>
              <IconButton icon={"Mic"} variant={"Subtle"} size={"Small"} />
            </StyledIconButton3>
          </StyledBlock>
          <IconButton icon={"Arrow up"} variant={"Primary"} size={"Small"} />
        </Styledblock>
      </StyledRoot>
    );
  },
);
