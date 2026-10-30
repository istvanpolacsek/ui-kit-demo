import React from "react";
import styled, { css } from "styled-components";
import { ChevronRight } from "../ChevronRight";
import { IconButton } from "../IconButton";

export interface DropListPortfolioProps extends Omit<
  React.ComponentPropsWithoutRef<"nav">,
  "type"
> {
  type?:
    | "Home"
    | "Page"
    | "Case study"
    | "Long case study"
    | "View portfolio"
    | "View case study";
}

const StyledRoot = styled.nav<{
  $type:
    | "Home"
    | "Page"
    | "Case study"
    | "Long case study"
    | "View portfolio"
    | "View case study";
}>(
  ({ $type }) => css`
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-color: #262626;
    border-radius: 4px;
    ${(() => {
      switch ($type) {
        case "Home":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: 36px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Page":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 6px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Case study":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "Long case study":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 260px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "View portfolio":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: fit-content;
          `;
        case "View case study":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-right: 16px;
            padding-bottom: 8px;
            padding-left: 16px;
            gap: 4px;
            justify-content: center;
            align-items: center;
            width: 260px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: #707070;
    &:hover {
      color: #fefefe;
    }
  `,
);

const StyledPage = styled.div<{
  $type:
    | "Home"
    | "Page"
    | "Case study"
    | "Long case study"
    | "View portfolio"
    | "View case study";
}>(
  ({ $type }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($type) {
        case "Home":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 6px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Page":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 6px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Case study":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            width: fit-content;
          `;
        case "Long case study":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            gap: 4px;
            justify-content: flex-start;
            align-items: center;
            flex: 1 1 0;
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledPageName = styled.p(
  () => css`
    color: #fefefe;
  `,
);

const StyledParentBreadcrum = styled.nav(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 2px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledHome = styled.span(
  () => css`
    color: #707070;
    &:hover {
      color: #fefefe;
    }
  `,
);

const StyledURL = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 2px;
    padding-bottom: 0px;
    padding-left: 2px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const StyledURL2 = styled.span(
  () => css`
    color: #707070;
    &:hover {
      color: #fefefe;
    }
  `,
);

const StyledIcon = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 3.200000762939453px;
    justify-content: flex-start;
    align-items: center;
    width: 16.000001907348633px;
    height: 16.000001907348633px;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 1.6000003814697266px;
  `,
);

/** A dropdown list item representing a portfolio navigation entry. Displays a page name or breadcrumb path (e.g., Home > Page) along with a URL and an icon button, used within a portfolio navigation drop-down menu. */
export const DropListPortfolio = React.forwardRef<
  HTMLElement,
  DropListPortfolioProps
>(function DropListPortfolio({ type = "Home", ...rest }, ref) {
  return (
    <StyledRoot
      role="menuitem"
      aria-label="Portfolio navigation item"
      {...rest}
      ref={ref}
      $type={type}
    >
      {["Home", "Page", "Case study", "Long case study"].includes(type) && (
        <StyledPage $type={type}>
          {["Home", "Page", "Case study", "Long case study"].includes(type) && (
            <StyledPageName>
              {
                (
                  {
                    '["Home"]': "Page",
                    '["Page"]': "Page",
                    '["Case study"]': "Page",
                    '["Long case study"]': "My stunning case stuydy",
                  } as Record<string, string>
                )[JSON.stringify([type])]
              }
            </StyledPageName>
          )}
        </StyledPage>
      )}
      {["Case study", "Long case study"].includes(type) && (
        <StyledParentBreadcrum>
          {["Case study", "Long case study"].includes(type) && (
            <StyledHome>{"Home"}</StyledHome>
          )}
          {["Case study", "Long case study"].includes(type) && <ChevronRight />}
        </StyledParentBreadcrum>
      )}
      {["View portfolio", "View case study"].includes(type) && (
        <StyledURL>
          {["View portfolio", "View case study"].includes(type) && (
            <StyledURL2>
              {
                (
                  {
                    '["View portfolio"]': "https://uxfol.io/lg9983 ",
                    '["View case study"]': "https://uxfol.io/p/lg9983hdk... ",
                  } as Record<string, string>
                )[JSON.stringify([type])]
              }
            </StyledURL2>
          )}
        </StyledURL>
      )}
      {["View portfolio", "View case study"].includes(type) && (
        <StyledIcon>
          {["View portfolio", "View case study"].includes(type) && (
            <IconButton importance={"Low"} mode={"Dark"} />
          )}
        </StyledIcon>
      )}
    </StyledRoot>
  );
});
