import React from "react";
import styled, { css } from "styled-components";
import { UserButton } from "../UserButton";
import { ImageBox } from "../ImageBox";
import { ImageBoxPreview } from "../ImageBoxPreview";
import { SectionStatesGeneral } from "../SectionStatesGeneral";

export interface GallerySectionSliderProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "property1"
> {
  showUI?: boolean;
  property1?: "Default";
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    padding-right: 126px;
    padding-bottom: 60px;
    padding-left: 126px;
    gap: 40px;
    justify-content: center;
    align-items: center;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    color: ${theme["Color 1"]};
  `,
);

const StyledUserButton = styled.div(
  () => css`
    position: absolute;
    right: 82px;
    top: 364.9990234375px;
    width: 44px;
    height: 44px;
  `,
);

const StyledUserButton2 = styled.div(
  () => css`
    position: absolute;
    left: 170px;
    top: 364.9990234375px;
    width: 44px;
    height: 44px;
  `,
);

const StyledPreview = styled.ul(
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
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledImageBoxPreview = styled.li(() => css``);

const StyledImageBoxPreview2 = styled.li(() => css``);

const StyledImageBoxPreview3 = styled.li(() => css``);

const StyledImageBoxPreview4 = styled.li(() => css``);

const StyledImageBoxPreview5 = styled.li(() => css``);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 903px;
  `,
);

/** A gallery slider section that displays a main image preview alongside a horizontal strip of thumbnail previews, with optional UI controls overlay. Used to showcase a collection of images in a navigable carousel or gallery layout. */
export const GallerySectionSlider = React.forwardRef<
  HTMLElement,
  GallerySectionSliderProps
>(function GallerySectionSlider(
  { showUI = true, property1 = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Image gallery slider"
      {...rest}
      ref={ref}
    >
      <StyledUserButton>
        <UserButton mode={"Light"} />
      </StyledUserButton>
      <StyledUserButton2>
        <UserButton mode={"Light"} />
      </StyledUserButton2>
      <ImageBox
        moveRight={true}
        moveLeft={true}
        hasCaption={true}
        state={"Default"}
        mode={"Light"}
        snaps={false}
        aspectRatio={"3:2"}
        size={"Flexible"}
      />
      <StyledPreview>
        <StyledImageBoxPreview>
          <ImageBoxPreview snaps={false} aspectRatio={"5:4"} mode={"Light"} />
        </StyledImageBoxPreview>
        <StyledImageBoxPreview2>
          <ImageBoxPreview snaps={false} aspectRatio={"5:4"} mode={"Light"} />
        </StyledImageBoxPreview2>
        <StyledImageBoxPreview3>
          <ImageBoxPreview snaps={false} aspectRatio={"5:4"} mode={"Light"} />
        </StyledImageBoxPreview3>
        <StyledImageBoxPreview4>
          <ImageBoxPreview snaps={false} aspectRatio={"5:4"} mode={"Light"} />
        </StyledImageBoxPreview4>
        <StyledImageBoxPreview5>
          <ImageBoxPreview snaps={false} aspectRatio={"5:4"} mode={"Light"} />
        </StyledImageBoxPreview5>
      </StyledPreview>
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
    </StyledRoot>
  );
});
