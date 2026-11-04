import React from "react";
import styled, { css } from "styled-components";

export interface AvatarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "size" | "type"
> {
  size?: "Small" | "Large" | "Medium" | "Extra Small";
  type?: "Initials" | "Image";
}

const StyledRoot = styled.div<{
  $size: "Small" | "Large" | "Medium" | "Extra Small";
  $type: "Initials" | "Image";
}>(
  ({ theme, $size, $type }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["accent"]["accentWhite"]};
    border-radius: 1000px;
    ${(() => {
      switch (JSON.stringify([$size, $type])) {
        case '["Large","Image"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 96px;
            height: 96px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Medium","Image"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 68px;
            height: 68px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Small","Image"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Extra Small","Image"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            width: 96px;
            height: 96px;
            box-sizing: border-box;
          `;
        case "Medium":
          return css`
            width: 68px;
            height: 68px;
            box-sizing: border-box;
          `;
        case "Small":
          return css`
            width: 48px;
            height: 48px;
            box-sizing: border-box;
          `;
        case "Extra Small":
          return css`
            width: 24px;
            height: 24px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$size, $type])) {
        case '["Large","Initials"]':
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        case '["Medium","Initials"]':
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  color: #ffffff;
  `,
);

const StyledEllipse3 = styled.div<{ $type: "Initials" | "Image" }>(
  ({ $type }) => css`
    width: 96px;
    height: 96px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($type) {
        case "Image":
          return css`
            background-color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse4 = styled.div<{ $type: "Initials" | "Image" }>(
  ({ theme, $type }) => css`
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 50%;
    ${(() => {
      switch ($type) {
        case "Image":
          return css`
            background-color: ${"transparent"};
          `;
        case "Initials":
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAB = styled.span<{
  $size: "Small" | "Large" | "Medium" | "Extra Small";
}>(
  ({ $size }) => css`
    color: #ffffff;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 36px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Medium":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Small":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
          `;
        case "Extra Small":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 10px;
            font-weight: 700;
            line-height: 1.5;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** Displays a user avatar as either a circular image or initials placeholder, available in multiple sizes (Extra Small, Small, Medium, Large). */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar({ size = "Large", type = "Image", ...rest }, ref) {
    return (
      <StyledRoot
        role="img"
        aria-label="User avatar"
        {...rest}
        ref={ref}
        $size={size}
        $type={type}
      >
        {["Large", "Medium"].includes(size) && <StyledEllipse3 $type={type} />}
        {["Small", "Extra Small"].includes(size) && (
          <StyledEllipse4 $type={type} />
        )}
        {type === "Initials" && <StyledAB $size={size}>{"AB"}</StyledAB>}
      </StyledRoot>
    );
  },
);
