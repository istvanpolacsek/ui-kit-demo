import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./IconButton.markup";

export interface IconButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "icon" | "variant" | "size" | "state" | "children" | "dangerouslySetInnerHTML"
> {
  icon?: string;
  variant?: "Ghost" | "Secondary";
  size?: "Default" | "Small";
  state?: "Default" | "Disabled" | "Focused";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const IconButton = React.forwardRef<HTMLSpanElement, IconButtonProps>(
  function IconButton(
    {
      icon = "24:461",
      variant = "Ghost",
      size = "Default",
      state = "Default",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: SVG_MARKUP[JSON.stringify([variant, size, state])] ?? "",
        }}
      />
    );
  },
);
