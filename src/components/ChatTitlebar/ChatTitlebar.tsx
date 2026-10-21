import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ChatTitlebarProps extends React.ComponentPropsWithoutRef<"header"> {}

const StyledRoot = styled.header(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 0px;
    justify-content: space-between;
    align-items: center;
    width: 792px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f9f9f7;
    border-radius: 0px;
    color: ${theme["Text"]["Primary"]};
  `,
);

const StyledRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
  `,
);

const StyledProductRoadmap = styled.h2(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
  `,
);

const StyledRow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-left: 8px;
    gap: 6px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 0.5px solid transparent;
    box-sizing: border-box;
    border-color: rgba(30, 30, 29, 0.30000001192092896);
    border-radius: 8px;
  `,
);

const StyledShare = styled.span(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

/** A chat titlebar component displaying the current chat or document title (e.g. 'Product roadmap') with an edit icon and a share action. Typically rendered at the top of a chat or document view. */
export const ChatTitlebar = React.forwardRef<HTMLElement, ChatTitlebarProps>(
  function ChatTitlebar({ ...rest }, ref) {
    return (
      <StyledRoot role="banner" aria-label="Chat titlebar" {...rest} ref={ref}>
        <StyledRow>
          <StyledProductRoadmap>{"Product roadmap"}</StyledProductRoadmap>
          <Icon name={"Caret Down Small"} size={20} />
        </StyledRow>
        <StyledRow2>
          <StyledShare>{"Share"}</StyledShare>
        </StyledRow2>
      </StyledRoot>
    );
  },
);
