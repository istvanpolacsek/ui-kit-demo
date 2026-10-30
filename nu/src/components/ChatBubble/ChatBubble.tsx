import React from "react";
import styled, { css } from "styled-components";
import { RichTooltip } from "../RichTooltip";
import { Icon } from "../Icon";
import { ChatNavBar } from "../ChatNavBar";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { DesktopTextField } from "../DesktopTextField";

export interface ChatBubbleProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showRichTooltip" | "state"
> {
  showRichTooltip?: boolean;
  state?: "Closed" | "Open";
}

const StyledRoot = styled.section<{ $state: "Closed" | "Open" }>(
  ({ $state }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($state) {
        case "Closed":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: center;
            width: 312px;
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
  `,
);

const StyledRichTooltip = styled.div(
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

const StyledChatBubble = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["background"]["bgBrand"]};
    border-radius: 1000px;
  `,
);

const StyledContent = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 26px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background-color: ${theme["background"]["bgDefult"]};
    border-radius: 0px;
  `,
);

const StyledDate = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledToday9 = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledWhoJoined = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNaviJoined9 = styled.span(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledMessage = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame11 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-end;
    width: fit-content;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame10 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledFrame9 = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
  `,
);

const StyledHiIMNaviTheNavigatorHowCanIHelpYou = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledWhoJoined2 = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledNavi9 = styled.span(
  ({ theme }) => css`
    color: ${theme["gray"]["500"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledFrame12 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
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

const StyledDesktopTextField = styled.div(
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

/** A chat bubble component that displays a conversational UI panel, including a navigation bar, message thread with avatars and timestamps, action buttons, and a text input field. Supports an optional rich tooltip overlay and toggles between open and closed states. */
export const ChatBubble = React.forwardRef<HTMLElement, ChatBubbleProps>(
  function ChatBubble(
    { showRichTooltip = true, state = "Closed", ...rest },
    ref,
  ) {
    return (
      <StyledRoot
        role="dialog"
        aria-label="Chat bubble"
        {...rest}
        ref={ref}
        $state={state}
      >
        {showRichTooltip && (
          <StyledRichTooltip>
            <RichTooltip />
          </StyledRichTooltip>
        )}
        {state === "Closed" && (
          <StyledChatBubble>
            {state === "Closed" && <Icon name={"chat"} size={24} />}
          </StyledChatBubble>
        )}
        {state === "Open" && <ChatNavBar />}
        {state === "Open" && (
          <StyledContent>
            {state === "Open" && (
              <StyledDate>
                {state === "Open" && (
                  <StyledToday9>{"Today • 9:52 AM"}</StyledToday9>
                )}
              </StyledDate>
            )}
            {state === "Open" && (
              <StyledWhoJoined>
                {state === "Open" && (
                  <Avatar size={"Extra Small"} type={"Initials"} />
                )}
                {state === "Open" && (
                  <StyledNaviJoined9>
                    {"Navi Joined • 9:52 AM "}
                  </StyledNaviJoined9>
                )}
              </StyledWhoJoined>
            )}
            {state === "Open" && (
              <StyledMessage>
                {state === "Open" && (
                  <StyledFrame11>
                    {state === "Open" && (
                      <Avatar size={"Extra Small"} type={"Initials"} />
                    )}
                  </StyledFrame11>
                )}
                {state === "Open" && (
                  <StyledFrame10>
                    {state === "Open" && (
                      <StyledFrame9>
                        {state === "Open" && (
                          <StyledHiIMNaviTheNavigatorHowCanIHelpYou>
                            {"Hi, I’m Navi, the Navigator. How can I help you?"}
                          </StyledHiIMNaviTheNavigatorHowCanIHelpYou>
                        )}
                      </StyledFrame9>
                    )}
                    {state === "Open" && (
                      <StyledWhoJoined2>
                        {state === "Open" && (
                          <StyledNavi9>{"Navi • 9:52 AM"}</StyledNavi9>
                        )}
                      </StyledWhoJoined2>
                    )}
                  </StyledFrame10>
                )}
              </StyledMessage>
            )}
            {state === "Open" && (
              <StyledFrame12>
                {state === "Open" && (
                  <Button
                    label={true}
                    bTNValue={"Chat with an advisor"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Small"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                )}
                {state === "Open" && (
                  <Button
                    label={true}
                    bTNValue={"Chat with navi bot"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Small"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                )}
              </StyledFrame12>
            )}
            {state === "Open" && (
              <StyledDesktopTextField>
                <DesktopTextField
                  showRightIcon={true}
                  showDuration={false}
                  showCountryCode={false}
                  showHelperText={false}
                  showLeftIcon={true}
                  showLink={true}
                  textState={"Placeholder"}
                  state={"Default"}
                />
              </StyledDesktopTextField>
            )}
          </StyledContent>
        )}
      </StyledRoot>
    );
  },
);
