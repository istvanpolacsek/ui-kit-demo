import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";

export interface ProgramItemsProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    position: relative;
    background-color: ${theme["background"]["bgGray"]};
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 12px;
            padding-right: 40px;
            padding-bottom: 12px;
            padding-left: 40px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 1272px;
            height: 120px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-right: 12px;
            padding-bottom: 12px;
            padding-left: 12px;
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
    ${(() => {
      switch ($device) {
        case "Mobile":
          return css`
            border-radius: 16px;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["accent"]["accentBrand"]};
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
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
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
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame2131330007 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledFormat = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled100Online = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Mobile":
          return css`
            color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
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

const StyledLine4 = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    background-color: #bdc6d2;
  `,
);

const StyledContainer2 = styled.div<{ $device: "Mobile" | "Desktop" }>(
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
            gap: 8px;
            justify-content: center;
            align-items: center;
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
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame2131330008 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledIcon2 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCompletionTime = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled31Months = styled.p(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.005em;
  `,
);

const Styled40Months = styled.p(
  () => css`
    color: #333333;
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
  `,
);

const StyledLine5 = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    background-color: #bdc6d2;
  `,
);

const StyledContainer3 = styled.div<{ $device: "Mobile" | "Desktop" }>(
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
            gap: 7.836734771728516px;
            justify-content: center;
            align-items: center;
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
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame2131330009 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledIcon3 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledCredits = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled60 = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Mobile":
          return css`
            color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
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

const StyledLine7 = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    background-color: #bdc6d2;
  `,
);

const StyledContainer4 = styled.div<{ $device: "Mobile" | "Desktop" }>(
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
            gap: 7.836734771728516px;
            justify-content: center;
            align-items: center;
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
            gap: 8px;
            justify-content: center;
            align-items: center;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledFrame21313300092 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledIcon4 = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledAverageCostPerCredit = styled.label(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightBlue"]};
    font-family: var(--font-roboto, "Roboto"), sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
  `,
);

const Styled1229 = styled.p<{ $device: "Mobile" | "Desktop" }>(
  ({ theme, $device }) => css`
    ${(() => {
      switch ($device) {
        case "Desktop":
          return css`
            color: ${theme["text"]["textOnLightDefault"]};
          `;
        case "Mobile":
          return css`
            color: ${"#333333"};
          `;
        default:
          return css``;
      }
    })()}
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

const StyledLine6 = styled.div(
  () => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    background-color: #bdc6d2;
  `,
);

/** Displays a structured list of program detail items (e.g., format, completion time, credits, cost per credit), each consisting of an icon, a label, and a value. Supports Mobile and Desktop layout variants. */
export const ProgramItems = React.forwardRef<HTMLElement, ProgramItemsProps>(
  function ProgramItems({ device = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Program Details"
        {...rest}
        ref={ref}
        $device={device}
      >
        <StyledContainer $device={device}>
          <StyledFrame2131330007>
            <StyledIcon>
              <Icon name={"laptop_mac"} size={24} />
            </StyledIcon>
            <StyledFormat>{"Format"}</StyledFormat>
          </StyledFrame2131330007>
          <Styled100Online $device={device}>{"100% Online"}</Styled100Online>
        </StyledContainer>
        <StyledLine4 />
        <StyledContainer2 $device={device}>
          <StyledFrame2131330008>
            <StyledIcon2>
              <Icon name={"calendar_today"} size={24} />
            </StyledIcon2>
            <StyledCompletionTime>{"Completion Time"}</StyledCompletionTime>
          </StyledFrame2131330008>
          {device === "Desktop" && (
            <Styled31Months>{"31 Months"}</Styled31Months>
          )}
          {device === "Mobile" && (
            <Styled40Months>{"40 Months"}</Styled40Months>
          )}
        </StyledContainer2>
        {device === "Desktop" && <StyledLine5 />}
        <StyledContainer3 $device={device}>
          <StyledFrame2131330009>
            <StyledIcon3>
              <Icon name={"school"} size={24} />
            </StyledIcon3>
            <StyledCredits>{"Credits"}</StyledCredits>
          </StyledFrame2131330009>
          <Styled60 $device={device}>{"60"}</Styled60>
        </StyledContainer3>
        <StyledLine7 />
        <StyledContainer4 $device={device}>
          <StyledFrame21313300092>
            <StyledIcon4>
              <Icon name={"monetization_on"} size={24} />
            </StyledIcon4>
            <StyledAverageCostPerCredit>
              {"Average Cost Per Credit"}
            </StyledAverageCostPerCredit>
          </StyledFrame21313300092>
          <Styled1229 $device={device}>{"$1,229"}</Styled1229>
        </StyledContainer4>
        {device === "Mobile" && <StyledLine6 />}
      </StyledRoot>
    );
  },
);
