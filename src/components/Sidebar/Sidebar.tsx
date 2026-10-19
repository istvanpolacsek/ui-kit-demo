import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface SidebarProps extends Omit<
  React.ComponentPropsWithoutRef<"aside">,
  "collapsed"
> {
  collapsed?: "true" | "false";
}

const StyledRoot = styled.aside<{ $collapsed: "true" | "false" }>(
  ({ $collapsed }) => css`
    position: relative;
    overflow: hidden;
    background-color: #f9f9f7;
    border-radius: 0px;
    ${(() => {
      switch ($collapsed) {
        case "true":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 8px;
            padding-bottom: 12px;
            padding-left: 8px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: fit-content;
            height: 832px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "false":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 8px;
            padding-bottom: 12px;
            padding-left: 8px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 256px;
            height: 832px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColumn = styled.nav<{ $collapsed: "true" | "false" }>(
  ({ $collapsed }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($collapsed) {
        case "true":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            width: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        case "false":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 68px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledColumn2 = styled.div<{ $collapsed: "true" | "false" }>(
  ({ $collapsed }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($collapsed) {
        case "true":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "false":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRow2 = styled.div(
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
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledRow22 = styled.div(
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
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledRow3 = styled.div(
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
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledRow4 = styled.div(
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
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledRow5 = styled.div(
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
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledColumn3 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledRow6 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 236px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledNewChat = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow23 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 236px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledChats = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow32 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 236px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledProjects = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow42 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 236px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledArtifacts = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow52 = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    width: 236px;
    height: 36px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 8px;
  `,
);

const StyledCode = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledColumn22 = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRow7 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledStarred = styled.div(
  () => css`
    color: #4d4c48;
    font-family: "Anthropic Sans Text";
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
  `,
);

const StyledRow24 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledSeasonalProduceGuide = styled.div(
  () => css`
    color: #141413;
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow33 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledImaginingAlternateWorkplace = styled.div(
  () => css`
    color: #141413;
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledColumn32 = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRow8 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 8px;
    padding-left: 8px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledRecents = styled.div(
  () => css`
    color: #7b7974;
    font-family: "Anthropic Sans Text";
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
  `,
);

const StyledRow25 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    background-color: #f0efec;
    border-radius: 8px;
  `,
);

const StyledMakeAFairyStory = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow34 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledSpringtimePoetry = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow43 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledDataMigrationPlan = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow53 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledCreatingALessonPlan = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow62 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledAPIDocumentation = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow72 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 14px;
    padding-bottom: 0px;
    padding-left: 8px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
  `,
);

const StyledReviewingContractLanguage = styled.div(
  ({ theme }) => css`
    color: ${theme["Text"]["Primary"]};
    font-family: "Anthropic Sans Text";
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
  `,
);

