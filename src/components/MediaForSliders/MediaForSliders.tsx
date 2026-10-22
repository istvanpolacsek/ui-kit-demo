import React from "react";
import styled, { css } from "styled-components";
import { VideoControl } from "../VideoControl";

export interface MediaForSlidersProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 12px;
            justify-content: center;
            align-items: center;
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage = styled.div(
  () => css`
    overflow: hidden;
    background-color: #e0dede;
    border-radius: 4px;
  `,
);

const Styledimage43046 = styled.span(
  () => css`
    width: 330px;
    height: 473px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const Styledimage43043 = styled.span(
  () => css`
    width: 390px;
    height: 521px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledImage2 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #e0dede;
    border-radius: 4px;
  `,
);

const Styledimage430432 = styled.span(
  () => css`
    width: 358px;
    height: 521px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledImage3 = styled.div(
  () => css`
    overflow: hidden;
    background-color: #e0dede;
    border-radius: 4px;
  `,
);

const Styledimage43045 = styled.span(
  () => css`
    width: 330px;
    height: 473px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A media container component for sliders that displays images with an overlaid Video Control, adapting its layout for Mobile and Desktop variants. */
export const MediaForSliders = React.forwardRef<
  HTMLDivElement,
  MediaForSlidersProps
>(function MediaForSliders({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="img"
      aria-label="Slider media"
      {...rest}
      ref={ref}
      $device={device}
    >
      <StyledImage>
        {device === "Desktop" && <Styledimage43046 />}
        <VideoControl type={"Play"} state={"Default"} />
        {device === "Mobile" && <Styledimage43043 />}
      </StyledImage>
      {device === "Desktop" && (
        <StyledImage2>
          {device === "Desktop" && <Styledimage430432 />}
          {device === "Desktop" && (
            <VideoControl type={"Play"} state={"Default"} />
          )}
        </StyledImage2>
      )}
      {device === "Desktop" && (
        <StyledImage3>
          {device === "Desktop" && <Styledimage43045 />}
          {device === "Desktop" && (
            <VideoControl type={"Play"} state={"Default"} />
          )}
        </StyledImage3>
      )}
    </StyledRoot>
  );
});
