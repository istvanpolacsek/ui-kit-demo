import React from "react";
import styled, { css } from "styled-components";
import { LogoEmbeddedMedia } from "../LogoEmbeddedMedia";

export interface OptionChipProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 16px;
    padding-bottom: 8px;
    padding-left: 14px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #262626;
    border-radius: 100px;
    color: #adadad;
    &:hover {
      background-color: #333333;
    }
    &:active {
      background-color: #3d3d3d;
    }
  `,
);

const StyledValue = styled.span(
  () => css`
    color: #adadad;
    &:active {
      color: #fefefe;
    }
  `,
);

/** An option chip component that represents a selectable filter or category option. Supports default, hover, and active interaction states. */
export const OptionChip = React.forwardRef<HTMLButtonElement, OptionChipProps>(
  function OptionChip({ ...rest }, ref) {
    return (
      <StyledRoot role="button" aria-label="Option chip" {...rest} ref={ref}>
        <LogoEmbeddedMedia type={"Adobe XD"} />
        <StyledValue>{"Value"}</StyledValue>
      </StyledRoot>
    );
  },
);
