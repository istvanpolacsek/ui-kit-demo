import React from "react";
import styled, { css } from "styled-components";

export interface PlaceholderTextMobileProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "textState"
> {
  textState?: "Placeholder";
}

const StyledRoot = styled.span(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    color: ${theme["gray"]["500"]};
  `,
);

const StyledatomsDefault = styled.span(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.005em;
  `,
);

/** Displays placeholder text for a mobile input or content area, indicating where user input or content is expected. */
export const PlaceholderTextMobile = React.forwardRef<
  HTMLSpanElement,
  PlaceholderTextMobileProps
>(function PlaceholderTextMobile({ textState = "Placeholder", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Placeholder text" {...rest} ref={ref}>
      <StyledatomsDefault>{"Placeholder text"}</StyledatomsDefault>
    </StyledRoot>
  );
});
