import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface AIChatChatResponseProps extends React.ComponentPropsWithoutRef<"article"> {}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 560px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
    color: ${theme["Text"]["Default"]["Default"]};
  `,
);

const StyledSureHereIsATypescriptCodeBlockForYourAnalogClockProjectItIsBuiltUsingReactAndUsesTheLocalTimeForLondonEnglandAsStandardLetMeKnowIfYouWouldLikeToMakeAnyRefinementsToTheCode =
  styled.p(
    ({ theme }) => css`
      color: ${theme["Text"]["Default"]["Default"]};
      font-family: "Inter";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
    `,
  );

/** Displays an AI-generated chat response message, including an icon and the response text content. */
export const AIChatChatResponse = React.forwardRef<
  HTMLElement,
  AIChatChatResponseProps
>(function AIChatChatResponse({ ...rest }, ref) {
  return (
    <StyledRoot
      role="article"
      aria-label="AI chat response"
      {...rest}
      ref={ref}
    >
      <Icon name={"Figma"} size={20} />
      <StyledSureHereIsATypescriptCodeBlockForYourAnalogClockProjectItIsBuiltUsingReactAndUsesTheLocalTimeForLondonEnglandAsStandardLetMeKnowIfYouWouldLikeToMakeAnyRefinementsToTheCode>
        {
          "Sure. Here is a Typescript code block for your Analog Clock project. It is built using React, and uses the local time for London, England as standard. Let me know if you would like to make any refinements to the code."
        }
      </StyledSureHereIsATypescriptCodeBlockForYourAnalogClockProjectItIsBuiltUsingReactAndUsesTheLocalTimeForLondonEnglandAsStandardLetMeKnowIfYouWouldLikeToMakeAnyRefinementsToTheCode>
    </StyledRoot>
  );
});
