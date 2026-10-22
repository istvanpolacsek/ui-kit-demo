import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";

export interface BannerHugeProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}

const StyledRoot = styled.section<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 36px;
    gap: 0px;
    justify-content: flex-end;
    align-items: center;
    height: 187px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    width: 740px;
    height: 187px;
    box-sizing: border-box;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#0f0f0f"};
          `;
        case "Domain":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Referral":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            border-color: ${"#0f0f0f"};
          `;
        case "Domain":
          return css`
            border-color: ${"#eeeeee"};
          `;
        case "Referral":
          return css`
            border-color: ${"#eeeeee"};
          `;
        case "Cancel Premium":
          return css`
            border-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledIllustration = styled.div(
  () => css`
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledMask = styled.div(
  () => css`
    width: 281px;
    height: 189px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

const StyledRows = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 281px;
    height: 189px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledLine = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine2 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine3 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine4 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine5 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine6 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine7 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine8 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine9 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine10 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine11 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine12 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine13 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine14 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColumns = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-end;
    align-items: flex-start;
    width: 281px;
    height: 189px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledLine15 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine22 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine32 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine42 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine52 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine62 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine72 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine82 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine92 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine102 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine112 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine122 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine132 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine142 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine152 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine16 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine17 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLine18 = styled.div<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            background-color: ${"#262626"};
          `;
        case "Domain":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Referral":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        case "Cancel Premium":
          return css`
            background-color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVisual = styled.div(
  () => css`
    border-radius: 0px;
    width: 280px;
    height: 187px;
    box-sizing: border-box;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 17px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 424px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTitle = styled.h2<{
  $type: "Premium" | "Domain" | "Referral" | "Cancel Premium";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Premium":
          return css`
            color: ${"#fefefe"};
          `;
        case "Domain":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Referral":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Cancel Premium":
          return css`
            color: ${"#0f0f0f"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: 'Bricolage Grotesque';
    font-size: 26px;
    font-weight: 600;
    line-height: 1.25;
  `,
);

const StyledPlusFeatureList = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledItem = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledPublishYourPortfolios = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledAutomaticSetupThroughUXfolio = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledInviteOthersToGetA20Discount = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledYourPortfoliosAndCaseStudiesWillBeUnpublished = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledItem2 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledUseACustomDomain = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledCustomDomainsAreMoreProfessional = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledTheyAlsoGetA10OffTheirFirstPayment = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledYourCustomDomainsWillBeDisconnected = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledItem3 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSendYourPortfolioForReview = styled.div(
  () => css`
    color: #adadad;
  `,
);

const StyledCancelOrTransferAnytime = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledYouHelpSpreadTheWordOfUXfolio = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledYouWillLoseAccessToAllPremiumFeatures = styled.div(
  () => css`
    color: #707070;
  `,
);

/** A promotional banner component that displays a visual illustration alongside a title and a list of feature highlights or consequences. Supports multiple variants including Premium upsell, Domain promotion, Referral incentive, and Cancel Premium warning. */
export const BannerHuge = React.forwardRef<HTMLElement, BannerHugeProps>(
  function BannerHuge({ type = "Premium", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Promotional banner"
        {...rest}
        ref={ref}
        $type={type}
      >
        <StyledIllustration>
          <div>
            <StyledMask />
            <div>
              <StyledRows>
                <StyledLine $type={type} />
                <StyledLine2 $type={type} />
                <StyledLine3 $type={type} />
                <StyledLine4 $type={type} />
                <StyledLine5 $type={type} />
                <StyledLine6 $type={type} />
                <StyledLine7 $type={type} />
                <StyledLine8 $type={type} />
                <StyledLine9 $type={type} />
                <StyledLine10 $type={type} />
                <StyledLine11 $type={type} />
                <StyledLine12 $type={type} />
                <StyledLine13 $type={type} />
                <StyledLine14 $type={type} />
              </StyledRows>
            </div>
            <div>
              <StyledColumns>
                <StyledLine15 $type={type} />
                <StyledLine22 $type={type} />
                <StyledLine32 $type={type} />
                <StyledLine42 $type={type} />
                <StyledLine52 $type={type} />
                <StyledLine62 $type={type} />
                <StyledLine72 $type={type} />
                <StyledLine82 $type={type} />
                <StyledLine92 $type={type} />
                <StyledLine102 $type={type} />
                <StyledLine112 $type={type} />
                <StyledLine122 $type={type} />
                <StyledLine132 $type={type} />
                <StyledLine142 $type={type} />
                <StyledLine152 $type={type} />
                <StyledLine16 $type={type} />
                <StyledLine17 $type={type} />
                <StyledLine18 $type={type} />
              </StyledColumns>
            </div>
          </div>
          <StyledVisual></StyledVisual>
        </StyledIllustration>
        <StyledContent>
          <StyledTitle $type={type}>
            {
              (
                {
                  '["Premium"]': "Enjoy all features",
                  '["Domain"]': "Purchase a custom domain",
                  '["Referral"]': "Refer a friend!",
                  '["Cancel Premium"]': "On Nov 13, 2025:",
                } as Record<string, string>
              )[JSON.stringify([type])]
            }
          </StyledTitle>
          <StyledPlusFeatureList>
            <StyledItem>
              {["Premium", "Domain", "Referral"].includes(type) && (
                <VisualAsset name={"Check"} size={24} />
              )}
              {type === "Premium" && (
                <StyledPublishYourPortfolios>
                  {"Publish your portfolios"}
                </StyledPublishYourPortfolios>
              )}
              {type === "Domain" && (
                <StyledAutomaticSetupThroughUXfolio>
                  {"Automatic setup through UXfolio"}
                </StyledAutomaticSetupThroughUXfolio>
              )}
              {type === "Referral" && (
                <StyledInviteOthersToGetA20Discount>
                  {"Invite others to get a $20 discount"}
                </StyledInviteOthersToGetA20Discount>
              )}
              {type === "Cancel Premium" && (
                <VisualAsset name={"Close"} size={24} />
              )}
              {type === "Cancel Premium" && (
                <StyledYourPortfoliosAndCaseStudiesWillBeUnpublished>
                  {"Your portfolios and case studies will be unpublished"}
                </StyledYourPortfoliosAndCaseStudiesWillBeUnpublished>
              )}
            </StyledItem>
            <StyledItem2>
              {["Premium", "Domain", "Referral"].includes(type) && (
                <VisualAsset name={"Check"} size={24} />
              )}
              {type === "Premium" && (
                <StyledUseACustomDomain>
                  {"Use a custom domain"}
                </StyledUseACustomDomain>
              )}
              {type === "Domain" && (
                <StyledCustomDomainsAreMoreProfessional>
                  {"Custom domains are more professional"}
                </StyledCustomDomainsAreMoreProfessional>
              )}
              {type === "Referral" && (
                <StyledTheyAlsoGetA10OffTheirFirstPayment>
                  {"They also get a $10 off their first payment."}
                </StyledTheyAlsoGetA10OffTheirFirstPayment>
              )}
              {type === "Cancel Premium" && (
                <VisualAsset name={"Close"} size={24} />
              )}
              {type === "Cancel Premium" && (
                <StyledYourCustomDomainsWillBeDisconnected>
                  {"Your custom domains will be disconnected"}
                </StyledYourCustomDomainsWillBeDisconnected>
              )}
            </StyledItem2>
            <StyledItem3>
              {["Premium", "Domain", "Referral"].includes(type) && (
                <VisualAsset name={"Check"} size={24} />
              )}
              {type === "Premium" && (
                <StyledSendYourPortfolioForReview>
                  {"Send your portfolio for review"}
                </StyledSendYourPortfolioForReview>
              )}
              {type === "Domain" && (
                <StyledCancelOrTransferAnytime>
                  {"Cancel or transfer anytime"}
                </StyledCancelOrTransferAnytime>
              )}
              {type === "Referral" && (
                <StyledYouHelpSpreadTheWordOfUXfolio>
                  {"You help spread the word of UXfolio."}
                </StyledYouHelpSpreadTheWordOfUXfolio>
              )}
              {type === "Cancel Premium" && (
                <VisualAsset name={"Close"} size={24} />
              )}
              {type === "Cancel Premium" && (
                <StyledYouWillLoseAccessToAllPremiumFeatures>
                  {"You will lose access to all Premium features"}
                </StyledYouWillLoseAccessToAllPremiumFeatures>
              )}
            </StyledItem3>
          </StyledPlusFeatureList>
        </StyledContent>
      </StyledRoot>
    );
  },
);
