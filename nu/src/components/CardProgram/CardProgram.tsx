import React from "react";
import styled, { css } from "styled-components";
import { Tags } from "../Tags";
import { LinkButton } from "../LinkButton";

export interface CardProgramProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.article<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
    ${(() => {
      switch ($device) {
        case "Desktop":
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
            width: 400px;
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
    color: ${theme["button"]["Default"]["default"]};
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 0px;
  `,
);

const StyledImage = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    background-color: transparent;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 10px;
            padding-right: 340px;
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
            padding-right: 290px;
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
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background-color: ${theme["background"]["bgGray"]};
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
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledYear12 = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["eyebrowOnLight"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 12px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0.08em;
            text-transform: uppercase;
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

const StyledFoundations = styled.h3<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

const StyledInitialCoreCourseworkEstablishingTheTheoreticalEthicalAndMethodologicalGroundingOfTheStudentSDiscipline =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: var(--font-roboto, "Roboto"), sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

/** A card component representing an academic program, displaying a decorative line, an image with tags, program date/year range, title, description, and a link button for navigation. */
export const CardProgram = React.forwardRef<HTMLElement, CardProgramProps>(
  function CardProgram({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="article"
        aria-label="Program card"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledDecorativeLine />
        <StyledImage $device={device}>
          <Tags
            value={"01"}
            icon={false}
            state={"Defaul"}
            type={"Fuchsia"}
            size={"Large"}
          />
        </StyledImage>
        <StyledInfo>
          <StyledDate>
            <StyledYear12 $device={device}>{"Year 1-2"}</StyledYear12>
          </StyledDate>
          <StyledInfo2>
            <StyledFoundations $device={device}>
              {"Foundations"}
            </StyledFoundations>
            <StyledInitialCoreCourseworkEstablishingTheTheoreticalEthicalAndMethodologicalGroundingOfTheStudentSDiscipline>
              {
                "Initial core coursework establishing the theoretical, ethical, and methodological grounding of the student’s discipline."
              }
            </StyledInitialCoreCourseworkEstablishingTheTheoreticalEthicalAndMethodologicalGroundingOfTheStudentSDiscipline>
          </StyledInfo2>
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
