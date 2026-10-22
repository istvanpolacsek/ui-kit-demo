import React from "react";
import styled, { css } from "styled-components";
import { ImageFixed } from "../ImageFixed";

export interface CaseStudyNavigationItemProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "hasThumbnail" | "type"
> {
  hasThumbnail?: boolean;
  type?: "Default";
}

const StyledRoot = styled.a(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: center;
    align-items: flex-start;
    width: 364px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledImageFixed = styled.div(
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

const StyledContent = styled.div(
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

const StyledTitle = styled.h3(
  () => css`
    color: #000000;
    font-family: "Gambetta";
    font-size: 24px;
    font-weight: 400;
    line-height: 1.23;
  `,
);

const StyledSubtitle = styled.p(
  ({ theme }) => css`
    color: ${theme["Color 2"]};
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
);

/** A navigation item linking to a case study, optionally displaying a thumbnail image alongside a title and subtitle. */
export const CaseStudyNavigationItem = React.forwardRef<
  HTMLAnchorElement,
  CaseStudyNavigationItemProps
>(function CaseStudyNavigationItem(
  { hasThumbnail = true, type = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      aria-label="Shutter: Pro Camera App case study"
      {...rest}
      ref={ref}
    >
      <StyledImageFixed>
        <ImageFixed snaps={false} aspectRatio={"1:1"} />
      </StyledImageFixed>
      <StyledContent>
        <StyledTitle>{"Shutter: Pro Camera App"}</StyledTitle>
        <StyledSubtitle>
          {
            "This is your case study subtitle, rewrite these text-boxes & make them yours."
          }
        </StyledSubtitle>
      </StyledContent>
    </StyledRoot>
  );
});
