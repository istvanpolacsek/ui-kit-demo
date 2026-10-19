import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { TextHeading } from "../TextHeading";
import { Text } from "../Text";
import { AvatarBlock } from "../AvatarBlock";

export interface ReviewCardProps extends React.ComponentPropsWithoutRef<"article"> {}

const StyledRoot = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
    color: ${theme["Icon"]["Brand"]["Default"]};
  `,
);

const StyledRating = styled.div(
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

const StyledReviewBody = styled.section(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
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

const StyledAvatarBlock = styled.div(
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

/** A review card component displaying a star rating, review body text with a heading, and an avatar block identifying the reviewer. */
export const ReviewCard = React.forwardRef<HTMLElement, ReviewCardProps>(
  function ReviewCard({ ...rest }, ref) {
    return (
      <StyledRoot role="article" aria-label="User review" {...rest} ref={ref}>
        <StyledRating>
          <Icon name={"Star"} size={20} />
          <Icon name={"Star"} size={20} />
          <Icon name={"Star"} size={20} />
          <Icon name={"Star"} size={20} />
          <Icon name={"Star"} size={20} />
        </StyledRating>
        <StyledReviewBody>
          <TextHeading text={"Review title"} />
          <StyledText>
            <Text text={"Review body"} />
          </StyledText>
        </StyledReviewBody>
        <StyledAvatarBlock>
          <AvatarBlock description={"Date"} title={"Reviewer name"} />
        </StyledAvatarBlock>
      </StyledRoot>
    );
  },
);
