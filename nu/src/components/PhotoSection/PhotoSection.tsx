import React from "react";
import styled, { css } from "styled-components";

export interface PhotoSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 1440px;
            height: 700px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10px;
            justify-content: flex-end;
            align-items: flex-start;
            width: 390px;
            height: 700px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            width: 1440px;
            height: 700px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledvitalyGarievTB5HpfJf7mAUnsplash1 = styled.div(
  () => css`
    width: 1823.5733642578125px;
    height: 1026px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRectangle4134310 = styled.div(
  () => css`
    background-color: #d9d9d9;
    border-radius: 0px;
  `,
);

/** A photo section component that displays a full-width image, with responsive variants for Web and Mobile layouts. */
export const PhotoSection = React.forwardRef<HTMLElement, PhotoSectionProps>(
  function PhotoSection({ device = "Web", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Photo section"
        {...rest}
        ref={ref}
        $device={device}
      >
        {device === "Web" && <StyledvitalyGarievTB5HpfJf7mAUnsplash1 />}
        {device === "Mobile" && <StyledRectangle4134310 />}
      </StyledRoot>
    );
  },
);
