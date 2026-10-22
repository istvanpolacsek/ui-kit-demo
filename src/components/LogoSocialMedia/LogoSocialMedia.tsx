import React from "react";
import styled, { css } from "styled-components";
import { SVG_MARKUP } from "./LogoSocialMedia.markup";

export interface LogoSocialMediaProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "type" | "children" | "dangerouslySetInnerHTML"
> {
  type?:
    | "Slack"
    | "Facebook"
    | "Instagram"
    | "X"
    | "LinkedIn"
    | "Pinterest"
    | "Youtube"
    | "Vimeo"
    | "Medium"
    | "Threads"
    | "Behance"
    | "Github"
    | "Tumblr"
    | "Dribbble"
    | "Whatsapp";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const LogoSocialMedia = React.forwardRef<
  HTMLSpanElement,
  LogoSocialMediaProps
>(function LogoSocialMedia({ type = "Facebook", ...rest }, ref) {
  return (
    <StyledRoot
      {...rest}
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: SVG_MARKUP[JSON.stringify([type])] ?? "",
      }}
    />
  );
});
