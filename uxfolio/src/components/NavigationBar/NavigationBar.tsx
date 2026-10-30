import React from "react";
import styled, { css } from "styled-components";
import { LogoProduct } from "../LogoProduct";
import { NavigationButtonEditorNavBar } from "../NavigationButtonEditorNavBar";
import { DropListPortfolio } from "../DropListPortfolio";
import { ChevronDown } from "../ChevronDown";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { Avatar } from "../Avatar";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface NavigationBarProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "property1" | "property2"
> {
  property1?: "Editor" | "View";
  property2?:
    | "Publish case study"
    | "Publish portfolio"
    | "Unpublish case study"
    | "Unpublish portfolio"
    | "Default";
}

const StyledRoot = styled.nav<{ $property1: "Editor" | "View" }>(
  ({ $property1 }) => css`
    background-color: #0f0f0f;
    border-radius: 0px;
    ${(() => {
      switch ($property1) {
        case "View":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 614px;
            padding-bottom: 12px;
            padding-left: 32px;
            gap: 381px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            height: 60px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    width: 1440px;
    height: 60px;
    box-sizing: border-box;
  `,
);

const StyledLeftSide = styled.div(
  () => css`
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
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledFrame48095915 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledActions = styled.ul(
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
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavigationButtonEditorNavBar = styled.li(() => css``);

const StyledNavigationButtonEditorNavBar2 = styled.li(() => css``);

const StyledNavigationButtonEditorNavBar3 = styled.li(() => css``);

const StyledLeftSide2 = styled.div(
  () => css`
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame480959152 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledActions2 = styled.ul(
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
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavigationButtonEditorNavBar4 = styled.li(() => css``);

const StyledLogoAndTitleWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledLogoWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMiddlePart = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledSaved = styled.div(
  () => css`
    position: absolute;
    right: -52px;
    top: 10px;
    white-space: nowrap;
    color: #a2a2a2;
  `,
);

const StyledRightSide = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledActions3 = styled.ul(
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
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavigationButtonEditorNavBar5 = styled.li(() => css``);

const StyledNavigationButtonEditorNavBar22 = styled.li(() => css``);

const StyledNavigationButtonEditorNavBar32 = styled.li(() => css``);

const StyledNavigationButtonEditorNavBar42 = styled.li(() => css``);

const StyledPrimaryButtonWithIconNeutral = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fefefe;
    border-radius: 4px;
  `,
);

const StyledPrimaryButton = styled.div(
  () => css`
    color: #262626;
  `,
);

const StyledSecondaryButtonNeutral = styled.li(() => css``);

/** A top-level navigation bar component for a portfolio/case study editor. Supports Editor and View modes, with variants for publishing and unpublishing portfolio or case study content. Contains a logo, navigation action buttons, a portfolio drop list, save status indicator, and right-side actions including avatar and publish/secondary buttons. */
export const NavigationBar = React.forwardRef<HTMLElement, NavigationBarProps>(
  function NavigationBar(
    { property1 = "Editor", property2 = "Publish portfolio", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Main navigation"
        {...rest}
        ref={ref}
        $property1={property1}
      >
        <StyledLeftSide>
          {["Publish portfolio", "Unpublish portfolio"].includes(property2) && (
            <StyledFrame48095915>
              {["Publish portfolio", "Unpublish portfolio"].includes(
                property2,
              ) && <LogoProduct light={"Dark"} type={"Icon only"} />}
            </StyledFrame48095915>
          )}
          {property1 === "Editor" && (
            <StyledActions>
              {property1 === "Editor" && (
                <StyledNavigationButtonEditorNavBar>
                  <NavigationButtonEditorNavBar
                    state={"Default"}
                    type={"Icon and label"}
                  />
                </StyledNavigationButtonEditorNavBar>
              )}
              {property1 === "Editor" && (
                <StyledNavigationButtonEditorNavBar2>
                  <NavigationButtonEditorNavBar
                    state={"Default"}
                    type={"Icon and label"}
                  />
                </StyledNavigationButtonEditorNavBar2>
              )}
              {property1 === "Editor" && (
                <StyledNavigationButtonEditorNavBar3>
                  <NavigationButtonEditorNavBar
                    state={"Default"}
                    type={"Icon and label"}
                  />
                </StyledNavigationButtonEditorNavBar3>
              )}
            </StyledActions>
          )}
          {["Publish case study", "Unpublish case study"].includes(
            property2,
          ) && (
            <StyledLeftSide2>
              {["Publish case study", "Unpublish case study"].includes(
                property2,
              ) && (
                <StyledFrame480959152>
                  {["Publish case study", "Unpublish case study"].includes(
                    property2,
                  ) && <LogoProduct light={"Dark"} type={"Icon only"} />}
                </StyledFrame480959152>
              )}
              {["Publish case study", "Unpublish case study"].includes(
                property2,
              ) && (
                <StyledActions2>
                  {["Publish case study", "Unpublish case study"].includes(
                    property2,
                  ) && (
                    <StyledNavigationButtonEditorNavBar4>
                      <NavigationButtonEditorNavBar
                        state={"Default"}
                        type={"Icon and label"}
                      />
                    </StyledNavigationButtonEditorNavBar4>
                  )}
                </StyledActions2>
              )}
            </StyledLeftSide2>
          )}
          {property1 === "View" && (
            <StyledLogoAndTitleWrapper>
              {property1 === "View" && (
                <StyledLogoWrapper>
                  {property1 === "View" && (
                    <LogoProduct light={"Dark"} type={"Icon only"} />
                  )}
                </StyledLogoWrapper>
              )}
            </StyledLogoAndTitleWrapper>
          )}
        </StyledLeftSide>
        {property1 === "Editor" && (
          <StyledMiddlePart>
            {property1 === "Editor" && <DropListPortfolio type={"Home"} />}
            {property1 === "Editor" && <StyledSaved>{"Saved"}</StyledSaved>}
          </StyledMiddlePart>
        )}
        {property1 === "Editor" && (
          <StyledRightSide>
            {property1 === "Editor" && (
              <StyledActions3>
                {property1 === "Editor" && (
                  <StyledNavigationButtonEditorNavBar5>
                    <NavigationButtonEditorNavBar
                      state={"Default"}
                      type={"Icon and label"}
                    />
                  </StyledNavigationButtonEditorNavBar5>
                )}
                {property1 === "Editor" && (
                  <StyledNavigationButtonEditorNavBar22>
                    <NavigationButtonEditorNavBar
                      state={"Default"}
                      type={"Icon and label"}
                    />
                  </StyledNavigationButtonEditorNavBar22>
                )}
                {property1 === "Editor" && (
                  <StyledNavigationButtonEditorNavBar32>
                    <NavigationButtonEditorNavBar
                      state={"Default"}
                      type={"Icon and label"}
                    />
                  </StyledNavigationButtonEditorNavBar32>
                )}
                {["Publish portfolio", "Unpublish portfolio"].includes(
                  property2,
                ) && (
                  <StyledNavigationButtonEditorNavBar42>
                    <NavigationButtonEditorNavBar
                      state={"Default"}
                      type={"Icon only"}
                    />
                  </StyledNavigationButtonEditorNavBar42>
                )}
                {property2 === "Publish portfolio" && (
                  <StyledPrimaryButtonWithIconNeutral>
                    {property2 === "Publish portfolio" && (
                      <StyledPrimaryButton>{"Publish"}</StyledPrimaryButton>
                    )}
                    {property2 === "Publish portfolio" && <ChevronDown />}
                  </StyledPrimaryButtonWithIconNeutral>
                )}
                {property2 === "Unpublish portfolio" && (
                  <StyledSecondaryButtonNeutral>
                    <SecondaryButtonNeutral
                      state={"Default"}
                      size={"Small"}
                      mode={"Dark"}
                    />
                  </StyledSecondaryButtonNeutral>
                )}
              </StyledActions3>
            )}
            {property1 === "Editor" && <Avatar />}
            {property2 === "Publish case study" && (
              <PrimaryButtonNeutral
                state={"Default"}
                size={"Small"}
                mode={"Dark"}
              />
            )}
            {property2 === "Unpublish case study" && (
              <SecondaryButtonNeutral
                state={"Default"}
                size={"Small"}
                mode={"Dark"}
              />
            )}
          </StyledRightSide>
        )}
        {property1 === "View" && <DropListPortfolio type={"View portfolio"} />}
      </StyledRoot>
    );
  },
);
