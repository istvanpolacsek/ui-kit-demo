import React from "react";
import styled, { css } from "styled-components";
import { IconButton, type IconButtonProps } from "../IconButton";
import { NavigationPillList } from "../NavigationPillList";
import { HeaderAuth } from "../HeaderAuth";

export interface HeaderProps extends Omit<
  React.ComponentPropsWithoutRef<"header">,
  | "platform"
  | "state"
  | "iconButtonIcon"
  | "iconButtonVariant"
  | "iconButtonSize"
  | "iconButton2Icon"
  | "iconButton2Variant"
  | "iconButton2Size"
> {
  platform?: "Desktop" | "Mobile";
  state?: "Open" | "Default";
  iconButtonIcon?: IconButtonProps["icon"];
  iconButtonVariant?: IconButtonProps["variant"];
  iconButtonSize?: IconButtonProps["size"];
  iconButton2Icon?: IconButtonProps["icon"];
  iconButton2Variant?: IconButtonProps["variant"];
  iconButton2Size?: IconButtonProps["size"];
}

const StyledRoot = styled.header<{
  $platform: "Desktop" | "Mobile";
  $state: "Open" | "Default";
}>(
  ({ theme, $platform, $state }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$platform, $state])) {
        case '["Desktop","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
            row-gap: 0px;
          `;
        case '["Mobile","Default"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
            row-gap: 0px;
          `;
        case '["Mobile","Open"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 24px;
            padding-bottom: 32px;
            padding-left: 24px;
            gap: 64px;
            justify-content: flex-start;
            align-items: center;
            width: 375px;
            height: 812px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            border-color: ${theme["Border"]["Default"]["Default"]};
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["Icon"]["Default"]["Default"]};
  `,
);

const StyledBlock = styled.div<{ $state: "Open" | "Default" }>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
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
          `;
        case "Open":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
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

const StyledFigma = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledIcon = styled.div(
  () => css`
    width: 23.333332061767578px;
    height: 35px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledNavigationPillList = styled.div<{
  $platform: "Desktop" | "Mobile";
}>(
  ({ $platform }) => css`
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Mobile":
          return css`
            display: flex;
            align-self: stretch;
            flex: 1 1 0;
            min-height: 0;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
              align-self: stretch;
              height: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledHeaderAuth = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    ${(() => {
      switch ($platform) {
        case "Mobile":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** Site-wide header component supporting Desktop and Mobile platforms, with Default and Open states. Contains a logo/brand icon, navigation pill list, authentication controls, and contextual icon buttons depending on variant and state. */
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  function Header(
    {
      platform = "Desktop",
      state = "Default",
      iconButtonIcon = "X",
      iconButtonVariant = "Subtle",
      iconButtonSize = "Medium",
      iconButton2Icon = "Menu",
      iconButton2Variant = "Subtle",
      iconButton2Size = "Small",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="banner"
        aria-label="Site header"
        {...rest}
        ref={ref}
        $platform={platform}
        $state={state}
      >
        <StyledBlock $state={state}>
          <StyledFigma>
            <StyledIcon />
          </StyledFigma>
          {state === "Open" && (
            <IconButton
              icon={iconButtonIcon}
              variant={iconButtonVariant}
              size={iconButtonSize}
            />
          )}
        </StyledBlock>
        {((platform === "Desktop" && state === "Default") ||
          (platform === "Mobile" && state === "Open")) && (
          <StyledNavigationPillList $platform={platform}>
            <NavigationPillList
              link6={true}
              link5={true}
              link4={true}
              link2={true}
              link3={true}
              link1={true}
              link7={true}
              direction={"Row"}
            />
          </StyledNavigationPillList>
        )}
        {((platform === "Desktop" && state === "Default") ||
          (platform === "Mobile" && state === "Open")) && (
          <StyledHeaderAuth $platform={platform}>
            <HeaderAuth state={"Logged Out"} />
          </StyledHeaderAuth>
        )}
        {platform === "Mobile" && state === "Default" && (
          <IconButton
            icon={iconButton2Icon}
            variant={iconButton2Variant}
            size={iconButton2Size}
          />
        )}
      </StyledRoot>
    );
  },
);
