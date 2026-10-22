import React from "react";
import styled, { css } from "styled-components";
import { IllustrationIcon } from "../IllustrationIcon";

export interface OptionItemSectionProps extends React.ComponentPropsWithoutRef<"div"> {}

const StyledRoot = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 16px;
    padding-bottom: 0px;
    padding-left: 16px;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    width: 148px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    color: #eeeeee;
  `,
);

const StyledSectionIconWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    border-radius: 2px;
    &:hover {
      background-color: #262626;
    }
    &:hover {
      border-radius: 8px;
    }
  `,
);

const StyledLabel = styled.label(
  () => css`
    color: #eeeeee;
  `,
);

const StyledBoldStatement = styled.p(
  () => css`
    display: none;
    color: #eeeeee;
    &:hover {
      display: block;
    }
  `,
);

/** A section option item component that displays an icon alongside a label and bold statement text. Used within option lists or menus to represent a selectable section with visual and textual context. */
export const OptionItemSection = React.forwardRef<
  HTMLDivElement,
  OptionItemSectionProps
>(function OptionItemSection({ ...rest }, ref) {
  return (
    <StyledRoot
      role="option"
      aria-label="Section option item"
      {...rest}
      ref={ref}
    >
      <StyledSectionIconWrapper>
        <IllustrationIcon type={"Text"} mode={"Dark"} />
      </StyledSectionIconWrapper>
      <StyledLabel>{"Label"}</StyledLabel>
      <StyledBoldStatement>{"Bold statement"}</StyledBoldStatement>
    </StyledRoot>
  );
});
