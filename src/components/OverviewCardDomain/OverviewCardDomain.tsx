import React from "react";
import styled, { css } from "styled-components";
import { IndicatorStatus } from "../IndicatorStatus";
import { TertiaryButtonNeutral } from "../TertiaryButtonNeutral";
import { TertiaryButtonSubtle } from "../TertiaryButtonSubtle";

export interface OverviewCardDomainProps extends Omit<
  React.ComponentPropsWithoutRef<"article">,
  "status" | "type"
> {
  status?:
    "Active" | "Inactive" | "Waiting for connection" | "Testing connection";
  type?: "Uxfolio" | "Connected" | "Purchased";
}

const StyledRoot = styled.article<{
  $status:
    "Active" | "Inactive" | "Waiting for connection" | "Testing connection";
}>(
  ({ $status }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 289px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #262626;
    border-radius: 8px;
    ${(() => {
      switch ($status) {
        case "Testing connection":
          return css`
            color: ${"transparent"};
          `;
        default:
          return css``;
      }
    })()}
  `,
);

const StyledInfo = styled.section(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    overflow: hidden;
    border-radius: 0px;
  `,
);

const StyledText = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 4px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

const StyledURL = styled.p(
  () => css`
    color: #fefefe;
  `,
);

const StyledType = styled.p(
  () => css`
    color: #adadad;
  `,
);

const StyledActions = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 0px;
  `,
);

/** Displays an overview card for a domain, showing the domain URL, type label, connection status indicator, and contextual action buttons. Supports multiple status states (Active, Inactive, Waiting for connection, Testing connection) and domain types (Uxfolio, Connected, Purchased). */
export const OverviewCardDomain = React.forwardRef<
  HTMLElement,
  OverviewCardDomainProps
>(function OverviewCardDomain(
  { status = "Active", type = "Uxfolio", ...rest },
  ref,
) {
  return (
    <StyledRoot
      role="article"
      aria-label="Domain overview card"
      {...rest}
      ref={ref}
      $status={status}
    >
      <StyledInfo>
        <StyledText>
          <StyledURL>
            {
              (
                {
                  '["Uxfolio"]': "uxfol.io/xyz123",
                  '["Connected"]': "nathandavidson.com",
                  '["Purchased"]': "nathandavidson.com",
                } as Record<string, string>
              )[JSON.stringify([type])]
            }
          </StyledURL>
          <StyledType>
            {
              (
                {
                  '["Uxfolio"]': "UXfolio domain",
                  '["Connected"]': "Custom domain",
                  '["Purchased"]': "Custom domain",
                } as Record<string, string>
              )[JSON.stringify([type])]
            }
          </StyledType>
        </StyledText>
        <IndicatorStatus type={"Positive"} mode={"Dark"} selected={true} />
      </StyledInfo>
      <StyledActions>
        <TertiaryButtonNeutral
          mode={"Dark"}
          hasIcon={"False"}
          size={"Regular"}
        />
        <TertiaryButtonSubtle mode={"Dark"} size={"Regular"} />
        {type === "Connected" && (
          <TertiaryButtonSubtle mode={"Dark"} size={"Regular"} />
        )}
      </StyledActions>
    </StyledRoot>
  );
});
