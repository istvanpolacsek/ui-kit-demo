import React from "react";
import styled, { css } from "styled-components";

export interface ImageFixedProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "snaps" | "aspectRatio"
> {
  snaps?: boolean;
  aspectRatio?:
    | "1:1"
    | "3:2"
    | "4:3"
    | "5:4"
    | "16:9"
    | "21:9"
    | "2:3"
    | "3:4"
    | "4:5"
    | "9:16";
}

const StyledRoot = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 240px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
    color: #fefefe;
  `,
);

const StyledRatioLock = styled.div(
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
    align-self: stretch;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const Styled = styled.div(
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
    align-self: stretch;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const Styled2 = styled.div(
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
    align-self: stretch;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const Styled3 = styled.div(
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
    align-self: stretch;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const Styled4 = styled.div(
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
    align-self: stretch;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 0px;
  `,
);

const StyledImage = styled.span(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 240px;
    height: 240px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledTooltipSmall = styled.div(
  () => css`
    position: absolute;
    left: 93px;
    top: 101px;
    width: 54px;
    height: 38px;
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 14px;
    padding-bottom: 10px;
    padding-left: 14px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    background-color: #0f0f0f;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 8px;
  `,
);

const Styled1 = styled.div(
  () => css`
    color: #fefefe;
    font-family: "DM Mono";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01em;
  `,
);

/** A fixed-aspect-ratio image container that constrains an image to a specific ratio (e.g. 1:1, 16:9). Optionally displays a tooltip indicating the current aspect ratio when snapping is enabled. */
export const ImageFixed = React.forwardRef<HTMLDivElement, ImageFixedProps>(
  function ImageFixed({ snaps = false, aspectRatio = "1:1", ...rest }, ref) {
    return (
      <StyledRoot role="img" aria-label="Image" {...rest} ref={ref}>
        <StyledRatioLock>
          {["1:1", "5:4", "4:3", "2:3", "4:5", "3:4", "9:16"].includes(
            aspectRatio,
          ) && (
            <Styled>
              {["2:3", "4:5", "3:4", "9:16"].includes(aspectRatio) && (
                <Styled2>
                  {["2:3", "9:16"].includes(aspectRatio) && (
                    <Styled3>
                      {aspectRatio === "9:16" && <Styled4></Styled4>}
                    </Styled3>
                  )}
                </Styled2>
              )}
            </Styled>
          )}
        </StyledRatioLock>
        <StyledImage />
        {snaps && (
          <StyledTooltipSmall>
            <Styled1>{"1:1"}</Styled1>
          </StyledTooltipSmall>
        )}
      </StyledRoot>
    );
  },
);
