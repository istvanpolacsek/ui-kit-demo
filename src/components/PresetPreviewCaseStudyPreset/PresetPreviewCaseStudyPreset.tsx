import React from "react";
import styled, { css } from "styled-components";

export interface PresetPreviewCaseStudyPresetProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "presetLayout"
> {
  presetLayout?:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}

const StyledRoot = styled.section(
  () => css`
    overflow: hidden;
    background-color: #3d3d3d;
    border-radius: 4px;
    width: 285px;
    height: 252px;
    box-sizing: border-box;
  `,
);

const StyledFrame48096242 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 30.02398681640625px;
    padding-bottom: 10.068405151367188px;
    padding-left: 28px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledFrame48096208 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame48096206 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare = styled.div(
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
    width: 105px;
    height: 105px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledOverlay = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 7px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6800000071525574);
    border-radius: 0px;
  `,
);

const StyledFrame48096203 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle = styled.h3(
  () => css`
    color: #707070;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy = styled.p(
  () => css`
    color: #707070;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame48096205 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame48096204 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare2 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame48096207 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame480962042 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare3 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962052 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame480962043 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 2px;
  `,
);

const StyledThumbnailSquare4 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const Styledoverlay = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 0px;
    width: 285px;
    height: 252.0684051513672px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962082 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: center;
            width: 220.5821990966797px;
            height: 277.47064208984375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Layout 3":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: center;
            width: 220.5821990966797px;
            height: 271.60858154296875px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Layout 4":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: 220.5821990966797px;
            height: 220.80409240722656px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Layout 5":
          return css``;
        case "Layout 6":
          return css``;
        case "Layout 7":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: 220.5821990966797px;
            height: 220.80409240722656px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Layout 8":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: 220.5821990966797px;
            height: 220.80409240722656px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame480962062 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Layout 7":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 226px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Layout 8":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame480962044 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Layout 7":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
          `;
        case "Layout 8":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumbnailSquare5 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            width: 105px;
            height: 105px;
            box-sizing: border-box;
          `;
        case "Layout 7":
          return css`
            width: 121.27999877929688px;
            height: 105px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame480962032 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 3px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Layout 7":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 3px;
            justify-content: center;
            align-items: center;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledCaseStudyTitle2 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy2 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962045 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare6 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962053 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle3 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy3 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962054 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame480962046 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare7 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962033 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle4 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy4 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962072 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Layout 4":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Layout 8":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame480962047 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 2":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Layout 4":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Layout 8":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame480962048 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare8 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962034 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle5 = styled.h3(
  () => css`
    color: #5b6579;
    font-family: "Lato";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy5 = styled.p(
  () => css`
    color: #5b6579;
    font-family: "Lato";
    font-size: 6px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledThumbnailSquare9 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962055 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle6 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy6 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962056 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame480962049 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare10 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962035 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle7 = styled.h3(
  () => css`
    color: #5b6579;
    font-family: "Lato";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy7 = styled.p(
  () => css`
    color: #5b6579;
    font-family: "Lato";
    font-size: 6px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962063 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare11 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame48096211 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 3":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-end;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Layout 4":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-end;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumbnailSquare12 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 3":
          return css``;
        case "Layout 4":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 226px;
            height: 105px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($presetLayout) {
        case "Layout 3":
          return css`
            width: 226px;
            height: 105px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOverlay2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 68px;
    padding-bottom: 0px;
    padding-left: 68px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 226px;
    height: 105px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6800000071525574);
    border-radius: 0px;
  `,
);

const StyledFrame480962036 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle8 = styled.h3(
  () => css`
    color: #707070;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy8 = styled.p(
  () => css`
    color: #707070;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962037 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle9 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy9 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame48096213 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-end;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare13 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 226px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962038 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle10 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy10 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame48096209 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 5":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Layout 6":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame4809620410 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare14 = styled.div(
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
    width: 105px;
    height: 105px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledOverlay3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 12px;
    padding-bottom: 0px;
    padding-left: 13px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6800000071525574);
    border-radius: 0px;
  `,
);

