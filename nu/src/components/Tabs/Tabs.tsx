import React from "react";
import styled, { css } from "styled-components";

export interface TabsProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "value" | "state" | "device"
> {
  value?: string;
  state?: "Default" | "Selected" | "Focused";
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.button<{
  $device: "Mobile" | "Desktop";
  $state: "Default" | "Selected" | "Focused";
}>(
  ({ theme, $device, $state }) => css`
    overflow: hidden;
    border: 2px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 65px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $device])) {
        case '["Selected","Desktop"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Focused","Desktop"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Selected","Mobile"]':
          return css`
            border-color: ${theme["accent"]["accentBrand"]};
          `;
        case '["Focused","Mobile"]':
          return css`
            border-color: ${theme["button"]["Default"]["focusedStroke"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$state, $device])) {
        case '["Default","Desktop"]':
          return css`
            border-radius: 0px;
          `;
        case '["Selected","Desktop"]':
          return css`
            border-radius: 0px;
          `;
        case '["Focused","Desktop"]':
          return css`
            border-radius: 12px;
          `;
        case '["Default","Mobile"]':
          return css`
            border-radius: 0px;
          `;
        case '["Selected","Mobile"]':
          return css`
            border-radius: 0px;
          `;
        case '["Focused","Mobile"]':
          return css`
            border-radius: 8px;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Selected":
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case "Focused":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTab = styled.div<{
  $state: "Default" | "Selected" | "Focused";
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $state, $device }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Selected":
          return css`
            color: ${theme["text"]["textOnLightBlue"]};
          `;
        case "Focused":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $device])) {
        case '["Default","Desktop"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
          `;
        case '["Selected","Desktop"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
          `;
        case '["Focused","Desktop"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
          `;
        case '["Default","Mobile"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        case '["Selected","Mobile"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        case '["Focused","Mobile"]':
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A single tab item used within a tab navigation group. Displays a text label and supports Default, Selected, and Focused states for both Mobile and Desktop devices. */
export const Tabs = React.forwardRef<HTMLButtonElement, TabsProps>(
  function Tabs(
    { value = "Tab", state = "Default", device = "Desktop", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="tab"
        aria-label="Tab"
        {...rest}
        ref={ref}
        $device={device}
        $state={state}
      >
        <StyledTab $state={state} $device={device}>
          {value}
        </StyledTab>
      </StyledRoot>
    );
  },
);
