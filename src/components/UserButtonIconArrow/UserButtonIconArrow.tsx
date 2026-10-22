import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./UserButtonIconArrow.markup";

export interface UserButtonIconArrowProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "direction" | "children" | "dangerouslySetInnerHTML"
> {
  direction?: "Left" | "Right";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const UserButtonIconArrow = React.forwardRef<
  HTMLSpanElement,
  UserButtonIconArrowProps
>(function UserButtonIconArrow({ direction = "Left", ...rest }, ref) {
  return (
    <StyledRoot
      {...rest}
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: SVG_MARKUP[JSON.stringify([direction])] ?? "",
      }}
    />
  );
});
