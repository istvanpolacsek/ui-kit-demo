import React from "react";
import styled, { css } from "styled-components";
import { Tags } from "../Tags";
import { LinkButton } from "../LinkButton";

export interface CardPodcastProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.article<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Web":
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
            width: 415px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
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
    color: ${theme["accent"]["accentBrand"]};
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 0px;
  `,
);

const StyledImage = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    background-color: transparent;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 318px;
            padding-bottom: 204px;
            padding-left: 10px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            height: 250px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 268px;
            padding-bottom: 212px;
            padding-left: 10px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            height: 250px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    background-color: ${theme["background"]["bgGray"]};
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 16px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
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
          `;
        default:
          return css``;
      }
    })()}
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
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDec282025 = styled.span<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledEllipse6 = styled.div(
  ({ theme }) => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 50%;
  `,
);

const Styled3Min = styled.span<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            font-family: "Roboto";
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 400;
            line-height: 1.3;
            letter-spacing: 0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo2 = styled.div(
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

const StyledWhenStudentsAreAlsoParentsEmployeesAndCaregivers = styled.h3<{
  $device: "Mobile" | "Web";
}>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            font-family: "Roboto";
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTheANDersRevolutionWithMarkMillironPresidentAndCEOOfNU = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A podcast card component displaying episode metadata including date, duration, episode title, and description, along with a decorative image and a link/button for navigation. Supports both Mobile and Web layout variants. */
export const CardPodcast = React.forwardRef<HTMLElement, CardPodcastProps>(
  function CardPodcast({ device = "Web", ...rest }, ref) {
    return (
      <StyledRoot
        role="article"
        aria-label="Podcast episode card"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledDecorativeLine />
        <StyledImage $device={device}>
          <Tags
            value={"ANDers"}
            icon={false}
            state={"Defaul"}
            type={"Wheat"}
            size={"Large"}
          />
        </StyledImage>
        <StyledInfo $device={device}>
          <StyledDate>
            <StyledDec282025 $device={device}>{"Dec 28, 2025"}</StyledDec282025>
            <StyledEllipse6 />
            <Styled3Min $device={device}>{"3 Min"}</Styled3Min>
          </StyledDate>
          <StyledInfo2>
            <StyledWhenStudentsAreAlsoParentsEmployeesAndCaregivers
              $device={device}
            >
              {"When students are also parents, employees and caregivers"}
            </StyledWhenStudentsAreAlsoParentsEmployeesAndCaregivers>
            <StyledTheANDersRevolutionWithMarkMillironPresidentAndCEOOfNU>
              {
                "The ANDers revolution - with Mark Milliron, president and CEO of NU"
              }
            </StyledTheANDersRevolutionWithMarkMillironPresidentAndCEOOfNU>
          </StyledInfo2>
          <LinkButton
            linkValue={"Listen Now"}
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
