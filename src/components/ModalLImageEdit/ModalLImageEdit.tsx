import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { FileZone } from "../FileZone";
import { ModalPreview } from "../ModalPreview";
import { ModalSidebarCrop } from "../ModalSidebarCrop";
import { OptionGridSimple } from "../OptionGridSimple";
import { ModalSidebarAltText } from "../ModalSidebarAltText";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalLImageEditProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "tab"
> {
  tab?: "File" | "Crop" | "Device style" | "Alt text";
}

const StyledRoot = styled.section(
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
    width: 880px;
    height: 640px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
    box-shadow:
      0px 12px 28px 0px rgba(0, 0, 0, 0.32),
      0px 40px 48px 0px rgba(0, 0, 0, 0.24);
  `,
);

const StyledHeaderModal = styled.div(
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

const StyledBody = styled.div<{
  $tab: "File" | "Crop" | "Device style" | "Alt text";
}>(
  ({ $tab }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($tab) {
        case "File":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Crop":
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
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Device style":
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
            flex: 1 1 0;
            align-self: stretch;
          `;
        case "Alt text":
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
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFileZone = styled.div(
  () => css`
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
  `,
);

const StyledModalPreview = styled.div(
  () => css`
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
  `,
);

const StyledModalSidebarCrop = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledSidebar = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 332px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledOptionGridSimple = styled.div(
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

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.333984375px;
    width: 332px;
    height: 48px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledModalSidebarAltText = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledButtonRow = styled.footer(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A modal dialog for editing images, supporting multiple tabs: File upload, Crop, Device style, and Alt text. Contains a header, a dynamic body area that adapts based on the selected tab, and a footer row with cancel and confirm actions. */
export const ModalLImageEdit = React.forwardRef<
  HTMLElement,
  ModalLImageEditProps
>(function ModalLImageEdit({ tab = "File", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Image edit"
      aria-expanded
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Tabs"} number={"4"} selected={"1"} mode={"Dark"} />
      </StyledHeaderModal>
      <StyledBody $tab={tab}>
        {tab === "File" && (
          <StyledFileZone>
            <FileZone figmaBanner={"False"} empty={"False"} />
          </StyledFileZone>
        )}
        {["Crop", "Device style", "Alt text"].includes(tab) && (
          <StyledModalPreview>
            <ModalPreview crop={true} type={"Image"} />
          </StyledModalPreview>
        )}
        {tab === "Crop" && (
          <StyledModalSidebarCrop>
            <ModalSidebarCrop type={"Default"} />
          </StyledModalSidebarCrop>
        )}
        {tab === "Device style" && (
          <StyledSidebar>
            {tab === "Device style" && (
              <StyledOptionGridSimple>
                <OptionGridSimple
                  isHardToSee={false}
                  hasSubheader={true}
                  type={"Device type"}
                />
              </StyledOptionGridSimple>
            )}
            {tab === "Device style" && <StyledBottomScrollOverlay />}
          </StyledSidebar>
        )}
        {tab === "Alt text" && (
          <StyledModalSidebarAltText>
            <ModalSidebarAltText type={"Default"} />
          </StyledModalSidebarAltText>
        )}
      </StyledBody>
      <StyledButtonRow>
        <SecondaryButtonNeutral
          state={"Default"}
          size={"Large"}
          mode={"Dark"}
        />
        <PrimaryButtonNeutral state={"Default"} size={"Large"} mode={"Dark"} />
      </StyledButtonRow>
    </StyledRoot>
  );
});
