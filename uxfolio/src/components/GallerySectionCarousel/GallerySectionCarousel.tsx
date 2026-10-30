import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesGeneral } from "../SectionStatesGeneral";
import { UserButton } from "../UserButton";
import { ImageBox } from "../ImageBox";

export interface GallerySectionCarouselProps extends Omit<
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
    flex-direction: row;
    padding-top: 60px;
    padding-right: 126px;
    padding-bottom: 60px;
    padding-left: 126px;
    gap: 48px;
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

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 484px;
  `,
);

const StyledUserButton = styled.div(
  () => css`
    position: absolute;
    right: -28px;
    top: 219.9990234375px;
    width: 44px;
    height: 44px;
  `,
);

const StyledUserButton2 = styled.div(
  () => css`
    position: absolute;
    left: 60px;
    top: 219.9990234375px;
    width: 44px;
    height: 44px;
  `,
);

const StyledImages = styled.ul(
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
    gap: 48px;
    justify-content: center;
    align-items: center;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledImageBox = styled.li(() => css``);

const StyledImageBox2 = styled.li(() => css``);

const StyledImageBox3 = styled.li(() => css``);

const StyledImageBox4 = styled.li(() => css``);

const StyledImageBox5 = styled.li(() => css``);

/** A gallery section displaying a carousel of images with optional UI controls (e.g. navigation buttons). Contains a row of image boxes and user interaction buttons for browsing content. */
export const GallerySectionCarousel = React.forwardRef<
  HTMLElement,
  GallerySectionCarouselProps
>(function GallerySectionCarousel(
  { showUI = true, property1 = "Default", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Image gallery carousel"
      {...rest}
      ref={ref}
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
      <StyledUserButton>
        <UserButton mode={"Light"} />
      </StyledUserButton>
      <StyledUserButton2>
        <UserButton mode={"Light"} />
      </StyledUserButton2>
      <StyledImages>
        <StyledImageBox>
          <ImageBox
            moveRight={true}
            moveLeft={true}
            hasCaption={false}
            state={"Default"}
            mode={"Light"}
            snaps={false}
            aspectRatio={"1:1"}
            size={"Flexible"}
          />
        </StyledImageBox>
        <StyledImageBox2>
          <ImageBox
            moveRight={true}
            moveLeft={true}
            hasCaption={false}
            state={"Default"}
            mode={"Light"}
            snaps={false}
            aspectRatio={"1:1"}
            size={"Flexible"}
          />
        </StyledImageBox2>
        <StyledImageBox3>
          <ImageBox
            moveRight={true}
            moveLeft={true}
            hasCaption={false}
            state={"Default"}
            mode={"Light"}
            snaps={false}
            aspectRatio={"1:1"}
            size={"Flexible"}
          />
        </StyledImageBox3>
        <StyledImageBox4>
          <ImageBox
            moveRight={true}
            moveLeft={true}
            hasCaption={false}
            state={"Default"}
            mode={"Light"}
            snaps={false}
            aspectRatio={"1:1"}
            size={"Flexible"}
          />
        </StyledImageBox4>
        <StyledImageBox5>
          <ImageBox
            moveRight={true}
            moveLeft={true}
            hasCaption={false}
            state={"Default"}
            mode={"Light"}
            snaps={false}
            aspectRatio={"1:1"}
            size={"Flexible"}
          />
        </StyledImageBox5>
      </StyledImages>
    </StyledRoot>
  );
});
