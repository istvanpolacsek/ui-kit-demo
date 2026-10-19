import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { HeroBasic } from "../HeroBasic";
import { PanelImageDouble } from "../PanelImageDouble";
import { CardGridContentList } from "../CardGridContentList";
import { CardGridImage } from "../CardGridImage";
import { Footer } from "../Footer";

export interface ExamplesAboutProps extends Omit<
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

const StyledCardGridContentList = styled.div(
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

const StyledCardGridImage = styled.div(
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

/** A full-page 'About' layout component composed of a header, hero section, image panels, content and image card grids, and a footer. Supports both Mobile and Desktop platform variants. */
export const ExamplesAbout = React.forwardRef<HTMLElement, ExamplesAboutProps>(
  function ExamplesAbout({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="About page"
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
        <StyledPanelImageDouble>
          <PanelImageDouble platform={"Desktop"} />
        </StyledPanelImageDouble>
        <StyledCardGridContentList>
          <CardGridContentList platform={"Desktop"} />
        </StyledCardGridContentList>
        <StyledCardGridImage>
          <CardGridImage platform={"Desktop"} />
        </StyledCardGridImage>
        <Footer platform={"Desktop"} />
      </StyledRoot>
    );
  },
);
