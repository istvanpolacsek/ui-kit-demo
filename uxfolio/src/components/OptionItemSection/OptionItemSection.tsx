import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";

export interface OptionItemSectionProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 148px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #eeeeee;
  `,
);

const StyledSectionIconWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 2px;
    &:is(button:hover:not(:disabled) *) {
      background-color: #262626;
    }
    &:is(button:hover:not(:disabled) *) {
      border-radius: 8px;
    }
  `,
);

const StyledLabel = styled.div(
  () => css`
    color: #eeeeee;
  `,
);

const StyledBoldStatement = styled.div(
  () => css`
    display: none;
    color: #eeeeee;
    &:is(button:hover:not(:disabled) *) {
      display: block;
    }
  `,
);

/** A section option item displaying an icon alongside a label and bold statement text. Used as a selectable or informational row within a list of options, grouped under a section heading. */
export const OptionItemSection = React.forwardRef<
  HTMLButtonElement,
  OptionItemSectionProps
>(function OptionItemSection({ ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <StyledSectionIconWrapper>
        <IllustrationIcon type={"Text"} mode={"Dark"} />
      </StyledSectionIconWrapper>
      <StyledLabel>{"Label"}</StyledLabel>
      <StyledBoldStatement>{"Bold statement"}</StyledBoldStatement>
    </StyledRoot>
  );
});
