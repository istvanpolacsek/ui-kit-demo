import React from "react";
import styled, { css } from "styled-components";
import { TextContentTitle } from "../TextContentTitle";
import { ButtonGroup } from "../ButtonGroup";

export interface HeroImageProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Utilities"]["Scrim"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 160px;
            padding-right: 24px;
            padding-bottom: 160px;
            padding-left: 24px;
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 160px;
            padding-right: 24px;
            padding-bottom: 160px;
            padding-left: 24px;
            gap: 32px;
            justify-content: center;
            align-items: center;
            width: 375px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A hero image section component that displays prominent content with a title and button group, available in Desktop and Mobile variants. */
export const HeroImage = React.forwardRef<HTMLElement, HeroImageProps>(
  function HeroImage({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Hero section"
        {...rest}
        ref={ref}
        $platform={platform}
      >
        <TextContentTitle
          hasSubtitle={true}
          subtitle={"Subtitle"}
          title={"Title"}
          align={"Center"}
        />
        <ButtonGroup
          iconStart={"Star"}
          hasIconStart={false}
          hasIconEnd={false}
          iconEnd={"X"}
          label={"Button"}
          variant={"Primary"}
          state={"Default"}
          size={"Medium"}
          buttonEnd={true}
          buttonStart={true}
          align={"Center"}
        />
      </StyledRoot>
    );
  },
);
