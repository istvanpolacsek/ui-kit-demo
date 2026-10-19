import React from "react";
import styled, { css } from "styled-components";
import { TextStrong, type TextStrongProps } from "../TextStrong";

export interface TextListProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "hasTitle" | "density" | "slot" | "text"
> {
  hasTitle?: boolean;
  density?: "Default" | "Tight";
  slot?: React.ReactNode;
  text?: TextStrongProps["text"];
}

const StyledRoot = styled.ul<{ $density: "Default" | "Tight" }>(
  ({ $density }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    ${(() => {
      switch ($density) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Tight":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 16px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 89px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTextStrong = styled.div(
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

const StyledSlot = styled.li<{ $density: "Default" | "Tight" }>(
  ({ $density }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($density) {
        case "Default":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Tight":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A list component that renders a collection of text list items, optionally preceded by a title. Supports density variants (Default or Tight) to control spacing between items. */
export const TextList = React.forwardRef<HTMLUListElement, TextListProps>(
  function TextList(
    {
      hasTitle = false,
      density = "Default",
      slot,
      text = "Text Strong",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot aria-label="Text list" {...rest} ref={ref} $density={density}>
        {hasTitle && (
          <StyledTitle>
            <StyledTextStrong>
              <TextStrong text={text} />
            </StyledTextStrong>
          </StyledTitle>
        )}
        <StyledSlot $density={density}>{slot}</StyledSlot>
      </StyledRoot>
    );
  },
);
