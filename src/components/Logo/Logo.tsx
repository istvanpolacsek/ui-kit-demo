import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Logo.markup";

export interface LogoProps extends Omit<
  React.ComponentPropsWithoutRef<"span">,
  "logo" | "children"
> {
  logo:
    | "AirBNB"
    | "Amazon"
    | "Beats"
    | "Black Bird"
    | "Canon"
    | "Deloitte"
    | "Logi"
    | "Netflix"
    | "Salesforce"
    | "Razer"
    | "Microsoft";
}

const StyledRoot = styled.span(
  () => css`
    display: inline-flex;
  `,
);

/** Vector artwork rendered from exported SVG assets. */
export const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(function Logo(
  { logo, ...rest },
  ref,
) {
  return (
    <StyledRoot {...rest} ref={ref}>
      {SVG_URLS[JSON.stringify([logo])] && (
        <img src={SVG_URLS[JSON.stringify([logo])]} alt="" />
      )}
    </StyledRoot>
  );
});
