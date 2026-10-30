import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { IllustrationIcon } from "../IllustrationIcon";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface FileZoneProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "figmaBanner" | "empty"
> {
  figmaBanner?: "False" | "True";
  empty?: "False" | "True";
}

const StyledRoot = styled.button(
  () => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:focus-visible {
      outline: 2px solid Highlight;
      outline-color: AccentColor;
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 32px;
    padding-left: 0px;
    gap: 40px;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 500px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #4d4c4c;
    border-radius: 8px;
    &:hover:not(:disabled) {
      background-color: #262626;
    }
  `,
);

const StyledInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
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
    gap: 6px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledMessage = styled.p(
  () => css`
    color: #eeeeee;
  `,
);

const StyledInfo2 = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledIllustration = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    background-color: #333333;
    border-radius: 8px;
    &:is(button:hover:not(:disabled) *) {
      background-color: #3d3d3d;
    }
  `,
);

const StyledTertiaryButtonNeutral = styled.div(
  () => css`
    position: absolute;
    left: 313.5px;
    bottom: 40px;
    width: 173px;
    height: 30px;
  `,
);

const StyledFigmaBanner = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 800px;
    height: 55px;
    overflow: hidden;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledInfo3 = styled.div(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledFigmaIconMonoLineBlack1 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 13.546875px;
    padding-right: 11.868906021118164px;
    padding-bottom: 13.546875px;
    padding-left: 11.875px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 51px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledVector = styled.div(
  () => css`
    width: 16.256093978881836px;
    height: 23.90625px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

/** A file upload drop zone that accepts files via drag-and-drop or manual selection. Displays instructional messaging, accepted file format info, an optional illustration, and an optional Figma-specific banner with copy-paste instructions. */
export const FileZone = React.forwardRef<HTMLButtonElement, FileZoneProps>(
  function FileZone({ figmaBanner = "False", empty = "False", ...rest }, ref) {
    return (
      <StyledRoot type="button" {...rest} ref={ref}>
        <StyledInfo>
          {empty === "False" && (
            <ImageFlexible snaps={false} defaultProp={"Free"} />
          )}
          <StyledContent>
            <StyledMessage>
              {"Drag and drop your choose file to upload"}
            </StyledMessage>
            <StyledInfo2>
              {" The ideal aspect ratio is 375 x 812. Use png, jpeg or gif."}
            </StyledInfo2>
          </StyledContent>
          {empty === "True" && (
            <StyledIllustration>
              {empty === "True" && (
                <IllustrationIcon type={"New image"} mode={"Dark"} />
              )}
            </StyledIllustration>
          )}
        </StyledInfo>
        {figmaBanner === "False" && (
          <StyledTertiaryButtonNeutral>
            <TertiaryButtonNeutral
              mode={"Dark"}
              hasIcon={"True"}
              size={"Regular"}
            />
          </StyledTertiaryButtonNeutral>
        )}
        {figmaBanner === "True" && (
          <StyledFigmaBanner>
            {figmaBanner === "True" && (
              <StyledInfo3>
                {
                  "Using Figma? Cmd + Shift + C to copy as image, click to paste."
                }
              </StyledInfo3>
            )}
            {figmaBanner === "True" && (
              <TertiaryButtonNeutral
                mode={"Light"}
                hasIcon={"True"}
                size={"Regular"}
              />
            )}
            {figmaBanner === "True" && (
              <StyledFigmaIconMonoLineBlack1>
                {figmaBanner === "True" && <StyledVector />}
              </StyledFigmaIconMonoLineBlack1>
            )}
          </StyledFigmaBanner>
        )}
      </StyledRoot>
    );
  },
);
