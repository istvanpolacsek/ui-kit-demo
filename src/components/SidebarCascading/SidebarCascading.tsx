import React from "react";
import styled, { css } from "styled-components";
import { HeaderSidebar } from "../HeaderSidebar";
import { ListItemFontCustom } from "../ListItemFontCustom";
import { ListItemCustomColor } from "../ListItemCustomColor";
import { SubheaderSmall } from "../SubheaderSmall";
import { ListItemAddablePage } from "../ListItemAddablePage";
import { PaletteSwatchSelectorDefault } from "../PaletteSwatchSelectorDefault";
import { ColorPickerDefault } from "../ColorPickerDefault";
import { SubheaderLarge } from "../SubheaderLarge";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";

export interface SidebarCascadingProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "type"
> {
  type?:
    | "Advanced font"
    | "Add page"
    | "Advanced color"
    | "Palette editor"
    | "Palette designer";
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
    height: 800px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 30px 8px 0px rgba(0, 0, 0, 0),
      0px 19px 8px 0px rgba(0, 0, 0, 0.01),
      0px 11px 6px 0px rgba(0, 0, 0, 0.05),
      0px 5px 5px 0px rgba(0, 0, 0, 0.09),
      0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  `,
);

const StyledFontStyles = styled.ul<{
  $type:
    | "Advanced font"
    | "Add page"
    | "Advanced color"
    | "Palette editor"
    | "Palette designer";
}>(
  ({ $type }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Advanced font":
          return css`
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
          `;
        case "Advanced color":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 30px;
            padding-bottom: 32px;
            padding-left: 30px;
            gap: 20px;
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
  `,
);

const StyledListItemFontCustom = styled.li(() => css``);

const StyledListItemFontCustom2 = styled.li(() => css``);

const StyledListItemFontCustom3 = styled.li(() => css``);

const StyledListItemFontCustom4 = styled.li(() => css``);

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

