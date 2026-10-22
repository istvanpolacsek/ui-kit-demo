import React from "react";
import styled, { css } from "styled-components";

export interface OptionPreviewSmallThumbnailDeviceCornerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "rounding"
> {
  rounding?: "Rounded" | "Sharp";
}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    width: 59px;
    height: 59px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 0px;
    width: 59px;
    height: 59px;
    box-sizing: border-box;
  `,
);

const StyledBase = styled.span(
  () => css`
    width: 43px;
    height: 43px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A small thumbnail preview component for displaying device corner options, with a variant for rounding style (Rounded or Sharp). Used to visually represent selectable corner style options in a UI settings or design tool context. */
export const OptionPreviewSmallThumbnailDeviceCorner = React.forwardRef<
  HTMLDivElement,
  OptionPreviewSmallThumbnailDeviceCornerProps
>(function OptionPreviewSmallThumbnailDeviceCorner(
  { rounding = "Sharp", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="img"
      aria-label="Device corner option preview"
      {...rest}
      ref={ref}
    >
      <StyledBase />
    </StyledRoot>
  );
});
