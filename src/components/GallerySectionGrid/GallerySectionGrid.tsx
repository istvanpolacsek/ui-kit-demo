import React from "react";
import styled, { css } from "styled-components";
import { ImageBox } from "../ImageBox";
import { SectionStatesGeneral } from "../SectionStatesGeneral";

export interface GallerySectionGridProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "columns"
> {
  showUI?: boolean;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const StyledRoot = styled.section<{ $columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }>(
  ({ theme, $columns }) => css`
    position: relative;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
    ${(() => {
      if ($columns < 1.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($columns < 2.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($columns < 3.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($columns < 4.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($columns < 5.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($columns < 6.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      if ($columns < 7.5)
        return css`
          display: flex;
          flex-direction: row;
          padding-top: 60px;
          padding-right: 126px;
          padding-bottom: 60px;
          padding-left: 126px;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          width: 1440px;
          box-sizing: border-box;
          flex-shrink: 0;
        `;
      return css`
        display: flex;
        flex-direction: row;
        padding-top: 60px;
        padding-right: 126px;
        padding-bottom: 60px;
        padding-left: 126px;
        gap: 48px;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        width: 1440px;
        box-sizing: border-box;
        flex-shrink: 0;
      `;
    })()}
  `,
);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 381px;
  `,
);

/** A gallery grid section that displays a configurable number of image boxes in a responsive grid layout. Supports 1–8 columns and an optional UI overlay for controls or metadata. */
export const GallerySectionGrid = React.forwardRef<
  HTMLElement,
  GallerySectionGridProps
>(function GallerySectionGrid({ showUI = true, columns = 4, ...rest }, ref) {
  return (
    <StyledRoot
      role="region"
      aria-label="Image gallery"
      {...rest}
      ref={ref}
      $columns={columns}
    >
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
      {[4, 3, 2, 5, 6, 7, 8].includes(columns) && (
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
      )}
      {[4, 3, 5, 6, 7, 8].includes(columns) && (
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
      )}
      {[4, 5, 6, 7, 8].includes(columns) && (
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
      )}
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
      {[5, 6, 7, 8].includes(columns) && (
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
      )}
      {[6, 7, 8].includes(columns) && (
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
      )}
      {[7, 8].includes(columns) && (
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
      )}
      {columns === 8 && (
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
      )}
    </StyledRoot>
  );
});
