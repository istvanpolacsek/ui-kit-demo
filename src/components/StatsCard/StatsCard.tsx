import React from "react";
import styled, { css } from "styled-components";
import { Icon, type IconProps } from "../Icon";
import { TextHeading } from "../TextHeading";
import { Text } from "../Text";

export interface StatsCardProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "icon" | "name" | "size"
> {
  icon?: IconProps["name"];
  name?: IconProps["name"];
  size?: IconProps["size"];
}

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
    align-items: center;
    width: fit-content;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["Border"]["Default"]["Default"]};
    border-radius: 8px;
  `,
);

const StyledReviewBody = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledTextHeading = styled.div(
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

/** A stats card component that displays a metric or statistic with an icon, a heading, and a descriptive text body. Suitable for dashboards or summary views. */
export const StatsCard = React.forwardRef<HTMLElement, StatsCardProps>(
  function StatsCard(
    { icon = "Clock", name = "Activity", size = 48, ...rest },
    ref,
  ) {
    return (
      <StyledRoot role="region" aria-label="Stats Card" {...rest} ref={ref}>
        <Icon name={name} size={size} />
        <StyledReviewBody>
          <StyledTextHeading>
            <TextHeading text={"100"} />
          </StyledTextHeading>
          <StyledText>
            <Text text={"Body text"} />
          </StyledText>
        </StyledReviewBody>
      </StyledRoot>
    );
  },
);
