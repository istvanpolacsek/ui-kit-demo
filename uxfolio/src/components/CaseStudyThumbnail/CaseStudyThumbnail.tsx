import React from "react";
import styled, { css } from "styled-components";
import { ImageFlexible } from "../ImageFlexible";
import { IndicatorImageOrder } from "../IndicatorImageOrder";

export interface CaseStudyThumbnailProps extends React.ComponentPropsWithoutRef<"a"> {}

const StyledRoot = styled.a(
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
    width: 364px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledThumbnail = styled.div(
  () => css`
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
    border-radius: 4px;
    &:hover {
    }
    &:active {
    }
  `,
);

const StyledContainer = styled.div(
  () => css`
    display: none;
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 6px;
    &:hover,
    :active {
      display: block;
    }
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

/** A clickable case study thumbnail card that links to a case study, displaying an image, title, and subtitle. Supports default, hover, and active interaction states. */
export const CaseStudyThumbnail = React.forwardRef<
  HTMLAnchorElement,
  CaseStudyThumbnailProps
>(function CaseStudyThumbnail({ ...rest }, ref) {
  return (
    <StyledRoot aria-label="Case study title" {...rest} ref={ref}>
      <StyledThumbnail>
        <ImageFlexible snaps={false} defaultProp={"Free"} />
        <StyledContainer />
        <IndicatorImageOrder state={"Active"} size={"Large"} mode={"Light"} />
      </StyledThumbnail>
      <StyledText>
        <StyledText2>{"Case study title"}</StyledText2>
        <StyledText22>{"Case study subtitle"}</StyledText22>
      </StyledText>
    </StyledRoot>
  );
});
