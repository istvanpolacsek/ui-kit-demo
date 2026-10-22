import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./LogoEmbeddedMedia.markup";

export interface LogoEmbeddedMediaProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children"
> {
  type?:
    | "Adobe XD"
    | "Airtable"
    | "Axure"
    | "Figma"
    | "Framer"
    | "Google slider"
    | "Invision"
    | "Marvel"
    | "Miro"
    | "Protopie"
    | "Vimeo"
    | "Youtube";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const LogoEmbeddedMedia = React.forwardRef<
  HTMLSpanElement,
  LogoEmbeddedMediaProps
>(function LogoEmbeddedMedia({ type = "Adobe XD", ...rest }, ref) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([type])] && (
        <img src={SVG_URLS[JSON.stringify([type])]} alt="" />
      )}
    </StyledRoot>
  );
});
