import React from "react";
import styled, { css } from "styled-components";

export interface AIConversationProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "content"
> {
  content?: React.ReactNode;
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 804px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledContent = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A conversation container for AI interactions. Accepts slotted content representing the conversation thread, messages, or related UI elements. */
export const AIConversation = React.forwardRef<
  HTMLElement,
  AIConversationProps
>(function AIConversation({ content, ...rest }, ref) {
  return (
    <StyledRoot role="log" aria-label="AI Conversation" {...rest} ref={ref}>
      <StyledContent>{content}</StyledContent>
    </StyledRoot>
  );
});
