import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesGeneral } from "../SectionStatesGeneral";

export interface AnimatedTextSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "overflowStyle"
> {
  overflowStyle?: "Full width" | "Faded" | "Clipped";
}

const StyledRoot = styled.section<{
  $overflowStyle: "Full width" | "Faded" | "Clipped";
}>(
  ({ theme, $overflowStyle }) => css`
    position: relative;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    ${(() => {
      switch ($overflowStyle) {
        case "Full width":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 1442px;
            height: 156px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Clipped":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 1442px;
            height: 156px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Faded":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 60px;
            padding-right: 126px;
            padding-bottom: 60px;
            padding-left: 126px;
            gap: 0px;
            justify-content: center;
            align-items: center;
            width: 1442px;
            height: 156px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($overflowStyle) {
        case "Full width":
          return css`
            width: 1442px;
            height: 156px;
            box-sizing: border-box;
          `;
        default:
          return css``;
      }
    })()}
  color: ${theme["Color 1"]};
  `,
);

const StyledContainer = styled.div<{
  $overflowStyle: "Full width" | "Faded" | "Clipped";
}>(
  ({ $overflowStyle }) => css`
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($overflowStyle) {
        case "Full width":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-end;
            align-items: center;
            width: fit-content;
          `;
        case "Clipped":
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
            width: 1190px;
            height: 76px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Faded":
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
            height: 76px;
            box-sizing: border-box;
            flex-shrink: 0;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContainer2 = styled.ul<{
  $overflowStyle: "Full width" | "Faded" | "Clipped";
}>(
  ({ $overflowStyle }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 0px;
    ${(() => {
      switch ($overflowStyle) {
        case "Full width":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Clipped":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Faded":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 16px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText2 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText3 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText4 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText5 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText6 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText7 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText8 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText9 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText10 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText11 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText12 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText13 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText14 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText15 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledText16 = styled.li(
  ({ theme }) => css`
    color: ${theme["Color 1"]};
    font-family: "Inter Tight";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: -0.00048828125px;
    width: 1442px;
    height: 156px;
  `,
);

const StyledDividerLine = styled.div(
  () => css`
    width: 0.00000524536517332308px;
    height: 120px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledDividerLine2 = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    transform: translateY(-50%);
    background-color: ${theme["Color 4"]};
  `,
);

const StyledFade = styled.div(
  () => css`
    position: absolute;
    right: 126px;
    top: -0.00048828125px;
    overflow: hidden;
    background-color: transparent;
    border-radius: 0px;
    width: 200px;
    height: 156px;
    box-sizing: border-box;
  `,
);

const StyledFade2 = styled.div(
  () => css`
    position: absolute;
    left: 126px;
    top: -0.00048828125px;
    overflow: hidden;
    background-color: transparent;
    border-radius: 0px;
    width: 200px;
    height: 156px;
    box-sizing: border-box;
  `,
);

/** An animated marquee-style text section that displays a scrolling list of skill or topic tags separated by decorative symbols. Supports overflow style variants: full width, faded (with gradient fade edges), and clipped. */
export const AnimatedTextSection = React.forwardRef<
  HTMLElement,
  AnimatedTextSectionProps
>(function AnimatedTextSection({ overflowStyle = "Full width", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Animated skills marquee"
      {...rest}
      ref={ref}
      $overflowStyle={overflowStyle}
    >
      <StyledContainer $overflowStyle={overflowStyle}>
        <StyledContainer2 $overflowStyle={overflowStyle}>
          <StyledText>
            {
              (
                {
                  '["Full width"]': "product design",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText>
          <StyledText2>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "product design",
                  '["Faded"]': "product design",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText2>
          <StyledText3>
            {
              (
                {
                  '["Full width"]': "design strategy",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText3>
          <StyledText4>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "design strategy",
                  '["Faded"]': "design strategy",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText4>
          <StyledText5>
            {
              (
                {
                  '["Full width"]': "designing for AI",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText5>
          <StyledText6>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "designing for AI",
                  '["Faded"]': "designing for AI",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText6>
          <StyledText7>
            {
              (
                {
                  '["Full width"]': "UX research",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText7>
          <StyledText8>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "UX research",
                  '["Faded"]': "UX research",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText8>
          <StyledText9>
            {
              (
                {
                  '["Full width"]': "prototyping",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText9>
          <StyledText10>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "prototyping",
                  '["Faded"]': "prototyping",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText10>
          <StyledText11>
            {
              (
                {
                  '["Full width"]': "HTML/CSS",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText11>
          <StyledText12>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "HTML/CSS",
                  '["Faded"]': "HTML/CSS",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText12>
          <StyledText13>
            {
              (
                {
                  '["Full width"]': "prompt engineering",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText13>
          <StyledText14>
            {
              (
                {
                  '["Full width"]': "✷",
                  '["Clipped"]': "prompt engineering",
                  '["Faded"]': "prompt engineering",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText14>
          <StyledText15>
            {
              (
                {
                  '["Full width"]': "designing for AI",
                  '["Clipped"]': "✷",
                  '["Faded"]': "✷",
                } as Record<string, string>
              )[JSON.stringify([overflowStyle])]
            }
          </StyledText15>
          {overflowStyle === "Full width" && <StyledText16>{"✷"}</StyledText16>}
        </StyledContainer2>
      </StyledContainer>
      <StyledSectionStatesGeneral>
        <SectionStatesGeneral
          addNavigation={false}
          addText={false}
          addSocialLink={false}
          addMedia={false}
          flipHorizontally={false}
          type={"Default"}
          mode={"Light"}
        />
      </StyledSectionStatesGeneral>
      {overflowStyle === "Clipped" && <StyledDividerLine />}
      {overflowStyle === "Clipped" && <StyledDividerLine2 />}
      {overflowStyle === "Faded" && <StyledFade></StyledFade>}
      {overflowStyle === "Faded" && <StyledFade2></StyledFade2>}
    </StyledRoot>
  );
});
