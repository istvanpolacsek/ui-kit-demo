import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./UserLine.markup";

export interface UserLineProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "weight" | "mode" | "children" | "dangerouslySetInnerHTML"
> {
  weight?: "Light" | "Medium" | "Bold" | "Extra bold";
  mode?: "Light";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const UserLine = React.forwardRef<HTMLSpanElement, UserLineProps>(
  function UserLine({ weight = "Light", mode = "Light", ...rest }, ref) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: SVG_MARKUP[JSON.stringify([weight])] ?? "",
        }}
      />
    );
  },
);
