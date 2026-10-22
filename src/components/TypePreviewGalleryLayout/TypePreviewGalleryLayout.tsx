import React from "react";
import styled, { css } from "styled-components";

export interface TypePreviewGalleryLayoutProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Grid" | "Offset grid" | "Slider" | "Carousel" | "Tilted";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledGrid = styled.section<{
  $type: "Grid" | "Offset grid" | "Slider" | "Carousel" | "Tilted";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
    ${(() => {
      switch ($type) {
        case "Grid":
          return css``;
        case "Tilted":
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
        default:
          return css``;
      }
    })()}
  `,
);

const StyledRectangle1 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle2 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle12 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle3 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle13 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle22 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle14 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle23 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle15 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle24 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle16 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle25 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle17 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle32 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle18 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle33 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle19 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle34 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle110 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle35 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle111 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle36 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle112 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledRectangle37 = styled.div(
  () => css`
    width: 11.020522117614746px;
    height: 15.428730964660645px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1.1020522117614746px;
  `,
);

const StyledOffsetGrid = styled.section(
  () => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
  `,
);

const StyledRectangle113 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle26 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle122 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle38 = styled.div(
  () => css`
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledSlider = styled.section(
  () => css`
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
  `,
);

const StyledRectangle114 = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledRectangle27 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle39 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledRectangle4 = styled.div(
  () => css`
    width: 4px;
    height: 4px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 1px;
  `,
);

const StyledCarousel = styled.section(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 11px;
    padding-right: 0px;
    padding-bottom: 11px;
    padding-left: 0px;
    gap: 3px;
    justify-content: center;
    align-items: flex-start;
    width: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #4d4c4c;
    border-radius: 3px;
  `,
);

const StyledRectangle115 = styled.div(
  () => css`
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledRectangle310 = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledRectangle28 = styled.div(
  () => css`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: transparent;
    border-radius: 2px;
  `,
);

/** A visual preview component that demonstrates different gallery layout types (Grid, Offset grid, Slider, Carousel, Tilted) using placeholder rectangles to illustrate how content would be arranged in each layout style. */
export const TypePreviewGalleryLayout = React.forwardRef<
  HTMLElement,
  TypePreviewGalleryLayoutProps
>(function TypePreviewGalleryLayout({ type = "Grid", ...rest }, ref) {
  return (
    <StyledRoot
      role="img"
      aria-label="Gallery layout preview"
      {...rest}
      ref={ref}
    >
      {["Grid", "Tilted"].includes(type) && (
        <StyledGrid $type={type}>
          {type === "Grid" && <StyledRectangle1 />}
          {type === "Grid" && <StyledRectangle2 />}
          {type === "Grid" && <StyledRectangle12 />}
          {type === "Grid" && <StyledRectangle3 />}
          {type === "Tilted" && (
            <div>
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle13 />}
                  {type === "Tilted" && <StyledRectangle22 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle14 />}
                  {type === "Tilted" && <StyledRectangle23 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle15 />}
                  {type === "Tilted" && <StyledRectangle24 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle16 />}
                  {type === "Tilted" && <StyledRectangle25 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle17 />}
                  {type === "Tilted" && <StyledRectangle32 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle18 />}
                  {type === "Tilted" && <StyledRectangle33 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle19 />}
                  {type === "Tilted" && <StyledRectangle34 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle110 />}
                  {type === "Tilted" && <StyledRectangle35 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle111 />}
                  {type === "Tilted" && <StyledRectangle36 />}
                </div>
              )}
              {type === "Tilted" && (
                <div>
                  {type === "Tilted" && <StyledRectangle112 />}
                  {type === "Tilted" && <StyledRectangle37 />}
                </div>
              )}
            </div>
          )}
        </StyledGrid>
      )}
      {type === "Offset grid" && (
        <StyledOffsetGrid>
          {type === "Offset grid" && <StyledRectangle113 />}
          {type === "Offset grid" && <StyledRectangle26 />}
          {type === "Offset grid" && <StyledRectangle122 />}
          {type === "Offset grid" && <StyledRectangle38 />}
        </StyledOffsetGrid>
      )}
      {type === "Slider" && (
        <StyledSlider>
          {type === "Slider" && <StyledRectangle114 />}
          {type === "Slider" && <StyledRectangle27 />}
          {type === "Slider" && <StyledRectangle39 />}
          {type === "Slider" && <StyledRectangle4 />}
        </StyledSlider>
      )}
      {type === "Carousel" && (
        <StyledCarousel>
          {type === "Carousel" && <StyledRectangle115 />}
          {type === "Carousel" && <StyledRectangle310 />}
          {type === "Carousel" && <StyledRectangle28 />}
        </StyledCarousel>
      )}
    </StyledRoot>
  );
});
