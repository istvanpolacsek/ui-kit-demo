import React from "react";
import styled, { css } from "styled-components";
import { SubheaderSmall } from "../SubheaderSmall";
import { ColorSelectorOnlyColor } from "../ColorSelectorOnlyColor";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";

export interface ColorSelectorProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "type"
> {
  type?: "Dark gradient" | "Solid" | "Light gradient";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledBackground = styled.ul<{
  $type: "Dark gradient" | "Solid" | "Light gradient";
}>(
  ({ $type }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 14px;
    padding-bottom: 16px;
    padding-left: 14px;
    gap: 56px;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: rgba(255, 255, 255, 0.11999999731779099);
    border-radius: 8px;
    ${(() => {
      switch ($type) {
        case "Solid":
          return css`
            background-color: ${"#808080"};
          `;
        case "Light gradient":
          return css`
            background-color: ${"transparent"};
          `;
        case "Dark gradient":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColorSelectorOnlyColor = styled.li(() => css``);

const StyledIconOnlyPrimaryButtonSubtle = styled.li(() => css``);

const StyledColorSelectorOnlyColor2 = styled.li(() => css``);

/** A color selector component that allows users to choose between different color or gradient styles (Dark gradient, Solid, Light gradient). Renders a labeled section with color option buttons. */
export const ColorSelector = React.forwardRef<
  HTMLDivElement,
  ColorSelectorProps
>(function ColorSelector({ type = "Solid", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Color selector" {...rest} ref={ref}>
      <StyledSubheaderSmall>
        <SubheaderSmall hasIcon={false} mode={"Dark"} />
      </StyledSubheaderSmall>
      <StyledBackground $type={type}>
        <StyledColorSelectorOnlyColor>
          <ColorSelectorOnlyColor />
        </StyledColorSelectorOnlyColor>
        {["Light gradient", "Dark gradient"].includes(type) && (
          <StyledIconOnlyPrimaryButtonSubtle>
            <IconOnlyPrimaryButtonSubtle
              state={"Default"}
              size={"Tiny"}
              mode={"Dark"}
            />
          </StyledIconOnlyPrimaryButtonSubtle>
        )}
        {["Light gradient", "Dark gradient"].includes(type) && (
          <StyledColorSelectorOnlyColor2>
            <ColorSelectorOnlyColor />
          </StyledColorSelectorOnlyColor2>
        )}
      </StyledBackground>
    </StyledRoot>
  );
});
