import React from "react";
import styled, { css } from "styled-components";

export interface TextAreaProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "state"
> {
  state?: "Default" | "Focused" | "Disabled";
}

const StyledRoot = styled.div<{ $state: "Default" | "Focused" | "Disabled" }>(
  ({ theme, $state }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 393px;
    height: 132px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Background"]["Primary"]};
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        case "Focused":
          return css`
            border-color: ${theme["Border"]["Primary"]};
          `;
        case "Disabled":
          return css`
            border-color: ${theme["Border"]["Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Focused":
          return css`
            box-shadow:
              0px 0px 0px 2px rgba(255, 255, 255, 1),
              0px 0px 0px 3.5px rgba(50, 102, 173, 0.5);
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["Text"]["Tertiary"]};
  `,
);

const StyledPlaceholder = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Tertiary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

/** A multi-line text input area component that supports Default, Focused, and Disabled states. Used to collect longer-form text input from users. */
export const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>(
  function TextArea({ state = "Default", ...rest }, ref) {
    return (
      <StyledRoot aria-label="Text area" {...rest} ref={ref} $state={state}>
        <StyledPlaceholder>{"Placeholder"}</StyledPlaceholder>
      </StyledRoot>
    );
  },
);
