import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { HeroBasic } from "../HeroBasic";
import { PanelImageDouble } from "../PanelImageDouble";
import { Footer } from "../Footer";

export interface ExamplesArticleProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "platform"
> {
  platform?: "Mobile" | "Desktop";
}

const StyledRoot = styled.article<{ $platform: "Mobile" | "Desktop" }>(
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

const StyledHeroBasic = styled.div(
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

const StyledSection = styled.section(
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

const StyledPanelImageDouble2 = styled.div(
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

/** A full-page article layout component composed of a header, hero section, content panels, and footer. Supports both Mobile and Desktop platform variants. */
export const ExamplesArticle = React.forwardRef<
  HTMLElement,
  ExamplesArticleProps
>(function ExamplesArticle({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="article"
      aria-label="Article page"
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
      <StyledHeroBasic>
        <HeroBasic platform={"Desktop"} />
      </StyledHeroBasic>
      <StyledSection></StyledSection>
      <StyledPanelImageDouble>
        <PanelImageDouble platform={"Desktop"} />
      </StyledPanelImageDouble>
      <StyledPanelImageDouble2>
        <PanelImageDouble platform={"Desktop"} />
      </StyledPanelImageDouble2>
      <Footer platform={"Desktop"} />
    </StyledRoot>
  );
});
