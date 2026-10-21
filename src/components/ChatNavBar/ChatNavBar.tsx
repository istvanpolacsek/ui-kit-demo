import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";

export interface ChatNavBarProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "rightIcon" | "leftIcon" | "title" | "state"
> {
  rightIcon?: string;
  leftIcon?: IconProps["name"];
  title?: string;
  state?: "New Chat (Untitled)" | "Titled";
}

const StyledRoot = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #131313;
  `,
);

const StyledFrame1430106208 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.6000000238418579);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledtitleDetails = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledOpus46 = styled.span(
  () => css`
    color: #131313;
  `,
);

const StyledFrame1 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame1430106207 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.6000000238418579);
    border-radius: 9999px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

/** A navigation bar for the chat interface, displaying the current chat title along with left and right icon actions (e.g., back/menu and edit/options). Supports two states: an untitled new chat and a titled chat session. */
export const ChatNavBar = React.forwardRef<HTMLElement, ChatNavBarProps>(
  function ChatNavBar(
    {
      rightIcon = "448:4955",
      leftIcon = "Menu",
      title = "Tiny Fairy Story",
      state = "New Chat (Untitled)",
      ...rest
    },
    ref,
  ) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Chat navigation bar"
        {...rest}
        ref={ref}
      >
        <StyledFrame1430106208>
          <Icon size={24} name={leftIcon} />
        </StyledFrame1430106208>
        <StyledtitleDetails>
          <StyledOpus46>{"Opus 4.6"}</StyledOpus46>
          <StyledFrame1>
            <Icon name={"Caret Down Small"} size={24} />
          </StyledFrame1>
        </StyledtitleDetails>
        <StyledFrame1430106207>
          <Icon name={"Ghost"} size={24} />
        </StyledFrame1430106207>
      </StyledRoot>
    );
  },
);
