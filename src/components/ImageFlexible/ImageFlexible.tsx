import React from "react";
import styled, { css } from "styled-components";

export interface ImageFlexibleProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "snaps" | "defaultProp"
> {
  snaps?: boolean;
  defaultProp?: "Free";
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
    height: 210px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
    color: #fefefe;
  `,
);

const StyledImage = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 240px;
    height: 210px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledTooltipSmall = styled.span(
  () => css`
    position: absolute;
    left: 93px;
    top: 86px;
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

const Styled1 = styled.span(
  () => css`
    color: #fefefe;
    font-family: "DM Mono";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01em;
  `,
);

/** A flexible image component that optionally displays a snapping tooltip overlay (e.g., '1:1') to indicate aspect ratio or snap constraints. */
export const ImageFlexible = React.forwardRef<
  HTMLDivElement,
  ImageFlexibleProps
>(function ImageFlexible(
  { snaps = false, defaultProp = "Free", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="Flexible image" {...rest} ref={ref}>
      <StyledImage />
      {snaps && (
        <StyledTooltipSmall>
          <Styled1>{"1:1"}</Styled1>
        </StyledTooltipSmall>
      )}
    </StyledRoot>
  );
});
