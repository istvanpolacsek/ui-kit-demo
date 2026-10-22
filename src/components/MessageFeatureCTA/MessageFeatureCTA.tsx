import React from "react";
import styled, { css } from "styled-components";
import { IllustrationFeatureCTA } from "../IllustrationFeatureCTA";
import { LinkButton } from "../LinkButton";

export interface MessageFeatureCTAProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type" | "mode"
> {
  type?: "Example";
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.section<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 352px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 0px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Dark":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#3d3d3d"};
          `;
        case "Dark":
          return css`
            color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 232px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 0px;
  `,
);

const StyledLabel = styled.h3<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            color: ${"#3d3d3d"};
          `;
        case "Dark":
          return css`
            color: ${"#d1d1d1"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A feature call-to-action message component that combines an illustration, a title label, and a link button to promote or highlight a specific feature. Supports light and dark display modes. */
export const MessageFeatureCTA = React.forwardRef<
  HTMLElement,
  MessageFeatureCTAProps
>(function MessageFeatureCTA(
  { type = "Example", mode = "Light", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="region"
      aria-label="Feature call-to-action"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <IllustrationFeatureCTA type={"Inspiration"} mode={"Light"} />
      <StyledText>
        <StyledLabel $mode={mode}>{"Title"}</StyledLabel>
        <LinkButton size={"Small"} mode={"Light"} />
      </StyledText>
    </StyledRoot>
  );
});
