import React from "react";
import styled, { css } from "styled-components";
import { TextContentTitle } from "../TextContentTitle";
import { ButtonGroup } from "../ButtonGroup";

export interface HeroActionsProps extends Omit<
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
            padding-right: 24px;
            padding-bottom: 160px;
            padding-left: 24px;
            gap: 32px;
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
            padding-right: 16px;
            padding-bottom: 160px;
            padding-left: 16px;
            gap: 32px;
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

/** A hero actions component that combines a title text content block with a group of call-to-action buttons. Supports Desktop and Mobile platform variants for responsive layout adaptation. */
export const HeroActions = React.forwardRef<HTMLElement, HeroActionsProps>(
  function HeroActions({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Hero actions"
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
          align={"Justify"}
        />
      </StyledRoot>
    );
  },
);
