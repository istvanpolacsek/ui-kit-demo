import React from "react";
import styled, { css } from "styled-components";
import { ChevronControl } from "../ChevronControl";
import { MediaForSliders } from "../MediaForSliders";
import { Button } from "../Button";

export interface MediaSliderSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    background-color: #f0f4fa;
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 84px;
            padding-bottom: 48px;
            padding-left: 84px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 48px;
            padding-right: 20px;
            padding-bottom: 48px;
            padding-left: 20px;
            gap: 32px;
            justify-content: flex-start;
            align-items: center;
            width: 390px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContent = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: 1272px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
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
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledShareYourStory = styled.h2(
  () => css`
    color: #191a1c;
    font-family: "Georgia";
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  `,
);

const StyledHowAreYouBalancingAllYourANDsWhileBuildingYourFutureShareYourTop2025MomentsAndTagNationalUniversityToJoinTheConversation =
  styled.p(
    () => css`
      color: #333333;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledTestimonials = styled.div(
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
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCTAs = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFrame2131329719 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledShareYourStory2 = styled.h2(
  () => css`
    color: #191a1c;
    font-family: "Georgia";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
  `,
);

const StyledHowAreYouBalancingAllYourANDsWhileBuildingYourFutureShareYourTop2025MomentsAndTagNationalUniversityToJoinTheConversation2 =
  styled.p(
    () => css`
      color: #333333;
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledFrame2131330656 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMediaForSliders = styled.div(
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

const StyledControl = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 28px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCTAs2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

/** A media slider section that displays a 'Share Your Story' prompt with a title, descriptive text, a navigable media carousel with chevron controls, and a call-to-action button. Supports Desktop and Mobile layout variants. */
export const MediaSliderSection = React.forwardRef<
  HTMLElement,
  MediaSliderSectionProps
>(function MediaSliderSection({ device = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      role="region"
      aria-label="Share Your Story Media Slider"
      {...rest}
      ref={ref}
      $device={device}
    >
      {device === "Desktop" && (
        <StyledContent>
          {device === "Desktop" && (
            <StyledTitle>
              {device === "Desktop" && (
                <StyledShareYourStory>
                  {"Share Your Story"}
                </StyledShareYourStory>
              )}
              {device === "Desktop" && (
                <StyledHowAreYouBalancingAllYourANDsWhileBuildingYourFutureShareYourTop2025MomentsAndTagNationalUniversityToJoinTheConversation>
                  {
                    "How are you balancing all your ANDs while building your future?  Share your Top 2025 moments and tag National University to join the conversation."
                  }
                </StyledHowAreYouBalancingAllYourANDsWhileBuildingYourFutureShareYourTop2025MomentsAndTagNationalUniversityToJoinTheConversation>
              )}
            </StyledTitle>
          )}
          {device === "Desktop" && (
            <StyledTestimonials>
              {device === "Desktop" && <ChevronControl />}
              {device === "Desktop" && <MediaForSliders device={"Desktop"} />}
              {device === "Desktop" && <ChevronControl />}
            </StyledTestimonials>
          )}
          {device === "Desktop" && (
            <StyledCTAs>
              {device === "Desktop" && (
                <Button
                  label={true}
                  bTNValue={"share your story now"}
                  rightIcon={false}
                  leftIcon={false}
                  iconOnly={"False"}
                  device={"Desktop"}
                  size={"Medium"}
                  hierarchy={"Primary"}
                  state={"Default"}
                  type={"Default"}
                />
              )}
            </StyledCTAs>
          )}
        </StyledContent>
      )}
      {device === "Mobile" && (
        <StyledFrame2131329719>
          {device === "Mobile" && (
            <StyledShareYourStory2>{"Share Your Story"}</StyledShareYourStory2>
          )}
          {device === "Mobile" && (
            <StyledHowAreYouBalancingAllYourANDsWhileBuildingYourFutureShareYourTop2025MomentsAndTagNationalUniversityToJoinTheConversation2>
              {
                "How are you balancing all your ANDs while building your future? Share your Top 2025 moments and tag National University to join the conversation."
              }
            </StyledHowAreYouBalancingAllYourANDsWhileBuildingYourFutureShareYourTop2025MomentsAndTagNationalUniversityToJoinTheConversation2>
          )}
        </StyledFrame2131329719>
      )}
      {device === "Mobile" && (
        <StyledFrame2131330656>
          {device === "Mobile" && (
            <StyledMediaForSliders>
              <MediaForSliders device={"Mobile"} />
            </StyledMediaForSliders>
          )}
          {device === "Mobile" && (
            <StyledControl>
              {device === "Mobile" && <ChevronControl />}
              {device === "Mobile" && <ChevronControl />}
            </StyledControl>
          )}
        </StyledFrame2131330656>
      )}
      {device === "Mobile" && (
        <StyledCTAs2>
          {device === "Mobile" && (
            <Button
              label={true}
              bTNValue={"share your story now"}
              rightIcon={false}
              leftIcon={false}
              iconOnly={"False"}
              device={"Mobile"}
              size={"Large"}
              hierarchy={"Primary"}
              state={"Default"}
              type={"Default"}
            />
          )}
        </StyledCTAs2>
      )}
    </StyledRoot>
  );
});
