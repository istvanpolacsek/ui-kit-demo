import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface NavigationButtonBackProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 4px;
    color: #707070;
  `,
);

const StyledBack = styled.span(
  () => css`
    color: #707070;
    &:hover {
      color: #0f0f0f;
    }
  `,
);

/** A navigation button that takes the user back to the previous page or step. Supports Default and Hover visual states. */
export const NavigationButtonBack = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonBackProps
>(function NavigationButtonBack({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Go back" {...rest} ref={ref}>
      <VisualAsset name={"Arrow left"} size={24} />
      <StyledBack>{"Back"}</StyledBack>
    </StyledRoot>
  );
});
