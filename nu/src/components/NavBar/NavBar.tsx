import React from "react";
import styled, { css } from "styled-components";
import { LinkButton } from "../LinkButton";
import { Icon } from "../Icon";
import { LogoColor } from "../LogoColor";
import { Button } from "../Button";
import { StatusBar } from "../StatusBar";
import { NavBarLink } from "../NavBarLink";
import { ScrollBar } from "../ScrollBar";

export interface NavBarProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "device" | "state"
> {
  device?: "Mobile" | "Desktop";
  state?: "Default" | "Open" | "Closed";
}

const StyledRoot = styled.nav<{
  $device: "Mobile" | "Desktop";
  $state: "Default" | "Open" | "Closed";
}>(
  ({ theme, $device, $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$device, $state])) {
        case '["Desktop","Closed"]':
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
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Mobile","Closed"]':
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
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Desktop","Open"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Mobile","Default"]':
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
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledUpperbar = styled.header<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    overflow: hidden;
    background-color: #003a92;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 84px;
            padding-bottom: 12px;
            padding-left: 84px;
            gap: 32px;
            justify-content: flex-end;
            align-items: center;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 20px;
            padding-bottom: 0px;
            padding-left: 20px;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLink = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 16px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledLink2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledDivider = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledLink3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 0px;
    padding-bottom: 16px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledNavigation = styled.nav<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 84px;
            padding-bottom: 24px;
            padding-left: 84px;
            gap: 32px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 20px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Mobile":
          return css`
            background-color: ${theme["background"]["bgDefult"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMenu = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledLinkButton = styled.li(() => css``);

const StyledLinkButton2 = styled.li(() => css``);

const StyledLinkButton3 = styled.li(() => css``);

const StyledLinkButton4 = styled.li(() => css``);

const StyledCTAs = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledButton = styled.li(() => css``);

const StyledButton2 = styled.li(() => css``);

const StyledButton3 = styled.li(() => css``);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    width: 351.484375px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledStatusBar = styled.div(
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

const StyledNavigation2 = styled.nav<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 84px;
            padding-bottom: 24px;
            padding-left: 84px;
            gap: 32px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-right: 20px;
            padding-bottom: 12px;
            padding-left: 20px;
            gap: 10px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Mobile":
          return css`
            background-color: ${theme["gray"]["100"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledMenu2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledSection = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledProspectiveStudents = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledLinks = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNavBarLink = styled.li(() => css``);

const StyledNavBarLink2 = styled.li(() => css``);

const StyledNavBarLink3 = styled.li(() => css``);

const StyledNavBarLink4 = styled.li(() => css``);

const StyledNavBarLink5 = styled.li(() => css``);

const StyledNavBarLink6 = styled.li(() => css``);

const StyledNavBarLink7 = styled.li(() => css``);

const StyledNavBarLink8 = styled.li(() => css``);

const StyledNavBarLink9 = styled.li(() => css``);

const StyledNavBarLink10 = styled.li(() => css``);

const StyledSection2 = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledCurrentStudents = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledLinks2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNavBarLink11 = styled.li(() => css``);

const StyledNavBarLink22 = styled.li(() => css``);

const StyledNavBarLink32 = styled.li(() => css``);

const StyledNavBarLink42 = styled.li(() => css``);

const StyledNavBarLink52 = styled.li(() => css``);

const StyledNavBarLink62 = styled.li(() => css``);

const StyledNavBarLink72 = styled.li(() => css``);

const StyledNavBarLink82 = styled.li(() => css``);

const StyledNavBarLink92 = styled.li(() => css``);

const StyledLibrary = styled.li(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledSection3 = styled.li(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAlumni = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledLinks3 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 6px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNavBarLink12 = styled.li(() => css``);

const StyledNavBarLink23 = styled.li(() => css``);

const StyledNavBarLink33 = styled.li(() => css``);

const StyledCardIcon = styled.li(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["surface"]["surfaceGray"]};
  `,
);

const StyledRectangle4134298 = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 0px;
  `,
);

const StyledContent2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledShowYourNUPrideAndShopOurOnlineStoreForTheLatestAndGreatestNUAndAccessories =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: var(--font-roboto, "Roboto"), sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledContent3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton5 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledNavigation3 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 24px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["gray"]["200"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent4 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton6 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledNavigation4 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 28px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["gray"]["300"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent5 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton7 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledNavigation5 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 32px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["gray"]["300"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent6 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinks4 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledBachelorOfArtsInEarlyChildhoodEducationBAECE = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledBachelorInArtsInEarlyChildhoodDevelopmentWithAnInspiredTeachingAndLearningPreliminaryMultipleSubjectTeachingCredentialCalifornia =
  styled.div(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: var(--font-roboto, "Roboto"), sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledBachelorOfArtsInEnglish = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledBachelorOfArtsInHistory = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledLinkButton8 = styled.div(
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

const StyledScrollBar = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledNavigation6 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 20px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent7 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton9 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledNavigation7 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 20px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent8 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton10 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

const StyledNavigation8 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    padding-left: 20px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent9 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton11 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A responsive navigation bar component supporting Desktop and Mobile device variants, with Closed, Default, and Open states. Includes an upper utility bar with links and icons, a main navigation area with logo, menu links, and CTAs, and an expandable mega-menu drawer with categorized navigation sections for Prospective Students, Current Students, and Alumni. */
export const NavBar = React.forwardRef<HTMLElement, NavBarProps>(
  function NavBar({ device = "Desktop", state = "Closed", ...rest }, ref) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Main navigation"
        aria-haspopup
        {...rest}
        ref={ref}
        $device={device}
        $state={state}
      >
        <StyledUpperbar $device={device}>
          {device === "Desktop" && (
            <LinkButton
              linkValue={"Español"}
              rightIcon={false}
              leftIcon={false}
              size={"Large"}
              device={"Desktop"}
              state={"Default"}
              hierarchy={"Secondary"}
              type={"Inverted"}
            />
          )}
          {device === "Desktop" && (
            <LinkButton
              linkValue={"Login"}
              rightIcon={false}
              leftIcon={false}
              size={"Large"}
              device={"Desktop"}
              state={"Default"}
              hierarchy={"Secondary"}
              type={"Inverted"}
            />
          )}
          {device === "Desktop" && (
            <LinkButton
              linkValue={"Live Chat"}
              rightIcon={false}
              leftIcon={false}
              size={"Large"}
              device={"Desktop"}
              state={"Default"}
              hierarchy={"Secondary"}
              type={"Inverted"}
            />
          )}
          {device === "Desktop" && (
            <LinkButton
              linkValue={"1-800-NAT-UNIV (628-8648)"}
              rightIcon={false}
              leftIcon={false}
              size={"Large"}
              device={"Desktop"}
              state={"Default"}
              hierarchy={"Secondary"}
              type={"Inverted"}
            />
          )}
          {device === "Mobile" && (
            <StyledLink>
              {device === "Mobile" && (
                <LinkButton
                  linkValue={"Español"}
                  rightIcon={false}
                  leftIcon={false}
                  size={"Large"}
                  device={"Mobile"}
                  state={"Default"}
                  hierarchy={"Secondary"}
                  type={"Inverted"}
                />
              )}
            </StyledLink>
          )}
          {device === "Mobile" && (
            <StyledLink2>
              {device === "Mobile" && <Icon name={"chat_bubble"} size={24} />}
              {device === "Mobile" && <StyledDivider />}
              {device === "Mobile" && <Icon name={"phone_enabled"} size={24} />}
            </StyledLink2>
          )}
          {device === "Mobile" && (
            <StyledLink3>
              {device === "Mobile" && (
                <LinkButton
                  linkValue={"Login"}
                  rightIcon={false}
                  leftIcon={false}
                  size={"Large"}
                  device={"Mobile"}
                  state={"Default"}
                  hierarchy={"Secondary"}
                  type={"Inverted"}
                />
              )}
            </StyledLink3>
          )}
        </StyledUpperbar>
        <StyledNavigation $device={device}>
          {device === "Desktop" && <LogoColor type={"Default"} />}
          {device === "Desktop" && (
            <StyledMenu>
              {device === "Desktop" && (
                <StyledLinkButton>
                  <LinkButton
                    linkValue={"Academic Programs"}
                    rightIcon={true}
                    leftIcon={false}
                    size={"Large"}
                    device={"Desktop"}
                    state={"Default"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                </StyledLinkButton>
              )}
              {device === "Desktop" && (
                <StyledLinkButton2>
                  <LinkButton
                    linkValue={"Admissions"}
                    rightIcon={true}
                    leftIcon={false}
                    size={"Large"}
                    device={"Desktop"}
                    state={"Default"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                </StyledLinkButton2>
              )}
              {device === "Desktop" && (
                <StyledLinkButton3>
                  <LinkButton
                    linkValue={"Financial Aid"}
                    rightIcon={true}
                    leftIcon={false}
                    size={"Large"}
                    device={"Desktop"}
                    state={"Default"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                </StyledLinkButton3>
              )}
              {device === "Desktop" && (
                <StyledLinkButton4>
                  <LinkButton
                    linkValue={"About NU"}
                    rightIcon={true}
                    leftIcon={false}
                    size={"Large"}
                    device={"Desktop"}
                    state={"Default"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                </StyledLinkButton4>
              )}
            </StyledMenu>
          )}
          {device === "Desktop" && (
            <StyledCTAs>
              {device === "Desktop" && (
                <StyledButton>
                  <Button
                    label={true}
                    bTNValue={"Request Info"}
                    rightIcon={true}
                    leftIcon={true}
                    iconOnly={"True"}
                    device={"Desktop"}
                    size={"Medium"}
                    hierarchy={"Tertiary"}
                    type={"Default"}
                  />
                </StyledButton>
              )}
              {device === "Desktop" && (
                <StyledButton2>
                  <Button
                    label={true}
                    bTNValue={"Request Info"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Medium"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                </StyledButton2>
              )}
              {device === "Desktop" && (
                <StyledButton3>
                  <Button
                    label={true}
                    bTNValue={"apply now"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Medium"}
                    hierarchy={"Primary"}
                    type={"Default"}
                  />
                </StyledButton3>
              )}
            </StyledCTAs>
          )}
          {device === "Mobile" && (
            <StyledContent>
              {device === "Mobile" && <LogoColor type={"Default"} />}
              {device === "Mobile" && (
                <StyledIcon>
                  {device === "Mobile" && state === "Closed" && (
                    <Icon name={"menu"} size={24} />
                  )}
                  {state === "Default" && <Icon name={"close"} size={24} />}
                </StyledIcon>
              )}
            </StyledContent>
          )}
        </StyledNavigation>
        {device === "Mobile" && (
          <StyledStatusBar>
            <StatusBar />
          </StyledStatusBar>
        )}
        {["Open", "Default"].includes(state) && (
          <StyledNavigation2 $device={device}>
            {state === "Open" && (
              <StyledMenu2>
                {state === "Open" && (
                  <StyledSection>
                    {state === "Open" && (
                      <StyledProspectiveStudents>
                        {"Prospective Students"}
                      </StyledProspectiveStudents>
                    )}
                    {state === "Open" && (
                      <StyledLinks>
                        {state === "Open" && (
                          <StyledNavBarLink>
                            <NavBarLink />
                          </StyledNavBarLink>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink2>
                            <NavBarLink />
                          </StyledNavBarLink2>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink3>
                            <NavBarLink />
                          </StyledNavBarLink3>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink4>
                            <NavBarLink />
                          </StyledNavBarLink4>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink5>
                            <NavBarLink />
                          </StyledNavBarLink5>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink6>
                            <NavBarLink />
                          </StyledNavBarLink6>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink7>
                            <NavBarLink />
                          </StyledNavBarLink7>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink8>
                            <NavBarLink />
                          </StyledNavBarLink8>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink9>
                            <NavBarLink />
                          </StyledNavBarLink9>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink10>
                            <NavBarLink />
                          </StyledNavBarLink10>
                        )}
                      </StyledLinks>
                    )}
                  </StyledSection>
                )}
                {state === "Open" && (
                  <StyledSection2>
                    {state === "Open" && (
                      <StyledCurrentStudents>
                        {"Current Students"}
                      </StyledCurrentStudents>
                    )}
                    {state === "Open" && (
                      <StyledLinks2>
                        {state === "Open" && (
                          <StyledNavBarLink11>
                            <NavBarLink />
                          </StyledNavBarLink11>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink22>
                            <NavBarLink />
                          </StyledNavBarLink22>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink32>
                            <NavBarLink />
                          </StyledNavBarLink32>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink42>
                            <NavBarLink />
                          </StyledNavBarLink42>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink52>
                            <NavBarLink />
                          </StyledNavBarLink52>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink62>
                            <NavBarLink />
                          </StyledNavBarLink62>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink72>
                            <NavBarLink />
                          </StyledNavBarLink72>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink82>
                            <NavBarLink />
                          </StyledNavBarLink82>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink92>
                            <NavBarLink />
                          </StyledNavBarLink92>
                        )}
                        {state === "Open" && (
                          <StyledLibrary>{"Library"}</StyledLibrary>
                        )}
                      </StyledLinks2>
                    )}
                  </StyledSection2>
                )}
                {state === "Open" && (
                  <StyledSection3>
                    {state === "Open" && (
                      <StyledAlumni>{"Alumni"}</StyledAlumni>
                    )}
                    {state === "Open" && (
                      <StyledLinks3>
                        {state === "Open" && (
                          <StyledNavBarLink12>
                            <NavBarLink />
                          </StyledNavBarLink12>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink23>
                            <NavBarLink />
                          </StyledNavBarLink23>
                        )}
                        {state === "Open" && (
                          <StyledNavBarLink33>
                            <NavBarLink />
                          </StyledNavBarLink33>
                        )}
                      </StyledLinks3>
                    )}
                  </StyledSection3>
                )}
                {state === "Open" && (
                  <StyledCardIcon>
                    {state === "Open" && <StyledRectangle4134298 />}
                    {state === "Open" && (
                      <StyledContent2>
                        {state === "Open" && (
                          <StyledText>
                            {state === "Open" && (
                              <StyledShowYourNUPrideAndShopOurOnlineStoreForTheLatestAndGreatestNUAndAccessories>
                                {
                                  "Show your NU pride and shop our online store for the latest and greatest NU and accessories!"
                                }
                              </StyledShowYourNUPrideAndShopOurOnlineStoreForTheLatestAndGreatestNUAndAccessories>
                            )}
                            {state === "Open" && (
                              <Button
                                label={true}
                                bTNValue={"Shop now"}
                                rightIcon={false}
                                leftIcon={false}
                                iconOnly={"False"}
                                device={"Desktop"}
                                size={"Medium"}
                                hierarchy={"Primary"}
                                type={"Default"}
                              />
                            )}
                          </StyledText>
                        )}
                      </StyledContent2>
                    )}
                  </StyledCardIcon>
                )}
              </StyledMenu2>
            )}
            {state === "Default" && (
              <StyledContent3>
                {state === "Default" && (
                  <StyledLinkButton5>
                    <LinkButton
                      linkValue={"Degrees and Programs"}
                      rightIcon={true}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton5>
                )}
              </StyledContent3>
            )}
          </StyledNavigation2>
        )}
        {state === "Default" && (
          <StyledNavigation3>
            {state === "Default" && (
              <StyledContent4>
                {state === "Default" && (
                  <StyledLinkButton6>
                    <LinkButton
                      linkValue={"Teaching and Education"}
                      rightIcon={true}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton6>
                )}
              </StyledContent4>
            )}
          </StyledNavigation3>
        )}
        {state === "Default" && (
          <StyledNavigation4>
            {state === "Default" && (
              <StyledContent5>
                {state === "Default" && (
                  <StyledLinkButton7>
                    <LinkButton
                      linkValue={"Barcherlor’s"}
                      rightIcon={true}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton7>
                )}
              </StyledContent5>
            )}
          </StyledNavigation4>
        )}
        {state === "Default" && (
          <StyledNavigation5>
            {state === "Default" && (
              <StyledContent6>
                {state === "Default" && (
                  <StyledLinks4>
                    {state === "Default" && (
                      <StyledBachelorOfArtsInEarlyChildhoodEducationBAECE>
                        {
                          "Bachelor of Arts in Early Childhood Education (BAECE)"
                        }
                      </StyledBachelorOfArtsInEarlyChildhoodEducationBAECE>
                    )}
                    {state === "Default" && (
                      <StyledBachelorInArtsInEarlyChildhoodDevelopmentWithAnInspiredTeachingAndLearningPreliminaryMultipleSubjectTeachingCredentialCalifornia>
                        {
                          "Bachelor in Arts in Early Childhood Development with an Inspired Teaching and Learning Preliminary Multiple Subject Teaching Credential (California)"
                        }
                      </StyledBachelorInArtsInEarlyChildhoodDevelopmentWithAnInspiredTeachingAndLearningPreliminaryMultipleSubjectTeachingCredentialCalifornia>
                    )}
                    {state === "Default" && (
                      <StyledBachelorOfArtsInEnglish>
                        {"Bachelor of Arts in English"}
                      </StyledBachelorOfArtsInEnglish>
                    )}
                    {state === "Default" && (
                      <StyledBachelorOfArtsInHistory>
                        {"Bachelor of Arts in History"}
                      </StyledBachelorOfArtsInHistory>
                    )}
                    {state === "Default" && (
                      <StyledLinkButton8>
                        <LinkButton
                          linkValue={"View All"}
                          rightIcon={false}
                          leftIcon={false}
                          size={"Large"}
                          device={"Mobile"}
                          state={"Default"}
                          hierarchy={"Primary"}
                          type={"Default"}
                        />
                      </StyledLinkButton8>
                    )}
                  </StyledLinks4>
                )}
                {state === "Default" && (
                  <StyledScrollBar>
                    <ScrollBar />
                  </StyledScrollBar>
                )}
              </StyledContent6>
            )}
          </StyledNavigation5>
        )}
        {state === "Default" && (
          <StyledNavigation6>
            {state === "Default" && (
              <StyledContent7>
                {state === "Default" && (
                  <StyledLinkButton9>
                    <LinkButton
                      linkValue={"Admissions and Financing"}
                      rightIcon={true}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton9>
                )}
              </StyledContent7>
            )}
          </StyledNavigation6>
        )}
        {state === "Default" && (
          <StyledNavigation7>
            {state === "Default" && (
              <StyledContent8>
                {state === "Default" && (
                  <StyledLinkButton10>
                    <LinkButton
                      linkValue={"About NU"}
                      rightIcon={true}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton10>
                )}
              </StyledContent8>
            )}
          </StyledNavigation7>
        )}
        {state === "Default" && (
          <StyledNavigation8>
            {state === "Default" && (
              <StyledContent9>
                {state === "Default" && (
                  <StyledLinkButton11>
                    <LinkButton
                      linkValue={"Student Resources"}
                      rightIcon={true}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton11>
                )}
              </StyledContent9>
            )}
          </StyledNavigation8>
        )}
      </StyledRoot>
    );
  },
);
