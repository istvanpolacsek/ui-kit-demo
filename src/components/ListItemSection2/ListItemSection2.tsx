import React from "react";
import styled, { css } from "styled-components";
import { VisualAsset } from "../VisualAsset";
import { IllustrationLegacyIcon } from "../IllustrationLegacyIcon";

export interface ListItemSection2Props extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "type"
> {
  type?: "Hero section" | "Non media section" | "Media section";
}

const StyledRoot = styled.section(
  () => css`
    position: relative;
    display: flex;
    flex-direction: row;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 100px;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    height: 84px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 4px;
    color: #fefefe;
  `,
);

const StyledAbout = styled.h2(
  () => css`
    color: #fefefe;
  `,
);

const StyledIllustration = styled.div<{
  $type: "Hero section" | "Non media section" | "Media section";
}>(
  ({ $type }) => css`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 84px;
    height: 84px;
    background-color: #333333;
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Hero section":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Non media section":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Media section":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 8px;
            justify-content: center;
            align-items: center;
            width: 84px;
            height: 84px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledImage = styled.div(
  () => css`
    background-color: transparent;
    border-radius: 2px;
  `,
);

const StyledConta = styled.label(
  () => css`
    color: #fefefe;
  `,
);

/** A list item section component that supports multiple layout variants: a hero section with a heading and illustration, a non-media section with text and a visual asset, and a media section with an image and label. Used to compose structured content lists or page sections. */
export const ListItemSection2 = React.forwardRef<
  HTMLElement,
  ListItemSection2Props
>(function ListItemSection2({ type = "Hero section", ...rest }, ref) {
  return (
    <StyledRoot role="region" aria-label="Section" {...rest} ref={ref}>
      {["Hero section", "Non media section"].includes(type) && (
        <StyledAbout>{"About"}</StyledAbout>
      )}
      {type === "Hero section" && <VisualAsset name={"Lock"} size={24} />}
      <StyledIllustration $type={type}>
        {["Hero section", "Non media section"].includes(type) && (
          <IllustrationLegacyIcon type={"About me"} />
        )}
        {type === "Media section" && <StyledImage />}
      </StyledIllustration>
      {["Non media section", "Media section"].includes(type) && (
        <VisualAsset name={"Drag"} size={24} />
      )}
      {type === "Media section" && <StyledConta>{"Conta|"}</StyledConta>}
    </StyledRoot>
  );
});
