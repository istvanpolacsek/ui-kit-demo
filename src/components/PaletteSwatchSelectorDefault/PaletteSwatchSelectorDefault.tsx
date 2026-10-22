import React from "react";
import styled, { css } from "styled-components";
import { PaletteSwatchSelectorOnlySwatch } from "../PaletteSwatchSelectorOnlySwatch";

export interface PaletteSwatchSelectorDefaultProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "selected" | "picker"
> {
  selected?: "5" | "1" | "2" | "3" | "4" | "None";
  picker?: "Default" | "Editor";
}

const StyledRoot = styled.div<{ $picker: "Default" | "Editor" }>(
  ({ $picker }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($picker) {
        case "Default":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: space-between;
            align-items: flex-start;
          `;
        case "Editor":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            height: 56px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($picker) {
        case "Editor":
          return css`
            border-color: ${"rgba(254, 254, 254, 0.07999999821186066)"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($picker) {
        case "Default":
          return css`
            border-radius: 0px;
          `;
        case "Editor":
          return css`
            border-radius: 8px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPaletteSwatchSelectorOnlySwatch = styled.div<{
  $picker: "Default" | "Editor";
}>(
  ({ $picker }) => css`
    ${(() => {
      switch ($picker) {
        case "Editor":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
              align-self: stretch;
              height: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPaletteSwatchSelectorOnlySwatch2 = styled.div<{
  $picker: "Default" | "Editor";
}>(
  ({ $picker }) => css`
    ${(() => {
      switch ($picker) {
        case "Editor":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
              align-self: stretch;
              height: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPaletteSwatchSelectorOnlySwatch3 = styled.div<{
  $picker: "Default" | "Editor";
}>(
  ({ $picker }) => css`
    ${(() => {
      switch ($picker) {
        case "Editor":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
              align-self: stretch;
              height: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPaletteSwatchSelectorOnlySwatch4 = styled.div<{
  $picker: "Default" | "Editor";
}>(
  ({ $picker }) => css`
    ${(() => {
      switch ($picker) {
        case "Editor":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
              align-self: stretch;
              height: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPaletteSwatchSelectorOnlySwatch5 = styled.div<{
  $picker: "Default" | "Editor";
}>(
  ({ $picker }) => css`
    ${(() => {
      switch ($picker) {
        case "Editor":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
              align-self: stretch;
              height: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A palette swatch selector component that displays a group of color swatches, allowing the user to select one. Supports multiple selection states and picker variants (Default and Editor). */
export const PaletteSwatchSelectorDefault = React.forwardRef<
  HTMLDivElement,
  PaletteSwatchSelectorDefaultProps
>(function PaletteSwatchSelectorDefault(
  { selected = "1", picker = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="group"
      aria-label="Palette color swatches"
      {...rest}
      ref={ref}
      $picker={picker}
    >
      <StyledPaletteSwatchSelectorOnlySwatch $picker={picker}>
        <PaletteSwatchSelectorOnlySwatch
          state={"Selected"}
          selector={"Selector"}
        />
      </StyledPaletteSwatchSelectorOnlySwatch>
      <StyledPaletteSwatchSelectorOnlySwatch2 $picker={picker}>
        <PaletteSwatchSelectorOnlySwatch
          state={"Default"}
          selector={"Selector"}
        />
      </StyledPaletteSwatchSelectorOnlySwatch2>
      <StyledPaletteSwatchSelectorOnlySwatch3 $picker={picker}>
        <PaletteSwatchSelectorOnlySwatch
          state={"Default"}
          selector={"Selector"}
        />
      </StyledPaletteSwatchSelectorOnlySwatch3>
      <StyledPaletteSwatchSelectorOnlySwatch4 $picker={picker}>
        <PaletteSwatchSelectorOnlySwatch
          state={"Default"}
          selector={"Selector"}
        />
      </StyledPaletteSwatchSelectorOnlySwatch4>
      <StyledPaletteSwatchSelectorOnlySwatch5 $picker={picker}>
        <PaletteSwatchSelectorOnlySwatch
          state={"Default"}
          selector={"Selector"}
        />
      </StyledPaletteSwatchSelectorOnlySwatch5>
    </StyledRoot>
  );
});
