import React from "react";
import styled, { css } from "styled-components";

export interface SparkMessageProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "state"
> {
  state?: "Thinking" | "Thinking (long)" | "Writing" | "Resting";
}

const StyledRoot = styled.span(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const SparkMessage = React.forwardRef<
  HTMLSpanElement,
  SparkMessageProps
>(function SparkMessage({ state = "Resting", ...rest }, ref) {
  return <StyledRoot {...rest} ref={ref}></StyledRoot>;
});
