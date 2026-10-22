import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./IllustrationFeatureCTA.markup";

export interface IllustrationFeatureCTAProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "mode" | "children"
> {
  type?:
    | "Inspiration"
    | "Password reminder"
    | "Link"
    | "User"
    | "Text styles"
    | "Send";
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const IllustrationFeatureCTA = React.forwardRef<
  HTMLSpanElement,
  IllustrationFeatureCTAProps
>(function IllustrationFeatureCTA(
  { type = "Inspiration", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type, mode])] && (
        <img src={SVG_URLS[JSON.stringify([type, mode])]} alt="" />
      )}
    </StyledRoot>
  );
});
