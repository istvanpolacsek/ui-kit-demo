import React from "react";
import styled, { css } from "styled-components";
import { TertiaryButtonSubtle } from "../TertiaryButtonSubtle";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";

export interface CaseStudyBoxEmptyProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "mode" | "size"
> {
  mode?: "Dark" | "Light";
  size?: "Small" | "Large";
}

const StyledRoot = styled.article<{ $size: "Small" | "Large" }>(
  ({ $size }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($size) {
        case "Small":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 570px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Large":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: center;
            width: 1188px;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledVisual = styled.div<{
  $size: "Small" | "Large";
  $mode: "Dark" | "Light";
}>(
  ({ $size, $mode }) => css`
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($size) {
        case "Small":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 40px;
            padding-bottom: 40px;
            padding-left: 40px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            height: 570px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case "Large":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 40px;
            padding-right: 40px;
            padding-bottom: 40px;
            padding-left: 40px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            flex: 1 1 0;
            align-self: stretch;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"rgba(15, 15, 15, 0.23999999463558197)"};
          `;
        case "Dark":
          return css`
            border-color: ${"rgba(255, 255, 255, 0.23999999463558197)"};
          `;
        default:
          return css``;
      }
    })()}
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
    gap: 32px;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledText = styled.section(
  () => css`
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
    border-radius: 0px;
  `,
);

const StyledText2 = styled.h3<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#1a1a1a"};
          `;
        case "Dark":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText22 = styled.p<{ $mode: "Dark" | "Light" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#4d4c4c"};
          `;
        case "Dark":
          return css`
            color: ${"#adadad"};
          `;
        default:
          return css``;
      }
    })()}
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** A placeholder/empty state card for a case study, prompting the user to add a new case study with a title, description, and action buttons. Supports light/dark modes and small/large sizes. */
export const CaseStudyBoxEmpty = React.forwardRef<
  HTMLElement,
  CaseStudyBoxEmptyProps
>(function CaseStudyBoxEmpty({ mode = "Light", size = "Small", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Add a new case study"
      {...rest}
      ref={ref}
      $size={size}
    >
      <StyledVisual $size={size} $mode={mode}>
        <StyledInfo>
          <StyledText>
            <StyledText2 $mode={mode}>{"Add a new case study"}</StyledText2>
            <StyledText22 $mode={mode}>
              {"Transform your project into a compelling case study."}
            </StyledText22>
          </StyledText>
          <StyledButtons>
            <TertiaryButtonSubtle
              mode={"Light"}
              hasIcon={"False"}
              size={"Large"}
            />
            <TertiaryButtonNeutral
              mode={"Light"}
              hasIcon={"True"}
              size={"Large"}
            />
          </StyledButtons>
        </StyledInfo>
      </StyledVisual>
    </StyledRoot>
  );
});
