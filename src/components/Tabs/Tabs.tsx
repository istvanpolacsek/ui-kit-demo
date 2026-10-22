import React from "react";
import styled, { css } from "styled-components";

export interface TabsProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "value" | "state" | "device"
> {
  value?: string;
  state?: "Default" | "Selected";
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.button<{
  $device: "Mobile" | "Desktop";
  $state: "Default" | "Selected";
}>(
  ({ theme, $device, $state }) => css`
    overflow: hidden;
    border: 2px solid transparent;
    box-sizing: border-box;
    border-radius: 0px;
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
      switch ($state) {
        case "Selected":
          return css`
            border-color: ${"#0847a8"};
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
            color: ${"#0847a8"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTab = styled.span<{
  $state: "Default" | "Selected";
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
            color: ${"#0847a8"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch (JSON.stringify([$state, $device])) {
        case '["Default","Desktop"]':
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
          `;
        case '["Selected","Desktop"]':
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.4;
          `;
        case '["Default","Mobile"]':
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        case '["Selected","Mobile"]':
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A tab component that represents a single tab item within a tab bar. Supports selected and default states, with responsive variants for mobile and desktop devices. */
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
