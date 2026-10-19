import React from "react";
import styled, { css } from "styled-components";

export interface AIChatCodeBlockProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "code"
> {
  code?: React.ReactNode;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 800px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 16px;
    color: ${theme["Text"]["Default"]["Tertiary"]};
  `,
);

const StyledLineNumber = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 8px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-end;
    width: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 0px;
  `,
);

const Styled12345678910111213141516171819202122232425262728293031 = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Tertiary"]};
    font-family: "Roboto Mono";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  `,
);

const StyledCode = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    padding-left: 8px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    && > * {
      align-self: stretch;
      width: auto;
    }
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
  `,
);

/** A code block component used within an AI chat interface. Displays code content alongside line numbers, supporting slotted code content for syntax-highlighted or plain code rendering. */
export const AIChatCodeBlock = React.forwardRef<
  HTMLDivElement,
  AIChatCodeBlockProps
>(function AIChatCodeBlock({ code, ...rest }, ref) {
  return (
    <StyledRoot role="region" aria-label="Code block" {...rest} ref={ref}>
      <StyledLineNumber>
        <Styled12345678910111213141516171819202122232425262728293031>
          {
            "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31"
          }
        </Styled12345678910111213141516171819202122232425262728293031>
      </StyledLineNumber>
      <StyledCode>{code}</StyledCode>
    </StyledRoot>
  );
});
