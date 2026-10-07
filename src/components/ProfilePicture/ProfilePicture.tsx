import React from "react";
import styled, { css } from "styled-components";

export interface ProfilePictureProps {
  size: "L" | "S";
  children?: React.ReactNode;
}

const StyledRoot = styled.div<{ $size: "L" | "S" }>(
  ({ $size }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    overflow: hidden;
    & > img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    overflow: hidden;
    ${(() => {
      switch ($size) {
        case "S":
          return css`
            width: 44px;
            height: 44px;
            box-sizing: border-box;
          `;
        case "L":
          return css`
            width: 94px;
            height: 94px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "S":
          return css`
            border-radius: 44px;
          `;
        case "L":
          return css`
            border-radius: 174px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const DEFAULT_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='%23c7d2e0'/><circle cx='100' cy='80' r='36' fill='%238a9bb3'/><ellipse cx='100' cy='190' rx='70' ry='60' fill='%238a9bb3'/></svg>";

export function ProfilePicture({
  size,
  children = <img src={DEFAULT_IMAGE} alt="" />,
}: ProfilePictureProps) {
  return <StyledRoot $size={size}>{children}</StyledRoot>;
}
