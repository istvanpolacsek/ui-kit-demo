import React from "react";
import styled, { css } from "styled-components";
import { OptionBarItem } from "../OptionBarItem";

export interface OptionBarOnlyBarProps extends Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "number" | "active" | "type"
> {
  number?: 2 | 3 | 4 | 5;
  active?: 1 | 2 | 3 | 4 | 5;
  type?: "Text" | "Icon";
}

const StyledRoot = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 302px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    background-color: #262626;
    border-radius: 4px;
  `,
);

const StyledOption1 = styled.li(
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

const StyledOption2 = styled.li(
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

const StyledOption3 = styled.li(
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

const StyledOption4 = styled.li(
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

const StyledOption5 = styled.li(
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

/** A segmented option bar (tab strip) that renders 2–5 selectable items as either text labels or icons, with one item active at a time. Equivalent to a tab list for switching between views or filter states. */
export const OptionBarOnlyBar = React.forwardRef<
  HTMLUListElement,
  OptionBarOnlyBarProps
>(function OptionBarOnlyBar(
  { number = 4, active = 1, type = "Text", ...rest },
  ref,
) {
  return (
    <StyledRoot role="tablist" aria-label="Options" {...rest} ref={ref}>
      <StyledOption1>
        <OptionBarItem type={"Text"} selected={true} />
      </StyledOption1>
      <StyledOption2>
        <OptionBarItem type={"Text"} />
      </StyledOption2>
      {[4, 3, 5].includes(number) && (
        <StyledOption3>
          <OptionBarItem type={"Text"} />
        </StyledOption3>
      )}
      {[4, 5].includes(number) && (
        <StyledOption4>
          <OptionBarItem type={"Text"} />
        </StyledOption4>
      )}
      {number === 5 && (
        <StyledOption5>
          <OptionBarItem type={"Icon"} />
        </StyledOption5>
      )}
    </StyledRoot>
  );
});
