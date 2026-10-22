import React from "react";
import styled, { css } from "styled-components";
import { LinkButton } from "../LinkButton";

export interface CardLinkProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.a<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 415px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: inline-flex;
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
    color: ${theme["button"]["Default"]["default"]};
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 0px;
  `,
);

const StyledImage = styled.div(
  ({ theme }) => css`
    background-color: ${theme["background"]["bgGray"]};
    border-radius: 0px;
  `,
);

const StyledInfo = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background-color: ${theme["background"]["bgGray"]};
  `,
);

const StyledTitle = styled.div(
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

const StyledUpcomingDissertationBootCamps = styled.h3<{
  $device: "Mobile" | "Desktop";
}>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A card component that acts as a navigable link, displaying a decorative line, an image, and an info section containing a title and a link button. Typically used in grid or list layouts to navigate to related content such as events or articles. */
export const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  function CardLink({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Upcoming Dissertation Boot Camps"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledDecorativeLine />
        <StyledImage />
        <StyledInfo>
          <StyledTitle>
            <StyledUpcomingDissertationBootCamps $device={device}>
              {"Upcoming Dissertation Boot Camps"}
            </StyledUpcomingDissertationBootCamps>
          </StyledTitle>
          <LinkButton
            linkValue={"View More"}
            rightIcon={true}
            leftIcon={false}
            size={"Large"}
            device={"Desktop"}
            state={"Default"}
            hierarchy={"Primary"}
            type={"Default"}
          />
        </StyledInfo>
      </StyledRoot>
    );
  },
);
