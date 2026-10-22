import React from "react";
import styled, { css } from "styled-components";
import { HeaderPopoverPanel } from "../HeaderPopoverPanel";
import { OptionGridSimple } from "../OptionGridSimple";
import { SmallTypeSelector } from "../SmallTypeSelector";
import { ColorStyle } from "../ColorStyle";
import { ListItemFontCustom } from "../ListItemFontCustom";
import { OptionBarLabeled } from "../OptionBarLabeled";
import { Drag } from "../Drag";
import { CopyLink } from "../CopyLink";
import { PrimaryButtonWithIconNeutral } from "../PrimaryButtonWithIconNeutral";
import { DropListLabelless } from "../DropListLabelless";
import { TextFieldLabeled } from "../TextFieldLabeled";

export interface PopoverPanelSectionSettingsAnimatedTextProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "lineColorSelector" | "selectPageDropList" | "addLinkInputField" | "tab"
> {
  lineColorSelector?: boolean;
  selectPageDropList?: boolean;
  addLinkInputField?: boolean;
  tab?: "Interactions" | "Design" | "Content" | "Content (1 item)";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 24px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 6px 16px 0px rgba(0, 0, 0, 0.32),
      0px 16px 24px 0px rgba(0, 0, 0, 0.24);
    color: #adadad;
  `,
);

const StyledOverflow = styled.div(
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

const StyledColorSelector = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledLineColor = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledFontStyleContainer = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFontStyle = styled.label(
  () => css`
    color: #adadad;
  `,
);

const StyledContainer = styled.ul(
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
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledDraggableInput = styled.li(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCopyLink = styled.div(
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

const StyledDraggableInput2 = styled.li(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCopyLink2 = styled.div(
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

const StyledDraggableInput3 = styled.li(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCopyLink3 = styled.div(
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

const StyledDraggableInput4 = styled.li(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCopyLink4 = styled.div(
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

const StyledDraggableInput5 = styled.li(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCopyLink5 = styled.div(
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

const StyledDraggableInput6 = styled.li(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledCopyLink6 = styled.div(
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

const StyledClickInteraction = styled.div(
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
    width: 284px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

/** A popover panel for configuring 'Animated text' section settings, with tabs for Design, Interactions, and Content. Exposes controls for font style, line color, option grids, draggable inputs, and click interactions depending on the active tab and boolean toggles. */
export const PopoverPanelSectionSettingsAnimatedText = React.forwardRef<
  HTMLElement,
  PopoverPanelSectionSettingsAnimatedTextProps
>(function PopoverPanelSectionSettingsAnimatedText(
  {
    lineColorSelector = false,
    selectPageDropList = false,
    addLinkInputField = false,
    tab = "Design",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Animated text section settings"
      {...rest}
      ref={ref}
    >
      <HeaderPopoverPanel
        type={"Tabs"}
        number={"2"}
        selected={"1"}
        mode={"Dark"}
      />
      {tab === "Design" && (
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Height of images"}
        />
      )}
      {tab === "Design" && (
        <StyledOverflow>
          {tab === "Design" && <SmallTypeSelector state={"Default"} />}
          {lineColorSelector && (
            <StyledColorSelector>
              {tab === "Design" && (
                <ColorStyle type={"Solid"} style={"Platform"} />
              )}
              {tab === "Design" && (
                <StyledLineColor>{"Line color"}</StyledLineColor>
              )}
            </StyledColorSelector>
          )}
        </StyledOverflow>
      )}
      {tab === "Design" && (
        <StyledFontStyleContainer>
          {tab === "Design" && (
            <StyledFontStyle>{"Font style"}</StyledFontStyle>
          )}
          {tab === "Design" && <ListItemFontCustom type={"Grouped"} />}
        </StyledFontStyleContainer>
      )}
      {["Design", "Interactions"].includes(tab) && (
        <OptionBarLabeled
          number={"1 option"}
          active={"1"}
          type={"Enabled"}
          hasDescription={false}
        />
      )}
      {["Content", "Content (1 item)"].includes(tab) && (
        <StyledContainer>
          {["Content", "Content (1 item)"].includes(tab) && (
            <StyledDraggableInput>
              {["Content", "Content (1 item)"].includes(tab) && <Drag />}
              {["Content", "Content (1 item)"].includes(tab) && (
                <StyledCopyLink>
                  <CopyLink state={"Default"} mode={"Dark"} />
                </StyledCopyLink>
              )}
            </StyledDraggableInput>
          )}
          {tab === "Content" && (
            <StyledDraggableInput2>
              {tab === "Content" && <Drag />}
              {tab === "Content" && (
                <StyledCopyLink2>
                  <CopyLink state={"Default"} mode={"Dark"} />
                </StyledCopyLink2>
              )}
            </StyledDraggableInput2>
          )}
          {tab === "Content" && (
            <StyledDraggableInput3>
              {tab === "Content" && <Drag />}
              {tab === "Content" && (
                <StyledCopyLink3>
                  <CopyLink state={"Default"} mode={"Dark"} />
                </StyledCopyLink3>
              )}
            </StyledDraggableInput3>
          )}
          {tab === "Content" && (
            <StyledDraggableInput4>
              {tab === "Content" && <Drag />}
              {tab === "Content" && (
                <StyledCopyLink4>
                  <CopyLink state={"Default"} mode={"Dark"} />
                </StyledCopyLink4>
              )}
            </StyledDraggableInput4>
          )}
          {tab === "Content" && (
            <StyledDraggableInput5>
              {tab === "Content" && <Drag />}
              {tab === "Content" && (
                <StyledCopyLink5>
                  <CopyLink state={"Default"} mode={"Dark"} />
                </StyledCopyLink5>
              )}
            </StyledDraggableInput5>
          )}
          {tab === "Content" && (
            <StyledDraggableInput6>
              {tab === "Content" && <Drag />}
              {tab === "Content" && (
                <StyledCopyLink6>
                  <CopyLink state={"Default"} mode={"Dark"} />
                </StyledCopyLink6>
              )}
            </StyledDraggableInput6>
          )}
        </StyledContainer>
      )}
      {["Content", "Content (1 item)"].includes(tab) && (
        <PrimaryButtonWithIconNeutral
          state={"Default"}
          size={"Small"}
          mode={"Dark"}
        />
      )}
      {tab === "Interactions" && <SmallTypeSelector state={"Default"} />}
      {tab === "Interactions" && (
        <StyledClickInteraction>
          {tab === "Interactions" && <SmallTypeSelector state={"Default"} />}
          {selectPageDropList && <DropListLabelless mode={"Dark"} />}
          {addLinkInputField && (
            <TextFieldLabeled state={"Default"} mode={"Dark"} />
          )}
        </StyledClickInteraction>
      )}
    </StyledRoot>
  );
});
