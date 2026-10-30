import React from "react";
import styled, { css } from "styled-components";

export interface LinkButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "size" | "mode"
> {
  size?: "Regular" | "Large" | "Small";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.a<{ $size: "Regular" | "Large" | "Small" }>(
  ({ $size }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "Large":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 15px;
            padding-right: 8px;
            padding-bottom: 15px;
            padding-left: 8px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Regular":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 14px;
            padding-right: 8px;
            padding-bottom: 14px;
            padding-left: 8px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Small":
          return css`
            display: inline-flex;
            flex-direction: row;
            padding-top: 9px;
            padding-right: 8px;
            padding-bottom: 9px;
            padding-left: 8px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A link-styled button component that navigates to a URL or triggers an action, available in multiple sizes and visual modes with support for default, hover, and disabled states. */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton({ size = "Large", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        role="button"
        aria-label="Link button"
        {...rest}
        ref={ref}
        $size={size}
      ></StyledRoot>
    );
  },
);
