import React from "react";
import styled, { css } from "styled-components";

export interface SliderFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "label" | "description" | "hasLabel" | "hasDescription"
> {
  label?: string;
  description?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
}

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
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLabel2 = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledSliderOutput = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPrefix = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledValue = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledSlider = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledBlock = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    height: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    min-width: 0;
    background-color: ${theme["Background"]["Brand"]["Secondary"]};
    border-radius: 9999px;
  `,
);

const StyledKnobStart = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Brand"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    &:is(button:disabled *) {
      background-color: ${theme["Background"]["Disabled"]["Default"]};
    }
    &:is(button:disabled *) {
      border-color: ${theme["Border"]["Disabled"]["default"]};
    }
  `,
);

const StyledSlider2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    min-width: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledKnobEnd = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Brand"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    &:is(button:disabled *) {
      background-color: ${theme["Background"]["Disabled"]["Default"]};
    }
    &:is(button:disabled *) {
      border-color: ${theme["Border"]["Disabled"]["default"]};
    }
  `,
);

const StyledDescription = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: var(--font-inter, "Inter"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A slider field component that allows users to select a value or range within a defined interval. Supports an optional label with a live value output (prefix + current value), a range slider track with start and end knobs, and an optional description/helper text. Can be disabled. */
export const SliderField = React.forwardRef<
  HTMLButtonElement,
  SliderFieldProps
>(function SliderField(
  {
    label = "Label",
    description = "Description",
    hasLabel = true,
    hasDescription = true,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      {hasLabel && (
        <StyledLabel>
          <StyledLabel2>{label}</StyledLabel2>
          <StyledSliderOutput>
            <StyledPrefix>{"$"}</StyledPrefix>
            <StyledValue>{"0-100"}</StyledValue>
          </StyledSliderOutput>
        </StyledLabel>
      )}
      <StyledSlider>
        <StyledBlock>
          <StyledKnobStart></StyledKnobStart>
          <StyledSlider2></StyledSlider2>
          <StyledKnobEnd></StyledKnobEnd>
        </StyledBlock>
      </StyledSlider>
      {hasDescription && <StyledDescription>{description}</StyledDescription>}
    </StyledRoot>
  );
});
