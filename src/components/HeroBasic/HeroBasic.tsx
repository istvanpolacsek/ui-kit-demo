import React from "react";
import styled, { css } from "styled-components";
import { TextContentTitle } from "../TextContentTitle";

export interface HeroBasicProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Secondary"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 160px;
            padding-right: 64px;
            padding-bottom: 160px;
            padding-left: 64px;
            gap: 0px;
            justify-content: flex-start;
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
            gap: 0px;
            justify-content: flex-start;
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

/** A hero banner component that displays prominent title content, available in Desktop and Mobile variants. Typically used as the primary introductory section of a page. */
export const HeroBasic = React.forwardRef<HTMLElement, HeroBasicProps>(
  function HeroBasic({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
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
      </StyledRoot>
    );
  },
);
