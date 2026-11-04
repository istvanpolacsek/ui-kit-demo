import React from "react";
import styled, { css } from "styled-components";
import { TextContentTitle } from "../TextContentTitle";
import { FormNewsletter } from "../FormNewsletter";

export interface HeroNewsletterProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 160px;
            padding-right: 24px;
            padding-bottom: 160px;
            padding-left: 24px;
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 160px;
            padding-right: 24px;
            padding-bottom: 160px;
            padding-left: 24px;
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A hero section containing a newsletter signup form with a title and email input. Supports Desktop and Mobile layout variants. */
export const HeroNewsletter = React.forwardRef<
  HTMLElement,
  HeroNewsletterProps
>(function HeroNewsletter({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Newsletter signup"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <TextContentTitle
        hasSubtitle={true}
        subtitle={"Subtitle"}
        title={"Title"}
        align={"Center"}
      />
      <FormNewsletter />
    </StyledRoot>
  );
});
