import React from "react";
import styled, { css } from "styled-components";
import { Accordion } from "../Accordion";

export interface FAQsSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "device"
> {
  device?: "Mobile" | "Web";
}

const StyledRoot = styled.section<{ $device: "Mobile" | "Web" }>(
  ({ theme, $device }) => css`
    background-color: ${theme["background"]["bgDefult"]};
    border-radius: 0px;
    ${(() => {
      switch ($device) {
        case "Web":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 72px;
            padding-right: 84px;
            padding-bottom: 72px;
            padding-left: 84px;
            gap: 40px;
            justify-content: flex-start;
            align-items: center;
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
            gap: 40px;
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
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrequentlyAskedQuestions = styled.h2(
  ({ theme }) => css`
    color: ${theme["text"]["textOnLightDefault"]};
    font-family: var(--font-georgia, "Georgia"), serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
  `,
);

const StyledAccordion = styled.ul(
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

const StyledAccordion2 = styled.li(() => css``);

const StyledAccordion22 = styled.li(() => css``);

const StyledAccordion3 = styled.li(() => css``);

const StyledAccordion4 = styled.li(() => css``);

const StyledFrame2131329659 = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledFrequentlyAskedQuestions2 = styled.h2(
  () => css`
    color: #191a1c;
    font-family: var(--font-georgia, "Georgia"), serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
  `,
);

const StyledAccordion23 = styled.div(
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

const StyledAccordion32 = styled.div(
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

const StyledAccordion42 = styled.div(
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

/** A FAQs section component that displays a 'Frequently Asked Questions' heading alongside a list of accordion items. Supports both Mobile and Web layout variants. */
export const FAQsSection = React.forwardRef<HTMLElement, FAQsSectionProps>(
  function FAQsSection({ device = "Web", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Frequently Asked Questions"
        {...rest}
        ref={ref}
        $device={device}
      >
        {device === "Web" && (
          <StyledContent>
            {device === "Web" && (
              <StyledFrequentlyAskedQuestions>
                {"Frequently Asked Questions "}
              </StyledFrequentlyAskedQuestions>
            )}
            {device === "Web" && (
              <StyledAccordion>
                {device === "Web" && (
                  <StyledAccordion2>
                    <Accordion state={"Open"} device={"Desktop"} />
                  </StyledAccordion2>
                )}
                {device === "Web" && (
                  <StyledAccordion22>
                    <Accordion state={"Closed"} device={"Desktop"} />
                  </StyledAccordion22>
                )}
                {device === "Web" && (
                  <StyledAccordion3>
                    <Accordion state={"Closed"} device={"Desktop"} />
                  </StyledAccordion3>
                )}
                {device === "Web" && (
                  <StyledAccordion4>
                    <Accordion state={"Closed"} device={"Desktop"} />
                  </StyledAccordion4>
                )}
              </StyledAccordion>
            )}
          </StyledContent>
        )}
        {device === "Mobile" && (
          <StyledFrame2131329659>
            {device === "Mobile" && (
              <StyledFrequentlyAskedQuestions2>
                {"Frequently Asked Questions "}
              </StyledFrequentlyAskedQuestions2>
            )}
            {device === "Mobile" && (
              <Accordion state={"Open"} device={"Mobile"} />
            )}
            {device === "Mobile" && (
              <StyledAccordion23>
                <Accordion state={"Focused"} device={"Mobile"} />
              </StyledAccordion23>
            )}
            {device === "Mobile" && (
              <StyledAccordion32>
                <Accordion state={"Focused"} device={"Mobile"} />
              </StyledAccordion32>
            )}
            {device === "Mobile" && (
              <StyledAccordion42>
                <Accordion state={"Focused"} device={"Mobile"} />
              </StyledAccordion42>
            )}
          </StyledFrame2131329659>
        )}
      </StyledRoot>
    );
  },
);
