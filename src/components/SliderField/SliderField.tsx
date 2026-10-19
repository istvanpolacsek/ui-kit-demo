import React from "react";
import styled, { css } from "styled-components";

export interface SliderFieldProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "label" | "description" | "hasLabel" | "hasDescription"
> {
  label?: string;
  description?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
}

const StyledRoot = styled.div(
  () => css`
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

const StyledLabel2 = styled.label(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
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
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

const StyledValue = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
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
    &:disabled {
      background-color: ${theme["Background"]["Disabled"]["Default"]};
    }
    &:disabled {
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
    &:disabled {
      background-color: ${theme["Background"]["Disabled"]["Default"]};
    }
    &:disabled {
      border-color: ${theme["Border"]["Disabled"]["default"]};
    }
  `,
);

const StyledDescription = styled.p(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** A slider field component that combines a labeled range input with an optional description. Supports a prefix-annotated value display, a dual-knob range slider, and can be disabled. Suitable for numeric range selection within a form. */
export const SliderField = React.forwardRef<HTMLDivElement, SliderFieldProps>(
  function SliderField(
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
      <StyledRoot aria-label="Label" {...rest} ref={ref}>
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
  },
);
