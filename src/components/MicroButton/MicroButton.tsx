import React from "react";
import styled, { css } from "styled-components";
import { EditSmall } from "../EditSmall";

export interface MicroButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 999px;
    &:hover {
      background-color: #d1d1d1;
    }
  `,
);

/** A compact, small-sized button component with default and hover interaction states, typically used for inline or space-constrained actions. */
export const MicroButton = React.forwardRef<
  HTMLButtonElement,
  MicroButtonProps
>(function MicroButton({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Action" {...rest} ref={ref}>
      <EditSmall />
    </StyledRoot>
  );
});
