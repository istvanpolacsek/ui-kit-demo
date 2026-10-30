import React from "react";
import styled, { css } from "styled-components";
import { SubheaderLarge } from "../SubheaderLarge";

export interface MenuItemSettingsSidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "type"
> {
  type?:
    | "Share"
    | "Domain"
    | "Password"
    | "Archive"
    | "Show footer"
    | "Hide from search"
    | "Navigation"
    | "Thumbnail settings"
    | "Share Case study"
    | "Case study URL"
    | "Case study password"
    | "Header & footer";
}

const StyledRoot = styled.a(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 348px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #1a1a1a;
    border-radius: 0px;
    color: #adadad;
    &:hover {
      background-color: #262626;
    }
  `,
);

const StyledSubheaderLarge = styled.div(
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

const StyledManagePagesSocialLinks = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledUpdateTheSharingDetails = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledSetACustomURLOrDomain = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledSetAPasswordForYourPortfolio = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledRestoreDeletedCaseStudiesSections = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledShowFooterOnAllPortfolioPages = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledExcludeFromSearchResults = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledThumbnailDisplayedOnYourHomePage = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledDetailsDisplayedWhenSharing = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledSetACustomURLForYourCaseStudy = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledSetAPasswordForYourCaseStudy = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledShowHeaderCaseStudyLinksFooter = styled.p(
  () => css`
    color: #adadad;
  `,
);

/** A settings sidebar menu item that navigates to a specific settings section (e.g., Navigation, Share, Domain, Password, etc.). Displays a label and a short description, with hover and default visual states. */
export const MenuItemSettingsSidebar = React.forwardRef<
  HTMLAnchorElement,
  MenuItemSettingsSidebarProps
>(function MenuItemSettingsSidebar({ type = "Navigation", ...rest }, ref) {
  return (
    <StyledRoot
      role="menuitem"
      aria-label="Settings menu item"
      {...rest}
      ref={ref}
    >
      <StyledSubheaderLarge>
        <SubheaderLarge
          hasIcon={true}
          hasSwitch={false}
          hasTag={false}
          mode={"Dark"}
        />
      </StyledSubheaderLarge>
      {type === "Navigation" && (
        <StyledManagePagesSocialLinks>
          {"Manage pages & social links"}
        </StyledManagePagesSocialLinks>
      )}
      {type === "Share" && (
        <StyledUpdateTheSharingDetails>
          {"Update the sharing details"}
        </StyledUpdateTheSharingDetails>
      )}
      {type === "Domain" && (
        <StyledSetACustomURLOrDomain>
          {"Set a custom URL or domain"}
        </StyledSetACustomURLOrDomain>
      )}
      {type === "Password" && (
        <StyledSetAPasswordForYourPortfolio>
          {"Set a password for your portfolio"}
        </StyledSetAPasswordForYourPortfolio>
      )}
      {type === "Archive" && (
        <StyledRestoreDeletedCaseStudiesSections>
          {"Restore deleted case studies & sections"}
        </StyledRestoreDeletedCaseStudiesSections>
      )}
      {type === "Show footer" && (
        <StyledShowFooterOnAllPortfolioPages>
          {"Show footer on all portfolio pages"}
        </StyledShowFooterOnAllPortfolioPages>
      )}
      {type === "Hide from search" && (
        <StyledExcludeFromSearchResults>
          {"Exclude from search results"}
        </StyledExcludeFromSearchResults>
      )}
      {type === "Thumbnail settings" && (
        <StyledThumbnailDisplayedOnYourHomePage>
          {"Thumbnail displayed on your home page"}
        </StyledThumbnailDisplayedOnYourHomePage>
      )}
      {type === "Share Case study" && (
        <StyledDetailsDisplayedWhenSharing>
          {"Details displayed when sharing"}
        </StyledDetailsDisplayedWhenSharing>
      )}
      {type === "Case study URL" && (
        <StyledSetACustomURLForYourCaseStudy>
          {"Set a custom URL for your case study"}
        </StyledSetACustomURLForYourCaseStudy>
      )}
      {type === "Case study password" && (
        <StyledSetAPasswordForYourCaseStudy>
          {"Set a password for your case study"}
        </StyledSetAPasswordForYourCaseStudy>
      )}
      {type === "Header & footer" && (
        <StyledShowHeaderCaseStudyLinksFooter>
          {"Show header, case study links, footer"}
        </StyledShowHeaderCaseStudyLinksFooter>
      )}
    </StyledRoot>
  );
});