const StyledRow9 = styled.div<{ $collapsed: "true" | "false" }>(
  ({ $collapsed }) => css`
    ${(() => {
      switch ($collapsed) {
        case "true":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 4px;
            padding-right: 4px;
            padding-bottom: 4px;
            padding-left: 4px;
            gap: 8px;
            justify-content: flex-start;
            align-items: center;
            align-self: stretch;
          `;
        case "false":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 8px;
            padding-bottom: 0px;
            padding-left: 8px;
            gap: 12px;
            justify-content: space-between;
            align-items: center;
            height: 68px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($collapsed) {
        case "true":
          return css`
            border-radius: 8px;
          `;
        case "false":
          return css`
            border-radius: 0px;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledColumn4 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1 0;
    border-radius: 0px;
  `,
);

const StyledFade = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    bottom: 64px;
    width: 256px;
    height: 36px;
    background-color: transparent;
    border-radius: 0px;
  `,
);

/** A collapsible sidebar navigation panel that displays navigation actions (New chat, Chats, Projects, Artifacts, Code), starred items, and recent conversations. Collapses to show only icons. */
export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  function Sidebar({ collapsed = "false", ...rest }, ref) {
    return (
      <StyledRoot
        role="navigation"
        aria-label="Sidebar"
        {...rest}
        ref={ref}
        $collapsed={collapsed}
      >
        <StyledColumn $collapsed={collapsed}>
          {collapsed === "true" && (
            <StyledRow>
              {collapsed === "true" && <Icon name={"Sidebar"} size={20} />}
            </StyledRow>
          )}
          <StyledColumn2 $collapsed={collapsed}>
            {collapsed === "true" && (
              <StyledRow2>
                {collapsed === "true" && <Icon name={"Chat Add"} size={20} />}
              </StyledRow2>
            )}
            {collapsed === "true" && (
              <StyledRow22>
                {collapsed === "true" && <Icon name={"Chats"} size={20} />}
              </StyledRow22>
            )}
            {collapsed === "true" && (
              <StyledRow3>
                {collapsed === "true" && <Icon name={"Projects"} size={20} />}
              </StyledRow3>
            )}
            {collapsed === "true" && (
              <StyledRow4>
                {collapsed === "true" && <Icon name={"Artifacts"} size={24} />}
              </StyledRow4>
            )}
            {collapsed === "true" && (
              <StyledRow5>
                {collapsed === "true" && <Icon name={"Code"} size={20} />}
              </StyledRow5>
            )}
            {collapsed === "false" && (
              <StyledColumn3>
                {collapsed === "false" && (
                  <StyledRow6>
                    {collapsed === "false" && (
                      <Icon name={"Chat Add"} size={20} />
                    )}
                    {collapsed === "false" && (
                      <StyledNewChat>{"New chat"}</StyledNewChat>
                    )}
                  </StyledRow6>
                )}
                {collapsed === "false" && (
                  <StyledRow23>
                    {collapsed === "false" && <Icon name={"Chats"} size={20} />}
                    {collapsed === "false" && (
                      <StyledChats>{"Chats"}</StyledChats>
                    )}
                  </StyledRow23>
                )}
                {collapsed === "false" && (
                  <StyledRow32>
                    {collapsed === "false" && (
                      <Icon name={"Projects"} size={20} />
                    )}
                    {collapsed === "false" && (
                      <StyledProjects>{"Projects"}</StyledProjects>
                    )}
                  </StyledRow32>
                )}
                {collapsed === "false" && (
                  <StyledRow42>
                    {collapsed === "false" && (
                      <Icon name={"Artifacts"} size={24} />
                    )}
                    {collapsed === "false" && (
                      <StyledArtifacts>{"Artifacts"}</StyledArtifacts>
                    )}
                  </StyledRow42>
                )}
                {collapsed === "false" && (
                  <StyledRow52>
                    {collapsed === "false" && <Icon name={"Code"} size={20} />}
                    {collapsed === "false" && <StyledCode>{"Code"}</StyledCode>}
                  </StyledRow52>
                )}
              </StyledColumn3>
            )}
          </StyledColumn2>
          {collapsed === "false" && (
            <StyledColumn22>
              {collapsed === "false" && (
                <StyledRow7>
                  {collapsed === "false" && (
                    <StyledStarred>{"Starred"}</StyledStarred>
                  )}
                </StyledRow7>
              )}
              {collapsed === "false" && (
                <StyledRow24>
                  {collapsed === "false" && (
                    <StyledSeasonalProduceGuide>
                      {"Seasonal Produce Guide"}
                    </StyledSeasonalProduceGuide>
                  )}
                </StyledRow24>
              )}
              {collapsed === "false" && (
                <StyledRow33>
                  {collapsed === "false" && (
                    <StyledImaginingAlternateWorkplace>
                      {"Imagining Alternate Workplace..."}
                    </StyledImaginingAlternateWorkplace>
                  )}
                </StyledRow33>
              )}
            </StyledColumn22>
          )}
          {collapsed === "false" && (
            <StyledColumn32>
              {collapsed === "false" && (
                <StyledRow8>
                  {collapsed === "false" && (
                    <StyledRecents>{"Recents"}</StyledRecents>
                  )}
                </StyledRow8>
              )}
              {collapsed === "false" && (
                <StyledRow25>
                  {collapsed === "false" && (
                    <StyledMakeAFairyStory>
                      {"Make a Fairy Story"}
                    </StyledMakeAFairyStory>
                  )}
                  {collapsed === "false" && (
                    <Icon name={"Dots Horizontal"} size={20} />
                  )}
                </StyledRow25>
              )}
              {collapsed === "false" && (
                <StyledRow34>
                  {collapsed === "false" && (
                    <StyledSpringtimePoetry>
                      {"Springtime Poetry"}
                    </StyledSpringtimePoetry>
                  )}
                </StyledRow34>
              )}
              {collapsed === "false" && (
                <StyledRow43>
                  {collapsed === "false" && (
                    <StyledDataMigrationPlan>
                      {"Data Migration Plan"}
                    </StyledDataMigrationPlan>
                  )}
                </StyledRow43>
              )}
              {collapsed === "false" && (
                <StyledRow53>
                  {collapsed === "false" && (
                    <StyledCreatingALessonPlan>
                      {"Creating a Lesson Plan"}
                    </StyledCreatingALessonPlan>
                  )}
                </StyledRow53>
              )}
              {collapsed === "false" && (
                <StyledRow62>
                  {collapsed === "false" && (
                    <StyledAPIDocumentation>
                      {"API Documentation"}
                    </StyledAPIDocumentation>
                  )}
                </StyledRow62>
              )}
              {collapsed === "false" && (
                <StyledRow72>
                  {collapsed === "false" && (
                    <StyledReviewingContractLanguage>
                      {"Reviewing Contract Language"}
                    </StyledReviewingContractLanguage>
                  )}
                </StyledRow72>
              )}
            </StyledColumn32>
          )}
        </StyledColumn>
        <StyledRow9 $collapsed={collapsed}>
          {collapsed === "true" && <StyledColumn4></StyledColumn4>}
          {collapsed === "false" && <Icon name={"Sidebar"} size={20} />}
        </StyledRow9>
        {collapsed === "false" && <StyledFade />}
      </StyledRoot>
    );
  },
);
