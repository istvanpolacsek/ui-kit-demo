import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./Social.markup";

export interface SocialProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "property1" | "children" | "dangerouslySetInnerHTML"
> {
  property1?:
    "facebook" | "x" | "instagram" | "linkedin" | "youtube" | "tiktok";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Social = React.forwardRef<HTMLSpanElement, SocialProps>(
  function Social({ property1 = "facebook", ...rest }, ref) {
    return (
      <StyledRoot
        {...rest}
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: SVG_MARKUP[JSON.stringify([property1])] ?? "",
        }}
      />
    );
  },
);
