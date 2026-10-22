import React from "react";
import styled, { css } from "styled-components";
import { LogoProduct } from "../LogoProduct";

export interface BrandingBannerProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "mode"
> {
  mode?: "Dark" | "Light";
}

const StyledRoot = styled.section<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    gap: 1px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 4px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#eeeeee"};
          `;
        case "Dark":
          return css`
            border-color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            box-shadow:
              0px 4px 8px 0px rgba(0, 0, 0, 0.1),
              0px 8px 12px 0px rgba(0, 0, 0, 0.06);
          `;
        case "Dark":
          return css`
            box-shadow:
              0px 4px 8px 0px rgba(0, 0, 0, 0.24),
              0px 8px 12px 0px rgba(0, 0, 0, 0.2);
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTagline = styled.span<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A branding banner component that displays a tagline alongside a product logo. Supports light and dark display modes, typically used to attribute or promote the platform used to create content. */
export const BrandingBanner = React.forwardRef<
  HTMLElement,
  BrandingBannerProps
>(function BrandingBanner({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot aria-label="Branding banner" {...rest} ref={ref} $mode={mode}>
      <StyledTagline $mode={mode}>{"Made with"}</StyledTagline>
      <LogoProduct light={"Default"} type={"Full"} />
    </StyledRoot>
  );
});
