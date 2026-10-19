import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { HeroActions } from "../HeroActions";
import { CardGridTestimonials } from "../CardGridTestimonials";
import { Footer } from "../Footer";

export interface ExamplesHomePageProps extends Omit<
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

const StyledHeroActions = styled.div(
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

const StyledSection = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background-color: ${theme["Slate"]["200"]};
    border-radius: 0px;
  `,
);

const StyledCardGridTestimonials = styled.div(
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

/** A full home page layout component that composes a header, hero section with actions, a content section, testimonials card grid, and footer. Supports both Mobile and Desktop platform variants. */
export const ExamplesHomePage = React.forwardRef<
  HTMLElement,
  ExamplesHomePageProps
>(function ExamplesHomePage({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="main"
      aria-label="Home page"
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
      <StyledHeroActions>
        <HeroActions platform={"Desktop"} />
      </StyledHeroActions>
      <StyledSection></StyledSection>
      <StyledCardGridTestimonials>
        <CardGridTestimonials platform={"Desktop"} />
      </StyledCardGridTestimonials>
      <Footer platform={"Desktop"} />
    </StyledRoot>
  );
});