const StyledFrame480962039 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle11 = styled.h3(
  () => css`
    color: #5b6579;
    font-family: "Lato";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy11 = styled.p(
  () => css`
    color: #5b6579;
    font-family: "Lato";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962057 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare15 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame480962064 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare16 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame4809620310 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle12 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy12 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962073 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnailSquare17 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame4809620311 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle13 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy13 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame48096210 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 5":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Layout 6":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame4809620411 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 5":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Layout 6":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumbnailSquare18 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame4809620312 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle14 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy14 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962065 = styled.div<{
  $presetLayout:
    | "Layout 1"
    | "Layout 8"
    | "Layout 2"
    | "Layout 3"
    | "Layout 4"
    | "Layout 5"
    | "Layout 6"
    | "Layout 7";
}>(
  ({ $presetLayout }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($presetLayout) {
        case "Layout 5":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Layout 6":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledThumbnailSquare19 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 105px;
    height: 105px;
    box-sizing: border-box;
  `,
);

const StyledFrame4809620313 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle15 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy15 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledFrame480962083 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 226px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFrame4809620412 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledFrame4809620314 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledCaseStudyTitle16 = styled.h3(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 8px;
    font-weight: 600;
    letter-spacing: -0.01em;
  `,
);

const StyledABriefDescriptionOfYourCaseStudy16 = styled.p(
  () => css`
    color: #eeeeee;
    font-family: "Work Sans";
    font-size: 5px;
    font-weight: 400;
    letter-spacing: -0.01em;
  `,
);

const StyledThumbnailSquare20 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    border-radius: 2px;
    width: 121.27999877929688px;
    height: 105px;
    box-sizing: border-box;
  `,
);

/** A preset preview component for case study layouts. Displays one of eight configurable layout variants, each combining thumbnail images with a case study title and brief description. Used to preview and select layout arrangements for case study content sections. */
export const PresetPreviewCaseStudyPreset = React.forwardRef<
  HTMLElement,
  PresetPreviewCaseStudyPresetProps
>(function PresetPreviewCaseStudyPreset(
  { presetLayout = "Layout 1", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Case study preset preview"
      {...rest}
      ref={ref}
    >
      {presetLayout === "Layout 1" && (
        <StyledFrame48096242>
          {presetLayout === "Layout 1" && (
            <StyledFrame48096208>
              {presetLayout === "Layout 1" && (
                <StyledFrame48096206>
                  {presetLayout === "Layout 1" && (
                    <StyledThumbnailSquare>
                      {presetLayout === "Layout 1" && (
                        <StyledOverlay>
                          {presetLayout === "Layout 1" && (
                            <StyledFrame48096203>
                              {presetLayout === "Layout 1" && (
                                <StyledCaseStudyTitle>
                                  {"Case study title"}
                                </StyledCaseStudyTitle>
                              )}
                              {presetLayout === "Layout 1" && (
                                <StyledABriefDescriptionOfYourCaseStudy>
                                  {"A brief description of your case study"}
                                </StyledABriefDescriptionOfYourCaseStudy>
                              )}
                            </StyledFrame48096203>
                          )}
                        </StyledOverlay>
                      )}
                    </StyledThumbnailSquare>
                  )}
                  {presetLayout === "Layout 1" && (
                    <StyledFrame48096205>
                      {presetLayout === "Layout 1" && (
                        <StyledFrame48096204>
                          {presetLayout === "Layout 1" && (
                            <StyledThumbnailSquare2></StyledThumbnailSquare2>
                          )}
                        </StyledFrame48096204>
                      )}
                    </StyledFrame48096205>
                  )}
                </StyledFrame48096206>
              )}
              {presetLayout === "Layout 1" && (
                <StyledFrame48096207>
                  {presetLayout === "Layout 1" && (
                    <StyledFrame480962042>
                      {presetLayout === "Layout 1" && (
                        <StyledThumbnailSquare3></StyledThumbnailSquare3>
                      )}
                    </StyledFrame480962042>
                  )}
                  {presetLayout === "Layout 1" && (
                    <StyledFrame480962052>
                      {presetLayout === "Layout 1" && (
                        <StyledFrame480962043>
                          {presetLayout === "Layout 1" && (
                            <StyledThumbnailSquare4></StyledThumbnailSquare4>
                          )}
                        </StyledFrame480962043>
                      )}
                    </StyledFrame480962052>
                  )}
                </StyledFrame48096207>
              )}
            </StyledFrame48096208>
          )}
        </StyledFrame48096242>
      )}
      <Styledoverlay></Styledoverlay>
      {[
        "Layout 2",
        "Layout 3",
        "Layout 4",
        "Layout 5",
        "Layout 6",
        "Layout 7",
        "Layout 8",
      ].includes(presetLayout) && (
        <StyledFrame480962082 $presetLayout={presetLayout}>
          {["Layout 2", "Layout 7", "Layout 8"].includes(presetLayout) && (
            <StyledFrame480962062 $presetLayout={presetLayout}>
              {["Layout 2", "Layout 7", "Layout 8"].includes(presetLayout) && (
                <StyledFrame480962044 $presetLayout={presetLayout}>
                  {["Layout 2", "Layout 7"].includes(presetLayout) && (
                    <StyledThumbnailSquare5
                      $presetLayout={presetLayout}
                    ></StyledThumbnailSquare5>
                  )}
                  {["Layout 2", "Layout 7"].includes(presetLayout) && (
                    <StyledFrame480962032 $presetLayout={presetLayout}>
                      {["Layout 2", "Layout 7"].includes(presetLayout) && (
                        <StyledCaseStudyTitle2>
                          {"Case study title"}
                        </StyledCaseStudyTitle2>
                      )}
                      {["Layout 2", "Layout 7"].includes(presetLayout) && (
                        <StyledABriefDescriptionOfYourCaseStudy2>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy2>
                      )}
                    </StyledFrame480962032>
                  )}
                  {presetLayout === "Layout 8" && (
                    <StyledFrame480962045>
                      {presetLayout === "Layout 8" && (
                        <StyledThumbnailSquare6></StyledThumbnailSquare6>
                      )}
                    </StyledFrame480962045>
                  )}
                  {presetLayout === "Layout 8" && (
                    <StyledFrame480962053>
                      {presetLayout === "Layout 8" && (
                        <StyledCaseStudyTitle3>
                          {"Case study title"}
                        </StyledCaseStudyTitle3>
                      )}
                      {presetLayout === "Layout 8" && (
                        <StyledABriefDescriptionOfYourCaseStudy3>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy3>
                      )}
                    </StyledFrame480962053>
                  )}
                </StyledFrame480962044>
              )}
              {presetLayout === "Layout 2" && (
                <StyledFrame480962054>
                  {presetLayout === "Layout 2" && (
                    <StyledFrame480962046>
                      {presetLayout === "Layout 2" && (
                        <StyledThumbnailSquare7></StyledThumbnailSquare7>
                      )}
                    </StyledFrame480962046>
                  )}
                  {presetLayout === "Layout 2" && (
                    <StyledFrame480962033>
                      {presetLayout === "Layout 2" && (
                        <StyledCaseStudyTitle4>
                          {"Case study title"}
                        </StyledCaseStudyTitle4>
                      )}
                      {presetLayout === "Layout 2" && (
                        <StyledABriefDescriptionOfYourCaseStudy4>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy4>
                      )}
                    </StyledFrame480962033>
                  )}
                </StyledFrame480962054>
              )}
            </StyledFrame480962062>
          )}
          {["Layout 2", "Layout 4", "Layout 8"].includes(presetLayout) && (
            <StyledFrame480962072 $presetLayout={presetLayout}>
              {["Layout 2", "Layout 4", "Layout 8"].includes(presetLayout) && (
                <StyledFrame480962047 $presetLayout={presetLayout}>
                  {["Layout 2", "Layout 8"].includes(presetLayout) && (
                    <StyledFrame480962048>
                      {["Layout 2", "Layout 8"].includes(presetLayout) && (
                        <StyledThumbnailSquare8></StyledThumbnailSquare8>
                      )}
                    </StyledFrame480962048>
                  )}
                  {presetLayout === "Layout 2" && (
                    <StyledFrame480962034>
                      {presetLayout === "Layout 2" && (
                        <StyledCaseStudyTitle5>
                          {"Case study title"}
                        </StyledCaseStudyTitle5>
                      )}
                      {presetLayout === "Layout 2" && (
                        <StyledABriefDescriptionOfYourCaseStudy5>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy5>
                      )}
                    </StyledFrame480962034>
                  )}
                  {presetLayout === "Layout 4" && (
                    <StyledThumbnailSquare9></StyledThumbnailSquare9>
                  )}
                  {presetLayout === "Layout 8" && (
                    <StyledFrame480962055>
                      {presetLayout === "Layout 8" && (
                        <StyledCaseStudyTitle6>
                          {"Case study title"}
                        </StyledCaseStudyTitle6>
                      )}
                      {presetLayout === "Layout 8" && (
                        <StyledABriefDescriptionOfYourCaseStudy6>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy6>
                      )}
                    </StyledFrame480962055>
                  )}
                </StyledFrame480962047>
              )}
              {presetLayout === "Layout 2" && (
                <StyledFrame480962056>
                  {presetLayout === "Layout 2" && (
                    <StyledFrame480962049>
                      {presetLayout === "Layout 2" && (
                        <StyledThumbnailSquare10></StyledThumbnailSquare10>
                      )}
                    </StyledFrame480962049>
                  )}
                  {presetLayout === "Layout 2" && (
                    <StyledFrame480962035>
                      {presetLayout === "Layout 2" && (
                        <StyledCaseStudyTitle7>
                          {"Case study title"}
                        </StyledCaseStudyTitle7>
                      )}
                      {presetLayout === "Layout 2" && (
                        <StyledABriefDescriptionOfYourCaseStudy7>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy7>
                      )}
                    </StyledFrame480962035>
                  )}
                </StyledFrame480962056>
              )}
              {presetLayout === "Layout 4" && (
                <StyledFrame480962063>
                  {presetLayout === "Layout 4" && (
                    <StyledThumbnailSquare11></StyledThumbnailSquare11>
                  )}
                </StyledFrame480962063>
              )}
            </StyledFrame480962072>
          )}
          {["Layout 3", "Layout 4"].includes(presetLayout) && (
            <StyledFrame48096211 $presetLayout={presetLayout}>
              {["Layout 3", "Layout 4"].includes(presetLayout) && (
                <StyledThumbnailSquare12 $presetLayout={presetLayout}>
                  {presetLayout === "Layout 4" && (
                    <StyledOverlay2>
                      {presetLayout === "Layout 4" && (
                        <StyledFrame480962036>
                          {presetLayout === "Layout 4" && (
                            <StyledCaseStudyTitle8>
                              {"Case study title"}
                            </StyledCaseStudyTitle8>
                          )}
                          {presetLayout === "Layout 4" && (
                            <StyledABriefDescriptionOfYourCaseStudy8>
                              {"A brief description of your case study"}
                            </StyledABriefDescriptionOfYourCaseStudy8>
                          )}
                        </StyledFrame480962036>
                      )}
                    </StyledOverlay2>
                  )}
                </StyledThumbnailSquare12>
              )}
              {presetLayout === "Layout 3" && (
                <StyledFrame480962037>
                  {presetLayout === "Layout 3" && (
                    <StyledCaseStudyTitle9>
                      {"Case study title"}
                    </StyledCaseStudyTitle9>
                  )}
                  {presetLayout === "Layout 3" && (
                    <StyledABriefDescriptionOfYourCaseStudy9>
                      {"A brief description of your case study"}
                    </StyledABriefDescriptionOfYourCaseStudy9>
                  )}
                </StyledFrame480962037>
              )}
            </StyledFrame48096211>
          )}
          {presetLayout === "Layout 3" && (
            <StyledFrame48096213>
              {presetLayout === "Layout 3" && (
                <StyledThumbnailSquare13></StyledThumbnailSquare13>
              )}
              {presetLayout === "Layout 3" && (
                <StyledFrame480962038>
                  {presetLayout === "Layout 3" && (
                    <StyledCaseStudyTitle10>
                      {"Case study title"}
                    </StyledCaseStudyTitle10>
                  )}
                  {presetLayout === "Layout 3" && (
                    <StyledABriefDescriptionOfYourCaseStudy10>
                      {"A brief description of your case study"}
                    </StyledABriefDescriptionOfYourCaseStudy10>
                  )}
                </StyledFrame480962038>
              )}
            </StyledFrame48096213>
          )}
          {["Layout 5", "Layout 6"].includes(presetLayout) && (
            <StyledFrame48096209 $presetLayout={presetLayout}>
              {presetLayout === "Layout 5" && (
                <StyledFrame4809620410>
                  {presetLayout === "Layout 5" && (
                    <StyledThumbnailSquare14>
                      {presetLayout === "Layout 5" && (
                        <StyledOverlay3>
                          {presetLayout === "Layout 5" && (
                            <StyledFrame480962039>
                              {presetLayout === "Layout 5" && (
                                <StyledCaseStudyTitle11>
                                  {"Case study title"}
                                </StyledCaseStudyTitle11>
                              )}
                              {presetLayout === "Layout 5" && (
                                <StyledABriefDescriptionOfYourCaseStudy11>
                                  {"A brief description of your case study"}
                                </StyledABriefDescriptionOfYourCaseStudy11>
                              )}
                            </StyledFrame480962039>
                          )}
                        </StyledOverlay3>
                      )}
                    </StyledThumbnailSquare14>
                  )}
                </StyledFrame4809620410>
              )}
              {presetLayout === "Layout 5" && (
                <StyledFrame480962057>
                  {presetLayout === "Layout 5" && (
                    <StyledThumbnailSquare15></StyledThumbnailSquare15>
                  )}
                </StyledFrame480962057>
              )}
              {presetLayout === "Layout 6" && (
                <StyledFrame480962064>
                  {presetLayout === "Layout 6" && (
                    <StyledThumbnailSquare16></StyledThumbnailSquare16>
                  )}
                  {presetLayout === "Layout 6" && (
                    <StyledFrame4809620310>
                      {presetLayout === "Layout 6" && (
                        <StyledCaseStudyTitle12>
                          {"Case study title"}
                        </StyledCaseStudyTitle12>
                      )}
                      {presetLayout === "Layout 6" && (
                        <StyledABriefDescriptionOfYourCaseStudy12>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy12>
                      )}
                    </StyledFrame4809620310>
                  )}
                </StyledFrame480962064>
              )}
              {presetLayout === "Layout 6" && (
                <StyledFrame480962073>
                  {presetLayout === "Layout 6" && (
                    <StyledThumbnailSquare17></StyledThumbnailSquare17>
                  )}
                  {presetLayout === "Layout 6" && (
                    <StyledFrame4809620311>
                      {presetLayout === "Layout 6" && (
                        <StyledCaseStudyTitle13>
                          {"Case study title"}
                        </StyledCaseStudyTitle13>
                      )}
                      {presetLayout === "Layout 6" && (
                        <StyledABriefDescriptionOfYourCaseStudy13>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy13>
                      )}
                    </StyledFrame4809620311>
                  )}
                </StyledFrame480962073>
              )}
            </StyledFrame48096209>
          )}
          {["Layout 5", "Layout 6"].includes(presetLayout) && (
            <StyledFrame48096210 $presetLayout={presetLayout}>
              {["Layout 5", "Layout 6"].includes(presetLayout) && (
                <StyledFrame4809620411 $presetLayout={presetLayout}>
                  {["Layout 5", "Layout 6"].includes(presetLayout) && (
                    <StyledThumbnailSquare18></StyledThumbnailSquare18>
                  )}
                  {presetLayout === "Layout 6" && (
                    <StyledFrame4809620312>
                      {presetLayout === "Layout 6" && (
                        <StyledCaseStudyTitle14>
                          {"Case study title"}
                        </StyledCaseStudyTitle14>
                      )}
                      {presetLayout === "Layout 6" && (
                        <StyledABriefDescriptionOfYourCaseStudy14>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy14>
                      )}
                    </StyledFrame4809620312>
                  )}
                </StyledFrame4809620411>
              )}
              {["Layout 5", "Layout 6"].includes(presetLayout) && (
                <StyledFrame480962065 $presetLayout={presetLayout}>
                  {["Layout 5", "Layout 6"].includes(presetLayout) && (
                    <StyledThumbnailSquare19></StyledThumbnailSquare19>
                  )}
                  {presetLayout === "Layout 6" && (
                    <StyledFrame4809620313>
                      {presetLayout === "Layout 6" && (
                        <StyledCaseStudyTitle15>
                          {"Case study title"}
                        </StyledCaseStudyTitle15>
                      )}
                      {presetLayout === "Layout 6" && (
                        <StyledABriefDescriptionOfYourCaseStudy15>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy15>
                      )}
                    </StyledFrame4809620313>
                  )}
                </StyledFrame480962065>
              )}
            </StyledFrame48096210>
          )}
          {presetLayout === "Layout 7" && (
            <StyledFrame480962083>
              {presetLayout === "Layout 7" && (
                <StyledFrame4809620412>
                  {presetLayout === "Layout 7" && (
                    <StyledFrame4809620314>
                      {presetLayout === "Layout 7" && (
                        <StyledCaseStudyTitle16>
                          {"Case study title"}
                        </StyledCaseStudyTitle16>
                      )}
                      {presetLayout === "Layout 7" && (
                        <StyledABriefDescriptionOfYourCaseStudy16>
                          {"A brief description of your case study"}
                        </StyledABriefDescriptionOfYourCaseStudy16>
                      )}
                    </StyledFrame4809620314>
                  )}
                  {presetLayout === "Layout 7" && (
                    <StyledThumbnailSquare20></StyledThumbnailSquare20>
                  )}
                </StyledFrame4809620412>
              )}
            </StyledFrame480962083>
          )}
        </StyledFrame480962082>
      )}
    </StyledRoot>
  );
});
