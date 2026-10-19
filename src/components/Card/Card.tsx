import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface CardProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  | "asset"
  | "button"
  | "heading"
  | "body"
  | "icon"
  | "assetType"
  | "variant"
  | "direction"
  | "body2"
  | "name"
  | "size"
> {
  asset?: boolean;
  button?: boolean;
  heading?: string;
  body?: string;
  icon?: IconProps["name"];
  assetType?: "Icon" | "Image";
  variant?: "Stroke" | "Default";
  direction?: "Horizontal" | "Vertical";
  body2?: React.ReactNode;
  name?: IconProps["name"];
  size?: IconProps["size"];
}

const StyledRoot = styled.article<{
  $variant: "Stroke" | "Default";
  $direction: "Horizontal" | "Vertical";
}>(
  ({ theme, $variant, $direction }) => css`
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch (JSON.stringify([$variant, $direction])) {
        case '["Default","Horizontal"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: 440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Default","Vertical"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Stroke","Horizontal"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: 440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Stroke","Vertical"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($variant) {
        case "Stroke":
          return css`
            background-color: ${theme["Background"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Stroke":
          return css`
            border-color: ${theme["Border"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($variant) {
        case "Default":
          return css`
            border-radius: 0px;
          `;
        case "Stroke":
          return css`
            border-radius: 8px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledBody2 = styled.div<{ $direction: "Horizontal" | "Vertical" }>(
  ({ $direction }) => css`
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
    ${(() => {
      switch ($direction) {
        case "Horizontal":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Vertical":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: ${theme["Slate"]["200"]};
    border-radius: 0px;
  `,
);

/** A content card component that displays an optional asset (icon or image), a heading, body text, and an optional action button. Supports horizontal and vertical layouts, stroke and default visual variants. */
export const Card = React.forwardRef<HTMLElement, CardProps>(function Card(
  {
    asset = true,
    button = true,
    heading = "Title",
    body = "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    icon = "Info",
    assetType = "Icon",
    variant = "Stroke",
    direction = "Horizontal",
    body2,
    name = "Activity",
    size = 32,
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      {...rest}
      ref={ref}
      $variant={variant}
      $direction={direction}
    >
      {asset && <Icon name={name} size={size} />}
      <StyledBody2 $direction={direction}>{body2}</StyledBody2>
      {assetType === "Image" && <StyledImage></StyledImage>}
    </StyledRoot>
  );
});
