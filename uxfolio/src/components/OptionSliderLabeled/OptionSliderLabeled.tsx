import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { TextSize } from "../TextSize";
import {
  OptionSliderOnlySlider,
  type OptionSliderOnlySliderProps,
} from "../OptionSliderOnlySlider";

export interface OptionSliderLabeledProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type" | "value"
> {
  type?: "Mixed" | "Icon" | "Value";
  value?: OptionSliderOnlySliderProps["value"];
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
    border-radius: 0px;
    color: #adadad;
  `,
);

const StyledSubheaderSmall = styled.div(
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

const StyledSlider = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledOptionSliderOnlySlider = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledValue = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledOptionTitle = styled.span(
  () => css`
    color: #adadad;
  `,
);

const StyledValue2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledOptionTitle2 = styled.span(
  () => css`
    color: #adadad;
  `,
);

/** A labeled option slider component that combines a header label, a slider control, and a dynamic value display. Supports multiple variants including mixed (icon + value), icon-only, and value-only display modes. */
export const OptionSliderLabeled = React.forwardRef<
  HTMLDivElement,
  OptionSliderLabeledProps
>(function OptionSliderLabeled(
  { type = "Mixed", value = "25%", ...rest },
  ref,
) {
  return (
    <StyledRoot role="group" aria-label="Option slider" {...rest} ref={ref}>
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      <StyledSlider>
        {["Mixed", "Icon"].includes(type) && <TextSize />}
        <StyledOptionSliderOnlySlider>
          <OptionSliderOnlySlider value={value} />
        </StyledOptionSliderOnlySlider>
        {["Mixed", "Value"].includes(type) && (
          <StyledValue>
            {["Mixed", "Value"].includes(type) && (
              <StyledOptionTitle>{"60"}</StyledOptionTitle>
            )}
          </StyledValue>
        )}
        {type === "Value" && (
          <StyledValue2>
            {type === "Value" && (
              <StyledOptionTitle2>{"60"}</StyledOptionTitle2>
            )}
          </StyledValue2>
        )}
        {type === "Icon" && <TextSize />}
      </StyledSlider>
    </StyledRoot>
  );
});
