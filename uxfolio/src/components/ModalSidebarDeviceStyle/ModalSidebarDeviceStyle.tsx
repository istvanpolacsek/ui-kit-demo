import React from "react";
import styled, { css } from "styled-components";
import { OptionGridSimple } from "../OptionGridSimple";

export interface ModalSidebarDeviceStyleProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "deviceStyle" | "settings"
> {
  deviceStyle?: "None" | "Browser" | "Outline" | "Simple" | "Semi-realistic";
  settings?: "Image" | "Thumbnail designer";
}

const StyledRoot = styled.aside(
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
    width: 257px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledBottomScrollOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: -0.33349609375px;
    width: 257px;
    height: 48px;
    background-color: transparent;
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

const StyledOptionGridSimple2 = styled.div(
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

const StyledOptionGridSimple3 = styled.div(
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

const StyledOptionGridSimple4 = styled.div(
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

const StyledOptionGridSimple5 = styled.div(
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

/** A modal sidebar panel that displays device style options (None, Browser, Outline, Simple, Semi-realistic) and settings (Image or Thumbnail designer) for configuring how a device frame appears. Contains scrollable option grids gated by variant combinations. */
export const ModalSidebarDeviceStyle = React.forwardRef<
  HTMLElement,
  ModalSidebarDeviceStyleProps
>(function ModalSidebarDeviceStyle(
  { deviceStyle = "None", settings = "Image", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Device style settings"
      {...rest}
      ref={ref}
    >
      <StyledBottomScrollOverlay />
      <StyledOptionGridSimple>
        <OptionGridSimple
          isHardToSee={false}
          hasSubheader={true}
          type={"Device type"}
        />
      </StyledOptionGridSimple>
      {((deviceStyle === "Browser" && settings === "Image") ||
        (deviceStyle === "Outline" && settings === "Image") ||
        (deviceStyle === "Simple" && settings === "Image") ||
        (deviceStyle === "Semi-realistic" && settings === "Image") ||
        (deviceStyle === "None" && settings === "Thumbnail designer") ||
        (deviceStyle === "Browser" && settings === "Thumbnail designer") ||
        (deviceStyle === "Outline" && settings === "Thumbnail designer") ||
        (deviceStyle === "Simple" && settings === "Thumbnail designer") ||
        (deviceStyle === "Semi-realistic" &&
          settings === "Thumbnail designer")) && (
        <StyledOptionGridSimple2>
          <OptionGridSimple
            isHardToSee={false}
            hasSubheader={true}
            type={"Device style"}
          />
        </StyledOptionGridSimple2>
      )}
      {((deviceStyle === "Browser" && settings === "Image") ||
        (deviceStyle === "Outline" && settings === "Image") ||
        (deviceStyle === "Simple" && settings === "Image") ||
        (deviceStyle === "Semi-realistic" && settings === "Image") ||
        (deviceStyle === "Browser" && settings === "Thumbnail designer")) && (
        <StyledOptionGridSimple3>
          <OptionGridSimple
            isHardToSee={false}
            hasSubheader={true}
            type={"Device color"}
          />
        </StyledOptionGridSimple3>
      )}
      {((deviceStyle === "Browser" && settings === "Image") ||
        (deviceStyle === "Simple" && settings === "Image") ||
        (deviceStyle === "Semi-realistic" && settings === "Image")) && (
        <StyledOptionGridSimple4>
          <OptionGridSimple
            isHardToSee={false}
            hasSubheader={true}
            type={"Corner radius"}
          />
        </StyledOptionGridSimple4>
      )}
      {deviceStyle === "Browser" && settings === "Image" && (
        <StyledOptionGridSimple5>
          <OptionGridSimple
            isHardToSee={false}
            hasSubheader={true}
            type={"Shadow"}
          />
        </StyledOptionGridSimple5>
      )}
    </StyledRoot>
  );
});
