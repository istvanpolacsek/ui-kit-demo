import React from "react";
import styled, { css } from "styled-components";

export interface TextBoxTextUnderlayProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "hasModuleExtension"
> {
  hasModuleExtension?: "False" | "True";
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
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
  `,
);

const StyledBlur = styled.div(
  () => css`
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

/** A text box with an optional underlay/blur effect, used to display text content with a visual background treatment. Supports an optional module extension variant. */
export const TextBoxTextUnderlay = React.forwardRef<
  HTMLDivElement,
  TextBoxTextUnderlayProps
>(function TextBoxTextUnderlay({ hasModuleExtension = "False", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      <StyledBlur />
    </StyledRoot>
  );
});
