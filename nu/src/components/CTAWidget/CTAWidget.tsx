import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../Button";

export interface CTAWidgetProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    background-color: ${theme["background"]["bgDefult"]};
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
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 416px;
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
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 350px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["accent"]["accentAqua"]};
    border-radius: 0px;
  `,
);

const StyledContainer = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 32px;
            padding-right: 32px;
            padding-bottom: 32px;
            padding-left: 32px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-left: 20px;
            gap: 24px;
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

const StyledText = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
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
            align-items: center;
            width: 354px;
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
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTakeTheNextStep = styled.h2<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: var(--font-georgia, "Georgia"), serif;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
          `;
        case "Mobile":
          return css`
            font-family: var(--font-georgia, "Georgia"), serif;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLearnMoreAboutOurCareerFocusedProgramsAndFlexibleOptionsForWorkingProfessionals =
  styled.p(
    ({ theme }) => css`
      color: ${theme["text"]["textOnLightDefault"]};
      font-family: var(--font-roboto, "Roboto"), sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
  );

const StyledCTAs = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
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

const StyledButton = styled.li(() => css``);

const StyledButton2 = styled.li(() => css``);

/** A Call-to-Action (CTA) widget that presents a headline, supporting description, and two action buttons. Supports both Mobile and Desktop layout variants. */
export const CTAWidget = React.forwardRef<HTMLElement, CTAWidgetProps>(
  function CTAWidget({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Call to Action"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledDecorativeLine />
        <StyledContainer $device={device}>
          <StyledText $device={device}>
            <StyledTakeTheNextStep $device={device}>
              {"Take the Next Step"}
            </StyledTakeTheNextStep>
            <StyledLearnMoreAboutOurCareerFocusedProgramsAndFlexibleOptionsForWorkingProfessionals>
              {
                "Learn more about our career-focused programs and flexible options for working professionals."
              }
            </StyledLearnMoreAboutOurCareerFocusedProgramsAndFlexibleOptionsForWorkingProfessionals>
          </StyledText>
          <StyledCTAs>
            <StyledButton>
              <Button
                label={true}
                bTNValue={"Request Info"}
                rightIcon={false}
                leftIcon={false}
                iconOnly={"False"}
                device={"Desktop"}
                size={"Medium"}
                hierarchy={"Secondary"}
                type={"Default"}
              />
            </StyledButton>
            <StyledButton2>
              <Button
                label={true}
                bTNValue={"Apply for Aid"}
                rightIcon={false}
                leftIcon={false}
                iconOnly={"False"}
                device={"Desktop"}
                size={"Medium"}
                hierarchy={"Primary"}
                type={"Default"}
              />
            </StyledButton2>
          </StyledCTAs>
        </StyledContainer>
      </StyledRoot>
    );
  },
);
