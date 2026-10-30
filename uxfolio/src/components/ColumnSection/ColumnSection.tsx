import React from "react";
import styled, { css } from "styled-components";
import { SectionStatesGeneral } from "../SectionStatesGeneral";
import { ModuleDivider } from "../ModuleDivider";
import { ColumnItemRegular } from "../ColumnItemRegular";

export interface ColumnSectionProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "showUI" | "columns"
> {
  showUI?: boolean;
  columns?: 2 | 3 | 4;
}

const StyledRoot = styled.section(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 60px;
    padding-right: 78px;
    padding-bottom: 60px;
    padding-left: 78px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1440px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: ${theme["Color 5"]};
    border-radius: 0px;
  `,
);

const StyledSectionStatesGeneral = styled.div(
  () => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1440px;
    height: 828px;
  `,
);

const StyledModuleDivider = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledColumnItemRegular = styled.div(
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

const StyledModuleDivider2 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledColumnItemRegular2 = styled.div(
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

const StyledModuleDivider3 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledColumnItemRegular3 = styled.div(
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

const StyledModuleDivider4 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledColumnItemRegular4 = styled.div(
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

const StyledModuleDivider5 = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

/** A responsive column layout section that displays content in 2, 3, or 4 columns, each separated by module dividers. Supports an optional UI header state and adapts its column count via a variant property. */
export const ColumnSection = React.forwardRef<HTMLElement, ColumnSectionProps>(
  function ColumnSection({ showUI = true, columns = 2, ...rest }, ref) {
    return (
      <StyledRoot role="region" aria-label="Column section" {...rest} ref={ref}>
        {showUI && (
          <StyledSectionStatesGeneral>
            <SectionStatesGeneral
              addNavigation={false}
              addText={false}
              addMedia={false}
              addSocialLink={false}
              flipHorizontally={false}
              type={"Default"}
              mode={"Light"}
            />
          </StyledSectionStatesGeneral>
        )}
        <StyledModuleDivider>
          <ModuleDivider
            side={"Normal"}
            canResize={true}
            canAddModule={true}
            size={0}
            state={"Default"}
            mode={"Light"}
          />
        </StyledModuleDivider>
        <StyledColumnItemRegular>
          <ColumnItemRegular
            moveRight={true}
            addedImage={true}
            moveLeft={true}
            hasButton={false}
            addedText={false}
            state={"Default"}
            mode={"Light"}
          />
        </StyledColumnItemRegular>
        <StyledModuleDivider2>
          <ModuleDivider
            side={"Normal"}
            canResize={true}
            canAddModule={true}
            size={0}
            state={"Default"}
            mode={"Light"}
          />
        </StyledModuleDivider2>
        <StyledColumnItemRegular2>
          <ColumnItemRegular
            moveRight={true}
            addedImage={true}
            moveLeft={true}
            hasButton={false}
            addedText={false}
            state={"Default"}
            mode={"Light"}
          />
        </StyledColumnItemRegular2>
        <StyledModuleDivider3>
          <ModuleDivider
            side={"Normal"}
            canResize={true}
            canAddModule={true}
            size={0}
            state={"Default"}
            mode={"Light"}
          />
        </StyledModuleDivider3>
        {[3, 4].includes(columns) && (
          <StyledColumnItemRegular3>
            <ColumnItemRegular
              moveRight={true}
              addedImage={true}
              moveLeft={true}
              hasButton={false}
              addedText={false}
              state={"Default"}
              mode={"Light"}
            />
          </StyledColumnItemRegular3>
        )}
        {[3, 4].includes(columns) && (
          <StyledModuleDivider4>
            <ModuleDivider
              side={"Normal"}
              canResize={true}
              canAddModule={true}
              size={0}
              state={"Default"}
              mode={"Light"}
            />
          </StyledModuleDivider4>
        )}
        {columns === 4 && (
          <StyledColumnItemRegular4>
            <ColumnItemRegular
              moveRight={true}
              addedImage={true}
              moveLeft={true}
              hasButton={false}
              addedText={false}
              state={"Default"}
              mode={"Light"}
            />
          </StyledColumnItemRegular4>
        )}
        {columns === 4 && (
          <StyledModuleDivider5>
            <ModuleDivider
              side={"Normal"}
              canResize={false}
              canAddModule={true}
              size={0}
              state={"Default"}
              mode={"Light"}
            />
          </StyledModuleDivider5>
        )}
      </StyledRoot>
    );
  },
);
