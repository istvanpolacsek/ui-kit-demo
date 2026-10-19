import React from "react";
import styled, { css } from "styled-components";
import { TextContentTitle } from "../TextContentTitle";
import { FormContact } from "../FormContact";

export interface HeroFormProps extends Omit<
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

const StyledFormContact = styled.div<{ $platform: "Desktop" | "Mobile" }>(
  ({ $platform }) => css`
    ${(() => {
      switch ($platform) {
        case "Mobile":
          return css`
            display: flex;
            align-self: stretch;
            && > * {
              flex: 1 1 0;
              min-width: 0;
              width: auto;
            }
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A hero section containing a title/content block and a contact form. Supports Desktop and Mobile layout variants. */
export const HeroForm = React.forwardRef<HTMLElement, HeroFormProps>(
  function HeroForm({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        aria-label="Hero contact form section"
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
        <StyledFormContact $platform={platform}>
          <FormContact />
        </StyledFormContact>
      </StyledRoot>
    );
  },
);
