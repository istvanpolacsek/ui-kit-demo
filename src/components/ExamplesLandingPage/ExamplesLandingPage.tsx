import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { HeroImage } from "../HeroImage";
import { PanelImageDouble } from "../PanelImageDouble";
import { CardGridIcon } from "../CardGridIcon";
import { Footer } from "../Footer";

export interface ExamplesLandingPageProps extends Omit<
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

const StyledHeroImage = styled.div(
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

const StyledPanelImageDouble = styled.div(
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

const StyledCardGridIcon = styled.div(
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

/** A full landing page layout component composed of a header, hero image, double image panel, icon card grid, and footer. Supports both Mobile and Desktop platform variants. */
export const ExamplesLandingPage = React.forwardRef<
  HTMLElement,
  ExamplesLandingPageProps
>(function ExamplesLandingPage({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Landing page"
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
      <StyledHeroImage>
        <HeroImage platform={"Desktop"} />
      </StyledHeroImage>
      <StyledPanelImageDouble>
        <PanelImageDouble platform={"Desktop"} />
      </StyledPanelImageDouble>
      <StyledCardGridIcon>
        <CardGridIcon platform={"Desktop"} />
      </StyledCardGridIcon>
      <Footer platform={"Desktop"} />
    </StyledRoot>
  );
});
