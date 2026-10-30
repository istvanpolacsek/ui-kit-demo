import React from "react";
import styled, { css } from "styled-components";
import { SubheaderLarge } from "../SubheaderLarge";
import { PresetPreviewTemplate } from "../PresetPreviewTemplate";
import { PaletteSwatchSelectorDefault } from "../PaletteSwatchSelectorDefault";

export interface MenuItemDesignSidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?:
    | "Template"
    | "Colors"
    | "Fonts"
    | "Buttons"
    | "Thumbnails"
    | "Spacing"
    | "Animations"
    | "Labels"
    | "Cursor";
}

const StyledRoot = styled.button<{
  $type:
    | "Template"
    | "Colors"
    | "Fonts"
    | "Buttons"
    | "Thumbnails"
    | "Spacing"
    | "Animations"
    | "Labels"
    | "Cursor";
}>(
  ({ $type }) => css`
    background-color: #1a1a1a;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Template":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Colors":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Fonts":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Buttons":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Labels":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Thumbnails":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Spacing":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Animations":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Cursor":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 348px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    &:hover {
      background-color: #262626;
    }
  `,
);

const StyledSubheaderLarge = styled.div(
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

const StyledPaletteSwatchSelectorDefault = styled.div(
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

const StyledFontPreview = styled.div<{
  $type:
    | "Template"
    | "Colors"
    | "Fonts"
    | "Buttons"
    | "Thumbnails"
    | "Spacing"
    | "Animations"
    | "Labels"
    | "Cursor";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #262626;
    ${(() => {
      switch ($type) {
        case "Fonts":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 8px;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Buttons":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        case "Labels":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        case "Spacing":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 2px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Animations":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        case "Cursor":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Fonts":
          return css`
            border-radius: 4px;
          `;
        case "Buttons":
          return css`
            border-radius: 4px;
          `;
        case "Labels":
          return css`
            border-radius: 4px;
          `;
        case "Spacing":
          return css`
            border-radius: 8px;
          `;
        case "Animations":
          return css`
            border-radius: 4px;
          `;
        case "Cursor":
          return css`
            border-radius: 4px;
          `;
        default:
          return css``;
      }
    })()}
  &:hover {
      background-color: #333333;
    }
  `,
);

const StyledLatoForTitles = styled.div(
  () => css`
    color: #eeeeee;
  `,
);

const StyledLatoForAllYourParagraphs = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledButton = styled.div<{
  $type:
    | "Template"
    | "Colors"
    | "Fonts"
    | "Buttons"
    | "Thumbnails"
    | "Spacing"
    | "Animations"
    | "Labels"
    | "Cursor";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #fefefe;
    border-radius: 23px;
    ${(() => {
      switch ($type) {
        case "Buttons":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 17px;
            padding-bottom: 16px;
            padding-left: 17px;
            gap: 10px;
            justify-content: flex-end;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Labels":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 14px;
            padding-bottom: 16px;
            padding-left: 14px;
            gap: 10px;
            justify-content: flex-end;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.div<{
  $type:
    | "Template"
    | "Colors"
    | "Fonts"
    | "Buttons"
    | "Thumbnails"
    | "Spacing"
    | "Animations"
    | "Labels"
    | "Cursor";
}>(
  ({ $type }) => css`
    color: #0f0f0f;
    ${(() => {
      switch ($type) {
        case "Buttons":
          return css`
            font-family: var(--font-lato, "Lato"), sans-serif;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
          `;
        case "Labels":
          return css`
            font-family: var(--font-lato, "Lato"), sans-serif;
            font-size: 12px;
            font-weight: 700;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSpacer = styled.div(
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
    width: 236px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #333333;
    border-radius: 2px;
    &:hover {
      background-color: #4d4c4c;
    }
  `,
);

const StyledVisual = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    width: 252px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledVector35 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector352 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector353 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector354 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector355 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector356 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector357 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector358 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector359 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3510 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3511 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3512 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3513 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3514 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3515 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3516 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3517 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3518 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3519 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3520 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3521 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3522 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3523 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3524 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3525 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3526 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3527 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3528 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3529 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3530 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3531 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3532 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3533 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3534 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3535 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3536 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3537 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3538 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3539 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3540 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3541 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3542 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3543 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3544 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3545 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3546 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3547 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3548 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3549 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3550 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3551 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3552 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3553 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3554 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3555 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledSection = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 0px;
    padding-bottom: 12px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 236px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #333333;
    border-radius: 2px;
    &:hover {
      background-color: #4d4c4c;
    }
  `,
);

const StyledSizeWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: #262626;
    border-radius: 4px;
  `,
);

const StyledSize = styled.div(
  () => css`
    color: #fefefe;
  `,
);

const StyledSpacer2 = styled.div(
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
    width: 236px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #333333;
    border-radius: 2px;
    &:hover {
      background-color: #4d4c4c;
    }
  `,
);

const StyledVisual2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    width: 252px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledVector3556 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35210 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35310 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35410 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3557 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3562 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3572 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3582 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector3592 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35102 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35112 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35122 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35132 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35142 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35152 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35162 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35172 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35182 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35192 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35202 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35212 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35222 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35232 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35242 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35252 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35262 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35272 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35282 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35292 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35302 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35312 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35322 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35332 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35342 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35352 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35362 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35372 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35382 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35392 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35402 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35412 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35422 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35432 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35442 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35452 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35462 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35472 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35482 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35492 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35502 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35512 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35522 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35532 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35542 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledVector35552 = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledFrame48096504 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    & > * + * {
      margin-top: -12px;
    }
    border-radius: 0px;
  `,
);

const StyledEllipse11 = styled.div(
  () => css`
    width: 35.000003814697266px;
    height: 35.000003814697266px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
    &:hover {
      background-color: transparent;
    }
  `,
);

const StyledEllipse9 = styled.div(
  () => css`
    width: 35.000003814697266px;
    height: 35.000003814697266px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
    &:hover {
      background-color: transparent;
    }
  `,
);

const StyledEllipse10 = styled.div(
  () => css`
    width: 35.000003814697266px;
    height: 35.000003814697266px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 50%;
    &:hover {
      background-color: transparent;
    }
  `,
);

const StyledCursor = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 14.720947265625px;
    padding-right: 19.462501525878906px;
    padding-bottom: 12.000652313232422px;
    padding-left: 16.5px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledArrow = styled.div(
  () => css`
    width: 12.03749942779541px;
    height: 21.278400421142578px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
    box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.4);
  `,
);

const StyledCursor2 = styled.div(
  () => css`
    border-radius: 0px;
    box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.3);
  `,
);

const StyledOutline = styled.div(
  () => css`
    width: 22.5px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #000000;
    border-radius: 0px;
  `,
);

const StyledFill = styled.div(
  () => css`
    width: 20.336442947387695px;
    height: 21.79151153564453px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledLayoutPreview = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
  `,
);

const StyledDetails = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPosition = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledAlignment = styled.p(
  () => css`
    color: #adadad;
  `,
);

/** A menu item component for the design sidebar that displays a preview of a design property category (e.g. Template, Colors, Fonts, Buttons, Spacing, Animations, Labels, Cursor). Supports Default and Hover interaction states. */
export const MenuItemDesignSidebar = React.forwardRef<
  HTMLButtonElement,
  MenuItemDesignSidebarProps
>(function MenuItemDesignSidebar({ type = "Template", ...rest }, ref) {
  return (
    <StyledRoot
      role="menuitem"
      aria-label="Design sidebar menu item"
      {...rest}
      ref={ref}
      $type={type}
    >
      <StyledSubheaderLarge>
        <SubheaderLarge
          hasIcon={true}
          hasSwitch={false}
          hasTag={false}
          mode={"Dark"}
        />
      </StyledSubheaderLarge>
      {type === "Template" && <PresetPreviewTemplate template={"Tesler"} />}
      {type === "Colors" && (
        <StyledPaletteSwatchSelectorDefault>
          <PaletteSwatchSelectorDefault selected={"None"} picker={"Editor"} />
        </StyledPaletteSwatchSelectorDefault>
      )}
      {[
        "Fonts",
        "Buttons",
        "Labels",
        "Spacing",
        "Animations",
        "Cursor",
      ].includes(type) && (
        <StyledFontPreview $type={type}>
          {type === "Fonts" && (
            <StyledLatoForTitles>{"Lato for titles"}</StyledLatoForTitles>
          )}
          {type === "Fonts" && (
            <StyledLatoForAllYourParagraphs>
              {"Lato for all your paragraphs"}
            </StyledLatoForAllYourParagraphs>
          )}
          {["Buttons", "Labels"].includes(type) && (
            <StyledButton $type={type}>
              {["Buttons", "Labels"].includes(type) && (
                <StyledLabel $type={type}>
                  {
                    (
                      {
                        '["Buttons"]': " button",
                        '["Labels"]': "Label",
                      } as Record<string, string>
                    )[JSON.stringify([type])]
                  }
                </StyledLabel>
              )}
            </StyledButton>
          )}
          {type === "Spacing" && (
            <StyledSpacer>
              {type === "Spacing" && (
                <StyledVisual>
                  {type === "Spacing" && <StyledVector35 />}
                  {type === "Spacing" && <StyledVector352 />}
                  {type === "Spacing" && <StyledVector353 />}
                  {type === "Spacing" && <StyledVector354 />}
                  {type === "Spacing" && <StyledVector355 />}
                  {type === "Spacing" && <StyledVector356 />}
                  {type === "Spacing" && <StyledVector357 />}
                  {type === "Spacing" && <StyledVector358 />}
                  {type === "Spacing" && <StyledVector359 />}
                  {type === "Spacing" && <StyledVector3510 />}
                  {type === "Spacing" && <StyledVector3511 />}
                  {type === "Spacing" && <StyledVector3512 />}
                  {type === "Spacing" && <StyledVector3513 />}
                  {type === "Spacing" && <StyledVector3514 />}
                  {type === "Spacing" && <StyledVector3515 />}
                  {type === "Spacing" && <StyledVector3516 />}
                  {type === "Spacing" && <StyledVector3517 />}
                  {type === "Spacing" && <StyledVector3518 />}
                  {type === "Spacing" && <StyledVector3519 />}
                  {type === "Spacing" && <StyledVector3520 />}
                  {type === "Spacing" && <StyledVector3521 />}
                  {type === "Spacing" && <StyledVector3522 />}
                  {type === "Spacing" && <StyledVector3523 />}
                  {type === "Spacing" && <StyledVector3524 />}
                  {type === "Spacing" && <StyledVector3525 />}
                  {type === "Spacing" && <StyledVector3526 />}
                  {type === "Spacing" && <StyledVector3527 />}
                  {type === "Spacing" && <StyledVector3528 />}
                  {type === "Spacing" && <StyledVector3529 />}
                  {type === "Spacing" && <StyledVector3530 />}
                  {type === "Spacing" && <StyledVector3531 />}
                  {type === "Spacing" && <StyledVector3532 />}
                  {type === "Spacing" && <StyledVector3533 />}
                  {type === "Spacing" && <StyledVector3534 />}
                  {type === "Spacing" && <StyledVector3535 />}
                  {type === "Spacing" && <StyledVector3536 />}
                  {type === "Spacing" && <StyledVector3537 />}
                  {type === "Spacing" && <StyledVector3538 />}
                  {type === "Spacing" && <StyledVector3539 />}
                  {type === "Spacing" && <StyledVector3540 />}
                  {type === "Spacing" && <StyledVector3541 />}
                  {type === "Spacing" && <StyledVector3542 />}
                  {type === "Spacing" && <StyledVector3543 />}
                  {type === "Spacing" && <StyledVector3544 />}
                  {type === "Spacing" && <StyledVector3545 />}
                  {type === "Spacing" && <StyledVector3546 />}
                  {type === "Spacing" && <StyledVector3547 />}
                  {type === "Spacing" && <StyledVector3548 />}
                  {type === "Spacing" && <StyledVector3549 />}
                  {type === "Spacing" && <StyledVector3550 />}
                  {type === "Spacing" && <StyledVector3551 />}
                  {type === "Spacing" && <StyledVector3552 />}
                  {type === "Spacing" && <StyledVector3553 />}
                  {type === "Spacing" && <StyledVector3554 />}
                  {type === "Spacing" && <StyledVector3555 />}
                </StyledVisual>
              )}
            </StyledSpacer>
          )}
          {type === "Spacing" && (
            <StyledSection>
              {type === "Spacing" && (
                <StyledSizeWrapper>
                  {type === "Spacing" && <StyledSize>{"60px"}</StyledSize>}
                </StyledSizeWrapper>
              )}
            </StyledSection>
          )}
          {type === "Spacing" && (
            <StyledSpacer2>
              {type === "Spacing" && (
                <StyledVisual2>
                  {type === "Spacing" && <StyledVector3556 />}
                  {type === "Spacing" && <StyledVector35210 />}
                  {type === "Spacing" && <StyledVector35310 />}
                  {type === "Spacing" && <StyledVector35410 />}
                  {type === "Spacing" && <StyledVector3557 />}
                  {type === "Spacing" && <StyledVector3562 />}
                  {type === "Spacing" && <StyledVector3572 />}
                  {type === "Spacing" && <StyledVector3582 />}
                  {type === "Spacing" && <StyledVector3592 />}
                  {type === "Spacing" && <StyledVector35102 />}
                  {type === "Spacing" && <StyledVector35112 />}
                  {type === "Spacing" && <StyledVector35122 />}
                  {type === "Spacing" && <StyledVector35132 />}
                  {type === "Spacing" && <StyledVector35142 />}
                  {type === "Spacing" && <StyledVector35152 />}
                  {type === "Spacing" && <StyledVector35162 />}
                  {type === "Spacing" && <StyledVector35172 />}
                  {type === "Spacing" && <StyledVector35182 />}
                  {type === "Spacing" && <StyledVector35192 />}
                  {type === "Spacing" && <StyledVector35202 />}
                  {type === "Spacing" && <StyledVector35212 />}
                  {type === "Spacing" && <StyledVector35222 />}
                  {type === "Spacing" && <StyledVector35232 />}
                  {type === "Spacing" && <StyledVector35242 />}
                  {type === "Spacing" && <StyledVector35252 />}
                  {type === "Spacing" && <StyledVector35262 />}
                  {type === "Spacing" && <StyledVector35272 />}
                  {type === "Spacing" && <StyledVector35282 />}
                  {type === "Spacing" && <StyledVector35292 />}
                  {type === "Spacing" && <StyledVector35302 />}
                  {type === "Spacing" && <StyledVector35312 />}
                  {type === "Spacing" && <StyledVector35322 />}
                  {type === "Spacing" && <StyledVector35332 />}
                  {type === "Spacing" && <StyledVector35342 />}
                  {type === "Spacing" && <StyledVector35352 />}
                  {type === "Spacing" && <StyledVector35362 />}
                  {type === "Spacing" && <StyledVector35372 />}
                  {type === "Spacing" && <StyledVector35382 />}
                  {type === "Spacing" && <StyledVector35392 />}
                  {type === "Spacing" && <StyledVector35402 />}
                  {type === "Spacing" && <StyledVector35412 />}
                  {type === "Spacing" && <StyledVector35422 />}
                  {type === "Spacing" && <StyledVector35432 />}
                  {type === "Spacing" && <StyledVector35442 />}
                  {type === "Spacing" && <StyledVector35452 />}
                  {type === "Spacing" && <StyledVector35462 />}
                  {type === "Spacing" && <StyledVector35472 />}
                  {type === "Spacing" && <StyledVector35482 />}
                  {type === "Spacing" && <StyledVector35492 />}
                  {type === "Spacing" && <StyledVector35502 />}
                  {type === "Spacing" && <StyledVector35512 />}
                  {type === "Spacing" && <StyledVector35522 />}
                  {type === "Spacing" && <StyledVector35532 />}
                  {type === "Spacing" && <StyledVector35542 />}
                  {type === "Spacing" && <StyledVector35552 />}
                </StyledVisual2>
              )}
            </StyledSpacer2>
          )}
          {type === "Animations" && (
            <StyledFrame48096504>
              {type === "Animations" && <StyledEllipse11 />}
              {type === "Animations" && <StyledEllipse9 />}
              {type === "Animations" && <StyledEllipse10 />}
            </StyledFrame48096504>
          )}
          {type === "Cursor" && (
            <StyledCursor>{type === "Cursor" && <StyledArrow />}</StyledCursor>
          )}
          {type === "Cursor" && (
            <StyledCursor2>
              {type === "Cursor" && <StyledOutline />}
              {type === "Cursor" && <StyledFill />}
            </StyledCursor2>
          )}
        </StyledFontPreview>
      )}
      {type === "Thumbnails" && (
        <StyledLayoutPreview>
          {type === "Thumbnails" && (
            <StyledDetails>
              {type === "Thumbnails" && (
                <StyledPosition>{"Text position: below"}</StyledPosition>
              )}
              {type === "Thumbnails" && (
                <StyledAlignment>{"Text alignment: center"}</StyledAlignment>
              )}
            </StyledDetails>
          )}
        </StyledLayoutPreview>
      )}
    </StyledRoot>
  );
});
