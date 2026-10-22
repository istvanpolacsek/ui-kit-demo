import React from "react";
import styled, { css } from "styled-components";
import { Chips } from "../Chips";
import { LinkButton } from "../LinkButton";
import { Button } from "../Button";
import { DesktopDropdown } from "../DesktopDropdown";
import { MobileDropdown } from "../MobileDropdown";

export interface HomepageSearchWidgetProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "steps" | "device"
> {
  steps?: "Step 1" | "Step 2" | "Step 3" | "Step 4";
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    position: relative;
    border: 1px solid transparent;
    box-sizing: border-box;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 48px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 605px;
            height: 470px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
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
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            background-color: ${theme["surface"]["surfaceDefault"]};
          `;
        case "Mobile":
          return css`
            background-color: ${"#ffffff"};
          `;
        default:
          return css``;
      }
    })()}
  ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            border-color: ${"#cecece"};
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["accent"]["accentGray"]};
  `,
);

const StyledTextContent = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    border-radius: 0px;
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
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 16px;
            padding-bottom: 24px;
            padding-left: 16px;
            gap: 12px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledsupportingTheWholeYou = styled.p<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            color: ${theme["text"]["eyebrowOnLight"]};
          `;
        case "Mobile":
          return css`
            color: ${"#003a92"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          `;
        case "Mobile":
          return css`
            font-family: "Roboto";
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

const StyledBalanceLifeWhileEarningYourDegree = styled.h2<{
  $device: "Mobile" | "Web";
}>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            font-family: "Georgia";
            font-size: 40px;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.01em;
          `;
        case "Mobile":
          return css`
            font-family: "Georgia";
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.005em;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDivider = styled.div(
  () => css`
    border-radius: 0px;
  `,
);

const StyledSelection = styled.div(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledChooseAnAreaOfStudy = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledFrame2131330668 = styled.ul(
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
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledChips = styled.li(() => css``);

const StyledChips2 = styled.li(() => css``);

const StyledChips3 = styled.li(() => css``);

const StyledChips4 = styled.li(() => css``);

const StyledChips5 = styled.li(() => css``);

const StyledChips6 = styled.li(() => css``);

const StyledChips7 = styled.li(() => css``);

const StyledChips8 = styled.li(() => css``);

const StyledChips9 = styled.li(() => css``);

const StyledChooseADegreeLevel = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
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
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledChooseADegree = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledDesktopDropdown = styled.div<{
  $steps: "Step 1" | "Step 2" | "Step 3" | "Step 4";
}>(
  ({ $steps }) => css`
    ${(() => {
      switch ($steps) {
        case "Step 3":
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

const StyledRectangle1794 = styled.div(
  () => css`
    background-color: #c1bfcf;
    border-radius: 0px;
  `,
);

const StyledDropdowns = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 16px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledMobileDropdown = styled.div(
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

const StyledMobileDropdown2 = styled.div(
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

const StyledMobileDropdown3 = styled.div(
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

const StyledButtons2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 605px;
    height: 16px;
    background-color: ${theme["accent"]["accentBrand"]};
    border-radius: 0px;
  `,
);

const StyledRectangle17942 = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: -0.234375px;
    width: 350px;
    height: 16px;
    background-color: #003a92;
    border-radius: 0px;
  `,
);

/** A multi-step homepage search widget that guides users through selecting an area of study, degree level, and degree program. Supports both mobile and web layouts with chip selectors and dropdowns across up to four sequential steps. */
export const HomepageSearchWidget = React.forwardRef<
  HTMLElement,
  HomepageSearchWidgetProps
>(function HomepageSearchWidget(
  { steps = "Step 1", device = "Web", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="search"
      aria-label="Find your program"
      {...rest}
      ref={ref}
      $device={device}
    >
      <StyledTextContent $device={device}>
        <StyledsupportingTheWholeYou $device={device}>
          {"supporting the whole you"}
        </StyledsupportingTheWholeYou>
        <StyledBalanceLifeWhileEarningYourDegree $device={device}>
          {"Balance Life While\nEarning Your Degree"}
        </StyledBalanceLifeWhileEarningYourDegree>
        {device === "Web" && <StyledDivider />}
        {device === "Web" && (
          <StyledSelection>
            {steps === "Step 1" && device === "Web" && (
              <StyledChooseAnAreaOfStudy>
                {"Choose an Area of Study:"}
              </StyledChooseAnAreaOfStudy>
            )}
            {((steps === "Step 1" && device === "Web") ||
              (steps === "Step 2" && device === "Web")) && (
              <StyledFrame2131330668>
                {((steps === "Step 1" && device === "Web") ||
                  (steps === "Step 2" && device === "Web")) && (
                  <StyledChips>
                    <Chips
                      value={"Teaching & Education"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips>
                )}
                {((steps === "Step 1" && device === "Web") ||
                  (steps === "Step 2" && device === "Web")) && (
                  <StyledChips2>
                    <Chips
                      value={"Business & Marketing"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips2>
                )}
                {((steps === "Step 1" && device === "Web") ||
                  (steps === "Step 2" && device === "Web")) && (
                  <StyledChips3>
                    <Chips
                      value={"Healthcare"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips3>
                )}
                {((steps === "Step 1" && device === "Web") ||
                  (steps === "Step 2" && device === "Web")) && (
                  <StyledChips4>
                    <Chips
                      value={"Psychology"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips4>
                )}
                {((steps === "Step 1" && device === "Web") ||
                  (steps === "Step 2" && device === "Web")) && (
                  <StyledChips5>
                    <Chips
                      value={"Engineering"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips5>
                )}
                {steps === "Step 1" && device === "Web" && (
                  <StyledChips6>
                    <Chips
                      value={"Justice Public & Service"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips6>
                )}
                {steps === "Step 1" && device === "Web" && (
                  <StyledChips7>
                    <Chips
                      value={"Law"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips7>
                )}
                {steps === "Step 1" && device === "Web" && (
                  <StyledChips8>
                    <Chips
                      value={"Arts"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips8>
                )}
                {steps === "Step 1" && device === "Web" && (
                  <StyledChips9>
                    <Chips
                      value={"Science & Math "}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Large"}
                    />
                  </StyledChips9>
                )}
              </StyledFrame2131330668>
            )}
            {steps === "Step 2" && device === "Web" && (
              <StyledChooseADegreeLevel>
                {"Choose a Degree Level:"}
              </StyledChooseADegreeLevel>
            )}
            {((steps === "Step 2" && device === "Web") ||
              (steps === "Step 3" && device === "Web") ||
              (steps === "Step 4" && device === "Web")) && (
              <StyledButtons>
                {((steps === "Step 2" && device === "Web") ||
                  (steps === "Step 3" && device === "Web") ||
                  (steps === "Step 4" && device === "Web")) && (
                  <LinkButton
                    linkValue={"Back"}
                    rightIcon={false}
                    leftIcon={true}
                    size={"Large"}
                    device={"Desktop"}
                    state={"Default"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                )}
                {((steps === "Step 2" && device === "Web") ||
                  (steps === "Step 3" && device === "Web") ||
                  (steps === "Step 4" && device === "Web")) && (
                  <Button
                    label={true}
                    bTNValue={"View All"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Desktop"}
                    size={"Small"}
                    hierarchy={"Primary"}
                    state={"Default"}
                    type={"Default"}
                  />
                )}
              </StyledButtons>
            )}
            {((steps === "Step 3" && device === "Web") ||
              (steps === "Step 4" && device === "Web")) && (
              <StyledChooseADegree>{"Choose a Degree:"}</StyledChooseADegree>
            )}
            {((steps === "Step 3" && device === "Web") ||
              (steps === "Step 4" && device === "Web")) && (
              <StyledDesktopDropdown $steps={steps}>
                <DesktopDropdown state={"Default"} />
              </StyledDesktopDropdown>
            )}
          </StyledSelection>
        )}
        {device === "Mobile" && <StyledRectangle1794 />}
        {device === "Mobile" && (
          <StyledDropdowns>
            {device === "Mobile" && (
              <StyledMobileDropdown>
                <MobileDropdown state={"Default"} />
              </StyledMobileDropdown>
            )}
            {((steps === "Step 2" && device === "Mobile") ||
              (steps === "Step 3" && device === "Mobile") ||
              (steps === "Step 4" && device === "Mobile")) && (
              <StyledMobileDropdown2>
                <MobileDropdown state={"Default"} />
              </StyledMobileDropdown2>
            )}
            {((steps === "Step 3" && device === "Mobile") ||
              (steps === "Step 4" && device === "Mobile")) && (
              <StyledMobileDropdown3>
                <MobileDropdown state={"Default"} />
              </StyledMobileDropdown3>
            )}
            {((steps === "Step 3" && device === "Mobile") ||
              (steps === "Step 4" && device === "Mobile")) && (
              <StyledButtons2>
                {((steps === "Step 3" && device === "Mobile") ||
                  (steps === "Step 4" && device === "Mobile")) && (
                  <LinkButton
                    linkValue={"Reset"}
                    rightIcon={false}
                    leftIcon={true}
                    size={"Large"}
                    device={"Mobile"}
                    state={"Default"}
                    hierarchy={"Secondary"}
                    type={"Default"}
                  />
                )}
                {((steps === "Step 3" && device === "Mobile") ||
                  (steps === "Step 4" && device === "Mobile")) && (
                  <Button
                    label={true}
                    bTNValue={"View All"}
                    rightIcon={false}
                    leftIcon={false}
                    iconOnly={"False"}
                    device={"Mobile"}
                    size={"Small"}
                    hierarchy={"Primary"}
                    state={"Default"}
                    type={"Default"}
                  />
                )}
              </StyledButtons2>
            )}
          </StyledDropdowns>
        )}
      </StyledTextContent>
      {device === "Web" && <StyledDecorativeLine />}
      {device === "Mobile" && <StyledRectangle17942 />}
    </StyledRoot>
  );
});
