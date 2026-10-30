import React from "react";
import styled, { css } from "styled-components";

export interface SliderThumbProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Enabled";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
  `,
);

const StyledThumb = styled.span(
  () => css`
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  `,
);

/** A draggable slider thumb control that represents the current value position within a range input. Rendered as a styled thumb handle for a range slider. */
export const SliderThumb = React.forwardRef<HTMLDivElement, SliderThumbProps>(
  function SliderThumb({ type = "Enabled", ...rest }, ref) {
    return (
      <StyledRoot role="slider" aria-label="Slider thumb" {...rest} ref={ref}>
        <StyledThumb />
      </StyledRoot>
    );
  },
);
