import React from "react";
import styled, { css } from "styled-components";
import { Lock } from "../Lock";

export interface TagSubscriptionProps extends Omit<
  React.ComponentPropsWithoutRef<"button">,
  "property1"
> {
  property1?:
    | "Upgrade default"
    | "Upgrade hover"
    | "Upgrade short default"
    | "Upgrade short hover"
    | "Upgrade tag / Light / Default"
    | "Upgrade tag / Light / Hover";
}

const StyledRoot = styled.button<{
  $property1:
    | "Upgrade default"
    | "Upgrade hover"
    | "Upgrade short default"
    | "Upgrade short hover"
    | "Upgrade tag / Light / Default"
    | "Upgrade tag / Light / Hover";
}>(
  ({ $property1 }) => css`
    display: flex;
    flex-direction: row;
    padding-top: 4px;
    padding-right: 8px;
    padding-bottom: 4px;
    padding-left: 8px;
    gap: 4px;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 4px;
    ${(() => {
      switch ($property1) {
        case "Upgrade default":
          return css`
            background-color: ${"#262626"};
          `;
        case "Upgrade tag / Light / Default":
          return css`
            background-color: ${"#eeeeee"};
          `;
        case "Upgrade short default":
          return css`
            background-color: ${"#262626"};
          `;
        case "Upgrade hover":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        case "Upgrade tag / Light / Hover":
          return css`
            background-color: ${"#fefefe"};
          `;
        case "Upgrade short hover":
          return css`
            background-color: ${"#3d3d3d"};
          `;
        default:
          return css``;
      }
    })()}
    ${(() => {
      switch ($property1) {
        case "Upgrade default":
          return css`
            color: ${"#dcfa37"};
          `;
        case "Upgrade tag / Light / Default":
          return css`
            color: ${"#707070"};
          `;
        case "Upgrade hover":
          return css`
            color: ${"#dcfa37"};
          `;
        case "Upgrade tag / Light / Hover":
          return css`
            color: ${"#3d3d3d"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledLabel = styled.span<{
  $property1:
    | "Upgrade default"
    | "Upgrade hover"
    | "Upgrade short default"
    | "Upgrade short hover"
    | "Upgrade tag / Light / Default"
    | "Upgrade tag / Light / Hover";
}>(
  ({ $property1 }) => css`
    ${(() => {
      switch ($property1) {
        case "Upgrade default":
          return css`
            color: ${"#dcfa37"};
          `;
        case "Upgrade tag / Light / Default":
          return css`
            color: ${"#707070"};
          `;
        case "Upgrade hover":
          return css`
            color: ${"#dcfa37"};
          `;
        case "Upgrade tag / Light / Hover":
          return css`
            color: ${"#3d3d3d"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

/** A subscription upgrade tag/badge component that prompts users to upgrade their plan. Renders as a button with a lock icon and optional label text, supporting default and hover states in standard and short/light variants. */
export const TagSubscription = React.forwardRef<
  HTMLButtonElement,
  TagSubscriptionProps
>(function TagSubscription({ property1 = "Upgrade default", ...rest }, ref) {
  return (
    <StyledRoot
      aria-label="Upgrade to unlock"
      {...rest}
      ref={ref}
      $property1={property1}
    >
      <Lock />
      {[
        "Upgrade default",
        "Upgrade tag / Light / Default",
        "Upgrade hover",
        "Upgrade tag / Light / Hover",
      ].includes(property1) && (
        <StyledLabel $property1={property1}>{"Upgrade to unlock"}</StyledLabel>
      )}
    </StyledRoot>
  );
});
