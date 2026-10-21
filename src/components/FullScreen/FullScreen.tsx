import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface FullScreenProps extends React.ComponentPropsWithoutRef<"section"> {}

const StyledRoot = styled.section(
  () => css`
    background-color: #f9f9f7;
    border-radius: 0px;
    width: 402px;
    height: 874px;
    box-sizing: border-box;
  `,
);

const StyledchatNavBar = styled.nav(
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
    width: 402px;
    height: 54px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
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

const StyledtitleDetails = styled.header(
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

const StyledOpus45 = styled.h2(
  () => css`
    color: #131313;
    font-family: "Anthropic Sans";
    font-size: 17px;
    font-weight: 500;
    line-height: 1.4;
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

const Styledinput = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    width: 370px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6000000238418579);
    border-radius: 26px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  `,
);

const StyledinputLayout = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 24px;
  `,
);

const StyledbuttonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-right: 8.000003814697266px;
    padding-bottom: 8px;
    padding-left: 8.000003814697266px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledleadingButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styledplaceholder = styled.p(
  () => css`
    color: #7b7974;
  `,
);

const StyledtrailingButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-end;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** Full-screen chat interface layout containing a navigation bar with model title and action icons, and a message input area with placeholder text and leading/trailing action buttons. */
export const FullScreen = React.forwardRef<HTMLElement, FullScreenProps>(
  function FullScreen({ ...rest }, ref) {
    return (
      <StyledRoot role="main" aria-label="Full screen chat" {...rest} ref={ref}>
        <StyledchatNavBar>
          <StyledFrame1430106208>
            <Icon name={"X"} size={24} />
          </StyledFrame1430106208>
          <StyledtitleDetails>
            <StyledOpus45>{"Opus 4.5"}</StyledOpus45>
            <Icon name={"Caret Down Small"} size={24} />
          </StyledtitleDetails>
          <StyledFrame1430106207>
            <Icon name={"Chat Add Filled"} size={24} />
          </StyledFrame1430106207>
        </StyledchatNavBar>
        <Styledinput>
          <StyledinputLayout>
            <StyledbuttonRow>
              <StyledleadingButtons></StyledleadingButtons>
              <Styledplaceholder>{"Ask App"}</Styledplaceholder>
              <StyledtrailingButtons></StyledtrailingButtons>
            </StyledbuttonRow>
          </StyledinputLayout>
        </Styledinput>
      </StyledRoot>
    );
  },
);
