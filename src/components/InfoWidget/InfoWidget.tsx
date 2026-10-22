import React from "react";
import styled, { css } from "styled-components";
import { DesktopDropdown } from "../DesktopDropdown";
import { MobileDropdown } from "../MobileDropdown";
import { Button } from "../Button";

export interface InfoWidgetProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    background-color: #ffffff;
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
            justify-content: center;
            align-items: center;
            width: fit-content;
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
            justify-content: center;
            align-items: center;
            width: 390px;
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
  () => css`
    background-color: #24bdc1;
    border-radius: 0px;
  `,
);

const StyledContent = styled.div<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 64px;
            padding-right: 64px;
            padding-bottom: 64px;
            padding-left: 64px;
            gap: 20px;
            justify-content: flex-start;
            align-items: flex-start;
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
            gap: 20px;
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

const StyledTitle = styled.div<{ $device: "Mobile" | "Web" }>(
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
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 564px;
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
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTitle2 = styled.div(
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

const StyledRequestForInformation = styled.h2<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    color: #191a1c;
    ${(() => {
      switch ($device) {
        case "Web":
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

const StyledTakeTheFirstStepWithNationalUniversity = styled.p(
  () => css`
    color: #191a1c;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledDropdowns = styled.ul<{ $device: "Mobile" | "Web" }>(
  ({ $device }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
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
            gap: 16px;
            justify-content: flex-start;
            align-items: flex-start;
            height: 188px;
            box-sizing: border-box;
            flex-shrink: 0;
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
            gap: 12px;
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

const StyledDesktopDropdown = styled.li(
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

const StyledDesktopDropdown2 = styled.li(
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

const StyledMobileDropdown = styled.li(
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

const StyledMobileDropdown2 = styled.li(
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

/** An informational widget (Request for Information form) that collects user input via dropdowns and a CTA button. Supports both Mobile and Web layout variants. */
export const InfoWidget = React.forwardRef<HTMLElement, InfoWidgetProps>(
  function InfoWidget({ device = "Web", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Request for information"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledDecorativeLine />
        <StyledContent $device={device}>
          <StyledTitle $device={device}>
            <StyledTitle2>
              <StyledRequestForInformation $device={device}>
                {"Request for information"}
              </StyledRequestForInformation>
            </StyledTitle2>
            <StyledTakeTheFirstStepWithNationalUniversity>
              {"Take the first step with National University"}
            </StyledTakeTheFirstStepWithNationalUniversity>
          </StyledTitle>
          <StyledDropdowns $device={device}>
            {device === "Web" && (
              <StyledDesktopDropdown>
                <DesktopDropdown state={"Default"} />
              </StyledDesktopDropdown>
            )}
            {device === "Web" && (
              <StyledDesktopDropdown2>
                <DesktopDropdown state={"Default"} />
              </StyledDesktopDropdown2>
            )}
            {device === "Mobile" && (
              <StyledMobileDropdown>
                <MobileDropdown state={"Default"} />
              </StyledMobileDropdown>
            )}
            {device === "Mobile" && (
              <StyledMobileDropdown2>
                <MobileDropdown state={"Default"} />
              </StyledMobileDropdown2>
            )}
          </StyledDropdowns>
          <StyledCTAs>
            <Button
              label={true}
              bTNValue={"Next"}
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
        </StyledContent>
      </StyledRoot>
    );
  },
);
