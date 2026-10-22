import React from "react";
import styled, { css } from "styled-components";
import { SideImage } from "../SideImage";
import { VideoControl } from "../VideoControl";

export interface CardTestimonialVideoProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device" | "type"
> {
  device?: "Desktop" | "Mobile";
  type?: "Image";
}

const StyledRoot = styled.article<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    overflow: hidden;
    background-color: #ffffff;
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
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 570px;
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
            gap: 12px;
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
    color: #191a1c;
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 0px;
  `,
);

const StyledContent = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-left: 24px;
    gap: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledSideImage = styled.div(
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

const StyledFrame2131329715 = styled.div(
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

const StyledText = styled.div(
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

const StyledBalancingLifeAndSchool = styled.h3<{
  $device: "Desktop" | "Mobile";
}>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
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

const StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent =
  styled.p(
    () => css`
      color: #191a1c;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledInfo = styled.div(
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
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAsyaW = styled.p<{ $device: "Desktop" | "Mobile" }>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Roboto";
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
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

const StyledClassOf2009 = styled.p(
  () => css`
    color: #191a1c;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledVideoControl = styled.div(
  () => css`
    position: absolute;
    left: 317px;
    top: 173px;
    width: 64.00000762939453px;
    height: 63.999996185302734px;
  `,
);

/** A testimonial card featuring a video component, a decorative line, a side image, a pull quote with supporting text, and attribution details (name and graduation year). Supports Desktop and Mobile variants. */
export const CardTestimonialVideo = React.forwardRef<
  HTMLElement,
  CardTestimonialVideoProps
>(function CardTestimonialVideo(
  { device = "Desktop", type = "Image", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Testimonial from Asya W., Class of 2009"
      {...rest}
      ref={ref}
      $device={device}
    >
      <StyledDecorativeLine />
      <StyledContent>
        <StyledSideImage>
          <SideImage device={"Web"} />
        </StyledSideImage>
        <StyledFrame2131329715>
          <StyledText>
            <StyledBalancingLifeAndSchool $device={device}>
              {"Balancing life and school"}
            </StyledBalancingLifeAndSchool>
            <StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent>
              {
                "It was important for me to find a school that matched my busy life as a non-traditional student"
              }
            </StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent>
          </StyledText>
          <StyledInfo>
            <StyledAsyaW $device={device}>{"Asya W."}</StyledAsyaW>
            <StyledClassOf2009>{"Class of 2009"}</StyledClassOf2009>
          </StyledInfo>
        </StyledFrame2131329715>
        <StyledVideoControl>
          <VideoControl type={"Play"} state={"Default"} />
        </StyledVideoControl>
      </StyledContent>
    </StyledRoot>
  );
});
