import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface TagsProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "icon" | "value" | "state" | "type" | "size"
> {
  icon?: boolean;
  value?: string;
  state?: "Default" | "Defaul";
  type?: "RoyalBlue" | "Wheat" | "Fuchsia" | "Avocado";
  size?: "Large" | "Small";
}

const StyledRoot = styled.div<{
  $size: "Large" | "Small";
  $type: "RoyalBlue" | "Wheat" | "Fuchsia" | "Avocado";
}>(
  ({ theme, $size, $type }) => css`
    overflow: hidden;
    border-radius: 20px;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Small":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 12px;
            padding-bottom: 4px;
            padding-left: 12px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "RoyalBlue":
          return css`
            background-color: ${theme["royalBlue"]["100"]};
          `;
        case "Wheat":
          return css`
            background-color: ${theme["wheat"]["100"]};
          `;
        case "Fuchsia":
          return css`
            background-color: ${theme["fuchsia"]["100"]};
          `;
        case "Avocado":
          return css`
            background-color: ${theme["avocado"]["100"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($type) {
        case "RoyalBlue":
          return css`
            color: ${theme["royalBlue"]["600 •"]};
          `;
        case "Wheat":
          return css`
            color: ${theme["wheat"]["800"]};
          `;
        case "Fuchsia":
          return css`
            color: ${theme["fuchsia"]["800"]};
          `;
        case "Avocado":
          return css`
            color: ${theme["avocado"]["800"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTags = styled.input<{
  $type: "RoyalBlue" | "Wheat" | "Fuchsia" | "Avocado";
  $size: "Large" | "Small";
}>(
  ({ theme, $type, $size }) => css`
    flex: 1 1 auto;
    min-width: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    font: inherit;
    &::placeholder {
      color: inherit;
      opacity: 1;
    }
    ${(() => {
      switch ($type) {
        case "RoyalBlue":
          return css`
            color: ${theme["accent"]["accentBrand"]};
          `;
        case "Wheat":
          return css`
            color: ${theme["wheat"]["800"]};
          `;
        case "Fuchsia":
          return css`
            color: ${theme["fuchsia"]["800"]};
          `;
        case "Avocado":
          return css`
            color: ${theme["avocado"]["800"]};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Small":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A tag/badge component that displays a text label with an optional icon. Supports multiple color variants (RoyalBlue, Wheat, Fuchsia, Avocado) and two sizes (Large, Small), commonly used to categorize or label content. */
export const Tags = React.forwardRef<HTMLInputElement, TagsProps>(function Tags(
  {
    icon = true,
    value = "Tags",
    state = "Default",
    type = "RoyalBlue",
    size = "Large",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot $size={size} $type={type}>
      <StyledText>
        <StyledTags
          type="text"
          placeholder={value}
          aria-label={value}
          $type={type}
          $size={size}
          ref={ref}
          {...rest}
        />
      </StyledText>
      {icon && <Icon name={"info"} size={24} />}
    </StyledRoot>
  );
});
