import React from "react";
import styled, { css } from "styled-components";

export interface InputProps extends Omit<
  React.ComponentPropsWithoutRef<"form">,
  "attachments" | "cursor" | "jumpToBottom" | "state"
> {
  attachments?: boolean;
  cursor?: boolean;
  jumpToBottom?: boolean;
  state?: "Resting" | "Active" | "Streaming" | "Stopping";
}

const StyledRoot = styled.form(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6000000238418579);
    border-radius: 24px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledjumpToBottom = styled.div<{
  $state: "Resting" | "Active" | "Streaming" | "Stopping";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Resting":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 370px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Active":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 378px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Streaming":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 370px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Stopping":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 370px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame1430106122 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: rgba(255, 255, 255, 0.6000000238418579);
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 20px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.12);
  `,
);

const StyledinputLayout = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 24px;
  `,
);

const StyledattachmentRow = styled.div<{
  $state: "Resting" | "Active" | "Streaming" | "Stopping";
}>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Resting":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 0px;
            padding-left: 8px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Streaming":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 0px;
            padding-left: 8px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 378px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Stopping":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 8px;
            padding-bottom: 0px;
            padding-left: 8px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 378px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledtextField = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 6.000002861022949px;
    justify-content: center;
    align-items: flex-start;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const Styledplaceholder = styled.p(
  () => css`
    color: #7b7974;
  `,
);

const Styledcursor = styled.div(
  () => css`
    position: absolute;
    left: 16px;
    top: 15px;
    width: 2px;
    height: 18px;
    display: flex;
    flex-direction: column;
    padding-top: 1px;
    padding-right: 0px;
    padding-bottom: 1px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 2px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styledline = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledbuttonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8.000003814697266px;
    padding-bottom: 8px;
    padding-left: 8.000003814697266px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledleadingButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledtrailingButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame1430106214 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 24px;
  `,
);

const StyledtextField2 = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 6.000002861022949px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const Styledplaceholder2 = styled.p(
  () => css`
    color: #131313;
  `,
);

const Styledcursor2 = styled.div(
  () => css`
    position: absolute;
    left: 99px;
    top: 60px;
    width: 2px;
    height: 18px;
    display: flex;
    flex-direction: column;
    padding-top: 1px;
    padding-right: 0px;
    padding-bottom: 1px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 2px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styledline2 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledattachmentRow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 378px;
    height: 96px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledbuttonRow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8.000003814697266px;
    padding-bottom: 8px;
    padding-left: 8.000003814697266px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledleadingButtons2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledtrailingButtons2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A chat input component for composing and sending messages to Claude. Supports multiple states (Resting, Active, Streaming, Stopping) and optional features like file attachments, a text cursor indicator, and a jump-to-bottom affordance. */
export const Input = React.forwardRef<HTMLFormElement, InputProps>(
  function Input(
    {
      attachments = false,
      cursor = false,
      jumpToBottom = false,
      state = "Resting",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot role="form" aria-label="Chat input" {...rest} ref={ref}>
        {jumpToBottom && (
          <StyledjumpToBottom $state={state}>
            {state === "Active" && (
              <StyledFrame1430106122></StyledFrame1430106122>
            )}
          </StyledjumpToBottom>
        )}
        {["Resting", "Streaming", "Stopping"].includes(state) && (
          <StyledinputLayout>
            {attachments && (
              <StyledattachmentRow $state={state}></StyledattachmentRow>
            )}
            {["Resting", "Streaming", "Stopping"].includes(state) && (
              <StyledtextField>
                {["Resting", "Streaming", "Stopping"].includes(state) && (
                  <Styledplaceholder>
                    {
                      (
                        {
                          '["Resting"]': "Chat with Claude",
                          '["Streaming"]': "Reply to Claude",
                          '["Stopping"]': "Reply to Claude",
                        } as Record<string, string>
                      )[JSON.stringify([state])]
                    }
                  </Styledplaceholder>
                )}
                {cursor && (
                  <Styledcursor>
                    {["Resting", "Streaming", "Stopping"].includes(state) && (
                      <Styledline />
                    )}
                  </Styledcursor>
                )}
              </StyledtextField>
            )}
            {["Resting", "Streaming", "Stopping"].includes(state) && (
              <StyledbuttonRow>
                {["Resting", "Streaming", "Stopping"].includes(state) && (
                  <StyledleadingButtons></StyledleadingButtons>
                )}
                {["Resting", "Streaming", "Stopping"].includes(state) && (
                  <StyledtrailingButtons></StyledtrailingButtons>
                )}
              </StyledbuttonRow>
            )}
          </StyledinputLayout>
        )}
        {state === "Active" && (
          <StyledFrame1430106214>
            {state === "Active" && (
              <StyledtextField2>
                {state === "Active" && (
                  <Styledplaceholder2>
                    {
                      "You're a tiny fairy who lives in a teapot. Describe your cozy home and your daily adventures in the kitchen!"
                    }
                  </Styledplaceholder2>
                )}
                {state === "Active" && (
                  <Styledcursor2>
                    {state === "Active" && <Styledline2 />}
                  </Styledcursor2>
                )}
              </StyledtextField2>
            )}
            {attachments && <StyledattachmentRow2></StyledattachmentRow2>}
            {state === "Active" && (
              <StyledbuttonRow2>
                {state === "Active" && (
                  <StyledleadingButtons2></StyledleadingButtons2>
                )}
                {state === "Active" && (
                  <StyledtrailingButtons2></StyledtrailingButtons2>
                )}
              </StyledbuttonRow2>
            )}
          </StyledFrame1430106214>
        )}
      </StyledRoot>
    );
  },
);