const StyledListItemCustomColor7 = styled.li(
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

const StyledContent = styled.section<{
  $type:
    | "Advanced font"
    | "Add page"
    | "Advanced color"
    | "Palette editor"
    | "Palette designer";
}>(
  ({ $type }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Add page":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 48px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Palette editor":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 64px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Palette designer":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 64px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPagesWithLabel = styled.div(
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
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledListItemAddablePage = styled.li(
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

const StyledListItemAddablePage2 = styled.li(
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

const StyledListItemAddablePage3 = styled.li(
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

const StyledPagesWithLabel2 = styled.div(
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

const StyledSubheaderSmall2 = styled.div(
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

const StyledPages2 = styled.ul(
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

const StyledListItemAddablePage4 = styled.li(
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

const StyledListItemAddablePage22 = styled.li(
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

const StyledListItemAddablePage32 = styled.li(
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

const StyledPaletteEditor = styled.div(
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
    width: 285px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledColorPalette = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
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

const StyledLabel = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledColorPickerDefault = styled.div(
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

const StyledMainColor = styled.div(
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

const StyledColorPickerDefault2 = styled.div(
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

const StyledPaletteResults = styled.div(
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

const StyledCustomSubheader = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
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

const StyledTitle = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledMonochrome = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall3 = styled.div(
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

const StyledPaletteSwatchSelectorDefault2 = styled.div(
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

const StyledComplementary = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall4 = styled.div(
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

const StyledPaletteSwatchSelectorDefault3 = styled.div(
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

const StyledAnalogous1 = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall5 = styled.div(
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

const StyledPaletteSwatchSelectorDefault4 = styled.div(
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

const StyledAnalogous2 = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSubheaderSmall6 = styled.div(
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

const StyledPaletteSwatchSelectorDefault5 = styled.div(
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

/** A cascading sidebar panel that displays contextual editing tools based on the selected type, including font styles, page management, color palette editing, and palette design options. */
export const SidebarCascading = React.forwardRef<
  HTMLElement,
  SidebarCascadingProps
>(function SidebarCascading({ type = "Advanced font", ...rest }, ref) {
  return (
    <StyledRoot
      role="complementary"
      aria-label="Cascading sidebar panel"
      {...rest}
      ref={ref}
    >
      <HeaderSidebar hasBack={false} type={"Simple"} />
      {["Advanced font", "Advanced color"].includes(type) && (
        <StyledFontStyles $type={type}>
          {type === "Advanced font" && (
            <StyledListItemFontCustom>
              <ListItemFontCustom type={"Individual"} />
            </StyledListItemFontCustom>
          )}
          {type === "Advanced font" && (
            <StyledListItemFontCustom2>
              <ListItemFontCustom type={"Individual"} />
            </StyledListItemFontCustom2>
          )}
          {type === "Advanced font" && (
            <StyledListItemFontCustom3>
              <ListItemFontCustom type={"Individual"} />
            </StyledListItemFontCustom3>
          )}
          {type === "Advanced font" && (
            <StyledListItemFontCustom4>
              <ListItemFontCustom type={"Individual"} />
            </StyledListItemFontCustom4>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor2>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor2>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor3>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor3>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor4>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor4>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor5>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor5>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor6>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor6>
          )}
          {type === "Advanced color" && (
            <StyledListItemCustomColor7>
              <ListItemCustomColor state={"Default"} />
            </StyledListItemCustomColor7>
          )}
        </StyledFontStyles>
      )}
      {["Add page", "Palette editor", "Palette designer"].includes(type) && (
        <StyledContent $type={type}>
          {type === "Add page" && (
            <StyledPagesWithLabel>
              {type === "Add page" && (
                <StyledSubheaderSmall>
                  <SubheaderSmall hasIcon={false} mode={"Dark"} />
                </StyledSubheaderSmall>
              )}
              {type === "Add page" && (
                <StyledPages>
                  {type === "Add page" && (
                    <StyledListItemAddablePage>
                      <ListItemAddablePage />
                    </StyledListItemAddablePage>
                  )}
                  {type === "Add page" && (
                    <StyledListItemAddablePage2>
                      <ListItemAddablePage />
                    </StyledListItemAddablePage2>
                  )}
                  {type === "Add page" && (
                    <StyledListItemAddablePage3>
                      <ListItemAddablePage />
                    </StyledListItemAddablePage3>
                  )}
                </StyledPages>
              )}
            </StyledPagesWithLabel>
          )}
          {type === "Add page" && (
            <StyledPagesWithLabel2>
              {type === "Add page" && (
                <StyledSubheaderSmall2>
                  <SubheaderSmall hasIcon={false} mode={"Dark"} />
                </StyledSubheaderSmall2>
              )}
              {type === "Add page" && (
                <StyledPages2>
                  {type === "Add page" && (
                    <StyledListItemAddablePage4>
                      <ListItemAddablePage />
                    </StyledListItemAddablePage4>
                  )}
                  {type === "Add page" && (
                    <StyledListItemAddablePage22>
                      <ListItemAddablePage />
                    </StyledListItemAddablePage22>
                  )}
                  {type === "Add page" && (
                    <StyledListItemAddablePage32>
                      <ListItemAddablePage />
                    </StyledListItemAddablePage32>
                  )}
                </StyledPages2>
              )}
            </StyledPagesWithLabel2>
          )}
          {type === "Palette editor" && (
            <StyledPaletteEditor>
              {type === "Palette editor" && (
                <StyledColorPalette>
                  {type === "Palette editor" && (
                    <StyledPaletteSwatchSelectorDefault>
                      <PaletteSwatchSelectorDefault
                        selected={"1"}
                        picker={"Editor"}
                      />
                    </StyledPaletteSwatchSelectorDefault>
                  )}
                  {type === "Palette editor" && (
                    <StyledLabel>{"Title, Subtitle, H1, H2, H3"}</StyledLabel>
                  )}
                </StyledColorPalette>
              )}
              {type === "Palette editor" && (
                <StyledColorPickerDefault>
                  <ColorPickerDefault type={"HEX"} />
                </StyledColorPickerDefault>
              )}
            </StyledPaletteEditor>
          )}
          {type === "Palette designer" && (
            <StyledMainColor>
              {type === "Palette designer" && (
                <StyledSubheaderLarge>
                  <SubheaderLarge
                    hasIcon={false}
                    hasSwitch={false}
                    hasTag={false}
                    mode={"Dark"}
                  />
                </StyledSubheaderLarge>
              )}
              {type === "Palette designer" && (
                <StyledColorPickerDefault2>
                  <ColorPickerDefault type={"HEX"} />
                </StyledColorPickerDefault2>
              )}
            </StyledMainColor>
          )}
          {type === "Palette designer" && (
            <StyledPaletteResults>
              {type === "Palette designer" && (
                <StyledCustomSubheader>
                  {type === "Palette designer" && (
                    <StyledTitle>{"Color palettes"}</StyledTitle>
                  )}
                  {type === "Palette designer" && (
                    <IconOnlyPrimaryButtonSubtle
                      state={"Default"}
                      size={"Small"}
                      mode={"Dark"}
                    />
                  )}
                </StyledCustomSubheader>
              )}
              {type === "Palette designer" && (
                <StyledMonochrome>
                  {type === "Palette designer" && (
                    <StyledSubheaderSmall3>
                      <SubheaderSmall hasIcon={false} mode={"Dark"} />
                    </StyledSubheaderSmall3>
                  )}
                  {type === "Palette designer" && (
                    <StyledPaletteSwatchSelectorDefault2>
                      <PaletteSwatchSelectorDefault
                        selected={"None"}
                        picker={"Editor"}
                      />
                    </StyledPaletteSwatchSelectorDefault2>
                  )}
                </StyledMonochrome>
              )}
              {type === "Palette designer" && (
                <StyledComplementary>
                  {type === "Palette designer" && (
                    <StyledSubheaderSmall4>
                      <SubheaderSmall hasIcon={false} mode={"Dark"} />
                    </StyledSubheaderSmall4>
                  )}
                  {type === "Palette designer" && (
                    <StyledPaletteSwatchSelectorDefault3>
                      <PaletteSwatchSelectorDefault
                        selected={"None"}
                        picker={"Editor"}
                      />
                    </StyledPaletteSwatchSelectorDefault3>
                  )}
                </StyledComplementary>
              )}
              {type === "Palette designer" && (
                <StyledAnalogous1>
                  {type === "Palette designer" && (
                    <StyledSubheaderSmall5>
                      <SubheaderSmall hasIcon={false} mode={"Dark"} />
                    </StyledSubheaderSmall5>
                  )}
                  {type === "Palette designer" && (
                    <StyledPaletteSwatchSelectorDefault4>
                      <PaletteSwatchSelectorDefault
                        selected={"None"}
                        picker={"Editor"}
                      />
                    </StyledPaletteSwatchSelectorDefault4>
                  )}
                </StyledAnalogous1>
              )}
              {type === "Palette designer" && (
                <StyledAnalogous2>
                  {type === "Palette designer" && (
                    <StyledSubheaderSmall6>
                      <SubheaderSmall hasIcon={false} mode={"Dark"} />
                    </StyledSubheaderSmall6>
                  )}
                  {type === "Palette designer" && (
                    <StyledPaletteSwatchSelectorDefault5>
                      <PaletteSwatchSelectorDefault
                        selected={"None"}
                        picker={"Editor"}
                      />
                    </StyledPaletteSwatchSelectorDefault5>
                  )}
                </StyledAnalogous2>
              )}
            </StyledPaletteResults>
          )}
        </StyledContent>
      )}
    </StyledRoot>
  );
});
