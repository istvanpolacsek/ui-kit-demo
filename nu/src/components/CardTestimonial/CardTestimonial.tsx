import React from "react";
import styled, { css } from "styled-components";
import { Avatar } from "../Avatar";
import { SideImage } from "../SideImage";

export interface CardTestimonialProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "device" | "type"
> {
  device?: "Desktop" | "Mobile" | "Mobil";
  type?: "Image" | "Avatar" | "Large Image" | "Medium Image";
}

const StyledRoot = styled.article<{
  $device: "Desktop" | "Mobile" | "Mobil";
  $type: "Image" | "Avatar" | "Large Image" | "Medium Image";
}>(
  ({ theme, $device, $type }) => css`
    overflow: hidden;
    ${(() => {
      switch (JSON.stringify([$device, $type])) {
        case '["Desktop","Avatar"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 415px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Mobile","Avatar"]':
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
        case '["Desktop","Medium Image"]':
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
            height: 252px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Mobile","Image"]':
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
        case '["Desktop","Large Image"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10.799999237060547px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 800px;
            height: 300px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case '["Mobil","Large Image"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 10.799999237060547px;
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
    ${(() => {
      switch ($type) {
        case "Avatar":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Medium Image":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Image":
          return css`
            background-color: ${"#ffffff"};
          `;
        case "Large Image":
          return css`
            background-color: ${theme["surface"]["surfaceDefault"]};
          `;
        default:
          return css``;
      }
    })()}
  color: #191a1c;
  `,
);

