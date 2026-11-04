import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { HeroNewsletter } from "../HeroNewsletter";
import { Footer } from "../Footer";

export interface ExamplesWaitlistProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $platform: "Mobile" | "Desktop" }>(
  ({ theme, $platform }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
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

const StyledHeader = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledHeroNewsletter = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledFooter = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A waitlist landing page section composed of a header, hero newsletter signup area, and footer. Supports both Mobile and Desktop layout variants. */
export const ExamplesWaitlist = React.forwardRef<
  HTMLElement,
  ExamplesWaitlistProps
>(function ExamplesWaitlist({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Waitlist signup page"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <StyledHeader>
        <Header
          variant={"Neutral"}
          state={"Default"}
          size={"Medium"}
          platform={"Desktop"}
        />
      </StyledHeader>
      <StyledHeroNewsletter>
        <HeroNewsletter platform={"Desktop"} />
      </StyledHeroNewsletter>
      <StyledFooter>
        <Footer platform={"Desktop"} />
      </StyledFooter>
    </StyledRoot>
  );
});
