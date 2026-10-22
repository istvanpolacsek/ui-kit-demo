import React from "react";
import styled, { css } from "styled-components";
import { HeaderSidebar } from "../HeaderSidebar";
import { SubheaderMedium } from "../SubheaderMedium";
import { ListItemFontPreset } from "../ListItemFontPreset";
import { ListItemColorPreset } from "../ListItemColorPreset";
import { ListItemCustomCursors } from "../ListItemCustomCursors";
import { OptionGridSimple } from "../OptionGridSimple";
import { OptionBarLabeled } from "../OptionBarLabeled";
import { MessageAlert } from "../MessageAlert";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";
import { ListItemFontCustom } from "../ListItemFontCustom";
import { SubheaderLarge } from "../SubheaderLarge";
import { RemoveColor } from "../RemoveColor";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";
import { ListItemCustomColor } from "../ListItemCustomColor";
import { Detach } from "../Detach";
import { DropListLabeled } from "../DropListLabeled";
import { ListItemPage } from "../ListItemPage";
import { Separator } from "../Separator";
import { AddPageOrSocialButton } from "../AddPageOrSocialButton";
import { ListItemSocialMediaIcons } from "../ListItemSocialMediaIcons";
import { ImageManagerSingle } from "../ImageManagerSingle";
import { OptionSliderLabeled } from "../OptionSliderLabeled";
import { TextFieldLabeled } from "../TextFieldLabeled";
import { PrimaryButtonSubtle } from "../PrimaryButtonSubtle";
import { OverviewCardDomain } from "../OverviewCardDomain";
import { OverviewCardGeneral } from "../OverviewCardGeneral";
import { ListItemPageAdd } from "../ListItemPageAdd";

export interface SidebarSubProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "hasMessage" | "type" | "tab"
> {
  hasMessage?: boolean;
  type?:
    | "Font"
    | "Colors"
    | "Buttons"
    | "Spacing"
    | "Social icons"
    | "Share portfolio"
    | "Domain & URL"
    | "Portfolio privacy"
    | "Favicon"
    | "Archive"
    | "Animations"
    | "Pages"
    | "Logo"
    | "Cursor";
  tab?:
    | "Preset"
    | "Custom"
    | "-"
    | "Pages"
    | "Sections"
    | "Global"
    | "Portfolio"
    | "Case study global"
    | "Case study non global";
}

const StyledRoot = styled.aside(
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
    height: 1000px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border-radius: 0px;
    color: #ffffff;
  `,
);

const StyledPresetList = styled.ul<{
  $type:
    | "Font"
    | "Colors"
    | "Buttons"
    | "Spacing"
    | "Social icons"
    | "Share portfolio"
    | "Domain & URL"
    | "Portfolio privacy"
    | "Favicon"
    | "Archive"
    | "Animations"
    | "Pages"
    | "Logo"
    | "Cursor";
}>(
  ({ $type }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Font":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            gap: 56px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 349px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Colors":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            gap: 56px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 349px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Cursor":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 42px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 349px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "Animations":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 42px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 349px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledGroup = styled.li<{
  $type:
    | "Font"
    | "Colors"
    | "Buttons"
    | "Spacing"
    | "Social icons"
    | "Share portfolio"
    | "Domain & URL"
    | "Portfolio privacy"
    | "Favicon"
    | "Archive"
    | "Animations"
    | "Pages"
    | "Logo"
    | "Cursor";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Font":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Colors":
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
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubheaderMedium = styled.div(
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

const StyledGroupedStyles = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemFontPreset = styled.li(
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

const StyledListItemFontPreset2 = styled.li(
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

const StyledListItemFontPreset3 = styled.li(
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

const StyledListItemFontPreset4 = styled.li(
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

const StyledListItemFontPreset5 = styled.li(
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

const StyledListItemFontPreset6 = styled.li(
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

const StyledListItemColorPreset = styled.li(
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

const StyledListItemColorPreset2 = styled.li(
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

const StyledListItemColorPreset3 = styled.li(
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

const StyledListItemColorPreset4 = styled.li(
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

const StyledGroup2 = styled.li<{
  $type:
    | "Font"
    | "Colors"
    | "Buttons"
    | "Spacing"
    | "Social icons"
    | "Share portfolio"
    | "Domain & URL"
    | "Portfolio privacy"
    | "Favicon"
    | "Archive"
    | "Animations"
    | "Pages"
    | "Logo"
    | "Cursor";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Font":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Colors":
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
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubheaderMedium2 = styled.div(
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

const StyledGroupedStyles2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemFontPreset7 = styled.li(
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

const StyledListItemFontPreset22 = styled.li(
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

const StyledListItemFontPreset32 = styled.li(
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

const StyledListItemFontPreset42 = styled.li(
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

const StyledListItemFontPreset52 = styled.li(
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

const StyledListItemFontPreset62 = styled.li(
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

const StyledListItemColorPreset5 = styled.li(
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

const StyledListItemColorPreset22 = styled.li(
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

const StyledListItemColorPreset32 = styled.li(
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

const StyledListItemColorPreset42 = styled.li(
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

const StyledGroup3 = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderMedium3 = styled.div(
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

const StyledGroupedStyles3 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemColorPreset6 = styled.li(
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

const StyledListItemColorPreset23 = styled.li(
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

const StyledListItemColorPreset33 = styled.li(
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

const StyledListItemColorPreset43 = styled.li(
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

const StyledContainer = styled.li(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledOptionGridSimple = styled.li(() => css``);

const StyledOptionBarLabeled = styled.li(
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

const StyledButtonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButtonWrappers = styled.div(
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
    border-radius: 0px;
  `,
);

