import React from "react";
import styled, { css } from "styled-components";
import { Header } from "../Header";
import { PageProductResults } from "../PageProductResults";
import { Footer } from "../Footer";

export interface ExamplesShopProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "platform"
> {
  platform?: "Mobile" | "Desktop";
}

const StyledRoot = styled.section<{ $platform: "Mobile" | "Desktop" }>(
  ({ theme, $platform }) => css`
    overflow: hidden;
    background-color: ${theme["Background"]["Default"]["Default"]};
    border-radius: 0px;
    ${(() => {
      switch ($platform) {
        case "Desktop":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 1200px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Mobile":
          return css`
            display: flex;
            flex-direction: column;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 0px;
            justify-content: flex-start;
            align-items: flex-start;
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

const StyledHeader = styled.div(
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

const StyledPageProductResults = styled.div(
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

/** A full-page shop layout component that composes a Header, product results page, and Footer into a complete e-commerce browsing experience. Supports both Mobile and Desktop platform variants. */
export const ExamplesShop = React.forwardRef<HTMLElement, ExamplesShopProps>(
  function ExamplesShop({ platform = "Desktop", ...rest }, ref) {
    return (
      <StyledRoot
        role="region"
        aria-label="Shop"
        {...rest}
        ref={ref}
        $platform={platform}
      >
        <StyledHeader>
          <Header
            variant={"Neutral"}
            state={"Default"}
            size={"Medium"}
            platform={"Desktop"}
          />
        </StyledHeader>
        <StyledPageProductResults>
          <PageProductResults platform={"Desktop"} />
        </StyledPageProductResults>
        <Footer platform={"Desktop"} />
      </StyledRoot>
    );
  },
);
