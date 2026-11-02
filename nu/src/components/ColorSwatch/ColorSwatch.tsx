import React from "react";
import styled, { css } from "styled-components";

export interface ColorSwatchProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "baseColorIndicator"
> {
  baseColorIndicator?: boolean;
}

const StyledRoot = styled.div(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: ${theme["text"]["textOnLightDefault"]};
  `,
);

const StyledColor = styled.div(
  ({ theme }) => css`
    background-color: ${theme["surface"]["surfaceDefault"]};
    border-radius: 8px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledName = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  `,
);

const StyledHexcode = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  `,
);

const StyledMainColorIndicator = styled.div(
  () => css`
    position: absolute;
    right: 8px;
    top: 8px;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 50%;
  `,
);

/** A color swatch component that displays a color sample along with its name and hex code. Optionally shows a base color indicator marker. */
export const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(
  function ColorSwatch({ baseColorIndicator = false, ...rest }, ref) {
    return (
      <StyledRoot role="img" aria-label="Color swatch" {...rest} ref={ref}>
        <StyledColor />
        <StyledContent>
          <StyledName>{"100"}</StyledName>
          <StyledHexcode>{"#FFFFFF"}</StyledHexcode>
        </StyledContent>
        {baseColorIndicator && <StyledMainColorIndicator />}
      </StyledRoot>
    );
  },
);
