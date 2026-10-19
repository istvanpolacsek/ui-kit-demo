import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { Search } from "../Search";
import { Avatar } from "../Avatar";

export interface AISidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "block"
> {
  block?: React.ReactNode;
}

const StyledRoot = styled.aside(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 16px;
    justify-content: space-between;
    align-items: flex-start;
    width: 320px;
    height: 800px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
  `,
);

const StyledBlock = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledBlock2 = styled.header(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFlippyChats = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  `,
);

const StyledSearch = styled.div(
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

const StyledBlock22 = styled.nav(
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

const StyledBlock3 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledChats = styled.h3(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Secondary"]};
    font-family: "Inter";
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  `,
);

const StyledBlock4 = styled.div(
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
    && > * {
      align-self: stretch;
      width: auto;
    }
    border-radius: 0px;
  `,
);

const StyledBlock23 = styled.footer(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledflippyFigmaCom = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Default"]["Default"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  `,
);

/** AI Sidebar component that provides a chat interface panel, including a header with title and icons, a search field, a list of chat conversations, and a user account footer. Typically rendered as a supplementary sidebar alongside main content. */
export const AISidebar = React.forwardRef<HTMLElement, AISidebarProps>(
  function AISidebar({ block, ...rest }, ref) {
    return (
      <StyledRoot
        role="complementary"
        aria-label="AI chat sidebar"
        {...rest}
        ref={ref}
      >
        <StyledBlock>
          <StyledBlock2>
            <Icon name={"Menu"} size={24} />
            <StyledFlippyChats>{"Flippy chats"}</StyledFlippyChats>
            <Icon name={"Plus circle"} size={24} />
          </StyledBlock2>
          <StyledSearch>
            <Search value={"Search"} valueType={"Placeholder"} />
          </StyledSearch>
          <StyledBlock22>
            <StyledBlock3>
              <StyledChats>{"Chats"}</StyledChats>
            </StyledBlock3>
            <StyledBlock4>{block}</StyledBlock4>
          </StyledBlock22>
        </StyledBlock>
        <StyledBlock23>
          <Avatar
            initials={"F"}
            type={"Image"}
            size={"Small"}
            shape={"Circle"}
          />
          <StyledflippyFigmaCom>{"flippy@figma.com"}</StyledflippyFigmaCom>
        </StyledBlock23>
      </StyledRoot>
    );
  },
);
