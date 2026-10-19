import React from "react";
import styled, { css } from "styled-components";
import { TextContentHeading } from "../TextContentHeading";
import { Accordion } from "../Accordion";

export interface PageAccordionProps extends Omit<
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
            gap: 48px;
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

const StyledAccordion = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      flex: 1 1 0;
      min-width: 0;
      width: auto;
    }
  `,
);

/** A page-level accordion component that combines a content heading with an expandable/collapsible accordion section, available in Desktop and Mobile variants. */
export const PageAccordion = React.forwardRef<HTMLElement, PageAccordionProps>(
  function PageAccordion({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Page Accordion Section"
        {...rest}
        ref={ref}
        $platform={platform}
      >
        <TextContentHeading
          hasSubheading={true}
          subheading={"Subheading"}
          heading={"Heading"}
          align={"Center"}
        />
        <StyledAccordion>
          <Accordion />
        </StyledAccordion>
      </StyledRoot>
    );
  },
);
