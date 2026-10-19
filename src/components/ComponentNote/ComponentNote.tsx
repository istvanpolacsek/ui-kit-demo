import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { AvatarBlock } from "../AvatarBlock";

export interface ComponentNoteProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showNoteTaker" | "title" | "type"
> {
  showNoteTaker?: boolean;
  title?: string;
  type?: "Annotation" | "Documentation";
}

const StyledRoot = styled.section<{ $type: "Annotation" | "Documentation" }>(
  ({ theme, $type }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 320px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow:
      0px 4px 4px -1px rgba(12, 12, 13, 0.1),
      0px 4px 4px -1px rgba(12, 12, 13, 0.05);
    ${(() => {
      switch ($type) {
        case "Documentation":
          return css`
            background-color: ${theme["Background"]["Warning"]["Secondary"]};
          `;
        case "Annotation":
          return css`
            background-color: ${theme["Background"]["Neutral"]["Tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Documentation":
          return css`
            border-color: ${theme["Border"]["Warning"]["Default"]};
          `;
        case "Annotation":
          return css`
            border-color: ${theme["Border"]["Neutral"]["tertiary"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "Documentation":
          return css`
            color: ${theme["Icon"]["Warning"]["On Warning Secondary"]};
          `;
        case "Annotation":
          return css`
            color: ${theme["Icon"]["Neutral"]["On Neutral Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTitle2 = styled.h4<{ $type: "Annotation" | "Documentation" }>(
  ({ theme, $type }) => css`
    ${(() => {
      switch ($type) {
        case "Documentation":
          return css`
            color: ${theme["Text"]["Warning"]["On Warning Secondary"]};
          `;
        case "Annotation":
          return css`
            color: ${theme["Text"]["Neutral"]["On Neutral Secondary"]};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Roboto Mono';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledDivider = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledNoteTaker = styled.aside(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background-color: ${theme["Background"]["Warning"]["Tertiary"]};
    border-radius: 0px;
  `,
);

const StyledAvatarBlock = styled.div(
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

/** A note component used for annotations or documentation, displaying a title with an optional icon and note-taker attribution. Supports two variants: Annotation and Documentation. */
export const ComponentNote = React.forwardRef<HTMLElement, ComponentNoteProps>(
  function ComponentNote(
    { showNoteTaker = true, title = "Title", type = "Documentation", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="note"
        aria-label="Title"
        {...rest}
        ref={ref}
        $type={type}
      >
        <StyledTitle>
          <Icon name={"Edit 3"} size={20} />
          <StyledTitle2 $type={type}>{title}</StyledTitle2>
        </StyledTitle>
        {type === "Documentation" && <StyledDivider />}
        {showNoteTaker && (
          <StyledNoteTaker>
            {type === "Documentation" && (
              <StyledAvatarBlock>
                <AvatarBlock description={"Date"} title={"Name"} />
              </StyledAvatarBlock>
            )}
          </StyledNoteTaker>
        )}
      </StyledRoot>
    );
  },
);
