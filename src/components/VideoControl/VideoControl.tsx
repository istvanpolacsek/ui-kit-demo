import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface VideoControlProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type" | "state"
> {
  type?: "Forward" | "Rewind" | "Play" | "Pause";
  state?: "Default" | "Hover" | "Pressed" | "Focused";
}

const StyledRoot = styled.button<{
  $state: "Default" | "Hover" | "Pressed" | "Focused";
}>(
  ({ theme, $state }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 64.00000762939453px;
            height: 63.999996185302734px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Hover":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 64.00000762939453px;
            height: 63.999996185302734px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Focused":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Pressed":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 64.00000762939453px;
            height: 63.999996185302734px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.4000000059604645)"};
          `;
        case "Hover":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.6000000238418579)"};
          `;
        case "Pressed":
          return css`
            background-color: ${"rgba(255, 255, 255, 0.6000000238418579)"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Focused":
          return css`
            border-color: ${theme["button"]["Inverted"]["focusedStroke"]};
          `;
        case "Pressed":
          return css`
            border-color: ${theme["accent"]["accentWhite"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-radius: 100px;
          `;
        case "Hover":
          return css`
            border-radius: 100px;
          `;
        case "Focused":
          return css`
            border-radius: 1000px;
          `;
        case "Pressed":
          return css`
            border-radius: 100px;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["accent"]["accentWhite"]};
  `,
);

const StyledVideoControlRewindFocused = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 64.00000762939453px;
    height: 63.999996185302734px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 100px;
  `,
);

const StyledVideoControlPlayFocused = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 64.00000762939453px;
    height: 63.999996185302734px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 100px;
  `,
);

const StyledVideoControlForwardFocused = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 64.00000762939453px;
    height: 63.999996185302734px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 100px;
  `,
);

const StyledVideoControlStopFocused = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 64.00000762939453px;
    height: 63.999996185302734px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border-radius: 100px;
  `,
);

/** A video playback control button that supports multiple states (Default, Hover, Pressed, Focused) and control types (Play, Pause, Forward, Rewind). Renders an icon representing the current control action. */
export const VideoControl = React.forwardRef<
  HTMLButtonElement,
  VideoControlProps
>(function VideoControl({ type = "Rewind", state = "Default", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Play" {...rest} ref={ref} $state={state}>
      {((type === "Rewind" && state === "Default") ||
        (type === "Rewind" && state === "Hover") ||
        (type === "Rewind" && state === "Pressed")) && (
        <Icon name={"replay_10"} size={24} />
      )}
      {((type === "Play" && state === "Default") ||
        (type === "Play" && state === "Hover") ||
        (type === "Play" && state === "Pressed")) && (
        <Icon name={"play_arrow"} size={24} />
      )}
      {((type === "Forward" && state === "Default") ||
        (type === "Forward" && state === "Hover") ||
        (type === "Forward" && state === "Pressed")) && (
        <Icon name={"forward_10"} size={24} />
      )}
      {((type === "Pause" && state === "Default") ||
        (type === "Pause" && state === "Hover") ||
        (type === "Pause" && state === "Pressed")) && (
        <Icon name={"pause"} size={24} />
      )}
      {type === "Rewind" && state === "Focused" && (
        <StyledVideoControlRewindFocused>
          {type === "Rewind" && state === "Focused" && (
            <Icon name={"replay_10"} size={24} />
          )}
        </StyledVideoControlRewindFocused>
      )}
      {type === "Play" && state === "Focused" && (
        <StyledVideoControlPlayFocused>
          {type === "Play" && state === "Focused" && (
            <Icon name={"play_arrow"} size={24} />
          )}
        </StyledVideoControlPlayFocused>
      )}
      {type === "Forward" && state === "Focused" && (
        <StyledVideoControlForwardFocused>
          {type === "Forward" && state === "Focused" && (
            <Icon name={"forward_10"} size={24} />
          )}
        </StyledVideoControlForwardFocused>
      )}
      {type === "Pause" && state === "Focused" && (
        <StyledVideoControlStopFocused>
          {type === "Pause" && state === "Focused" && (
            <Icon name={"pause"} size={24} />
          )}
        </StyledVideoControlStopFocused>
      )}
    </StyledRoot>
  );
});
