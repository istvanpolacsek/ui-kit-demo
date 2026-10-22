import React from "react";
import styled, { css } from "styled-components";
import { FABSubtle } from "../FABSubtle";
import { ToolbarThumbnail } from "../ToolbarThumbnail";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { TextBox, type TextBoxProps } from "../TextBox";
import { NavigationInLine } from "../NavigationInLine";
import { NavigationSocialIcons } from "../NavigationSocialIcons";
import { UserDividerLight } from "../UserDividerLight";

export interface FooterSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"footer">,
  | "hasSocialIcons"
  | "hasNavigation"
  | "hasText"
  | "hasAddSectionButton"
  | "showUI"
  | "type"
  | "size"
> {
  hasSocialIcons?: boolean;
  hasNavigation?: boolean;
  hasText?: boolean;
  hasAddSectionButton?: boolean;
  showUI?: boolean;
  type?: "Simple" | "Line" | "Empty";
  size?: TextBoxProps["size"];
}

const StyledRoot = styled.footer<{ $type: "Simple" | "Line" | "Empty" }>(
  ({ $type }) => css`
    position: relative;
    background-color: #ffffff;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Empty":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: center;
            align-items: center;
            width: 1440px;
            height: 148px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Simple":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Line":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 40px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSectionStatesFooter = styled.div<{
  $type: "Simple" | "Line" | "Empty";
}>(
  ({ $type }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 148px;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Empty":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 132px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 1440px;
            height: 148px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Simple":
          return css``;
        case "Line":
          return css``;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSectionDivider = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: center;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledSeparator = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 15px;
    width: 1440px;
    height: 1px;
    background-color: #0f0f0f;
    border-radius: 0px;
  `,
);

const StyledOverlay = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 148px;
    background-color: #0f0f0f;
    border-radius: 0px;
  `,
);

const StyledNavigation = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 48px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledUserDividerLight = styled.div(
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

/** A footer section component that can display navigation links, social icons, and text content. Supports multiple visual variants (Simple, Line, Empty) and optional UI elements like section dividers and toolbars. */
export const FooterSection = React.forwardRef<HTMLElement, FooterSectionProps>(
  function FooterSection(
    {
      hasSocialIcons = true,
      hasNavigation = true,
      hasText = true,
      hasAddSectionButton = true,
      showUI = true,
      type = "Empty",
      size = "6",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="contentinfo"
        aria-label="Site footer"
        {...rest}
        ref={ref}
        $type={type}
      >
        {showUI && (
          <StyledSectionStatesFooter $type={type}>
            <StyledSectionDivider>
              {hasAddSectionButton && (
                <FABSubtle size={"Small"} mode={"Light"} />
              )}
              <StyledSeparator />
            </StyledSectionDivider>
            {["Simple", "Line"].includes(type) && (
              <ToolbarThumbnail
                addNavigation={false}
                addSocialLink={false}
                addText={false}
                addMedia={false}
                flipHorizontally={false}
                type={"Footer"}
                mode={"Light"}
              />
            )}
          </StyledSectionStatesFooter>
        )}
        {type === "Empty" && (
          <TertiaryButtonNeutral
            mode={"Light"}
            hasIcon={"True"}
            size={"Large"}
          />
        )}
        {type === "Empty" && <StyledOverlay />}
        {hasText && (
          <TextBox
            moveRight={true}
            aboveImage={false}
            moveLeft={true}
            reachingLimit={false}
            hasButton={false}
            state={"Default"}
            mode={"Light"}
            colorOverride={false}
            roundness={"Sharp"}
            size={size}
          />
        )}
        {["Simple", "Line"].includes(type) && (
          <StyledNavigation>
            {hasNavigation && (
              <NavigationInLine hasPage4={false} type={"Regular"} />
            )}
            {hasSocialIcons && (
              <NavigationSocialIcons hasPage4={false} type={"Icon"} />
            )}
          </StyledNavigation>
        )}
        {type === "Line" && (
          <StyledUserDividerLight>
            <UserDividerLight />
          </StyledUserDividerLight>
        )}
      </StyledRoot>
    );
  },
);
