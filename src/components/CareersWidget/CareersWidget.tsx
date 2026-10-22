import React from "react";
import styled, { css } from "styled-components";
import { Chips } from "../Chips";
import { MobileDropdown } from "../MobileDropdown";
import { Button } from "../Button";

export interface CareersWidgetProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    overflow: hidden;
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
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 629px;
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
    color: ${theme["accent"]["accentBrand"]};
  `,
);

const StyledDecorativeLine = styled.div(
  ({ theme }) => css`
    background-color: ${theme["surface"]["surfaceBrand"]};
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
            gap: 32px;
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

const StyledProfessionalPathways = styled.h2<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            font-family: "Georgia";
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
          `;
        case "Mobile":
          return css`
            font-family: "Georgia";
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

const StyledContainer2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrame2131329611 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledChips = styled.ul(
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
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledChips2 = styled.li(() => css``);

const StyledChips22 = styled.li(() => css``);

const StyledChips3 = styled.li(() => css``);

const StyledChips4 = styled.li(() => css``);

const StyledChips5 = styled.li(() => css``);

const StyledJobs = styled.section(
  ({ theme }) => css`
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
    overflow: hidden;
    background-color: ${theme["background"]["bgDefult"]};
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: ${theme["border"]["borderGray"]};
    border-radius: 20px;
  `,
);

const StyledFilter = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 24px;
            padding-bottom: 16px;
            padding-left: 24px;
            gap: 24px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 24px;
            justify-content: space-between;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledJobsAvailableIn = styled.div(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledJobs2 = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
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

const StyledDivider = styled.li(
  () => css`
    border-radius: 0px;
  `,
);

const StyledItem = styled.li<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 12px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 24px;
            padding-bottom: 0px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 8px;
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

const StyledPublicRelationsSpecialist = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledInfo = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
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
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOpenings = styled.div<{ $device: "Mobile" | "Desktop" }>(
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
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
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

const Styled18500 = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["aqua"]["700"]};
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

const StyledJobOpeningsInThePastYear = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledSalary = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: 190px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styled68000 = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["aqua"]["700"]};
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

const StyledMedianSalaryInCalifornia = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledDivider2 = styled.li(
  () => css`
    border-radius: 0px;
  `,
);

const Styleditem = styled.li<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 12px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 24px;
            padding-bottom: 0px;
            padding-left: 24px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 16px;
            padding-bottom: 0px;
            padding-left: 16px;
            gap: 8px;
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

const StyledContentStrategist = styled.h3(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const StyledInfo2 = styled.div<{ $device: "Mobile" | "Desktop" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
            align-self: stretch;
          `;
        case "Mobile":
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
        default:
          return css``;
      }
    })()}
  `,
);

const StyledOpenings2 = styled.div<{ $device: "Mobile" | "Desktop" }>(
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
            gap: 4px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
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

const Styled14000 = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["aqua"]["700"]};
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

const StyledJobOpeningsInThePastYear2 = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledSalary2 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-end;
    width: 190px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const Styled79000 = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    color: ${theme["aqua"]["700"]};
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

const StyledMedianSalaryInCalifornia2 = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledVector12 = styled.li(
  () => css`
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

/** A careers widget that showcases professional pathways, featuring filterable job listings with openings and salary data, along with category chips and a call-to-action button. Supports both mobile and desktop layouts. */
export const CareersWidget = React.forwardRef<HTMLElement, CareersWidgetProps>(
  function CareersWidget({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Careers Widget"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledDecorativeLine />
        <StyledContainer $device={device}>
          <StyledProfessionalPathways $device={device}>
            {"Professional Pathways"}
          </StyledProfessionalPathways>
          <StyledContainer2>
            <StyledContent>
              <StyledFrame2131329611>
                <StyledChips>
                  <StyledChips2>
                    <Chips
                      rightIcon={true}
                      value={"Communications"}
                      leftIcon={false}
                      state={"Selected"}
                      size={"Small"}
                    />
                  </StyledChips2>
                  <StyledChips22>
                    <Chips
                      value={"Media"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Small"}
                    />
                  </StyledChips22>
                  <StyledChips3>
                    <Chips
                      value={"Public Relations"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Small"}
                    />
                  </StyledChips3>
                  <StyledChips4>
                    <Chips
                      value={"Marketing"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Small"}
                    />
                  </StyledChips4>
                  <StyledChips5>
                    <Chips
                      value={"Education"}
                      rightIcon={true}
                      leftIcon={false}
                      state={"Default"}
                      size={"Small"}
                    />
                  </StyledChips5>
                </StyledChips>
              </StyledFrame2131329611>
              <StyledJobs>
                <StyledFilter $device={device}>
                  <StyledJobsAvailableIn>
                    {"Jobs available in"}
                  </StyledJobsAvailableIn>
                  <MobileDropdown state={"Filled"} />
                </StyledFilter>
                <StyledJobs2>
                  <StyledDivider />
                  <StyledItem $device={device}>
                    <StyledPublicRelationsSpecialist>
                      {"Public Relations Specialist"}
                    </StyledPublicRelationsSpecialist>
                    <StyledInfo $device={device}>
                      <StyledOpenings $device={device}>
                        <Styled18500 $device={device}>{"18,500+"}</Styled18500>
                        <StyledJobOpeningsInThePastYear>
                          {"Job openings in the past year"}
                        </StyledJobOpeningsInThePastYear>
                      </StyledOpenings>
                      <StyledSalary>
                        <Styled68000 $device={device}>{"$68,000"}</Styled68000>
                        <StyledMedianSalaryInCalifornia>
                          {"Median Salary in California"}
                        </StyledMedianSalaryInCalifornia>
                      </StyledSalary>
                    </StyledInfo>
                  </StyledItem>
                  <StyledDivider2 />
                  <Styleditem $device={device}>
                    <StyledContentStrategist>
                      {"Content Strategist"}
                    </StyledContentStrategist>
                    <StyledInfo2 $device={device}>
                      <StyledOpenings2 $device={device}>
                        <Styled14000 $device={device}>{"14,000+"}</Styled14000>
                        <StyledJobOpeningsInThePastYear2>
                          {"Job openings in the past year"}
                        </StyledJobOpeningsInThePastYear2>
                      </StyledOpenings2>
                      <StyledSalary2>
                        <Styled79000 $device={device}>{"$79,000"}</Styled79000>
                        <StyledMedianSalaryInCalifornia2>
                          {"Median Salary in California"}
                        </StyledMedianSalaryInCalifornia2>
                      </StyledSalary2>
                    </StyledInfo2>
                  </Styleditem>
                  <StyledVector12 />
                </StyledJobs2>
              </StyledJobs>
            </StyledContent>
            <StyledCTAs>
              <Button
                label={true}
                bTNValue={"View All Career Options"}
                rightIcon={false}
                leftIcon={false}
                iconOnly={"False"}
                device={"Desktop"}
                size={"Medium"}
                hierarchy={"Secondary"}
                state={"Default"}
                type={"Default"}
              />
            </StyledCTAs>
          </StyledContainer2>
        </StyledContainer>
      </StyledRoot>
    );
  },
);