const StyledDecorativeLine = styled.div<{
  $type: "Image" | "Avatar" | "Large Image" | "Medium Image";
}>(
  ({ theme, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Avatar":
          return css`
            background-color: ${"#24bdc1"};
          `;
        case "Medium Image":
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case "Image":
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        case "Large Image":
          return css`
            background-color: ${theme["accent"]["accentBrand"]};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent = styled.div<{
  $device: "Desktop" | "Mobile" | "Mobil";
  $type: "Image" | "Avatar" | "Large Image" | "Medium Image";
}>(
  ({ $device, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$device, $type])) {
        case '["Desktop","Avatar"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case '["Mobile","Avatar"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case '["Desktop","Medium Image"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 28px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case '["Mobile","Image"]':
          return css`
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
          `;
        case '["Desktop","Large Image"]':
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 14.399999618530273px;
            padding-right: 21.599998474121094px;
            padding-bottom: 14.399999618530273px;
            padding-left: 21.599998474121094px;
            gap: 25.19999885559082px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
            align-self: stretch;
          `;
        case '["Mobil","Large Image"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 14.399999618530273px;
            padding-right: 21.599998474121094px;
            padding-bottom: 14.399999618530273px;
            padding-left: 21.599998474121094px;
            gap: 25.19999885559082px;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledAuthor = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledQuoteMark = styled.div(
  () => css`
    position: absolute;
    left: 79px;
    top: 13.96875px;
    width: 34.228515625px;
    height: 34.228515625px;
    display: flex;
    flex-direction: row;
    padding-top: 12.02734375px;
    padding-right: 10.334564208984375px;
    padding-bottom: 11.5047607421875px;
    padding-left: 10.5234375px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: 34.228515625px;
    height: 34.228515625px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #24bdc1;
    border-radius: 1000px;
  `,
);

const Styled = styled.div(
  () => css`
    width: 13.370513916015625px;
    height: 10.6964111328125px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #ffffff;
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
  $device: "Desktop" | "Mobile" | "Mobil";
}>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
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

const StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent =
  styled.p(
    () => css`
      color: #191a1c;
      font-family: var(--font-roboto, "Roboto"), sans-serif;
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
    gap: 2px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAsyaW = styled.p<{ $device: "Desktop" | "Mobile" | "Mobil" }>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledSideImage = styled.div<{ $device: "Desktop" | "Mobile" | "Mobil" }>(
  ({ $device }) => css`
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Mobil":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame2131329715 = styled.div<{
  $device: "Desktop" | "Mobile" | "Mobil";
  $type: "Image" | "Avatar" | "Large Image" | "Medium Image";
}>(
  ({ $device, $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch (JSON.stringify([$device, $type])) {
        case '["Desktop","Medium Image"]':
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case '["Mobile","Image"]':
          return css`
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
          `;
        case '["Desktop","Large Image"]':
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
            flex: 1 1 0;
          `;
        case '["Mobil","Large Image"]':
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

const StyledText2 = styled.div<{
  $type: "Image" | "Avatar" | "Large Image" | "Medium Image";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Medium Image":
          return css`
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
          `;
        case "Image":
          return css`
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
          `;
        case "Large Image":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 7.199999809265137px;
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

const StyledBalancingLifeAndSchool2 = styled.h3<{
  $device: "Desktop" | "Mobile" | "Mobil";
}>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

const StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent2 =
  styled.p(
    () => css`
      color: #191a1c;
      font-family: var(--font-roboto, "Roboto"), sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledImmenseMilestone = styled.h3(
  () => css`
    color: #191a1c;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 21.6px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledEarningMyBachelorSDegreeIsAnImmenseMilestoneForMeNowIHaveEarnedTwoAssociateDegreesAndMyBachelorSDegreeIHaveProvenToMyselfThatIAmWorthyAndCapableOfBeingEducatedAndGoingAfterMyDreams =
  styled.p(
    () => css`
      color: #191a1c;
      font-family: var(--font-roboto, "Roboto"), sans-serif;
      font-size: 14.4px;
      font-weight: 400;
      line-height: 1.5;
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
    gap: 0px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAsyaW2 = styled.p<{ $device: "Desktop" | "Mobile" | "Mobil" }>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.005em;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-roboto, "Roboto"), sans-serif;
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

const StyledClassOf20092 = styled.p(
  () => css`
    color: #191a1c;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledLisaA = styled.p(
  () => css`
    color: #191a1c;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const StyledBachelorOfArtsInEarlyChildhoodEducationClassOf2022 = styled.p(
  () => css`
    color: #191a1c;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 14.4px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A testimonial card component displaying a student quote, author information, and optional avatar or image. Supports multiple layout variants (Avatar, Image, Large Image, Medium Image) across Desktop and Mobile breakpoints. */
export const CardTestimonial = React.forwardRef<
  HTMLElement,
  CardTestimonialProps
>(function CardTestimonial(
  { device = "Desktop", type = "Avatar", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Student testimonial"
      {...rest}
      ref={ref}
      $device={device}
      $type={type}
    >
      <StyledDecorativeLine $type={type} />
      <StyledContent $device={device} $type={type}>
        {type === "Avatar" && (
          <StyledAuthor>
            {type === "Avatar" && <Avatar size={"Large"} type={"Image"} />}
            {type === "Avatar" && (
              <StyledQuoteMark>
                {type === "Avatar" && <Styled />}
              </StyledQuoteMark>
            )}
          </StyledAuthor>
        )}
        {type === "Avatar" && (
          <StyledText>
            {type === "Avatar" && (
              <StyledBalancingLifeAndSchool $device={device}>
                {"Balancing life and school"}
              </StyledBalancingLifeAndSchool>
            )}
            {type === "Avatar" && (
              <StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent>
                {
                  "It was important for me to find a school that matched my busy life as a non-traditional student"
                }
              </StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent>
            )}
          </StyledText>
        )}
        {type === "Avatar" && (
          <StyledInfo>
            {type === "Avatar" && (
              <StyledAsyaW $device={device}>{"Asya W."}</StyledAsyaW>
            )}
            {type === "Avatar" && (
              <StyledClassOf2009>{"Class of 2009"}</StyledClassOf2009>
            )}
          </StyledInfo>
        )}
        {["Medium Image", "Image", "Large Image"].includes(type) && (
          <StyledSideImage $device={device}>
            <SideImage device={"Web"} />
          </StyledSideImage>
        )}
        {["Medium Image", "Image", "Large Image"].includes(type) && (
          <StyledFrame2131329715 $device={device} $type={type}>
            {["Medium Image", "Image", "Large Image"].includes(type) && (
              <StyledText2 $type={type}>
                {["Medium Image", "Image"].includes(type) && (
                  <StyledBalancingLifeAndSchool2 $device={device}>
                    {"Balancing life and school"}
                  </StyledBalancingLifeAndSchool2>
                )}
                {["Medium Image", "Image"].includes(type) && (
                  <StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent2>
                    {
                      "It was important for me to find a school that matched my busy life as a non-traditional student"
                    }
                  </StyledItWasImportantForMeToFindASchoolThatMatchedMyBusyLifeAsANonTraditionalStudent2>
                )}
                {type === "Large Image" && (
                  <StyledImmenseMilestone>
                    {"Immense Milestone"}
                  </StyledImmenseMilestone>
                )}
                {type === "Large Image" && (
                  <StyledEarningMyBachelorSDegreeIsAnImmenseMilestoneForMeNowIHaveEarnedTwoAssociateDegreesAndMyBachelorSDegreeIHaveProvenToMyselfThatIAmWorthyAndCapableOfBeingEducatedAndGoingAfterMyDreams>
                    {
                      "Earning my bachelor's degree is an immense milestone for me. Now, I have earned two associate degrees and my bachelor's degree. I have proven to myself that I am worthy and capable of being educated and going after my dreams."
                    }
                  </StyledEarningMyBachelorSDegreeIsAnImmenseMilestoneForMeNowIHaveEarnedTwoAssociateDegreesAndMyBachelorSDegreeIHaveProvenToMyselfThatIAmWorthyAndCapableOfBeingEducatedAndGoingAfterMyDreams>
                )}
              </StyledText2>
            )}
            {["Medium Image", "Image", "Large Image"].includes(type) && (
              <StyledInfo2>
                {["Medium Image", "Image"].includes(type) && (
                  <StyledAsyaW2 $device={device}>{"Asya W."}</StyledAsyaW2>
                )}
                {["Medium Image", "Image"].includes(type) && (
                  <StyledClassOf20092>{"Class of 2009"}</StyledClassOf20092>
                )}
                {type === "Large Image" && (
                  <StyledLisaA>{"Lisa A."}</StyledLisaA>
                )}
                {type === "Large Image" && (
                  <StyledBachelorOfArtsInEarlyChildhoodEducationClassOf2022>
                    {
                      "Bachelor of Arts in Early Childhood Education, Class of 2022"
                    }
                  </StyledBachelorOfArtsInEarlyChildhoodEducationClassOf2022>
                )}
              </StyledInfo2>
            )}
          </StyledFrame2131329715>
        )}
      </StyledContent>
    </StyledRoot>
  );
});
