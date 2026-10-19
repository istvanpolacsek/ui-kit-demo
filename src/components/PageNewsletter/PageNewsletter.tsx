import React from "react";
import styled, { css } from "styled-components";
import { TextContentHeading } from "../TextContentHeading";
import { FormNewsletter } from "../FormNewsletter";

export interface PageNewsletterProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Desktop" | "Mobile";
}

const StyledRoot = styled.section<{ $platform: "Desktop" | "Mobile" }>(
  ({ theme, $platform }) => css`
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 64px;
            padding-right: 64px;
            padding-bottom: 64px;
            padding-left: 64px;
            gap: 24px;
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
            padding-top: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-left: 24px;
            gap: 24px;
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

const StyledTextContentHeading = styled.div<{
  $platform: "Desktop" | "Mobile";
}>(
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

const StyledFormNewsletter = styled.div<{ $platform: "Desktop" | "Mobile" }>(
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

/** A newsletter subscription section containing a heading and a signup form. Supports Desktop and Mobile platform variants. */
export const PageNewsletter = React.forwardRef<
  HTMLElement,
  PageNewsletterProps
>(function PageNewsletter({ platform = "Desktop", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Newsletter signup"
      {...rest}
      ref={ref}
      $platform={platform}
    >
      <StyledTextContentHeading $platform={platform}>
        <TextContentHeading
          hasSubheading={true}
          subheading={"With our daily newsletter"}
          heading={"Follow the latest trends"}
          align={"Center"}
        />
      </StyledTextContentHeading>
      <StyledFormNewsletter $platform={platform}>
        <FormNewsletter />
      </StyledFormNewsletter>
    </StyledRoot>
  );
});
