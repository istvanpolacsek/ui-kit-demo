import React from "react";
import styled, { css } from "styled-components";

export interface TagSubscription2Props extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type"
> {
  type?: "Default";
}

const StyledRoot = styled.span(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #262626;
    border-radius: 4px;
    color: #dcfa37;
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 1.17247474193573px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledVector = styled.div(
  () => css`
    width: 10px;
    height: 10.000226974487305px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #dcfa37;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.span(
  () => css`
    color: #dcfa37;
  `,
);

/** A subscription tag component that displays an icon alongside a label (e.g., 'Plus'). Used to indicate subscription tier or status within the UI. */
export const TagSubscription2 = React.forwardRef<
  HTMLSpanElement,
  TagSubscription2Props
>(function TagSubscription2({ type = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Plus subscription tag" {...rest} ref={ref}>
      <StyledIcon>
        <StyledVector />
      </StyledIcon>
      <StyledLabel>{"Plus"}</StyledLabel>
    </StyledRoot>
  );
});
