import React from "react";
import styled, { css } from "styled-components";

export interface AvatarProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "initials" | "type" | "size" | "shape"
> {
  initials?: string;
  type?: "Initial" | "Image";
  size?: "Large" | "Small" | "Medium";
  shape?: "Circle" | "Square";
}

const StyledRoot = styled.div<{
  $type: "Initial" | "Image";
  $size: "Large" | "Small" | "Medium";
  $shape: "Circle" | "Square";
}>(
  ({ theme, $type, $size, $shape }) => css`
    overflow: hidden;
    ${(() => {
      switch (JSON.stringify([$type, $size])) {
        case '["Initial","Large"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 14.5px;
            padding-bottom: 8px;
            padding-left: 13.5px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Initial","Medium"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4.5px;
            padding-right: 11.5px;
            padding-bottom: 5.5px;
            padding-left: 10.5px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Initial","Small"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 1.5px;
            padding-right: 7px;
            padding-bottom: 2.5px;
            padding-left: 8px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Image","Large"]':
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
            width: 40px;
            height: 40px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Image","Medium"]':
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
            width: 32px;
            height: 32px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Image","Small"]':
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
            width: 40px;
            height: 40px;
            box-sizing: border-box;
          `;
        case "Medium":
          return css`
            width: 32px;
            height: 32px;
            box-sizing: border-box;
          `;
        case "Small":
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
      switch ($type) {
        case "Initial":
          return css`
            background-color: ${theme["Background"]["Brand"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch (JSON.stringify([$size, $shape])) {
        case '["Large","Square"]':
          return css`
            border-radius: 8px;
          `;
        case '["Medium","Square"]':
          return css`
            border-radius: 8px;
          `;
        case '["Small","Square"]':
          return css`
            border-radius: 4px;
          `;
        case '["Large","Circle"]':
          return css`
            border-radius: 9999px;
          `;
        case '["Medium","Circle"]':
          return css`
            border-radius: 9999px;
          `;
        case '["Small","Circle"]':
          return css`
            border-radius: 9999px;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["Text"]["Brand"]["On Brand"]};
  `,
);

const StyledInitials = styled.span<{ $size: "Large" | "Small" | "Medium" }>(
  ({ theme, $size }) => css`
    color: ${theme["Text"]["Brand"]["On Brand"]};
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            font-family: "Inter";
            font-size: 20px;
            font-weight: 400;
            line-height: 1.2;
          `;
        case "Medium":
          return css`
            font-family: "Inter";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          `;
        case "Small":
          return css`
            font-family: "Inter";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledShape = styled.div(
  () => css`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** Displays a user avatar, either as an image or with initials as a fallback. Supports multiple sizes (Small, Medium, Large) and shapes (Circle, Square). */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(
    {
      initials = "F",
      type = "Image",
      size = "Large",
      shape = "Circle",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        aria-label="User avatar"
        {...rest}
        ref={ref}
        $type={type}
        $size={size}
        $shape={shape}
      >
        {type === "Initial" && (
          <StyledInitials $size={size}>{initials}</StyledInitials>
        )}
        {type === "Image" && <StyledShape />}
      </StyledRoot>
    );
  },
);
