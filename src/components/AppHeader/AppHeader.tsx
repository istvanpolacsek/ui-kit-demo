import React from "react";
import styled, { css } from "styled-components";
import { AppName } from "../AppName";

export interface AppHeaderProps extends Omit<
  React.ComponentPropsWithoutRef<"header">,
  "accessory"
> {
  accessory?: "Meta" | "Expand" | "Close";
}

const StyledRoot = styled.header<{ $accessory: "Meta" | "Expand" | "Close" }>(
  ({ $accessory }) => css`
    border-radius: 0px;
    ${(() => {
      switch ($accessory) {
        case "Expand":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 12px;
            padding-bottom: 0px;
            padding-left: 12px;
            gap: 3px;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            height: 52px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Meta":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 0px;
            padding-right: 12px;
            padding-bottom: 0px;
            padding-left: 12px;
            gap: 3px;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            height: 52px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Close":
          return css`
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-right: 17px;
            padding-bottom: 16px;
            padding-left: 17px;
            gap: 3px;
            justify-content: space-between;
            align-items: center;
            width: 400px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    color: #7b7974;
  `,
);

const StyledRow = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
  `,
);

const Styled5PagesFound = styled.p(
  () => css`
    color: #7b7974;
    font-family: "Anthropic Sans Text";
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
  `,
);

/** App header component that displays the application name and optionally shows metadata, an expand control, or a close control. Supports a variant accessory slot for contextual actions or status information. */
export const AppHeader = React.forwardRef<HTMLElement, AppHeaderProps>(
  function AppHeader({ accessory = "Expand", ...rest }, ref) {
    return (
      <StyledRoot
        role="banner"
        aria-label="App header"
        {...rest}
        ref={ref}
        $accessory={accessory}
      >
        <AppName />
        <StyledRow>
          {accessory === "Meta" && (
            <Styled5PagesFound>{"5 pages found"}</Styled5PagesFound>
          )}
        </StyledRow>
      </StyledRoot>
    );
  },
);