const StyledSecondaryButtonNeutral = styled.div(
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

const StyledPrimaryButtonNeutral = styled.div(
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

const StyledFontStyles = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 30px;
    padding-bottom: 32px;
    padding-left: 30px;
    gap: 40px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 348px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledListItemFontCustom = styled.li(() => css``);

const StyledListItemFontCustom2 = styled.li(() => css``);

const StyledListItemFontCustom3 = styled.li(() => css``);

const StyledListItemFontCustom4 = styled.li(() => css``);

const StyledYourPreset = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 30px;
    padding-bottom: 32px;
    padding-left: 30px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 348px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
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

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledColorPalette = styled.div(
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
    height: 56px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
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
    background-color: #2e3246;
    border-radius: 0px;
  `,
);

const StyledColor2 = styled.div(
  () => css`
    background-color: #73727f;
    border-radius: 0px;
  `,
);

const StyledColor3 = styled.div(
  () => css`
    background-color: #3a405a;
    border-radius: 0px;
  `,
);

const StyledColor4 = styled.div(
  () => css`
    background-color: #d9cdc7;
    border-radius: 0px;
  `,
);

const StyledColor5 = styled.div(
  () => css`
    background-color: #f7e8dc;
    border-radius: 0px;
  `,
);

const StyledHelperText = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledPortfolioStyles = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 30px;
    padding-bottom: 32px;
    padding-left: 30px;
    gap: 96px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 348px;
    box-sizing: border-box;
    flex-shrink: 0;
    flex: 1 1 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledContent2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 40px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderLarge2 = styled.div(
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

const StyledField = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-left: 10px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #333333;
    border-radius: 4px;
  `,
);

const StyledStatus = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f59e0b;
    border-radius: 4px;
  `,
);

const Styled2DetachedColorLayers = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledFrame48097166 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledColorGroup = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderMedium4 = styled.div(
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

const StyledColors = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemCustomColor = styled.li(
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

const StyledListItemCustomColor2 = styled.li(
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

const StyledListItemCustomColor3 = styled.li(
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

const StyledColorGroup2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderMedium5 = styled.div(
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

const StyledColors2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemCustomColor4 = styled.li(
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

const StyledListItemCustomColor22 = styled.li(
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

const StyledListItemCustomColor32 = styled.li(
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

const StyledListItemCustomColor42 = styled.li(
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

const StyledListItemCustomColor5 = styled.li(
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

const StyledColorGroup3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderMedium6 = styled.div(
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

const StyledColors3 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemCustomColor6 = styled.li(
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

const StyledListItemCustomColor23 = styled.li(
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

const StyledFrame48097070 = styled.div(
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

const StyledField2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 10px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: 280px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: rgba(255, 255, 255, 0.05999999865889549);
    border-radius: 14px;
  `,
);

const StyledFrame48097069 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1px;
    padding-right: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1369ff;
    border-radius: 6px;
    box-shadow:
      inset 0px 1px 0px 0px rgba(255, 255, 255, 0.24),
      0px 2px 2px 0px rgba(0, 0, 0, 0.2);
  `,
);

const Styled2DetachedColorLayers2 = styled.p(
  () => css`
    color: rgba(255, 255, 255, 0.5);
    font-family: "Work Sans";
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01em;
  `,
);

const StyledFrame48097073 = styled.div(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame48097071 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 6px;
  `,
);

