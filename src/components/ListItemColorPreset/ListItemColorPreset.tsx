import React from "react";
import styled, { css } from "styled-components";

export interface ListItemColorPresetProps extends React.ComponentPropsWithoutRef<"button"> {}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 4px;
    color: #adadad;
    &:hover {
      background-color: #333333;
    }
    &:active {
      background-color: #4d4c4c;
    }
  `,
);

const StyledName = styled.span(
  () => css`
    color: #adadad;
    &:active {
      color: #fefefe;
    }
  `,
);

const StyledTinyColorPreview = styled.span(
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
    overflow: hidden;
    background-color: #262626;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: rgba(255, 255, 255, 0.07999999821186066);
    border-radius: 8px;
  `,
);

const StyledColor = styled.div(
  () => css`
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #2e3246;
    border-radius: 0px;
  `,
);

const StyledColor2 = styled.div(
  () => css`
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #3a405a;
    border-radius: 0px;
  `,
);

const StyledColor3 = styled.div(
  () => css`
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f7e8dc;
    border-radius: 0px;
  `,
);

/** A selectable color preset list item that displays a label and a small color preview swatch composed of multiple color segments. Supports Default, Hover, and Active interaction states. */
export const ListItemColorPreset = React.forwardRef<
  HTMLButtonElement,
  ListItemColorPresetProps
>(function ListItemColorPreset({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Concrete color preset" {...rest} ref={ref}>
      <StyledName>{"Concrete"}</StyledName>
      <StyledTinyColorPreview>
        <StyledColor />
        <StyledColor2 />
        <StyledColor3 />
      </StyledTinyColorPreview>
    </StyledRoot>
  );
});
