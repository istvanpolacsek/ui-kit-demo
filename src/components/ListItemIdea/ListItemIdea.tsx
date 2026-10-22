import React from "react";
import styled, { css } from "styled-components";
import { IllustrationLegacyIcon } from "../IllustrationLegacyIcon";

export interface ListItemIdeaProps extends React.ComponentPropsWithoutRef<"li"> {}

const StyledRoot = styled.li(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    height: 106px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 4px;
    &:hover {
      background-color: #333333;
    }
  `,
);

const StyledIllustration = styled.div(
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
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTitleDescription = styled.div(
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

const StyledUserJourney = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledYouCanDefineTasksYourUsersWillPerformWhileUsingYourProduct =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

/** A list item representing an 'Idea' entry, displaying an illustration icon alongside a title and descriptive text. Supports default and hover interaction states. */
export const ListItemIdea = React.forwardRef<HTMLLIElement, ListItemIdeaProps>(
  function ListItemIdea({ ...rest }, ref) {
    return (
      <StyledRoot role="listitem" {...rest} ref={ref}>
        <StyledIllustration>
          <IllustrationLegacyIcon type={"User journey"} />
        </StyledIllustration>
        <StyledTitleDescription>
          <StyledUserJourney>{"User Journey"}</StyledUserJourney>
          <StyledYouCanDefineTasksYourUsersWillPerformWhileUsingYourProduct>
            {
              "You can define tasks your users will perform while using your product"
            }
          </StyledYouCanDefineTasksYourUsersWillPerformWhileUsingYourProduct>
        </StyledTitleDescription>
      </StyledRoot>
    );
  },
);
