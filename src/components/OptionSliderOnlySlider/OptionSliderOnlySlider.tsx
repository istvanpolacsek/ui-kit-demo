import React from "react";
import styled, { css } from "styled-components";
import { SliderThumb } from "../SliderThumb";

export interface OptionSliderOnlySliderProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "value"
> {
  value?: "0%" | "25%" | "33%" | "50%" | "66%" | "75%" | "100%";
}

const StyledRoot = styled.div(
  () => css`
    border-radius: 0px;
    width: 302px;
    height: 24px;
    box-sizing: border-box;
  `,
);

const StyledFullTrack = styled.div(
  () => css`
    width: 302px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #333333;
    border-radius: 0px;
  `,
);

const StyledActiveTrack = styled.div(
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
    width: 302px;
    height: 2px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledStart = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledPart = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledPart2 = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledPart3 = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledPart4 = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledPart5 = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledPart6 = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledEnd = styled.div(
  () => css`
    background-color: #adadad;
    border-radius: 0px;
  `,
);

const StyledThumb = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 87px;
    justify-content: space-between;
    align-items: flex-start;
    width: 302px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styled0 = styled.li(() => css``);

const Styled24 = styled.li(() => css``);

const Styled33 = styled.li(() => css``);

const Styled50 = styled.li(() => css``);

const Styled67 = styled.li(() => css``);

const Styled75 = styled.li(() => css``);

const Styled100 = styled.li(() => css``);

/** A slider component that allows users to select a value along a track, with discrete step positions (0%, 25%, 33%, 50%, 66%, 75%, 100%). Renders a visual track with an active portion and a draggable thumb indicator. */
export const OptionSliderOnlySlider = React.forwardRef<
  HTMLDivElement,
  OptionSliderOnlySliderProps
>(function OptionSliderOnlySlider({ value = "0%", ...rest }, ref) {
  return (
    <StyledRoot role="slider" aria-label="Option slider" {...rest} ref={ref}>
      <div>
        <StyledFullTrack />
        <StyledActiveTrack>
          <StyledStart />
          <StyledPart />
          <StyledPart2 />
          <StyledPart3 />
          <StyledPart4 />
          <StyledPart5 />
          <StyledPart6 />
          <StyledEnd />
        </StyledActiveTrack>
      </div>
      <StyledThumb>
        <Styled0>
          <SliderThumb type={"Enabled"} />
        </Styled0>
        <Styled24>
          <SliderThumb type={"Enabled"} />
        </Styled24>
        <Styled33>
          <SliderThumb type={"Enabled"} />
        </Styled33>
        <Styled50>
          <SliderThumb type={"Enabled"} />
        </Styled50>
        <Styled67>
          <SliderThumb type={"Enabled"} />
        </Styled67>
        <Styled75>
          <SliderThumb type={"Enabled"} />
        </Styled75>
        <Styled100>
          <SliderThumb type={"Enabled"} />
        </Styled100>
      </StyledThumb>
    </StyledRoot>
  );
});
