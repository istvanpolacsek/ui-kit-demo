import React from "react";
import styled, { css } from "styled-components";
import { HeaderModal } from "../HeaderModal";
import { ModalPreview } from "../ModalPreview";
import { TabBar, type TabBarProps } from "../TabBar";
import { ModalSidebarThumbnailLayout } from "../ModalSidebarThumbnailLayout";
import { ModalSidebarDeviceStyle } from "../ModalSidebarDeviceStyle";
import { ModalSidebarSectionBackground } from "../ModalSidebarSectionBackground";
import { FileZone } from "../FileZone";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface ModalLThumbnailProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "tabBarType" | "number" | "selected" | "mode"
> {
  type?:
    "Designer layout" | "Designer device" | "Designer background" | "Custom";
  tabBarType?: TabBarProps["type"];
  number?: TabBarProps["number"];
  selected?: TabBarProps["selected"];
  mode?: TabBarProps["mode"];
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
  $type:
    "Designer layout" | "Designer device" | "Designer background" | "Custom";
}>(
  ({ $type }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Designer layout":
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
        case "Designer device":
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
        case "Designer background":
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
        case "Custom":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 8px;
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

const StyledSidebar = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
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

const StyledTabBar = styled.div(
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

const StyledModalSidebarThumbnailLayout = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-height: 0;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledModalSidebarDeviceStyle = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-height: 0;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledModalSidebarSectionBackground = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-height: 0;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledFileZone = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    flex: 1 1 0;
    min-height: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
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

/** A modal dialog component with a thumbnail preview layout. Supports multiple variant types (Designer layout, Designer device, Designer background, Custom) and includes a header, body with optional preview and sidebar controls, and a button row for confirming or canceling actions. */
export const ModalLThumbnail = React.forwardRef<
  HTMLElement,
  ModalLThumbnailProps
>(function ModalLThumbnail(
  {
    type = "Designer layout",
    tabBarType = "Simple",
    number = 3,
    selected = 1,
    mode = "Dark",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Thumbnail settings modal"
      {...rest}
      ref={ref}
    >
      <StyledHeaderModal>
        <HeaderModal type={"Tabs"} number={"2"} selected={"1"} mode={"Dark"} />
      </StyledHeaderModal>
      <StyledBody $type={type}>
        {["Designer layout", "Designer device", "Designer background"].includes(
          type,
        ) && (
          <StyledModalPreview>
            <ModalPreview crop={false} type={"Image"} />
          </StyledModalPreview>
        )}
        {["Designer layout", "Designer device", "Designer background"].includes(
          type,
        ) && (
          <StyledSidebar>
            {[
              "Designer layout",
              "Designer device",
              "Designer background",
            ].includes(type) && (
              <StyledTabBar>
                <TabBar
                  type={tabBarType}
                  number={number}
                  selected={selected}
                  mode={mode}
                />
              </StyledTabBar>
            )}
            {type === "Designer layout" && (
              <StyledModalSidebarThumbnailLayout>
                <ModalSidebarThumbnailLayout
                  hasThirdColor={true}
                  hasSecondColor={true}
                  hasColor={true}
                  type={"Default"}
                />
              </StyledModalSidebarThumbnailLayout>
            )}
            {type === "Designer device" && (
              <StyledModalSidebarDeviceStyle>
                <ModalSidebarDeviceStyle
                  deviceStyle={"None"}
                  settings={"Thumbnail designer"}
                />
              </StyledModalSidebarDeviceStyle>
            )}
            {type === "Designer background" && (
              <StyledModalSidebarSectionBackground>
                <ModalSidebarSectionBackground
                  hasSecondColor={true}
                  hasColor={true}
                  hasThirdColor={false}
                  type={"Gradient"}
                />
              </StyledModalSidebarSectionBackground>
            )}
          </StyledSidebar>
        )}
        {type === "Custom" && (
          <StyledFileZone>
            <FileZone figmaBanner={"False"} empty={"False"} />
          </StyledFileZone>
        )}
      </StyledBody>
      {["Designer layout", "Designer device", "Designer background"].includes(
        type,
      ) && (
        <StyledButtonRow>
          {[
            "Designer layout",
            "Designer device",
            "Designer background",
          ].includes(type) && (
            <SecondaryButtonNeutral
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          )}
          {[
            "Designer layout",
            "Designer device",
            "Designer background",
          ].includes(type) && (
            <PrimaryButtonNeutral
              state={"Default"}
              size={"Large"}
              mode={"Dark"}
            />
          )}
        </StyledButtonRow>
      )}
    </StyledRoot>
  );
});
