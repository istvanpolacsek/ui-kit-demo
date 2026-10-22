import React from "react";
import styled, { css } from "styled-components";

export interface SideImageProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device" | "children"
> {
  device?: "Mobile" | "Web";
  children?: React.ReactNode;
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    overflow: hidden;
    & > img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 84px;
            padding-bottom: 0px;
            padding-left: 84px;
            gap: 0px;
            justify-content: center;
            align-items: flex-end;
            width: 416px;
            height: 416px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 84px;
            padding-bottom: 0px;
            padding-left: 84px;
            gap: 0px;
            justify-content: center;
            align-items: flex-end;
            width: 350px;
            height: 350px;
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
            width: 416px;
            height: 416px;
            box-sizing: border-box;
          `;
        case "Mobile":
          return css`
            width: 350px;
            height: 350px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const DEFAULT_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23c7d2e0'/><circle cx='100' cy='80' r='36' fill='%238a9bb3'/><ellipse cx='100' cy='190' rx='70' ry='60' fill='%238a9bb3'/></svg>";

/** A layout component that displays content alongside a side image, with responsive variants for Mobile and Web devices. */
export const SideImage = React.forwardRef<HTMLElement, SideImageProps>(
  function SideImage(
    { device = "Web", children = <img src={DEFAULT_IMAGE} alt="" />, ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="region"
        aria-label="Side image section"
        {...rest}
        ref={ref}
        $device={device}
      >
        {children}
      </StyledRoot>
    );
  },
);
