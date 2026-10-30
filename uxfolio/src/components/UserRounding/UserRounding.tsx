import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./UserRounding.markup";

export interface UserRoundingProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "mode" | "children"
> {
  type?: "Radius - no" | "Radius - sm" | "Radius - md" | "Radius - lg";
  mode?: "Light";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const UserRounding = React.forwardRef<
  HTMLSpanElement,
  UserRoundingProps
>(function UserRounding(
  { type = "Radius - no", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
