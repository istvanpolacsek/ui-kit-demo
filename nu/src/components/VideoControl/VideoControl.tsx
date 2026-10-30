import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface VideoControlProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "type"
> {
  type?: "Forward" | "Rewind" | "Play" | "Pause";
}

const StyledRoot = styled.button(
  ({ theme }) => css`
    appearance: none;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
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
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.4000000059604645);
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 100px;
    color: ${theme["accent"]["accentWhite"]};
    &:focus-visible {
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
    }
    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.6000000238418579);
    }
    &:active:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.6000000238418579);
    }
    &:focus-visible {
      border-color: ${theme["button"]["Inverted"]["focusedStroke"]};
    }
    &:active:not(:disabled) {
      border-color: ${theme["accent"]["accentWhite"]};
    }
    &:focus-visible {
      border-radius: 1000px;
    }
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

/** A video playback control button that supports multiple action types (Play, Pause, Forward, Rewind) and interactive states (Default, Hover, Pressed, Focused). Renders an icon representing the current control action. */
export const VideoControl = React.forwardRef<
  HTMLButtonElement,
  VideoControlProps
>(function VideoControl({ type = "Rewind", ...rest }, ref) {
  return (
    <StyledRoot type="button" {...rest} ref={ref}>
      <Icon name={"replay_10"} size={24} />
      <Icon name={"play_arrow"} size={24} />
      <Icon name={"forward_10"} size={24} />
      <Icon name={"pause"} size={24} />
      <StyledVideoControlRewindFocused>
        <Icon name={"replay_10"} size={24} />
      </StyledVideoControlRewindFocused>
      <StyledVideoControlPlayFocused>
        <Icon name={"play_arrow"} size={24} />
      </StyledVideoControlPlayFocused>
      <StyledVideoControlForwardFocused>
        <Icon name={"forward_10"} size={24} />
      </StyledVideoControlForwardFocused>
      <StyledVideoControlStopFocused>
        <Icon name={"pause"} size={24} />
      </StyledVideoControlStopFocused>
    </StyledRoot>
  );
});
