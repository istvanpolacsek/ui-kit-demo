import React from "react";
import styled, { css } from "styled-components";
import {
  NavigationItemPortfolioTitle,
  type NavigationItemPortfolioTitleProps,
} from "../NavigationItemPortfolioTitle";
import { NavigationItemPage } from "../NavigationItemPage";
import { SectionStatesNavigation } from "../SectionStatesNavigation";
import { ImageBoxTight } from "../ImageBoxTight";
import { FABSubtle } from "../FABSubtle";
import { UserDividerLight } from "../UserDividerLight";

export interface NavigationFullProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  | "hasPage4"
  | "lineWeight"
  | "showUI"
  | "showAddSection"
  | "type"
  | "navigationItemPortfolioTitleType"
> {
  hasPage4?: boolean;
  lineWeight?: string;
  showUI?: boolean;
  showAddSection?: boolean;
  type?:
    | "Name sides"
    | "Name middle"
    | "Simple left"
    | "Simple middle"
    | "Simple right"
    | "Line"
    | "Image sides"
    | "Image middle";
  navigationItemPortfolioTitleType?: NavigationItemPortfolioTitleProps["type"];
}

const StyledRoot = styled.nav<{
  $type:
    | "Name sides"
    | "Name middle"
    | "Simple left"
    | "Simple middle"
    | "Simple right"
    | "Line"
    | "Image sides"
    | "Image middle";
}>(
  ({ theme, $type }) => css`
    position: relative;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Name sides":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 856px;
            justify-content: center;
            align-items: flex-start;
            width: 1440px;
            height: 88px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Image sides":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 20px;
            padding-right: 126px;
            padding-bottom: 20px;
            padding-left: 126px;
            gap: 938px;
            justify-content: center;
            align-items: center;
            width: 1440px;
            height: 88px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Simple left":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Simple middle":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Simple right":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 8px;
            justify-content: center;
            align-items: flex-end;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Line":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: center;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($type) {
        case "Name sides":
          return css`
            width: 1440px;
            height: 88px;
            box-sizing: border-box;
          `;
        case "Name middle":
          return css`
            width: 1440px;
            height: 88px;
            box-sizing: border-box;
          `;
        case "Image sides":
          return css`
            width: 1440px;
            height: 88px;
            box-sizing: border-box;
          `;
        case "Image middle":
          return css`
            width: 1440px;
            height: 88px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPages = styled.ul(
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
    gap: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPage1 = styled.li(() => css``);

const StyledPage2 = styled.li(() => css``);

const StyledPage3 = styled.li(() => css``);

const StyledPage4 = styled.li(() => css``);

const StyledSectionStatesNavigation = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 88px;
  `,
);

const StyledPages2 = styled.ul(
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
    gap: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledPage32 = styled.li(() => css``);

const StyledPage42 = styled.li(() => css``);

const StyledFABSubtle = styled.div(
  () => css`
    position: absolute;
    left: 704px;
    bottom: -16px;
    width: 32px;
    height: 32px;
  `,
);

const StyledUserDividerLight = styled.div(
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

const StyledUserDividerLight2 = styled.div(
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

/** Full-width site navigation bar supporting multiple layout variants (name sides/middle, simple, line, image) with configurable page links, optional portfolio title, image box, and an add-section FAB. Adapts its structure based on the active variant and boolean props. */
export const NavigationFull = React.forwardRef<
  HTMLElement,
  NavigationFullProps
>(function NavigationFull(
  {
    hasPage4 = false,
    lineWeight = "313:6227",
    showUI = true,
    showAddSection = true,
    type = "Name sides",
    navigationItemPortfolioTitleType = "Text",
    ...rest
  },
  ref,
) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Main navigation"
      {...rest}
      ref={ref}
      $type={type}
    >
      {["Name sides", "Name middle"].includes(type) && (
        <NavigationItemPortfolioTitle type={navigationItemPortfolioTitleType} />
      )}
      <StyledPages>
        <StyledPage1>
          <NavigationItemPage type={"Underline regular"} />
        </StyledPage1>
        <StyledPage2>
          <NavigationItemPage type={"Underline regular"} />
        </StyledPage2>
        {[
          "Name sides",
          "Image sides",
          "Simple left",
          "Simple middle",
          "Simple right",
          "Line",
        ].includes(type) && (
          <StyledPage3>
            <NavigationItemPage type={"Underline regular"} />
          </StyledPage3>
        )}
        {hasPage4 && (
          <StyledPage4>
            <NavigationItemPage type={"Underline regular"} />
          </StyledPage4>
        )}
      </StyledPages>
      {showUI && (
        <StyledSectionStatesNavigation>
          <SectionStatesNavigation
            addNavigation={false}
            addSocialLink={false}
            addMedia={false}
            addText={false}
            flipHorizontally={false}
            type={"Default"}
            mode={"Light"}
          />
        </StyledSectionStatesNavigation>
      )}
      {["Name middle", "Image middle"].includes(type) && (
        <StyledPages2>
          {["Name middle", "Image middle"].includes(type) && (
            <StyledPage32>
              <NavigationItemPage type={"Underline regular"} />
            </StyledPage32>
          )}
          {hasPage4 && (
            <StyledPage42>
              <NavigationItemPage type={"Underline regular"} />
            </StyledPage42>
          )}
        </StyledPages2>
      )}
      {["Image sides", "Image middle"].includes(type) && (
        <ImageBoxTight
          snaps={false}
          defaultProp={"Free"}
          state={"Default"}
          mode={"Light"}
        />
      )}
      {showAddSection && (
        <StyledFABSubtle>
          <FABSubtle size={"Small"} mode={"Light"} />
        </StyledFABSubtle>
      )}
      {type === "Line" && (
        <StyledUserDividerLight>
          <UserDividerLight />
        </StyledUserDividerLight>
      )}
      {type === "Line" && (
        <StyledUserDividerLight2>
          <UserDividerLight />
        </StyledUserDividerLight2>
      )}
    </StyledRoot>
  );
});
