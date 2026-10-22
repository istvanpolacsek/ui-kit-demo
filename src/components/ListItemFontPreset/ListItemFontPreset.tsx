import React from "react";
import styled, { css } from "styled-components";

export interface ListItemFontPresetProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 4px;
    &:hover {
      background-color: #333333;
    }
    &:active {
      background-color: #4d4c4c;
    }
  `,
);

const StyledHeadingFont = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHeadingFontPreview = styled.p(
  () => css`
    color: #fefefe;
    font-family: "Sora";
    font-size: 18px;
    font-weight: 600;
  `,
);

const StyledParagraphFont = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledParagraphFontPreview = styled.p(
  () => css`
    color: #adadad;
    font-family: "Work Sans";
    font-size: 14px;
    font-weight: 400;
    &:active {
      color: #fefefe;
    }
  `,
);

/** Displays a font preset list item showing the selected heading and paragraph fonts for a design theme, with interactive states (Default, Hover, Active). */
export const ListItemFontPreset = React.forwardRef<
  HTMLDivElement,
  ListItemFontPresetProps
>(function ListItemFontPreset({ ...rest }, ref) {
  return (
    <StyledRoot role="listitem" aria-label="Font preset" {...rest} ref={ref}>
      <StyledHeadingFont>
        <StyledHeadingFontPreview>
          {"Sora for headings"}
        </StyledHeadingFontPreview>
      </StyledHeadingFont>
      <StyledParagraphFont>
        <StyledParagraphFontPreview>
          {"Work Sans for your paragraphs"}
        </StyledParagraphFontPreview>
      </StyledParagraphFont>
    </StyledRoot>
  );
});
