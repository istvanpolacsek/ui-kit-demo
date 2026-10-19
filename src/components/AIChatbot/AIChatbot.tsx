import React from "react";
import styled, { css } from "styled-components";
import { AISidebar } from "../AISidebar";
import { AIConversation } from "../AIConversation";
import { AIChatBox } from "../AIChatBox";

export interface AIChatbotProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section<{ $device: "Desktop" | "Mobile" }>(
  ({ theme, $device }) => css`
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            height: 1039px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAISidebar = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              align-self: stretch;
              height: auto;
            }
          `;
        case "Mobile":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledBlock = styled.div<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAIConversation = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledAIChatBox = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** An AI Chatbot sidebar component that combines a conversation history view with a chat input box, available in Desktop and Mobile variants. */
export const AIChatbot = React.forwardRef<HTMLElement, AIChatbotProps>(
  function AIChatbot({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="complementary"
        aria-label="AI Chatbot"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledAISidebar $device={device}>
          <AISidebar />
        </StyledAISidebar>
        <StyledBlock $device={device}>
          <StyledAIConversation>
            <AIConversation />
          </StyledAIConversation>
          <StyledAIChatBox>
            <AIChatBox />
          </StyledAIChatBox>
        </StyledBlock>
      </StyledRoot>
    );
  },
);
