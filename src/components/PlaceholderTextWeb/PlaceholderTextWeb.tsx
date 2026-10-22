import React from "react";
import styled, { css } from "styled-components";

export interface PlaceholderTextWebProps extends Omit<
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
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** Displays placeholder text within a form input or content area, indicating the expected input or content type to the user. */
export const PlaceholderTextWeb = React.forwardRef<
  HTMLSpanElement,
  PlaceholderTextWebProps
>(function PlaceholderTextWeb({ textState = "Placeholder", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Placeholder text" {...rest} ref={ref}>
      <StyledatomsDefault>{"Placeholder text"}</StyledatomsDefault>
    </StyledRoot>
  );
});
