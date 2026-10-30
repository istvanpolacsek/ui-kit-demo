import React from "react";
import styled, { css } from "styled-components";

export interface AssetHeadingProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Up to date" | "Sync with dev" | "Redesign needed" | "Not used";
}

const StyledRoot = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 350px;
    height: 240px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledTitleStatus = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledAssetName = styled.h3(
  () => css`
    color: #fefefe;
  `,
);

const StyledUpdated = styled.div<{
  $type: "Up to date" | "Sync with dev" | "Redesign needed" | "Not used";
}>(
  ({ $type }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 6px;
    padding-right: 12px;
    padding-bottom: 6px;
    padding-left: 12px;
    gap: 8px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 999px;
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

const StyledDesctiption = styled.span<{
  $type: "Up to date" | "Sync with dev" | "Redesign needed" | "Not used";
}>(
  ({ $type }) => css`
    ${(() => {
      switch ($type) {
        case "Sync with dev":
          return css`
            color: ${"#0f0f0f"};
          `;
        case "Redesign needed":
          return css`
            color: ${"#fefefe"};
          `;
        case "Not used":
          return css`
            color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    font-family: var(--font-work-sans, 'Work Sans'), sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01em;
  `,
);

const StyledDesctiption2 = styled.p(
  () => css`
    color: #adadad;
  `,
);

/** A heading component for an asset that displays the asset name, its current sync/design status (e.g. 'Up to date', 'Sync with dev', 'Redesign needed', 'Not used'), and a descriptive text about usage context. */
export const AssetHeading = React.forwardRef<HTMLElement, AssetHeadingProps>(
  function AssetHeading({ type = "Up to date", ...rest }, ref) {
    return (
      <StyledRoot role="region" aria-label="Asset heading" {...rest} ref={ref}>
        <StyledTitleStatus>
          <StyledAssetName>{"Asset name"}</StyledAssetName>
          {["Sync with dev", "Redesign needed", "Not used"].includes(type) && (
            <StyledUpdated $type={type}>
              {["Sync with dev", "Redesign needed", "Not used"].includes(
                type,
              ) && (
                <StyledDesctiption $type={type}>
                  {
                    (
                      {
                        '["Sync with dev"]': "Sync with development",
                        '["Redesign needed"]': "Redesign needed",
                        '["Not used"]': "Not used",
                      } as Record<string, string>
                    )[JSON.stringify([type])]
                  }
                </StyledDesctiption>
              )}
            </StyledUpdated>
          )}
        </StyledTitleStatus>
        <StyledDesctiption2>
          {
            "This is where you will write where, when, and how we should use this asset."
          }
        </StyledDesctiption2>
      </StyledRoot>
    );
  },
);