const StyledBoundingBox = styled.div(
  () => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

const Styledhelp = styled.div(
  () => css`
    width: 14.399999618530273px;
    height: 14.399999618530273px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px;
  `,
);

const StyledFrame480970712 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 3px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 6px;
  `,
);

const StyledlocationSearching = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 1.349609375px;
    padding-right: 1.349609375px;
    padding-bottom: 1.349609375px;
    padding-left: 1.349609375px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledUnion = styled.div(
  () => css`
    width: 15.30078125px;
    height: 15.30078125px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px;
  `,
);

const StyledSection = styled.section<{
  $type:
    | "Font"
    | "Colors"
    | "Buttons"
    | "Spacing"
    | "Social icons"
    | "Share portfolio"
    | "Domain & URL"
    | "Portfolio privacy"
    | "Favicon"
    | "Archive"
    | "Animations"
    | "Pages"
    | "Logo"
    | "Cursor";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Buttons":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 30px;
            padding-bottom: 32px;
            padding-left: 30px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Spacing":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Pages":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 22px;
            padding-bottom: 24px;
            padding-left: 22px;
            gap: 20px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Social icons":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 22px;
            padding-bottom: 24px;
            padding-left: 22px;
            gap: 20px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Logo":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Share portfolio":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Domain & URL":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            gap: 56px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Portfolio privacy":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Favicon":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Archive":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Animations":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            padding-right: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubheaderLarge3 = styled.div(
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

const StyledDropListLabeled = styled.div(
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

const StyledDropListLabeled2 = styled.div(
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

const StyledTitle2 = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderLarge4 = styled.div(
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

const StyledHelperText2 = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledMessageAlert = styled.div(
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

const StyledPages = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledListItemPage = styled.li(() => css``);

const StyledCaseStudies = styled.li(
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
    width: 281px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledListItemPage2 = styled.div(
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

const StyledListItemPage22 = styled.div(
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

const StyledListItemPage3 = styled.div(
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

const StyledListItemPage23 = styled.li(() => css``);

const StyledListItemPage32 = styled.li(() => css``);

const StyledFrame48096505 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledListItemSocialMediaIcons = styled.li(() => css``);

const StyledListItemSocialMediaIcons2 = styled.li(() => css``);

const StyledListItemSocialMediaIcons3 = styled.li(() => css``);

const StyledImageManagerSingle = styled.div(
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

const StyledOptionSliderLabeled = styled.div(
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

const StyledTextFieldLabeled = styled.div(
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

const StyledTextFieldLabeled2 = styled.div(
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

const StyledUXfolioURL = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderLarge5 = styled.div(
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

const StyledFrame48096336 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledPrimaryButtonNeutral2 = styled.div(
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

const StyledPrimaryButtonSubtle = styled.div(
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

const StyledUXfolioURL2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderLarge6 = styled.div(
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

const StyledOverviewCardDomain = styled.div(
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

const StyledOverviewCardGeneral = styled.div(
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

const StyledListItemPageAdd = styled.div(
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

const StyledListItemPageAdd2 = styled.div(
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

const StyledListItemPageAdd3 = styled.div(
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

const StyledListItemPageAdd4 = styled.div(
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

const StyledListItemPageAdd5 = styled.div(
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

const StyledSection2 = styled.section<{
  $type:
    | "Font"
    | "Colors"
    | "Buttons"
    | "Spacing"
    | "Social icons"
    | "Share portfolio"
    | "Domain & URL"
    | "Portfolio privacy"
    | "Favicon"
    | "Archive"
    | "Animations"
    | "Pages"
    | "Logo"
    | "Cursor";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Buttons":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 30px;
            padding-bottom: 32px;
            padding-left: 30px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Portfolio privacy":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "Favicon":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 30px;
            padding-bottom: 56px;
            padding-left: 30px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSubheaderLarge7 = styled.div(
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

const StyledListItemCustomColor7 = styled.div(
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

const StyledOptionBarLabeled2 = styled.div(
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

const StyledImageManagerSingle2 = styled.div(
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

const StyledSection3 = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 30px;
    padding-bottom: 32px;
    padding-left: 30px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderLarge8 = styled.div(
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

/** A sidebar sub-panel component that displays contextual design settings and options based on the selected type (e.g., Font, Colors, Buttons, Spacing, etc.) and tab (e.g., Preset, Custom, Pages, Sections). Contains preset lists, custom style editors, page management, and action buttons with optional alert messages. */
export const SidebarSub = React.forwardRef<HTMLElement, SidebarSubProps>(
  function SidebarSub(
    { hasMessage = false, type = "Font", tab = "Preset", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="complementary"
        aria-label="Design settings panel"
        {...rest}
        ref={ref}
      >
        <HeaderSidebar
          type={"Simple"}
          number={"2"}
          selected={true}
          mode={"Dark"}
          hasBack={true}
        />
        {[
          "Preset",
          "Portfolio",
          "Case study global",
          "Case study non global",
        ].includes(tab) && (
          <StyledPresetList $type={type}>
            {tab === "Preset" && (
              <StyledGroup $type={type}>
                {tab === "Preset" && (
                  <StyledSubheaderMedium>
                    <SubheaderMedium
                      hasIcon={false}
                      hasTag={false}
                      mode={"Dark"}
                    />
                  </StyledSubheaderMedium>
                )}
                {tab === "Preset" && (
                  <StyledGroupedStyles>
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset2>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset2>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset3>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset3>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset4>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset4>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset5>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset5>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset6>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset6>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset2>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset2>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset3>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset3>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset4>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset4>
                    )}
                  </StyledGroupedStyles>
                )}
              </StyledGroup>
            )}
            {tab === "Preset" && (
              <StyledGroup2 $type={type}>
                {tab === "Preset" && (
                  <StyledSubheaderMedium2>
                    <SubheaderMedium
                      hasIcon={false}
                      hasTag={false}
                      mode={"Dark"}
                    />
                  </StyledSubheaderMedium2>
                )}
                {tab === "Preset" && (
                  <StyledGroupedStyles2>
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset7>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset7>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset22>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset22>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset32>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset32>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset42>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset42>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset52>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset52>
                    )}
                    {type === "Font" && tab === "Preset" && (
                      <StyledListItemFontPreset62>
                        <ListItemFontPreset />
                      </StyledListItemFontPreset62>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset5>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset5>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset22>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset22>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset32>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset32>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset42>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset42>
                    )}
                  </StyledGroupedStyles2>
                )}
              </StyledGroup2>
            )}
            {type === "Colors" && tab === "Preset" && (
              <StyledGroup3>
                {type === "Colors" && tab === "Preset" && (
                  <StyledSubheaderMedium3>
                    <SubheaderMedium
                      hasIcon={false}
                      hasTag={false}
                      mode={"Dark"}
                    />
                  </StyledSubheaderMedium3>
                )}
                {type === "Colors" && tab === "Preset" && (
                  <StyledGroupedStyles3>
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset6>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset6>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset23>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset23>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset33>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset33>
                    )}
                    {type === "Colors" && tab === "Preset" && (
                      <StyledListItemColorPreset43>
                        <ListItemColorPreset />
                      </StyledListItemColorPreset43>
                    )}
                  </StyledGroupedStyles3>
                )}
              </StyledGroup3>
            )}
            {type === "Cursor" && (
              <StyledContainer>
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Selected"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
                {type === "Cursor" && (
                  <ListItemCustomCursors state={"Default"} />
                )}
              </StyledContainer>
            )}
            {type === "Animations" && (
              <StyledOptionGridSimple>
                <OptionGridSimple
                  isHardToSee={false}
                  hasSubheader={true}
                  type={"Animation"}
                />
              </StyledOptionGridSimple>
            )}
            {type === "Animations" && (
              <StyledOptionBarLabeled>
                <OptionBarLabeled
                  number={"1 option"}
                  active={"1"}
                  type={"Enabled"}
                  hasDescription={false}
                />
              </StyledOptionBarLabeled>
            )}
          </StyledPresetList>
        )}
        {["Font", "Colors", "Cursor", "Animations"].includes(type) && (
          <StyledButtonRow>
            {hasMessage && (
              <MessageAlert
                hasIcon={false}
                hasTitle={false}
                type={"Info"}
                mode={"Dark"}
              />
            )}
            {["Font", "Colors", "Cursor", "Animations"].includes(type) && (
              <StyledButtonWrappers>
                {["Font", "Colors", "Cursor", "Animations"].includes(type) && (
                  <StyledSecondaryButtonNeutral>
                    <SecondaryButtonNeutral
                      state={"Default"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledSecondaryButtonNeutral>
                )}
                {["Font", "Colors", "Cursor", "Animations"].includes(type) && (
                  <StyledPrimaryButtonNeutral>
                    <PrimaryButtonNeutral
                      state={"Default"}
                      size={"Large"}
                      mode={"Dark"}
                    />
                  </StyledPrimaryButtonNeutral>
                )}
              </StyledButtonWrappers>
            )}
          </StyledButtonRow>
        )}
        {((type === "Font" && tab === "Global") ||
          (type === "Font" && tab === "Custom")) && (
          <StyledFontStyles>
            {((type === "Font" && tab === "Global") ||
              (type === "Font" && tab === "Custom")) && (
              <StyledListItemFontCustom>
                <ListItemFontCustom type={"Grouped"} />
              </StyledListItemFontCustom>
            )}
            {((type === "Font" && tab === "Global") ||
              (type === "Font" && tab === "Custom")) && (
              <StyledListItemFontCustom2>
                <ListItemFontCustom type={"Grouped"} />
              </StyledListItemFontCustom2>
            )}
            {((type === "Font" && tab === "Global") ||
              (type === "Font" && tab === "Custom")) && (
              <StyledListItemFontCustom3>
                <ListItemFontCustom type={"Individual"} />
              </StyledListItemFontCustom3>
            )}
            {((type === "Font" && tab === "Global") ||
              (type === "Font" && tab === "Custom")) && (
              <StyledListItemFontCustom4>
                <ListItemFontCustom type={"Individual"} />
              </StyledListItemFontCustom4>
            )}
          </StyledFontStyles>
        )}
        {((type === "Colors" && tab === "Global") ||
          (type === "Colors" && tab === "Custom")) && (
          <StyledYourPreset>
            {((type === "Colors" && tab === "Global") ||
              (type === "Colors" && tab === "Custom")) && (
              <StyledSubheaderLarge>
                <SubheaderLarge
                  hasIcon={true}
                  hasSwitch={false}
                  hasTag={false}
                  mode={"Dark"}
                />
              </StyledSubheaderLarge>
            )}
            {((type === "Colors" && tab === "Global") ||
              (type === "Colors" && tab === "Custom")) && (
              <StyledContent>
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledColorPalette>
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColor />
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColor2 />
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColor3 />
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColor4 />
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColor5 />
                    )}
                  </StyledColorPalette>
                )}
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledHelperText>
                    {
                      "This palette will be used across your portfolio as its main colors."
                    }
                  </StyledHelperText>
                )}
              </StyledContent>
            )}
          </StyledYourPreset>
        )}
        {((type === "Colors" && tab === "Global") ||
          (type === "Colors" && tab === "Custom")) && (
          <StyledPortfolioStyles>
            {((type === "Colors" && tab === "Global") ||
              (type === "Colors" && tab === "Custom")) && (
              <StyledContent2>
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledTitle>
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledSubheaderLarge2>
                        <SubheaderLarge
                          hasIcon={true}
                          hasSwitch={false}
                          hasTag={false}
                          mode={"Dark"}
                        />
                      </StyledSubheaderLarge2>
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledField>
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledStatus>
                            {((type === "Colors" && tab === "Global") ||
                              (type === "Colors" && tab === "Custom")) && (
                              <RemoveColor />
                            )}
                          </StyledStatus>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <Styled2DetachedColorLayers>
                            {"2 detached color layers"}
                          </Styled2DetachedColorLayers>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledFrame48097166>
                            {((type === "Colors" && tab === "Global") ||
                              (type === "Colors" && tab === "Custom")) && (
                              <IconOnlyPrimaryButtonSubtle
                                state={"Default (no BG)"}
                                size={"Tiny"}
                                mode={"Dark"}
                              />
                            )}
                            {((type === "Colors" && tab === "Global") ||
                              (type === "Colors" && tab === "Custom")) && (
                              <IconOnlyPrimaryButtonSubtle
                                state={"Default (no BG)"}
                                size={"Tiny"}
                                mode={"Dark"}
                              />
                            )}
                          </StyledFrame48097166>
                        )}
                      </StyledField>
                    )}
                  </StyledTitle>
                )}
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledColorGroup>
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledSubheaderMedium4>
                        <SubheaderMedium
                          hasIcon={false}
                          hasTag={false}
                          mode={"Dark"}
                        />
                      </StyledSubheaderMedium4>
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColors>
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor2>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor2>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor3>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor3>
                        )}
                      </StyledColors>
                    )}
                  </StyledColorGroup>
                )}
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledColorGroup2>
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledSubheaderMedium5>
                        <SubheaderMedium
                          hasIcon={false}
                          hasTag={false}
                          mode={"Dark"}
                        />
                      </StyledSubheaderMedium5>
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColors2>
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor4>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor4>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor22>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor22>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor32>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor32>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor42>
                            <ListItemCustomColor
                              state={"Default"}
                              selected={true}
                            />
                          </StyledListItemCustomColor42>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor5>
                            <ListItemCustomColor state={"Default"} />
                          </StyledListItemCustomColor5>
                        )}
                      </StyledColors2>
                    )}
                  </StyledColorGroup2>
                )}
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledColorGroup3>
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledSubheaderMedium6>
                        <SubheaderMedium
                          hasIcon={false}
                          hasTag={false}
                          mode={"Dark"}
                        />
                      </StyledSubheaderMedium6>
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledColors3>
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor6>
                            <ListItemCustomColor state={"Default"} />
                          </StyledListItemCustomColor6>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledListItemCustomColor23>
                            <ListItemCustomColor state={"Default"} />
                          </StyledListItemCustomColor23>
                        )}
                      </StyledColors3>
                    )}
                  </StyledColorGroup3>
                )}
              </StyledContent2>
            )}
            {((type === "Colors" && tab === "Global") ||
              (type === "Colors" && tab === "Custom")) && (
              <StyledFrame48097070>
                {((type === "Colors" && tab === "Global") ||
                  (type === "Colors" && tab === "Custom")) && (
                  <StyledField2>
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledFrame48097069>
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <Detach />
                        )}
                      </StyledFrame48097069>
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <Styled2DetachedColorLayers2>
                        {"2 detached color layers"}
                      </Styled2DetachedColorLayers2>
                    )}
                    {((type === "Colors" && tab === "Global") ||
                      (type === "Colors" && tab === "Custom")) && (
                      <StyledFrame48097073>
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledFrame48097071>
                            {((type === "Colors" && tab === "Global") ||
                              (type === "Colors" && tab === "Custom")) && (
                              <div>
                                {((type === "Colors" && tab === "Global") ||
                                  (type === "Colors" && tab === "Custom")) && (
                                  <StyledBoundingBox />
                                )}
                                {((type === "Colors" && tab === "Global") ||
                                  (type === "Colors" && tab === "Custom")) && (
                                  <Styledhelp />
                                )}
                              </div>
                            )}
                          </StyledFrame48097071>
                        )}
                        {((type === "Colors" && tab === "Global") ||
                          (type === "Colors" && tab === "Custom")) && (
                          <StyledFrame480970712>
                            {((type === "Colors" && tab === "Global") ||
                              (type === "Colors" && tab === "Custom")) && (
                              <StyledlocationSearching>
                                {((type === "Colors" && tab === "Global") ||
                                  (type === "Colors" && tab === "Custom")) && (
                                  <StyledUnion />
                                )}
                              </StyledlocationSearching>
                            )}
                          </StyledFrame480970712>
                        )}
                      </StyledFrame48097073>
                    )}
                  </StyledField2>
                )}
              </StyledFrame48097070>
            )}
          </StyledPortfolioStyles>
        )}
        {[
          "-",
          "Pages",
          "Sections",
          "Case study global",
          "Case study non global",
        ].includes(tab) && (
          <StyledSection $type={type}>
            {type === "Buttons" && (
              <StyledSubheaderLarge3>
                <SubheaderLarge
                  hasIcon={false}
                  hasSwitch={false}
                  hasTag={false}
                  mode={"Dark"}
                />
              </StyledSubheaderLarge3>
            )}
            {type === "Buttons" && (
              <StyledDropListLabeled>
                <DropListLabeled mode={"Dark"} />
              </StyledDropListLabeled>
            )}
            {type === "Buttons" && (
              <StyledDropListLabeled2>
                <DropListLabeled mode={"Dark"} />
              </StyledDropListLabeled2>
            )}
            {type === "Buttons" && <DropListLabeled mode={"Dark"} />}
            {((type === "Spacing" && tab === "-") ||
              (type === "Animations" && tab === "Case study global") ||
              (type === "Animations" && tab === "Case study non global")) && (
              <StyledTitle2>
                {((type === "Spacing" && tab === "-") ||
                  (type === "Animations" && tab === "Case study global") ||
                  (type === "Animations" &&
                    tab === "Case study non global")) && (
                  <StyledSubheaderLarge4>
                    <SubheaderLarge
                      hasIcon={false}
                      hasSwitch={true}
                      hasTag={false}
                      mode={"Dark"}
                    />
                  </StyledSubheaderLarge4>
                )}
                {type === "Spacing" && (
                  <StyledHelperText2>
                    {"Add spacing between all your sections."}
                  </StyledHelperText2>
                )}
              </StyledTitle2>
            )}
            {((type === "Spacing" && tab === "-") ||
              (type === "Portfolio privacy" && tab === "-") ||
              (type === "Animations" && tab === "Case study global") ||
              (type === "Animations" && tab === "Case study non global")) && (
              <StyledMessageAlert>
                <MessageAlert
                  hasIcon={false}
                  hasTitle={false}
                  type={"Info"}
                  mode={"Dark"}
                />
              </StyledMessageAlert>
            )}
            {type === "Pages" && (
              <StyledPages>
                {type === "Pages" && (
                  <StyledListItemPage>
                    <ListItemPage
                      isHome={true}
                      state={"Default"}
                      type={"Page"}
                      selected={true}
                    />
                  </StyledListItemPage>
                )}
                {type === "Pages" && (
                  <StyledCaseStudies>
                    {type === "Pages" && (
                      <StyledListItemPage2>
                        <ListItemPage
                          type={"Case study"}
                          isHome={true}
                          state={"Default"}
                        />
                      </StyledListItemPage2>
                    )}
                    {type === "Pages" && (
                      <StyledListItemPage22>
                        <ListItemPage
                          type={"Case study"}
                          isHome={true}
                          state={"Default"}
                        />
                      </StyledListItemPage22>
                    )}
                    {type === "Pages" && (
                      <StyledListItemPage3>
                        <ListItemPage
                          type={"Case study"}
                          isHome={true}
                          state={"Default"}
                        />
                      </StyledListItemPage3>
                    )}
                  </StyledCaseStudies>
                )}
                {type === "Pages" && (
                  <StyledListItemPage23>
                    <ListItemPage
                      isHome={true}
                      state={"Default"}
                      type={"Page"}
                    />
                  </StyledListItemPage23>
                )}
                {type === "Pages" && (
                  <StyledListItemPage32>
                    <ListItemPage
                      isHome={true}
                      state={"Default"}
                      type={"Page"}
                    />
                  </StyledListItemPage32>
                )}
              </StyledPages>
            )}
            {["Pages", "Social icons"].includes(type) && (
              <Separator angle={"Horizontal"} mode={"Dark"} />
            )}
            {["Pages", "Social icons"].includes(type) && (
              <AddPageOrSocialButton />
            )}
            {type === "Social icons" && (
              <StyledFrame48096505>
                {type === "Social icons" && (
                  <StyledListItemSocialMediaIcons>
                    <ListItemSocialMediaIcons state={"Default"} />
                  </StyledListItemSocialMediaIcons>
                )}
                {type === "Social icons" && (
                  <StyledListItemSocialMediaIcons2>
                    <ListItemSocialMediaIcons state={"Default"} />
                  </StyledListItemSocialMediaIcons2>
                )}
                {type === "Social icons" && (
                  <StyledListItemSocialMediaIcons3>
                    <ListItemSocialMediaIcons state={"Default"} />
                  </StyledListItemSocialMediaIcons3>
                )}
              </StyledFrame48096505>
            )}
            {["Logo", "Share portfolio"].includes(type) && (
              <StyledImageManagerSingle>
                <ImageManagerSingle
                  hasDescription={true}
                  hasLabel={false}
                  state={"Image"}
                />
              </StyledImageManagerSingle>
            )}
            {type === "Logo" && (
              <StyledOptionSliderLabeled>
                <OptionSliderLabeled value={"25%"} type={"Mixed"} />
              </StyledOptionSliderLabeled>
            )}
            {["Share portfolio", "Portfolio privacy"].includes(type) && (
              <StyledTextFieldLabeled>
                <TextFieldLabeled state={"Filled"} mode={"Dark"} />
              </StyledTextFieldLabeled>
            )}
            {type === "Share portfolio" && (
              <StyledTextFieldLabeled2>
                <TextFieldLabeled state={"Filled"} mode={"Dark"} />
              </StyledTextFieldLabeled2>
            )}
            {type === "Domain & URL" && (
              <StyledUXfolioURL>
                {type === "Domain & URL" && (
                  <StyledSubheaderLarge5>
                    <SubheaderLarge
                      hasIcon={false}
                      hasSwitch={false}
                      hasTag={false}
                      mode={"Dark"}
                    />
                  </StyledSubheaderLarge5>
                )}
                {type === "Domain & URL" && (
                  <StyledFrame48096336>
                    {type === "Domain & URL" && (
                      <StyledPrimaryButtonNeutral2>
                        <PrimaryButtonNeutral
                          state={"Default"}
                          size={"Large"}
                          mode={"Dark"}
                        />
                      </StyledPrimaryButtonNeutral2>
                    )}
                    {type === "Domain & URL" && (
                      <StyledPrimaryButtonSubtle>
                        <PrimaryButtonSubtle
                          state={"Default"}
                          size={"Large"}
                          mode={"Dark"}
                        />
                      </StyledPrimaryButtonSubtle>
                    )}
                  </StyledFrame48096336>
                )}
              </StyledUXfolioURL>
            )}
            {type === "Domain & URL" && (
              <StyledUXfolioURL2>
                {type === "Domain & URL" && (
                  <StyledSubheaderLarge6>
                    <SubheaderLarge
                      hasIcon={false}
                      hasSwitch={false}
                      hasTag={false}
                      mode={"Dark"}
                    />
                  </StyledSubheaderLarge6>
                )}
                {type === "Domain & URL" && (
                  <StyledOverviewCardDomain>
                    <OverviewCardDomain status={"Active"} type={"Uxfolio"} />
                  </StyledOverviewCardDomain>
                )}
              </StyledUXfolioURL2>
            )}
            {type === "Favicon" && (
              <StyledOverviewCardGeneral>
                <OverviewCardGeneral showText={true} type={"Favicon"} />
              </StyledOverviewCardGeneral>
            )}
            {type === "Archive" && (
              <StyledListItemPageAdd>
                <ListItemPageAdd type={"Icon"} />
              </StyledListItemPageAdd>
            )}
            {type === "Archive" && (
              <StyledListItemPageAdd2>
                <ListItemPageAdd type={"Icon"} />
              </StyledListItemPageAdd2>
            )}
            {type === "Archive" && (
              <StyledListItemPageAdd3>
                <ListItemPageAdd type={"Icon"} />
              </StyledListItemPageAdd3>
            )}
            {type === "Archive" && (
              <StyledListItemPageAdd4>
                <ListItemPageAdd type={"Icon"} />
              </StyledListItemPageAdd4>
            )}
            {type === "Archive" && (
              <StyledListItemPageAdd5>
                <ListItemPageAdd type={"Icon"} />
              </StyledListItemPageAdd5>
            )}
          </StyledSection>
        )}
        {["Buttons", "Portfolio privacy", "Favicon"].includes(type) && (
          <StyledSection2 $type={type}>
            {type === "Buttons" && (
              <StyledSubheaderLarge7>
                <SubheaderLarge
                  hasIcon={false}
                  hasSwitch={false}
                  hasTag={false}
                  mode={"Dark"}
                />
              </StyledSubheaderLarge7>
            )}
            {type === "Buttons" && (
              <StyledListItemCustomColor7>
                <ListItemCustomColor state={"Default"} selected={true} />
              </StyledListItemCustomColor7>
            )}
            {type === "Portfolio privacy" && (
              <StyledOptionBarLabeled2>
                <OptionBarLabeled
                  number={"1 option"}
                  active={"2"}
                  type={"Enabled"}
                  hasDescription={true}
                />
              </StyledOptionBarLabeled2>
            )}
            {type === "Favicon" && (
              <StyledImageManagerSingle2>
                <ImageManagerSingle
                  hasDescription={true}
                  hasLabel={true}
                  state={"Empty"}
                />
              </StyledImageManagerSingle2>
            )}
          </StyledSection2>
        )}
        {type === "Buttons" && (
          <StyledSection3>
            {type === "Buttons" && (
              <StyledSubheaderLarge8>
                <SubheaderLarge
                  hasIcon={false}
                  hasSwitch={false}
                  hasTag={false}
                  mode={"Dark"}
                />
              </StyledSubheaderLarge8>
            )}
            {type === "Buttons" && <ListItemFontCustom type={"Individual"} />}
          </StyledSection3>
        )}
      </StyledRoot>
    );
  },
);
