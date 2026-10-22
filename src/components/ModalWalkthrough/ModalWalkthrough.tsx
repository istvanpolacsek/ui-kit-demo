import React from "react";
import styled, { css } from "styled-components";
import { PrimaryButtonNeutral } from "../PrimaryButtonNeutral";
import { TertiaryButtonSubtle } from "../TertiaryButtonSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface ModalWalkthroughProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "step"
> {
  step?: "Intro" | "Customize" | "Design" | "Settings" | "Share" | "New update";
}

const StyledRoot = styled.section<{
  $step: "Intro" | "Customize" | "Design" | "Settings" | "Share" | "New update";
}>(
  ({ $step }) => css`
    background-color: #1a1a1a;
    border: 1.4612070322036743px solid transparent;
    box-sizing: border-box;
    border-color: rgba(254, 254, 254, 0.07999999821186066);
    border-radius: 8px;
    box-shadow:
      0px 12px 28px 0px rgba(0, 0, 0, 0.32),
      0px 40px 48px 0px rgba(0, 0, 0, 0.24);
    ${(() => {
      switch ($step) {
        case "Intro":
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
            width: 640px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Design":
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
            width: 360px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Settings":
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
            width: fit-content;
          `;
        case "Share":
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
            width: fit-content;
          `;
        case "Customize":
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
            width: fit-content;
          `;
        case "New update":
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
            width: 640px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVid = styled.div<{
  $step: "Intro" | "Customize" | "Design" | "Settings" | "Share" | "New update";
}>(
  ({ $step }) => css`
    overflow: hidden;
    width: 640px;
    height: 310px;
    box-sizing: border-box;
    ${(() => {
      switch ($step) {
        case "Intro":
          return css`
            background-color: ${"transparent"};
          `;
        case "New update":
          return css`
            background-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFooter = styled.footer<{
  $step: "Intro" | "Customize" | "Design" | "Settings" | "Share" | "New update";
}>(
  ({ $step }) => css`
    ${(() => {
      switch ($step) {
        case "Intro":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Settings":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 360px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Share":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 360px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Customize":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 360px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "New update":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 32px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($step) {
        case "Intro":
          return css`
            box-shadow: 0px 5.84px 14.61px 2.92px rgba(12, 44, 76, 0.08);
          `;
        case "Settings":
          return css`
            box-shadow: 0px 4.4px 11px 2.2px rgba(12, 44, 76, 0.08);
          `;
        case "Share":
          return css`
            box-shadow: 0px 4.4px 11px 2.2px rgba(12, 44, 76, 0.08);
          `;
        case "Customize":
          return css`
            box-shadow: 0px 4.4px 11px 2.2px rgba(12, 44, 76, 0.08);
          `;
        case "New update":
          return css`
            box-shadow: 0px 5.84px 14.61px 2.92px rgba(12, 44, 76, 0.08);
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText = styled.section<{
  $step: "Intro" | "Customize" | "Design" | "Settings" | "Share" | "New update";
}>(
  ({ $step }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($step) {
        case "Intro":
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
            align-self: stretch;
          `;
        case "Settings":
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
        case "Share":
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
        case "Customize":
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
        case "New update":
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
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledWelcomeToUXfolio = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledGetStartedFasterByCheckingOutTheBasicsOfUXfolio = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledSettingsPanel = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledManageYourNavigationPagesDomainsPortfolioPasswordAndRestoreDeletedItems =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledShare = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledChangeHowYourPortfolioShouldLookWhenSharedOnSocialMediaAndMessagingApps =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledCustomize = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledCustomizeYourTemplateAndAddYourFirstCaseStudyToYourPortfolio =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledTemplatesGotUpdated = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledSelectANewTemplateToGetDeeperCustomization = styled.p(
  () => css`
    color: #adadad;
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
    gap: 14.61207103729248px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledButtonRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const Styled2Of4 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledButtons = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled3Of4 = styled.div(
  () => css`
    color: #707070;
  `,
);

const Styled4Of4 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledA = styled.div(
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

const StyledThumbnail2 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    width: 360px;
    height: 200px;
    box-sizing: border-box;
  `,
);

const StyledFooter2 = styled.footer(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    width: 360px;
    box-sizing: border-box;
    flex-shrink: 0;
    box-shadow: 0px 4.4px 11px 2.2px rgba(12, 44, 76, 0.08);
  `,
);

const StyledText2 = styled.section(
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

const StyledDesignPanel = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledHereYouCanChangeYourTemplateFontsColorsProjectGridAndButtons =
  styled.p(
    () => css`
      color: #adadad;
    `,
  );

const StyledButtonRow2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    box-sizing: border-box;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const Styled1Of4 = styled.div(
  () => css`
    color: #707070;
  `,
);

const StyledButtons2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledThumbnail3 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    width: 360px;
    height: 200px;
    box-sizing: border-box;
  `,
);

const StyledThumbnail4 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    width: 360px;
    height: 200px;
    box-sizing: border-box;
  `,
);

const StyledThumbnail5 = styled.div(
  () => css`
    overflow: hidden;
    background-color: transparent;
    width: 360px;
    height: 200px;
    box-sizing: border-box;
  `,
);

/** A multi-step walkthrough modal that guides users through key features of UXfolio, including intro, customization, design, settings, share, and new update steps. Displays contextual thumbnails, descriptive text, and navigation controls (previous/next buttons with step indicators). */
export const ModalWalkthrough = React.forwardRef<
  HTMLElement,
  ModalWalkthroughProps
>(function ModalWalkthrough({ step = "Intro", ...rest }, ref) {
  return (
    <StyledRoot
      role="dialog"
      aria-label="Walkthrough"
      aria-expanded
      {...rest}
      ref={ref}
      $step={step}
    >
      {["Intro", "New update"].includes(step) && (
        <StyledVid $step={step}></StyledVid>
      )}
      {["Intro", "Settings", "Share", "Customize", "New update"].includes(
        step,
      ) && (
        <StyledFooter $step={step}>
          {["Intro", "Settings", "Share", "Customize", "New update"].includes(
            step,
          ) && (
            <StyledText $step={step}>
              {step === "Intro" && (
                <StyledWelcomeToUXfolio>
                  {"Welcome to UXfolio"}
                </StyledWelcomeToUXfolio>
              )}
              {step === "Intro" && (
                <StyledGetStartedFasterByCheckingOutTheBasicsOfUXfolio>
                  {"Get started faster by checking out the basics of UXfolio"}
                </StyledGetStartedFasterByCheckingOutTheBasicsOfUXfolio>
              )}
              {step === "Settings" && (
                <StyledSettingsPanel>{"Settings panel"}</StyledSettingsPanel>
              )}
              {step === "Settings" && (
                <StyledManageYourNavigationPagesDomainsPortfolioPasswordAndRestoreDeletedItems>
                  {
                    "Manage your navigation, pages, domains, portfolio password, and restore deleted items"
                  }
                </StyledManageYourNavigationPagesDomainsPortfolioPasswordAndRestoreDeletedItems>
              )}
              {step === "Share" && <StyledShare>{"Share"}</StyledShare>}
              {step === "Share" && (
                <StyledChangeHowYourPortfolioShouldLookWhenSharedOnSocialMediaAndMessagingApps>
                  {
                    "Change how your portfolio should look when shared on social media and messaging apps"
                  }
                </StyledChangeHowYourPortfolioShouldLookWhenSharedOnSocialMediaAndMessagingApps>
              )}
              {step === "Customize" && (
                <StyledCustomize>{"Customize"}</StyledCustomize>
              )}
              {step === "Customize" && (
                <StyledCustomizeYourTemplateAndAddYourFirstCaseStudyToYourPortfolio>
                  {
                    "Customize your template and add your first case study to your portfolio"
                  }
                </StyledCustomizeYourTemplateAndAddYourFirstCaseStudyToYourPortfolio>
              )}
              {step === "New update" && (
                <StyledTemplatesGotUpdated>
                  {"Templates got updated!"}
                </StyledTemplatesGotUpdated>
              )}
              {step === "New update" && (
                <StyledSelectANewTemplateToGetDeeperCustomization>
                  {"Select a new template to get deeper customization"}
                </StyledSelectANewTemplateToGetDeeperCustomization>
              )}
            </StyledText>
          )}
          {["Intro", "New update"].includes(step) && (
            <StyledCTAs>
              {["Intro", "New update"].includes(step) && (
                <PrimaryButtonNeutral
                  state={"Default"}
                  size={"Regular"}
                  mode={"Dark"}
                />
              )}
            </StyledCTAs>
          )}
          {["Settings", "Share", "Customize"].includes(step) && (
            <StyledButtonRow>
              {step === "Settings" && <Styled2Of4>{"2 of 4"}</Styled2Of4>}
              {["Settings", "Share", "Customize"].includes(step) && (
                <StyledButtons>
                  {["Settings", "Share", "Customize"].includes(step) && (
                    <TertiaryButtonSubtle mode={"Dark"} size={"Regular"} />
                  )}
                  {["Settings", "Share", "Customize"].includes(step) && (
                    <TertiaryButtonNeutral
                      mode={"Dark"}
                      hasIcon={"False"}
                      size={"Regular"}
                    />
                  )}
                </StyledButtons>
              )}
              {step === "Share" && <Styled3Of4>{"3 of 4"}</Styled3Of4>}
              {step === "Customize" && <Styled4Of4>{"4 of 4"}</Styled4Of4>}
            </StyledButtonRow>
          )}
        </StyledFooter>
      )}
      {step === "Design" && (
        <StyledA>
          {step === "Design" && <StyledThumbnail2></StyledThumbnail2>}
          {step === "Design" && (
            <StyledFooter2>
              {step === "Design" && (
                <StyledText2>
                  {step === "Design" && (
                    <StyledDesignPanel>{"Design panel"}</StyledDesignPanel>
                  )}
                  {step === "Design" && (
                    <StyledHereYouCanChangeYourTemplateFontsColorsProjectGridAndButtons>
                      {
                        "Here you can change your template, fonts, colors, project grid, and buttons"
                      }
                    </StyledHereYouCanChangeYourTemplateFontsColorsProjectGridAndButtons>
                  )}
                </StyledText2>
              )}
              {step === "Design" && (
                <StyledButtonRow2>
                  {step === "Design" && <Styled1Of4>{"1 of 4"}</Styled1Of4>}
                  {step === "Design" && (
                    <StyledButtons2>
                      {step === "Design" && (
                        <TertiaryButtonSubtle mode={"Dark"} size={"Regular"} />
                      )}
                      {step === "Design" && (
                        <TertiaryButtonNeutral
                          mode={"Dark"}
                          hasIcon={"False"}
                          size={"Regular"}
                        />
                      )}
                    </StyledButtons2>
                  )}
                </StyledButtonRow2>
              )}
            </StyledFooter2>
          )}
        </StyledA>
      )}
      {step === "Settings" && <StyledThumbnail3></StyledThumbnail3>}
      {step === "Share" && <StyledThumbnail4></StyledThumbnail4>}
      {step === "Customize" && <StyledThumbnail5></StyledThumbnail5>}
    </StyledRoot>
  );
});
