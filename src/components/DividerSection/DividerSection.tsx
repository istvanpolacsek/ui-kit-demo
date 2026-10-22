import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesGeneral } from "../SectionStatesGeneral";
import { UserDividerLight } from "../UserDividerLight";
import { TextBoxRegular } from "../TextBoxRegular";

export interface DividerSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "lineWeight" | "showUI" | "type"
> {
  lineWeight?: string;
  showUI?: boolean;
  type?: "Top" | "Bottom" | "Middle" | "None";
}

const StyledRoot = styled.section<{
  $type: "Top" | "Bottom" | "Middle" | "None";
}>(
  ({ theme, $type }) => css`
    position: relative;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Top":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Bottom":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 24px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Middle":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "None":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 126px;
            padding-bottom: 24px;
            padding-left: 126px;
            gap: 24px;
            justify-content: flex-start;
            align-items: center;
            width: 1440px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 96px;
  `,
);

const StyledUserDividerLight = styled.div<{
  $type: "Top" | "Bottom" | "Middle" | "None";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Top":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Bottom":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "Middle":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        case "None":
          return css`
            display: flex;
            flex: 1 1 0;
            min-width: 0;
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

const StyledUserDividerLight2 = styled.div(
  () => css`
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A visual divider section that separates content areas, optionally displaying a UI label or text box. Supports Top, Bottom, Middle, and None placement variants to control the divider's position within a layout. */
export const DividerSection = React.forwardRef<
  HTMLElement,
  DividerSectionProps
>(function DividerSection(
  { lineWeight = "313:6227", showUI = true, type = "Top", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Section divider"
      {...rest}
      ref={ref}
      $type={type}
    >
      {showUI && (
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
      )}
      <StyledUserDividerLight $type={type}>
        <UserDividerLight />
      </StyledUserDividerLight>
      {["Top", "Bottom", "Middle"].includes(type) && (
        <TextBoxRegular
          reachingLimit={false}
          colorOverride={false}
          state={"Default"}
          roundness={"Sharp"}
          mode={"Light"}
          moveRight={true}
          aboveImage={false}
          moveLeft={true}
          hasButton={false}
        />
      )}
      {type === "Middle" && (
        <StyledUserDividerLight2>
          <UserDividerLight />
        </StyledUserDividerLight2>
      )}
    </StyledRoot>
  );
});
