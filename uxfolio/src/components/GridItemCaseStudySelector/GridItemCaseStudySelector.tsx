import React from "react";
import styled, { css } from "styled-components";
import { ImageFixed } from "../ImageFixed";
import { IndicatorImageOrder } from "../IndicatorImageOrder";

export interface GridItemCaseStudySelectorProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state"
> {
  state?: "Default" | "Hover" | "Selected";
}

const StyledRoot = styled.button(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
    justify-content: center;
    align-items: flex-end;
    width: 364px;
    height: 446px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledThumbnail = styled.div<{
  $state: "Default" | "Hover" | "Selected";
}>(
  ({ $state }) => css`
    border-radius: 4px;
    ${(() => {
      switch ($state) {
        case "Default":
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
            height: 364px;
            box-sizing: border-box;
            flex-shrink: 0;
            align-self: stretch;
          `;
        case "Hover":
          return css``;
        case "Selected":
          return css``;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledContainer = styled.div(
  () => css`
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
  `,
);

const StyledText = styled.div(
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

const StyledText2 = styled.h3(
  () => css`
    color: #191b1c;
  `,
);

const StyledText22 = styled.p(
  () => css`
    color: #414a50;
  `,
);

/** A selectable card component used to choose a case study, displaying a thumbnail image and associated title/subtitle text. Supports Default, Hover, and Selected interaction states. */
export const GridItemCaseStudySelector = React.forwardRef<
  HTMLButtonElement,
  GridItemCaseStudySelectorProps
>(function GridItemCaseStudySelector({ state = "Default", ...rest }, ref) {
  return (
    <StyledRoot
      role="button"
      aria-label="Select case study"
      {...rest}
      ref={ref}
    >
      <StyledThumbnail $state={state}>
        <ImageFixed snaps={false} aspectRatio={"1:1"} />
        {["Hover", "Selected"].includes(state) && <StyledContainer />}
        {state === "Selected" && (
          <IndicatorImageOrder state={"Active"} size={"Large"} mode={"Light"} />
        )}
      </StyledThumbnail>
      <StyledText>
        <StyledText2>{"Case study title"}</StyledText2>
        <StyledText22>{"Case study subtitle"}</StyledText22>
      </StyledText>
    </StyledRoot>
  );
});
