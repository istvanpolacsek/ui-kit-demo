import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { LinkButton } from "../LinkButton";

export interface ChatNavBarProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "state"
> {
  state?: "Closed" | "Open";
}

const StyledRoot = styled.nav<{ $state: "Closed" | "Open" }>(
  ({ theme, $state }) => css`
    ${(() => {
      switch ($state) {
        case "Closed":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 151px;
            justify-content: space-between;
            align-items: flex-end;
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Open":
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
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Closed":
          return css`
            background-color: ${theme["background"]["bgBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($state) {
        case "Closed":
          return css`
            border-radius: 12px;
          `;
        case "Open":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["accent"]["accentWhite"]};
  `,
);

const StyledActions = styled.div(
  () => css`
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

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavi = styled.div(
  () => css`
    color: #ffffff;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledIcon2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavBar = styled.nav(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 151px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    background-color: ${theme["background"]["bgBrand"]};
    border-radius: 12px;
  `,
);

const StyledActions2 = styled.div(
  () => css`
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

const StyledIcon3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavi2 = styled.div(
  () => css`
    color: #ffffff;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledIcon4 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledNavigation = styled.nav(
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
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["gray"]["100"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent = styled.ul(
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
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton = styled.li(
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

const StyledNavigation2 = styled.nav(
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
    height: 48px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    overflow: hidden;
    background-color: ${theme["gray"]["100"]};
    border-radius: 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  `,
);

const StyledContent2 = styled.ul(
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
    gap: 32px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledLinkButton2 = styled.li(
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

/** A navigation bar component that toggles between a closed (compact) and open (expanded) state, providing access to navigation links and actions. */
export const ChatNavBar = React.forwardRef<HTMLElement, ChatNavBarProps>(
  function ChatNavBar({ state = "Closed", ...rest }, ref) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Main navigation"
        {...rest}
        ref={ref}
        $state={state}
      >
        {state === "Closed" && (
          <StyledActions>
            {state === "Closed" && (
              <StyledIcon>
                {state === "Closed" && <Icon name={"menu"} size={24} />}
              </StyledIcon>
            )}
            {state === "Closed" && <StyledNavi>{"Navi"}</StyledNavi>}
          </StyledActions>
        )}
        {state === "Closed" && (
          <StyledIcon2>
            {state === "Closed" && (
              <Icon name={"keyboard_arrow_down"} size={24} />
            )}
          </StyledIcon2>
        )}
        {state === "Open" && (
          <StyledNavBar>
            {state === "Open" && (
              <StyledActions2>
                {state === "Open" && (
                  <StyledIcon3>
                    {state === "Open" && <Icon name={"close"} size={24} />}
                  </StyledIcon3>
                )}
                {state === "Open" && <StyledNavi2>{"Navi"}</StyledNavi2>}
              </StyledActions2>
            )}
            {state === "Open" && (
              <StyledIcon4>
                {state === "Open" && (
                  <Icon name={"keyboard_arrow_up"} size={24} />
                )}
              </StyledIcon4>
            )}
          </StyledNavBar>
        )}
        {state === "Open" && (
          <StyledNavigation>
            {state === "Open" && (
              <StyledContent>
                {state === "Open" && (
                  <StyledLinkButton>
                    <LinkButton
                      linkValue={"Request Chat Transcript"}
                      rightIcon={false}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton>
                )}
              </StyledContent>
            )}
          </StyledNavigation>
        )}
        {state === "Open" && (
          <StyledNavigation2>
            {state === "Open" && (
              <StyledContent2>
                {state === "Open" && (
                  <StyledLinkButton2>
                    <LinkButton
                      linkValue={"End Chat"}
                      rightIcon={false}
                      leftIcon={false}
                      size={"Large"}
                      device={"Desktop"}
                      state={"Default"}
                      hierarchy={"Secondary"}
                      type={"Default"}
                    />
                  </StyledLinkButton2>
                )}
              </StyledContent2>
            )}
          </StyledNavigation2>
        )}
      </StyledRoot>
    );
  },
);
