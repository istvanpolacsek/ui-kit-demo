import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ChatInputProps extends Omit<
  React.ComponentPropsWithoutRef<"form">,
  "size"
> {
  size?: "Multiline" | "Single line";
}

const StyledRoot = styled.form<{ $size: "Multiline" | "Single line" }>(
  ({ theme, $size }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    background-color: #ffffff;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 16px;
    ${(() => {
      switch ($size) {
        case "Multiline":
          return css`
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
          `;
        case "Single line":
          return css`
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
          `;
        default:
          return css``;
      }
    })()}
    color: ${theme["VariableID:cc323a7bf1893fbcddcb523d3a2f31e2ff10e38b"]["15974:6"]};
  `,
);

const StyledRow = styled.div<{ $size: "Multiline" | "Single line" }>(
  ({ $size }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "Multiline":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 16px;
            padding-bottom: 12px;
            padding-left: 16px;
            gap: 3px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Single line":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: space-between;
            align-items: center;
            width: 752px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColumn = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledReplyToClaude = styled.p(
  () => css`
    color: #7b7974;
    font-family: "Anthropic Sans Text";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
  `,
);

const StyledRow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledColumn2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledAskApp = styled.p(
  () => css`
    color: #7b7974;
    font-family: "Anthropic Sans Text";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
  `,
);

const StyledRow22 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow3 = styled.div(
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
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #c6613f;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Secondary"]};
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  `,
);

const StyledRow23 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRow4 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: center;
    width: 340px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRow5 = styled.div(
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
    background-color: ${theme["VariableID:1ec4c337ffa833dd319250c830addaedd53b20ca"]["15974:21"]};
    border-radius: 8px;
  `,
);

const StyledRow24 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow6 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 4px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledRow7 = styled.div(
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

const StyledRow8 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2.3362832069396973px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSonnet45 = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Serif Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  `,
);

const StyledRow25 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow9 = styled.div(
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
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #c6613f;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Secondary"]};
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  `,
);

/** A chat input component that allows users to compose and send messages. Supports both multiline (textarea-style) and single-line input variants, with contextual reply/model selection controls. */
export const ChatInput = React.forwardRef<HTMLFormElement, ChatInputProps>(
  function ChatInput({ size = "Multiline", ...rest }, ref) {
    return (
      <StyledRoot
        role="form"
        aria-label="Chat input"
        {...rest}
        ref={ref}
        $size={size}
      >
        <StyledRow $size={size}>
          {size === "Multiline" && (
            <StyledColumn>
              {size === "Multiline" && (
                <StyledReplyToClaude>{"Reply to Claude"}</StyledReplyToClaude>
              )}
            </StyledColumn>
          )}
          {size === "Single line" && (
            <StyledRow2>
              {size === "Single line" && (
                <StyledColumn2>
                  {size === "Single line" && (
                    <StyledAskApp>{"Ask App"}</StyledAskApp>
                  )}
                </StyledColumn2>
              )}
            </StyledRow2>
          )}
          {size === "Single line" && (
            <StyledRow22>
              {size === "Single line" && <StyledRow3></StyledRow3>}
            </StyledRow22>
          )}
        </StyledRow>
        {size === "Multiline" && (
          <StyledRow23>
            {size === "Multiline" && (
              <StyledRow4>
                {size === "Multiline" && <StyledRow5></StyledRow5>}
              </StyledRow4>
            )}
            {size === "Multiline" && (
              <StyledRow24>
                {size === "Multiline" && (
                  <StyledRow6>
                    {size === "Multiline" && (
                      <StyledRow7>
                        {size === "Multiline" && (
                          <StyledRow8>
                            {size === "Multiline" && (
                              <StyledSonnet45>{"Sonnet 4.5"}</StyledSonnet45>
                            )}
                          </StyledRow8>
                        )}
                        {size === "Multiline" && (
                          <Icon name={"Caret Down Small"} size={20} />
                        )}
                      </StyledRow7>
                    )}
                  </StyledRow6>
                )}
                {size === "Multiline" && (
                  <StyledRow25>
                    {size === "Multiline" && <StyledRow9></StyledRow9>}
                  </StyledRow25>
                )}
              </StyledRow24>
            )}
          </StyledRow23>
        )}
      </StyledRoot>
    );
  },
);
