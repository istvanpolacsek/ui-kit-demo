import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./IconButton.markup";

export interface IconButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "instance" | "children" | "dangerouslySetInnerHTML"
> {
  instance?: string;
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const IconButton = React.forwardRef<HTMLSpanElement, IconButtonProps>(
  function IconButton({ instance = "448:4898", ...rest }, ref) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: SVG_MARKUP[JSON.stringify([])] ?? "",
        }}
      />
    );
  },
);
