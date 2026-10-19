import React from "react";
import styled, { css } from "styled-components";

export interface AIChatUserMessageProps extends React.ComponentPropsWithoutRef<"article"> {}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 6px;
    padding-right: 8px;
    padding-bottom: 6px;
    padding-left: 8px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 480px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledHeyFlippyWriteMeAScriptForBuildingAnAnalagClock = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** Displays a user-submitted message within an AI chat interface. Renders the user's text content as a distinct chat bubble or message block. */
export const AIChatUserMessage = React.forwardRef<
  HTMLElement,
  AIChatUserMessageProps
>(function AIChatUserMessage({ ...rest }, ref) {
  return (
    <StyledRoot role="article" aria-label="User message" {...rest} ref={ref}>
      <StyledHeyFlippyWriteMeAScriptForBuildingAnAnalagClock>
        {"Hey Flippy! Write me a script for building an Analag Clock."}
      </StyledHeyFlippyWriteMeAScriptForBuildingAnAnalagClock>
    </StyledRoot>
  );
});
