import React from "react";
import styled, { css } from "styled-components";
import { DropListLabelless } from "../DropListLabelless";
import { FontSizePickerPlatform } from "../FontSizePickerPlatform";

export interface ColorPickerEmbeddedProps extends Omit<
  React.ComponentPropsWithoutRef<"form">,
  "type"
> {
  type?: "HSL" | "HEX" | "RGB";
}

const StyledRoot = styled.form(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: center;
    width: 289px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledColorSpace = styled.section(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 86px;
    padding-right: 87px;
    padding-bottom: 39px;
    padding-left: 184px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    height: 143px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledThumb = styled.div(
  () => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #2a455e;
    border-radius: 50%;
    box-shadow: 0px 2px 6px 0px rgba(18, 17, 24, 0.2);
  `,
);

const StyledOption = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledHueSpectrum = styled.section(
  () => css`
    border-radius: 0px;
  `,
);

const StyledFullTrack = styled.div(
  () => css`
    width: 257px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 4px;
  `,
);

const StyledThumb2 = styled.div(
  () => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1b80dd;
    border-radius: 50%;
    box-shadow: 0px 2px 6px 0px rgba(18, 17, 24, 0.2);
  `,
);

const StyledPreciseSettings = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFontSizePickerPlatform = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFontSizePickerPlatform2 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFontSizePickerPlatform3 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** An embedded color picker component that allows users to select a color by manipulating a color space canvas, a hue spectrum slider, and precise numeric input fields. Supports HEX, HSL, and RGB color space modes. */
export const ColorPickerEmbedded = React.forwardRef<
  HTMLFormElement,
  ColorPickerEmbeddedProps
>(function ColorPickerEmbedded({ type = "HEX", ...rest }, ref) {
  return (
    <StyledRoot role="group" aria-label="Color picker" {...rest} ref={ref}>
      <StyledColorSpace>
        <StyledThumb />
      </StyledColorSpace>
      <StyledOption>
        <StyledHueSpectrum>
          <StyledFullTrack />
          <StyledThumb2 />
        </StyledHueSpectrum>
        <StyledPreciseSettings>
          <DropListLabelless mode={"Dark"} />
          <StyledFontSizePickerPlatform>
            <FontSizePickerPlatform type={"text only"} />
          </StyledFontSizePickerPlatform>
          {["RGB", "HSL"].includes(type) && (
            <StyledFontSizePickerPlatform2>
              <FontSizePickerPlatform type={"text only"} />
            </StyledFontSizePickerPlatform2>
          )}
          {["RGB", "HSL"].includes(type) && (
            <StyledFontSizePickerPlatform3>
              <FontSizePickerPlatform type={"text only"} />
            </StyledFontSizePickerPlatform3>
          )}
        </StyledPreciseSettings>
      </StyledOption>
    </StyledRoot>
  );
});
