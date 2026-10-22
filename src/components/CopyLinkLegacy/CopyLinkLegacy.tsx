import React from "react";
import styled, { css } from "styled-components";
import { Copy } from "../Copy";
import { Check } from "../Check";

export interface CopyLinkLegacyProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "state" | "selected"
> {
  state?:
    | "Default"
    | "Hover"
    | "Copied (reverts to default after 2 sec)"
    | "Disabled";
  /** Whether this is the chosen tab. A tab list sets it for its tabs. */
  selected?: boolean;
}

const StyledRoot = styled.button<{
  $state:
    | "Default"
    | "Hover"
    | "Copied (reverts to default after 2 sec)"
    | "Disabled";
}>(
  ({ $state }) => css`
    border-radius: 6px;
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 14px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: flex-start;
            width: 372px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Hover":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 14px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 372px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Copied (reverts to default after 2 sec)":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 14px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: flex-start;
            align-items: flex-start;
            width: 372px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        case "Disabled":
          return css`
            display: inline-flex;
            flex-direction: column;
            padding-top: 16px;
            padding-right: 14px;
            padding-bottom: 16px;
            padding-left: 16px;
            gap: 8px;
            justify-content: center;
            align-items: flex-start;
            width: 372px;
            box-sizing: border-box;
            flex-shrink: 0;
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            background-color: ${"#262626"};
          `;
        case "Hover":
          return css`
            background-color: ${"#333333"};
          `;
        case "Copied (reverts to default after 2 sec)":
          return css`
            background-color: ${"#262626"};
          `;
        case "Disabled":
          return css`
            background-color: ${"#262626"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledTextAndIconWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 157px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledURL = styled.div<{
  $state:
    | "Default"
    | "Hover"
    | "Copied (reverts to default after 2 sec)"
    | "Disabled";
}>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#d1d1d1"};
          `;
        case "Hover":
          return css`
            color: ${"#fefefe"};
          `;
        case "Copied (reverts to default after 2 sec)":
          return css`
            color: ${"#d1d1d1"};
          `;
        case "Disabled":
          return css`
            color: ${"#707070"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledDescription = styled.div<{
  $state:
    | "Default"
    | "Hover"
    | "Copied (reverts to default after 2 sec)"
    | "Disabled";
}>(
  ({ $state }) => css`
    ${(() => {
      switch ($state) {
        case "Default":
          return css`
            color: ${"#adadad"};
          `;
        case "Hover":
          return css`
            color: ${"#adadad"};
          `;
        case "Copied (reverts to default after 2 sec)":
          return css`
            color: ${"#adadad"};
          `;
        case "Disabled":
          return css`
            color: ${"#4d4c4c"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A button that copies a URL to the clipboard. Displays the current URL with a copy icon, and provides visual feedback (checkmark) when the link has been successfully copied. Reverts to default state after 2 seconds. Optionally shows a descriptive label beneath the URL. */
export const CopyLinkLegacy = React.forwardRef<
  HTMLButtonElement,
  CopyLinkLegacyProps
>(function CopyLinkLegacy({ state = "Default", selected, ...rest }, ref) {
  const description = selected ? "True" : "False";
  return (
    <StyledRoot
      type="button"
      role="tab"
      aria-selected={selected ?? false}
      tabIndex={selected ? 0 : -1}
      {...rest}
      ref={ref}
      $state={state}
    >
      <StyledTextAndIconWrapper>
        <StyledURL $state={state}>{"uxfol.io/nathandavidson"}</StyledURL>
        {["Default", "Hover"].includes(state) && <Copy />}
        {state === "Copied (reverts to default after 2 sec)" && <Check />}
      </StyledTextAndIconWrapper>
      {description === "True" && (
        <StyledDescription $state={state}>
          {"Default UXfolio URL"}
        </StyledDescription>
      )}
    </StyledRoot>
  );
});
