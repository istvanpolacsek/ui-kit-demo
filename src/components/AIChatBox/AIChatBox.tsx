import React from "react";
import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";

export interface AIChatBoxProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  ({ theme }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
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
    &:active:not(:disabled) {
      color: ${theme["Icon"]["Brand"]["On Brand"]};
    }
  `,
);

const StyledWhatWouldYouLikeToKnow = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Tertiary"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    &:is(button:active:not(:disabled) *) {
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

const StyledBlock = styled.div(
  () => css`
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

/** An AI chat input box component that allows users to type and submit queries. Contains a prompt placeholder and action icon buttons for interacting with the AI chat interface. */
export const AIChatBox = React.forwardRef<HTMLButtonElement, AIChatBoxProps>(
  function AIChatBox({ ...rest }, ref) {
    return (
      <StyledRoot type="button" {...rest} ref={ref}>
        <StyledWhatWouldYouLikeToKnow>
          {"What would you like to know?"}
        </StyledWhatWouldYouLikeToKnow>
        <Styledblock>
          <StyledBlock>
            <IconButton icon={"Image"} variant={"Subtle"} size={"Small"} />
            <IconButton icon={"Code"} variant={"Subtle"} size={"Small"} />
            <IconButton icon={"Mic"} variant={"Subtle"} size={"Small"} />
          </StyledBlock>
          <IconButton icon={"Arrow up"} variant={"Primary"} size={"Small"} />
        </Styledblock>
      </StyledRoot>
    );
  },
);
