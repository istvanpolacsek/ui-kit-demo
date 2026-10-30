import React from "react";
import styled, { css } from "styled-components";

export interface AssetSubheadingProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "showDescription" | "type"
> {
  showDescription?: boolean;
  type?: "Up to date" | "Sync with dev" | "Redesign needed" | "Not used";
}

const StyledRoot = styled.div(
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
    border-radius: 0px;
  `,
);

const StyledSubtitle = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
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

const StyledDesctiption = styled.span(
  () => css`
    color: #fefefe;
  `,
);

const StyledRectangle1 = styled.div<{
  $type: "Up to date" | "Sync with dev" | "Redesign needed" | "Not used";
}>(
  ({ $type }) => css`
    width: 4px;
    height: 24px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Sync with dev":
          return css`
            background-color: ${"#dcfa37"};
          `;
        case "Redesign needed":
          return css`
            background-color: ${"#2400ed"};
          `;
        case "Not used":
          return css`
            background-color: ${"#9e3131"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDesctiption2 = styled.p(
  () => css`
    color: #adadad;
    font-family: var(--font-work-sans, "Work Sans"), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01em;
  `,
);

/** A subheading component for assets that displays a subtitle label and an optional description. Supports variant states indicating asset sync status (Up to date, Sync with dev, Redesign needed, Not used) and a toggleable description text. */
export const AssetSubheading = React.forwardRef<
  HTMLDivElement,
  AssetSubheadingProps
>(function AssetSubheading(
  { showDescription = false, type = "Up to date", ...rest },
  ref,
) {
  return (
    <StyledRoot aria-label="Asset subheading" {...rest} ref={ref}>
      <StyledSubtitle>
        <StyledDesctiption>{"/ Template"}</StyledDesctiption>
        {["Sync with dev", "Redesign needed", "Not used"].includes(type) && (
          <StyledRectangle1 $type={type} />
        )}
      </StyledSubtitle>
      {showDescription && (
        <StyledDesctiption2>{"Description is put here"}</StyledDesctiption2>
      )}
    </StyledRoot>
  );
});
