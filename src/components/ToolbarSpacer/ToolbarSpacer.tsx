import React from "react";
import styled, { css } from "styled-components";
import { FABNeutral } from "../FABNeutral";
import { Separator } from "../Separator";

export interface ToolbarSpacerProps extends Omit<
  React.ComponentPropsWithoutRef<"div">,
  "mode"
> {
  mode?: "Light" | "Dark";
}

const StyledRoot = styled.div<{ $mode: "Light" | "Dark" }>(
  ({ $mode }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 4px;
    padding-bottom: 0px;
    padding-left: 4px;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: 40px;
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 8px;
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            background-color: ${"#1a1a1a"};
          `;
        case "Dark":
          return css`
            background-color: ${"#fefefe"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($mode) {
        case "Light":
          return css`
            border-color: ${"#262626"};
          `;
        case "Dark":
          return css`
            border-color: ${"#eeeeee"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledSeparator = styled.div(
  () => css`
    display: flex;
    align-self: stretch;
    && > * {
      align-self: stretch;
      height: auto;
    }
  `,
);

const StyledGroup = styled.ul(
  () => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 0px;
    &:hover {
      display: flex;
    }
  `,
);

const StyledFABNeutral = styled.li(() => css``);

const StyledFABNeutral2 = styled.li(() => css``);

/** A toolbar spacer component that provides visual separation and spacing between toolbar items. Supports light and dark modes with default and hover states. */
export const ToolbarSpacer = React.forwardRef<
  HTMLDivElement,
  ToolbarSpacerProps
>(function ToolbarSpacer({ mode = "Light", ...rest }, ref) {
  return (
    <StyledRoot
      role="separator"
      aria-label="Toolbar spacer"
      {...rest}
      ref={ref}
      $mode={mode}
    >
      <FABNeutral state={"Default"} size={"Small"} mode={"Light"} />
      <StyledSeparator>
        <Separator angle={"Vertical"} mode={"Dark"} />
      </StyledSeparator>
      <StyledGroup>
        <StyledFABNeutral>
          <FABNeutral state={"Default"} size={"Small"} mode={"Light"} />
        </StyledFABNeutral>
        <StyledFABNeutral2>
          <FABNeutral state={"Default"} size={"Small"} mode={"Light"} />
        </StyledFABNeutral2>
      </StyledGroup>
    </StyledRoot>
  );
});
