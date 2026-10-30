import React from "react";
import styled, { css } from "styled-components";

export interface IndicatorStepProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "selected"
> {
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{ $hover: string }>(
  ({ $hover }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 14px;
    padding-right: 21px;
    padding-bottom: 14px;
    padding-left: 21px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 9999px;
    ${(() => {
      switch ($hover) {
        case "True":
          return css`
            background-color: ${"#727272"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($hover) {
        case "False":
          return css`
            border-color: ${"#727272"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($hover) {
        case "False":
          return css`
            color: ${"#000000"};
          `;
        case "True":
          return css`
            color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const Styled1 = styled.span<{ $hover: string }>(
  ({ $hover }) => css`
    ${(() => {
      switch ($hover) {
        case "False":
          return css`
            color: ${"#000000"};
          `;
        case "True":
          return css`
            color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-work-sans, 'Work Sans'), sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.01em;
  `,
);

/** A step indicator component used in multi-step flows to represent a numbered step. Supports hover state styling. */
export const IndicatorStep = React.forwardRef<
  HTMLButtonElement,
  IndicatorStepProps
>(function IndicatorStep({ selected, ...rest }, ref) {
  const hover = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $hover={hover}
    >
      <Styled1 $hover={hover}>{"1"}</Styled1>
    </StyledRoot>
  );
});
