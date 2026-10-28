import React from "react";
import styled, { css } from "styled-components";
import { SVG_URLS } from "./Logo.markup";

export interface LogoProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "logo" | "children"
> {
  logo?:
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

const StyledRoot = styled.div(
  () => css`
    display: inline-flex;
  `,
);

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(function Logo(
  { logo = "AirBNB", ...rest },
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
