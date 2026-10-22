import React from "react";
import styled, { css } from "styled-components";
import { LogoProduct } from "../LogoProduct";
import { NavigationButtonEditorNavBar } from "../NavigationButtonEditorNavBar";
import { DropListPortfolio } from "../DropListPortfolio";
import { Avatar } from "../Avatar";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";
import { SecondaryButtonNeutral } from "../SecondaryButtonNeutral";
import { KarmaScore } from "../KarmaScore";
import { IconOnlyPrimaryButtonSubtle } from "../IconOnlyPrimaryButtonSubtle";

export interface NavigationBarEditorLegacyProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "type"
> {
  type?:
    | "Account"
    | "Case study published"
    | "Case study unpublished"
    | "Main pages"
    | "Onboarding"
    | "Reviews";
}

const StyledRoot = styled.nav<{
  $type:
    | "Account"
    | "Case study published"
    | "Case study unpublished"
    | "Main pages"
    | "Onboarding"
    | "Reviews";
}>(
  ({ $type }) => css`
    background-color: #0f0f0f;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Reviews":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 32px;
            padding-bottom: 12px;
            padding-left: 32px;
            gap: 1144px;
            justify-content: center;
            align-items: flex-start;
            width: 1440px;
            height: 60px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Account":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 32px;
            padding-bottom: 12px;
            padding-left: 32px;
            gap: 1204px;
            justify-content: center;
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
    color: #a2a2a2;
  `,
);

const StyledLeftSide = styled.nav(
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

const StyledRightSide = styled.div<{
  $type:
    | "Account"
    | "Case study published"
    | "Case study unpublished"
    | "Main pages"
    | "Onboarding"
    | "Reviews";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Main pages":
          return css`
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
          `;
        case "Case study unpublished":
          return css`
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
          `;
        case "Case study published":
          return css`
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
          `;
        case "Reviews":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Account":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        case "Onboarding":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
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

const StyledFrame48095919 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
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

/** A navigation bar component for the editor interface, supporting multiple contextual variants (Main pages, Account, Case study published/unpublished, Onboarding, Reviews). Contains a logo, navigation action buttons, optional middle section with portfolio dropdown and save status, and right-side actions including avatar, karma score, and utility buttons. */
export const NavigationBarEditorLegacy = React.forwardRef<
  HTMLElement,
  NavigationBarEditorLegacyProps
>(function NavigationBarEditorLegacy({ type = "Main pages", ...rest }, ref) {
  return (
    <StyledRoot
      role="navigation"
      aria-label="Editor navigation"
      {...rest}
      ref={ref}
      $type={type}
    >
      <StyledLeftSide>
        {["Main pages", "Reviews", "Account", "Onboarding"].includes(type) && (
          <StyledFrame48095915>
            {["Main pages", "Reviews", "Account", "Onboarding"].includes(
              type,
            ) && <LogoProduct light={"Dark"} type={"Icon only"} />}
          </StyledFrame48095915>
        )}
        {[
          "Main pages",
          "Case study unpublished",
          "Case study published",
          "Reviews",
          "Account",
        ].includes(type) && (
          <StyledActions>
            {[
              "Main pages",
              "Case study unpublished",
              "Case study published",
              "Reviews",
              "Account",
            ].includes(type) && (
              <StyledNavigationButtonEditorNavBar>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon and label"}
                />
              </StyledNavigationButtonEditorNavBar>
            )}
            {[
              "Main pages",
              "Case study unpublished",
              "Case study published",
            ].includes(type) && (
              <StyledNavigationButtonEditorNavBar2>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon and label"}
                />
              </StyledNavigationButtonEditorNavBar2>
            )}
            {[
              "Main pages",
              "Case study unpublished",
              "Case study published",
            ].includes(type) && (
              <StyledNavigationButtonEditorNavBar3>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon and label"}
                />
              </StyledNavigationButtonEditorNavBar3>
            )}
          </StyledActions>
        )}
        {["Case study unpublished", "Case study published"].includes(type) && (
          <StyledLeftSide2>
            {["Case study unpublished", "Case study published"].includes(
              type,
            ) && (
              <StyledFrame480959152>
                {["Case study unpublished", "Case study published"].includes(
                  type,
                ) && <LogoProduct light={"Dark"} type={"Icon only"} />}
              </StyledFrame480959152>
            )}
            {["Case study unpublished", "Case study published"].includes(
              type,
            ) && (
              <StyledActions2>
                {["Case study unpublished", "Case study published"].includes(
                  type,
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
      </StyledLeftSide>
      {[
        "Main pages",
        "Case study unpublished",
        "Case study published",
      ].includes(type) && (
        <StyledMiddlePart>
          {[
            "Main pages",
            "Case study unpublished",
            "Case study published",
          ].includes(type) && <DropListPortfolio type={"Home"} />}
          {[
            "Main pages",
            "Case study unpublished",
            "Case study published",
          ].includes(type) && <StyledSaved>{"Saved"}</StyledSaved>}
        </StyledMiddlePart>
      )}
      <StyledRightSide $type={type}>
        {[
          "Main pages",
          "Case study unpublished",
          "Case study published",
        ].includes(type) && (
          <StyledActions3>
            {[
              "Main pages",
              "Case study unpublished",
              "Case study published",
            ].includes(type) && (
              <StyledNavigationButtonEditorNavBar5>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon and label"}
                />
              </StyledNavigationButtonEditorNavBar5>
            )}
            {[
              "Main pages",
              "Case study unpublished",
              "Case study published",
            ].includes(type) && (
              <StyledNavigationButtonEditorNavBar22>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon and label"}
                />
              </StyledNavigationButtonEditorNavBar22>
            )}
            {[
              "Main pages",
              "Case study unpublished",
              "Case study published",
            ].includes(type) && (
              <StyledNavigationButtonEditorNavBar32>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon and label"}
                />
              </StyledNavigationButtonEditorNavBar32>
            )}
            {type === "Main pages" && (
              <StyledNavigationButtonEditorNavBar42>
                <NavigationButtonEditorNavBar
                  state={"Default"}
                  type={"Icon only"}
                />
              </StyledNavigationButtonEditorNavBar42>
            )}
          </StyledActions3>
        )}
        {["Main pages", "Reviews", "Account", "Onboarding"].includes(type) && (
          <Avatar />
        )}
        {type === "Case study unpublished" && (
          <PrimaryButtonNeutral
            state={"Default"}
            size={"Small"}
            mode={"Dark"}
          />
        )}
        {type === "Case study published" && (
          <SecondaryButtonNeutral
            state={"Default"}
            size={"Small"}
            mode={"Dark"}
          />
        )}
        {type === "Reviews" && <KarmaScore type={"Small"} />}
      </StyledRightSide>
      {type === "Onboarding" && (
        <StyledFrame48095919>
          {type === "Onboarding" && (
            <IconOnlyPrimaryButtonSubtle
              state={"Default (no BG)"}
              size={"Small"}
              mode={"Dark"}
            />
          )}
          {type === "Onboarding" && (
            <IconOnlyPrimaryButtonSubtle
              state={"Default (no BG)"}
              size={"Small"}
              mode={"Dark"}
            />
          )}
        </StyledFrame48095919>
      )}
    </StyledRoot>
  );
});
