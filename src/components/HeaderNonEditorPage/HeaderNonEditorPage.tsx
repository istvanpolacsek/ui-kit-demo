import React from "react";
import styled, { css } from "styled-components";
import { NavigationButtonBack } from "../NavigationButtonBack";
import { TagSpecial } from "../TagSpecial";
import { LogoProduct } from "../LogoProduct";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";

export interface HeaderNonEditorPageProps extends Omit<
  React.ComponentPropsWithoutRef<"header">,
  "type"
> {
  type?: "Simple" | "CTA" | "Tabs" | "Label";
}

const StyledRoot = styled.header<{
  $type: "Simple" | "CTA" | "Tabs" | "Label";
}>(
  ({ $type }) => css`
    position: relative;
    background-color: #fefefe;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Simple":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 126px;
            padding-bottom: 32px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        case "Label":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 126px;
            padding-bottom: 32px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        case "CTA":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 126px;
            padding-bottom: 32px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        case "Tabs":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 126px;
            padding-bottom: 0px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextWrapper = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTitleWrapper = styled.div(
  () => css`
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

const StyledPageTitle = styled.h1(
  () => css`
    color: #0f0f0f;
    font-family: "Bricolage Grotesque";
    font-size: 40px;
    font-weight: 600;
  `,
);

const StyledHereGoesADescription = styled.p(
  () => css`
    color: #707070;
  `,
);

const StyledLogoProduct = styled.div(
  () => css`
    position: absolute;
    left: 32px;
    top: 36px;
    width: 39px;
    height: 28px;
  `,
);

const StyledMainContainer = styled.div<{
  $type: "Simple" | "CTA" | "Tabs" | "Label";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "CTA":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 40px;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Tabs":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 1040px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextWrapper2 = styled.div(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledTitleWrapper2 = styled.div(
  () => css`
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

const StyledPageTitle2 = styled.h1(
  () => css`
    color: #0f0f0f;
    font-family: "Bricolage Grotesque";
    font-size: 40px;
    font-weight: 600;
  `,
);

const StyledHereGoesADescription2 = styled.p(
  () => css`
    color: #707070;
  `,
);

const StyledButtons = styled.div(
  () => css`
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

const StyledTabWrapper = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background-color: #fefefe;
    border-radius: 0px;
  `,
);

const StyledTab = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTabName = styled.span(
  () => css`
    color: #0f0f0f;
  `,
);

const StyledTab2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTabName2 = styled.span(
  () => css`
    color: #4d4c4c;
  `,
);

const StyledTab3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledTabName3 = styled.span(
  () => css`
    color: #4d4c4c;
  `,
);

/** A non-editor page header component with multiple variants: Simple (logo + back navigation), CTA (with title, description, and call-to-action button), Tabs (with tabbed navigation), and Label (with title and a special tag label). Provides consistent top-of-page structure for non-editor views. */
export const HeaderNonEditorPage = React.forwardRef<
  HTMLElement,
  HeaderNonEditorPageProps
>(function HeaderNonEditorPage({ type = "Simple", ...rest }, ref) {
  return (
    <StyledRoot
      role="banner"
      aria-label="Page header"
      {...rest}
      ref={ref}
      $type={type}
    >
      <NavigationButtonBack />
      {["Simple", "Label"].includes(type) && (
        <StyledTextWrapper>
          {["Simple", "Label"].includes(type) && (
            <StyledTitleWrapper>
              {["Simple", "Label"].includes(type) && (
                <StyledPageTitle>{"Page title"}</StyledPageTitle>
              )}
              {type === "Label" && <TagSpecial />}
            </StyledTitleWrapper>
          )}
          {["Simple", "Label"].includes(type) && (
            <StyledHereGoesADescription>
              {"Here goes a description"}
            </StyledHereGoesADescription>
          )}
        </StyledTextWrapper>
      )}
      <StyledLogoProduct>
        <LogoProduct light={"Default"} type={"Icon only"} />
      </StyledLogoProduct>
      {["CTA", "Tabs"].includes(type) && (
        <StyledMainContainer $type={type}>
          {["CTA", "Tabs"].includes(type) && (
            <StyledTextWrapper2>
              {["CTA", "Tabs"].includes(type) && (
                <StyledTitleWrapper2>
                  {["CTA", "Tabs"].includes(type) && (
                    <StyledPageTitle2>{"Page title"}</StyledPageTitle2>
                  )}
                </StyledTitleWrapper2>
              )}
              {["CTA", "Tabs"].includes(type) && (
                <StyledHereGoesADescription2>
                  {"Here goes a description"}
                </StyledHereGoesADescription2>
              )}
            </StyledTextWrapper2>
          )}
          {type === "CTA" && (
            <StyledButtons>
              {type === "CTA" && (
                <PrimaryButtonNeutral
                  state={"Default"}
                  size={"Regular"}
                  mode={"Light"}
                />
              )}
            </StyledButtons>
          )}
        </StyledMainContainer>
      )}
      {type === "Tabs" && (
        <StyledTabWrapper>
          {type === "Tabs" && (
            <StyledTab>
              {type === "Tabs" && <StyledTabName>{"Tab name"}</StyledTabName>}
            </StyledTab>
          )}
          {type === "Tabs" && (
            <StyledTab2>
              {type === "Tabs" && <StyledTabName2>{"Tab name"}</StyledTabName2>}
            </StyledTab2>
          )}
          {type === "Tabs" && (
            <StyledTab3>
              {type === "Tabs" && <StyledTabName3>{"Tab name"}</StyledTabName3>}
            </StyledTab3>
          )}
        </StyledTabWrapper>
      )}
    </StyledRoot>
  );
});
